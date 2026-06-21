const domain = process.env.DOMAIN;
export const clientPayloadStatic = {
    "client_id": "BBPRO1",
    "phone": "+79516681134"
};


export const clientStaticData = {"id": 20, "partner": {"id": 1853, "name": "Внешний Партнер 1853", "white_label": {"id": 1, "domain": domain, "name": "Bitbanker"}, "email": "qa+externalpartner@bitbanker.org"}, "email": "mikhailov.s8@example.ru", "phone_number": "+79607778808", "external_id": "EXT1008", "last_name": "Михайлов", "first_name": "Сергей", "middle_name": "Владимирович", "birth_date": 163728000.0, "passport_number": "2805998808", "passport_issued_date": 797904000.0, "inn": "616401020308", "status": null, "checks": [], "passport_issuing_country": "RUS", "registration_address": {"country": "RUS", "post_index": "344000", "city": "Ростов-на-Дону", "city_en": "Rostov-on-Don", "street": "Большая Садовая", "street_en": "Bolshaya Sadovaya", "street_extra": "str", "state": "0", "building_name": "don side", "building_number": "101", "flat_number": "56"}, "sbp_top_up": true, "qr_top_up": false, "dt_create": 1770889477.190835, "dt_update": 1771228308.54934};


export const generateRandomClientPayload = () => {
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

    const fName = getRandom(firstNames);
    const lName = getRandom(lastNames);
    const seed = Math.floor(100000 + Math.random() * 900000);

    return {
        "client_id": ` EXT1${seed} `,
        "first_name": ` ${fName} `,
        "last_name": ` ${lName} `,
        "patronymic": ` ${getRandom(patronymics)} `,
        "phone": `79${Math.floor(100000000 + Math.random() * 900000000)}`,
        "birth_date": getRandomDate(1990, 2005),
        "passport": `${Math.floor(1000 + Math.random() * 9000)}${Math.floor(100000 + Math.random() * 900000)}`,
        "passport_issue_date": ` ${getRandomDate(2006, 2025)} `,
        "country_of_passport_issue": " RUS ",
        "email": ` test.${seed}@mail.ru `,
        "inn": ` 7701234567 `,
        "registration_apartment": " 56 ",
        "registration_building": " don side ",
        "registration_city": " Rostov-on-Don ",
        "registration_city_en": " Rostov-on-Don ",
        "registration_country": " RUS ",
        "registration_house": " 101 ",
        "registration_index": " 344000 ",
        "registration_state": " 0 ",
        "registration_street": " Bolshaya Sadovaya str ",
        "registration_street_en": " Bolshaya Sadovaya str "
        // "wallet_address": "GpXWFfSLHPYeav3BEV9kN4CxbvdS3XiTi",
        // "blockchain_network_symbol": "trx",
        // "is_verified_wallet": "false"
    };
};