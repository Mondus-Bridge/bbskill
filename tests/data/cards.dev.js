function generateRandomWord(length = 6) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  return Array.from({ length }, () =>
    letters.charAt(Math.floor(Math.random() * letters.length))
  ).join('');
};

function generateRandomDigits(length = 5) {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * 10)
  ).join('');
};

const randomSuffix = generateRandomWord(6);     // e.g. "gkzqma"
const randomNumber = generateRandomDigits(5);   // e.g. "48392"

export const bankingBalance = [
  {
    "id": 138,
    "pan_mask": "4040 **** **** 4167",
    "card_status": "ACTIVE",
    "currency_id": 6,
    "currency_symbol": "USDT",
    "balance": 10000,
    "is_default": false,
    "card_type_id": 1,
    "card_type_network": "MASTERCARD",
    "card_type_name": "VIRTUAL MASTERCARD123"
  },
  {
    "id": 139,
    "pan_mask": "4040 **** **** 4150",
    "card_status": "ACTIVE",
    "currency_id": 2,
    "currency_symbol": "USD.R",
    "balance": 12000,
    "is_default": false,
    "card_type_id": 4,
    "card_type_network": "VISA",
    "card_type_name": "PLAYWRIGHT"
  },
  {
    "id": 146,
    "pan_mask": "4040 **** **** 4143",
    "card_status": "CLOSED",
    "currency_id": 6,
    "currency_symbol": "USDT",
    "balance": 2000,
    "is_default": false,
    "card_type_id": 1,
    "card_type_network": "MASTERCARD",
    "card_type_name": "VIRTUAL MASTERCARD123"
  },
  {
    "id": 147,
    "pan_mask": "4040 **** **** 4142",
    "card_status": "CLOSED",
    "currency_id": 2,
    "currency_symbol": "USD.R",
    "balance": 5000,
    "is_default": false,
    "card_type_id": 4,
    "card_type_network": "VISA",
    "card_type_name": "PLAYWRIGHT"
  },
  {
    "id": 148,
    "pan_mask": "4040 **** **** 4141",
    "card_status": "BLOCKING",
    "currency_id": 2,
    "currency_symbol": "USD.R",
    "balance": 7000,
    "is_default": false,
    "card_type_id": 4,
    "card_type_network": "VISA",
    "card_type_name": "PLAYWRIGHT"
  },
  {
    "id": 149,
    "pan_mask": "4040 **** **** 4139",
    "card_status": "BLOCKING",
    "currency_id": 6,
    "currency_symbol": "USDT",
    "balance": 7000,
    "is_default": false,
    "card_type_id": 1,
    "card_type_network": "MASTERCARD",
    "card_type_name": "VIRTUAL MASTERCARD123"
  },
  {
    "id": 150,
    "pan_mask": "4040 **** **** 4130",
    "card_status": "IN_PROGRESS",
    "currency_id": 6,
    "currency_symbol": "USDT",
    "balance": 9000,
    "is_default": false,
    "card_type_id": 1,
    "card_type_network": "MASTERCARD",
    "card_type_name": "VIRTUAL MASTERCARD123"
  },
  {
    "id": 151,
    "pan_mask": "4040 **** **** 4133",
    "card_status": "IN_PROGRESS",
    "currency_id": 2,
    "currency_symbol": "USD.R",
    "balance": 1300,
    "is_default": false,
    "card_type_id": 4,
    "card_type_network": "VISA",
    "card_type_name": "PLAYWRIGHT"
  },
  {
    "id": 152,
    "pan_mask": "4040 **** **** 4126",
    "card_status": "FROZEN",
    "currency_id": 2,
    "currency_symbol": "USD.R",
    "balance": 5555,
    "is_default": false,
    "card_type_id": 4,
    "card_type_network": "VISA",
    "card_type_name": "PLAYWRIGHT"
  },
  {
    "id": 153,
    "pan_mask": "4040 **** **** 4166",
    "card_status": "FROZEN",
    "currency_id": 6,
    "currency_symbol": "USDT",
    "balance": 99999,
    "is_default": false,
    "card_type_id": 1,
    "card_type_network": "MASTERCARD",
    "card_type_name": "VIRTUAL MASTERCARD123"
  },
  {
    "id": 154,
    "pan_mask": "4040 **** **** 4009",
    "card_status": "ACTIVE",
    "currency_id": 6,
    "currency_symbol": "USDT",
    "balance": 99999,
    "is_default": false,
    "card_type_id": 1,
    "card_type_network": "MASTERCARD",
    "card_type_name": "VIRTUAL MASTERCARD123"
  },
  {
    "id": 155,
    "pan_mask": "4040 **** **** 4008",
    "card_status": "ACTIVE",
    "currency_id": 2,
    "currency_symbol": "USD.R",
    "balance": 7777,
    "is_default": false,
    "card_type_id": 4,
    "card_type_network": "VISA",
    "card_type_name": "PLAYWRIGHT"
  },
  {
    "id": null,
    "pan_mask": null,
    "card_status": null,
    "currency_id": 6,
    "currency_symbol": "USDT",
    "balance": 266637.72,
    "is_default": true,
    "card_type_id": null,
    "card_type_network": null,
    "card_type_name": null
  }
];

