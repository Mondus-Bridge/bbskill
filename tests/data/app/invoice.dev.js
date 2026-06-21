import CryptoJS from 'crypto-js';
import { tomorrowDate } from '../../utils/date';

const apiKey = process.env.APIKEY_PARTNER;
const apiKeyUser1 = process.env.APIKEY_USER_1;

const prepareInvoice = (data,key = apiKey) => {
    if (!key) throw new Error("API Key for invoice is missing!");
    const message = data.currency + data.amount + data.header + data.description;
    const sign = CryptoJS.HmacSHA256(message, key).toString();
    return { ...data, sign };
};

const prepareInvoiceV2 = (data,key = apiKey) => {
    if (!key) throw new Error("API Key for invoice is missing!");
    const message = data.currency + data.amount + data.header + data.description;
    const sign = CryptoJS.HmacSHA256(message, key).toString();
    return { ...data, sign };
};


export const invoiceBodyUser1 = prepareInvoice({
    header: "New mechanics tests",
    payer_fio: "Donald Duck",
    payer_email: "loveandpeace1331+bb10@gmail.com",
    description: "Test of invoices",
    language: "ru",
    is_convert_payments: true,
    is_needed_use_logo: true,
    currency_id: 6,
    amount: 100,
    payment_deadline_dt: tomorrowDate,
    currency: "USDT",
    payment_currencies: ["USDT"],
    payment_chains: ["bsc", "eth", "tron", "ton"],
    crypto_payment: false,
    sbp_payment: false
}, apiKeyUser1);

// export const invoiceBodyUser1 = prepareInvoice({
//     header: "New mechanics tests",
//     payer_fio: "Donald Duck",
//     payer_email: "loveandpeace1331+bb10@gmail.com",
//     description: "Test of invoices",
//     language: "ru",
//     is_convert_payments: true,
//     is_needed_use_logo: true,
//     currency_id: 9,
//     amount: 1,
//     payment_deadline_dt: tomorrowDate,
//     currency: "TRX",
//     payment_currencies: ["TRX"],
//     payment_chains: ["tron"],
//     crypto_payment: false,
//     sbp_payment: false
// }, apiKeyUser1);

export const invoiceBody = prepareInvoice({
    header: "New mechanics tests",
    payer_fio: "Donald Duck",
    payer_email: "loveandpeace1331+bb10@gmail.com",
    description: "Test of invoices",
    language: "ru",
    is_convert_payments: true,
    is_needed_use_logo: true,
    currency_id: 6,
    amount: 100,
    payment_deadline_dt: tomorrowDate,
    currency: "USDT",
    payment_currencies: ["USDT"],
    payment_chains: ["bsc", "eth", "tron", "ton"],
    crypto_payment: false,
    sbp_payment: false
});

export const invoiceBodyRubr = prepareInvoice({
    partner_client_external_id: "BBPRO1",
    header: "Pokemons acquiring",
    payer: "Aifory user",
    payer_email: "qa@bitbanker.org",
    description: "Test of 869c22rtr",
    language: "ru",
    is_convert_payments: false,
    is_needed_use_logo: false,
    currency_id: 4,
    amount: 10000,
    payment_deadline_dt: tomorrowDate,
    currency: "RUBR",
    payment_currencies: ["RUBR"],
    payment_chains: [],
    crypto_payment: false,
    sbp_payment: true
});

export const invoiceBodyToExchange = prepareInvoiceV2({
    partner_client_external_id: "BBPRO2",
    header: "Pokemons acquiring",
    payer: "Aifory user",
    payer_email: "qa@bitbanker.org",
    description: "Test of 869c22rtr",
    language: "ru",
    is_convert_payments: false,
    is_needed_use_logo: false,
    currency_id: 4,
    amount: 10000,
    payment_deadline_dt: tomorrowDate,
    currency: "RUBR",
    payment_currencies: ["RUBR"],
    payment_chains: [],
    crypto_payment: false,
    sbp_payment: true,
    is_convert_payments: true,
    take_currency: "USDT",
    auto_withdraw: true,
    blockchain_network_symbol: "tron",
    wallet_address: "TTbEbhLGKV1t3YP3xUnH2xVqbf1XC3YYct"
});

// export const invoiceBodyRubr = prepareInvoice({
//     partner_client_external_id: "BBPRO2",
//     header: "Pokemons acquiring",
//     payer: "Aifory user",
//     payer_email: "logunovsergey@yandex.ru",
//     description: "Test of 869c22rtr",
//     language: "ru",
//     is_convert_payments: false,
//     is_needed_use_logo: false,
//     currency_id: 4,
//     amount: 10,
//     payment_deadline_dt: tomorrowDate,
//     currency: "RUBR",
//     payment_currencies: ["RUBR"],
//     payment_chains: [],
//     crypto_payment: false,
//     sbp_payment: true
// });

export const invoiceSbpFalse = prepareInvoice({
    partner_client_external_id: "EXT1010",
    header: "Pokemons acquiring",
    payer: "Aifory user:",
    payer_email: "qa@bitbanker.org",
    description: "Test of 869c22rtr",
    language: "ru",
    is_convert_payments: false,
    is_needed_use_logo: false,
    currency_id: 4,
    amount: 10,
    payment_deadline_dt: tomorrowDate,
    currency: "RUBR",
    payment_currencies: ["RUBR"],
    payment_chains: [],
    crypto_payment: false,
    sbp_payment: false
});

export const externalIdDoNotExist = prepareInvoice({
    partner_client_external_id: "LLEXT1010DD",
    header: "Pokemons acquiring",
    payer: "Aifory user:",
    payer_email: "qa@bitbanker.org",
    description: "Test of 869c22rtr",
    language: "ru",
    is_convert_payments: false,
    is_needed_use_logo: false,
    currency_id: 4,
    amount: 10,
    payment_deadline_dt: tomorrowDate,
    currency: "RUBR",
    payment_currencies: ["RUBR"],
    payment_chains: [],
    crypto_payment: false,
    sbp_payment: true
});

export const preparePartnerClientBody = (clientData, privateKey) => {
    const message = clientData.client_id + clientData.email + clientData.phone;
    const sign = CryptoJS.HmacSHA256(message, privateKey).toString();
    
    return { ...clientData, sign };
};

export const invoiceDataType = {
    "result": 'string',
    "id": 'string',
    "link": 'string',
    "sbp_payment": 'boolean',
    "addresses": 'object'
};

function getCanonicalJson(payload) {
    const { sign, ...bodyWoSign } = payload;
    const sortedKeys = Object.keys(bodyWoSign).sort();
    const sortedObj = {};
    sortedKeys.forEach(key => {
        sortedObj[key] = bodyWoSign[key];
    });
    return JSON.stringify(sortedObj);
};

export const prepareExternalPartnerClientBody = (clientData, secret) => {
    if (!secret) throw new Error("Secret key is missing!");
    const message = getCanonicalJson(clientData);
    const sign = CryptoJS.HmacSHA256(message, secret).toString(CryptoJS.enc.Hex);
    
    return { ...clientData, sign };
};