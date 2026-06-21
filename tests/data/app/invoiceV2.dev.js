import crypto from 'crypto';

const getCleanHexNonce = () => {
    let result = '';
    while (result.length < 32) {
        result += Math.random().toString(16).substring(2);
    }
    return result.substring(0, 32);
};

export function prepareInvoiceBody(apiSecret) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDate = Math.floor(tomorrow.getTime() / 1000);
    const uniqueIdempotencyKey = crypto.randomUUID();
    const invoiceData = {
        amount: 8000,
        auto_withdraw: false,
        blockchain_network_symbol: "",
        crypto_payment: false,
        currency: "RUBR",
        data: {},
        description: "Test of 869c22rtr",
        header: "Pokemons acquiring",
        is_convert_payments: false,
        is_needed_use_logo: false,
        language: "ru",
        partner_client_external_id: "BBPRO2",
        payer: "Aifory user",
        payer_email: "qa@bitbanker.org",
        payment_chains: [],
        payment_currencies: ["RUBR"],
        payment_deadline_dt: tomorrowDate,
        sbp_payment: true,
        source: "postman",
        take_currency: "RUBR",
        wallet_address: "",
        
        timestamp: Math.floor(Date.now() / 1000),
        nonce: getCleanHexNonce(),
        idempotency_key: uniqueIdempotencyKey
    };

    // 2. Функция канонизации JSON (сортировка ключей по алфавиту)
    const getCanonicalJson = (obj) => {
        const sortedKeys = Object.keys(obj).sort();
        const sortedObj = {};
        sortedKeys.forEach(key => {
            sortedObj[key] = obj[key];
        });
        return JSON.stringify(sortedObj);
    };

    // Клонируем объект для подписи (на случай, если там было поле sign)
    const dataToSign = { ...invoiceData };
    delete dataToSign.sign; 

    const canonicalMessage = getCanonicalJson(dataToSign);

    // 3. Вычисляем full_sign через встроенный Node.js крипто-модуль
    const fullSign = crypto
        .createHmac('sha256', apiSecret)
        .update(canonicalMessage)
        .digest('hex');

    // Добавляем сигнатуру в финальный объект
    invoiceData.full_sign = fullSign;

    return {
        body: invoiceData,
        idempotencyKey: uniqueIdempotencyKey // Возвращаем ключ, если он пригодится для заголовков
    };
};

export function preparePartnerStatusParams(apiSecret, clientId = "BBPRO1") {
    const ts = String(Math.floor(Date.now() / 1000));
    const nc = getCleanHexNonce();

    // Сборка каноничного JSON строго по алфавиту (как в твоем Postman скрипте)
    const canonicalMessage = `{"client_id":"${clientId}","nonce":"${nc}","timestamp":${Number(ts)}}`;

    // Вычисление подписи через встроенный crypto модуль Node.js
    const finalFullSign = crypto
        .createHmac('sha256', apiSecret)
        .update(canonicalMessage)
        .digest('hex');

    // Возвращаем объект, который Playwright подставит в URL как ?client_id=...&timestamp=...
    return {
        client_id: clientId,
        timestamp: ts,
        nonce: nc,
        full_sign: finalFullSign
    };
}

const generateValidInn = () => {
    const rnd9 = String(Math.floor(100000000 + Math.random() * 900000000)); // 9 случайных цифр
    const region = '77'; // Например, Москва
    const base = region + rnd9; // 11 цифр

    // 1. Считаем 11-ю цифру ИНН
    const n11Weights = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
    let sum11 = 0;
    for (let i = 0; i < 11; i++) {
        sum11 += Number(base[i]) * n11Weights[i];
    }
    const n11 = (sum11 % 11) % 10;

    // Собираем строку из 11 цифр
    const baseWithN11 = base + n11;

    // 2. Считаем 12-ю цифру ИНН (теперь строго по строке baseWithN11)
    const n12Weights = [3, 8, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
    let sum12 = 0;
    for (let i = 0; i < 12; i++) {
        sum12 += Number(baseWithN11[i]) * n12Weights[i];
    }
    const n12 = (sum12 % 11) % 10;

    // Возвращаем финальный 12-значный ИНН
    return baseWithN11 + n12;
};

const generateRandomClientPayload = () => {
    const firstNames = ['Александр', 'Дмитрий', 'Максим', 'Сергей', 'Андрей', 'Алексей', 'Артем', 'Илья', 'Кирилл', 'Михаил', 'Анна', 'Мария', 'Елена', 'Ольга', 'Наталья'];
    const lastNames = ['Иванов', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Петров', 'Соколов', 'Михайлов', 'Новиков', 'Федоров', 'Морозов', 'Волков'];
    const patronymics = ['Александрович', 'Дмитриевич', 'Сергеевич', 'Андреевич', 'Алексеевич', 'Игоревич', 'Павлович', 'Георгиевич', 'Викторович'];

    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
    
    const getRandomDate = (startYear, endYear) => {
        const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
        const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
        const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'); 
        return `${day}.${month}.${year}`;
    };

    const seed = Math.floor(100000 + Math.random() * 900000);

    return {
        "client_id": `EXT1${seed}`,
        "first_name": getRandom(firstNames),
        "last_name": getRandom(lastNames),
        "patronymic": getRandom(patronymics),
        "phone": `79${Math.floor(100000000 + Math.random() * 900000000)}`,
        "birth_date": getRandomDate(1990, 2005),
        "passport": `${Math.floor(1000 + Math.random() * 9000)}${Math.floor(100000 + Math.random() * 900000)}`,
        "passport_issue_date": getRandomDate(2006, 2025),
        "passport_issued_date": getRandomDate(2006, 2025), // Свагер просит оба варианта (issue и issued), страхуемся
        "country_of_passport_issue": "RUS",
        "email": `test.${seed}@bitbanker.org`,
        "inn": generateValidInn(),
        "registration_apartment": "56",
        "registration_building": "don side",
        "registration_city": "Rostov-on-Don",
        "registration_city_en": "Rostov-on-Don",
        "registration_country": "RUS",
        "registration_house": "101",
        "registration_index": "344000",
        "registration_state": "0",
        "registration_street": "Bolshaya Sadovaya str",
        "registration_street_en": "Bolshaya Sadovaya str"
    };
};

export function prepareCreateClientRequest(apiSecret) {
    const uniqueIdempotencyKey = crypto.randomUUID();
    const ts = Math.floor(Date.now() / 1000);
    const nc = getCleanHexNonce();

    // 1. Берем сгенерированные рандомные данные клиента
    const basePayload = generateRandomClientPayload();

    // 2. Добавляем системные поля для v2
    const fullPayload = {
        ...basePayload,
        timestamp: ts,
        nonce: nc
    };

    // 3. Канонизация JSON (сортировка ключей строго по алфавиту)
    const sortedKeys = Object.keys(fullPayload).sort();
    const sortedObj = {};
    sortedKeys.forEach(key => {
        sortedObj[key] = fullPayload[key];
    });
    const canonicalMessage = JSON.stringify(sortedObj);

    // 4. Расчет подписи full_sign
    const fullSign = crypto
        .createHmac('sha256', apiSecret)
        .update(canonicalMessage)
        .digest('hex');

    // 5. Записываем подпись в финальное тело
    fullPayload.full_sign = fullSign;

    return {
        body: fullPayload,
        idempotencyKey: uniqueIdempotencyKey
    };
}