export const cardHolderInfoOld = {
  first_name: "Sasha",
  last_name: "Jerard",
  phone_number: `+63921${randomNumber}`,
  email: `loveandpeace1331+${randomSuffix}@gmail.com`,
};

export const cardHolderInfo = {
  first_name: "Vladimir",
  last_name: "Pulya",
  phone_number: `+79991992547`,
  email: `qa+user1@bitbanker.org`,
  has_external_user: true
};

export const systemsSettings = {
    "currency_id": 6,
    "card_type_id": 1
};

export const cardPriceAndFee = {"amount": 25.0, "fee_abs": 0.0}

export const cardPriceCurrency = {
    "price": 25.0,
    "currency_id": 6,
    "currency_symbol": "USDT"
};

export const cardsDataType = {"id": 'number', "is_locked": 'boolean', "expiry": "string", 
    "pan_mask": 'string', "card_status": 'string', "card_limit": 'number', 
    "balance": 'number', "is_active": 'boolean', "is_closed": 'boolean', "is_issued": 'boolean', "message": "object",
    "is_auto_top_up_enabled": 'boolean', "top_up_min_balance": 'number', "top_up_amount": 'number',
    "card_type_id": 'number', "card_type_network": 'string', "card_type_name": 'string', "card_currency_id": 'number',
    "card_currency_symbol": 'string'
};

export const singleCardInfo = {
  "id": 139,
  "is_locked": false,
  "expiry": "",
  "pan_mask": "4040 **** **** 4150",
  "card_status": "ACTIVE",
  "card_limit": 0,
  "balance": 12000,
  "is_active": true,
  "is_closed": false,
  "is_issued": true,
  "message": null,
  "is_auto_top_up_enabled": false,
  "top_up_min_balance": 100,
  "top_up_amount": 1000,
  "card_type_id": 4,
  "card_type_network": "VISA",
  "card_type_name": "PLAYWRIGHT",
  "card_currency_id": 2,
  "card_currency_symbol": "USD.R"
};

export const topUpBase = {"id":139,"top_up_amount":1000,"top_up_min_balance":100,"is_auto_top_up_enabled":false};
export const topUpNew = {"id":139,"top_up_amount":50,"top_up_min_balance":0,"is_auto_top_up_enabled":true};

export const sensitiveData = {"card_number": "4040384241976960", "cvv": "947", "expiry": "06/2028", "name": "Sasha Jerard"};

export const testCasesPrediction = [
  {
    input: { amount: 25 },
    expected: { amount: 25.37, fee_abs: 0.37}
  },
  {
    input: { amount: 500 },
    expected: { amount: 507.36, fee_abs: 7.36}
  },
  {
    input: { amount: 2000 },
    expected: { amount: 2029.43, fee_abs: 29.43 }
  }
]; //comission foer user 1,45 plus 0,15 market order commissions for other currencies, except usdt

export const freezeUnfreez = [
  {
    input: {  id: 138, is_locked: true},
    expected: {"code": "PintopayFreezeCardError", "data": {}}
  },
    {
    input: {  id: 138, is_locked: false},
    expected: {"result": "success"}
  }
];


export const platformInfoSchema = {
  "id": 'number',
  "name": 'string'
};

export const listOfPartners = [
  {
    "id": 2,
    "name": "pintopay"
  }
];

export const partnerInfoSchema = {
  "partner_id": 'string',
  "balance_updated": 'string',
  "balance": 'number',
  "refund_balance": 'number',
  "available": 'number',
  "balance_currency_symbol": 'string',
  "main_user_email": 'string',
  "fee_user_email": 'string',
  "main_user_balance": 'number',
  "fee_user_balance": 'number',
  "card_balance": 'number',
  "card_in_progress": 'number',
  "card_activating": 'number',
  "card_active": 'number',
  "card_frozen": 'number',
  "card_error": 'number',
  "card_closed": 'number',
  "card_issued": 'number',
  "card_blocking": 'number',
  "card_freezing": 'number'
};

export const providerInfoSchema = {
  "id": 'number',
  "name": 'string',
  "is_active": 'boolean',
  "fee_user_id": 'number',
  "fee_user_email": 'string',
  "replenish_currency_id": 'number',
  "replenish_currency_symbol": 'string',
  "replenish_blockchain_network_id":'number',
  "replenish_blockchain_network_name":'string',
  "replenish_user_id": 'number',
  "replenish_user_email": 'string',
  "replenish_enabled": 'boolean',
  "replenish_address": 'string',
  "replenish_min_threshold": 'number',
  "replenish_max_threshold": 'number',
};

export const pintopayAutoFill = {
  "id": 2,
  "replenish_address": "TASYsBfaNWJkoCjojSFqYKCsfounx2k6QU",
  "replenish_blockchain_network_id": 6,
  "replenish_currency_id": 6,
  "replenish_enabled": true,
  "replenish_max_threshold": 50,
  "replenish_min_threshold": 10,
  "replenish_user_email":  "qa+cardholder@bitbanker.org"
};

export const pintopayInfo = {
  "id": 2,
  "name": "pintopay",
  "is_active": true,
  "fee_user_id": 1628,
  "fee_user_email": "card@bitbanker.org",
  "replenish_currency_id": 6,
  "replenish_currency_symbol": "USDT",
  "replenish_blockchain_network_id": 6,
  "replenish_blockchain_network_name": "Tron (TRC20)",
  "replenish_user_id": 1608,
  "replenish_user_email": "qa+cardholder@bitbanker.org",
  "replenish_enabled": true,
  "replenish_address": "TASYsBfaNWJkoCjojSFqYKCsfounx2k6QU",
  "replenish_min_threshold": 10,
  "replenish_max_threshold": 50
};

export const partnerInfoObject = {
  "partner_id": "BoIILtp6WF2UAVRHDOlPg5g",
  "balance_updated": "2025-10-17 14:17:42.188000+00:00",
  "balance": 999923.44,
  "refund_balance": 0,
  "available": 999923.44,
  "balance_currency_symbol": "USDT",
  "main_user_email": "qa+cardholder@bitbanker.org",
  "fee_user_email": "card@bitbanker.org",
  "main_user_balance": 4571.62,
  "fee_user_balance": 136.35,
  "card_balance": 1923742.76,
  "card_in_progress": 3,
  "card_activating": 3,
  "card_active": 17,
  "card_frozen": 4,
  "card_error": 3,
  "card_closed": 71,
  "card_issued": 31,
  "card_blocking": 14,
  "card_freezing": 0
};

export const cardBalancesSchema = {
    id: 'number',
    pan_mask: 'string',
    currency_id: 'number',
    currency_symbol: 'string',
    balance: 'number',
    is_default: 'boolean'
};

export const cardsCommonBalancesSchema = {
    id: null,
    pan_mask: null,
    currency_id: 6,
    currency_symbol: "USDT",
    is_default: true
};

export const cardOneSettings = {
  "id": 1,
  "platform_id": 2,
  "platform_name": "pintopay",
  "card_currency_id": 6,
  "card_currency_symbol": "USDT",
  "tariff_currency_id": 6,
  "tariff_currency_symbol": "USDT",
  "name": "VIRTUAL MASTERCARD123",
  "type_id": "sp_q5r8tz_mc_virtual_usd",
  "network": "MASTERCARD",
  "form_factor": "VIRTUAL",
  "terms": {
    "faqEn": "https://bitbanker.org/faq#cryptocurrency-card.terms-issuance",
    "faqRu": "https://bitbanker.org/ru/faq#cryptocurrency-card.terms-issuance",
    "limitPerDay": 1000,
    "limitPerMonth": 10000,
    "paymentSystems": [
      {
        "label": "ApplePay",
        "checked": true
      },
      {
        "label": "Alipay",
        "checked": true
      }
    ]
  },
  "is_active": true,
  "card_order_price": 25,
  "card_order_baas_price": 25,
  "monthly_maintenance_abs": 2,
  "monthly_maintenance_baas_abs": 1,
  "top_up_fee_abs": 0.25,
  "top_up_baas_fee_abs": 2,
  "top_up_fee_pct": 1,
  "top_up_baas_fee_pct": 2,
  "transaction_fee_abs": 0.3,
  "transaction_fee_baas_abs": 0.25,
  "transaction_fee_pct": 1.01,
  "transaction_fee_baas_pct": 0,
  "card_block_fee_abs": 1,
  "card_block_baas_fee_abs": 0.3,
  "card_block_fee_pct": 0.3,
  "card_block_baas_fee_pct": 0.8,
  "card_freeze_fee_abs": 0.15,
  "card_freeze_baas_fee_abs": 0.43,
  "card_freeze_fee_pct": 0.55,
  "card_freeze_baas_fee_pct": 8,
  "card_unfreeze_fee_abs": 1,
  "card_unfreeze_baas_fee_abs": 0,
  "card_unfreeze_fee_pct": 2,
  "card_unfreeze_baas_fee_pct": 1,
  "card_min_top_up_abs": 25,
  "card_min_activation_abs": 25
};