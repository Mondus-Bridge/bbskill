import { sixRandom } from '../../utils/date.js';

export const createCard = {
  "card_block_baas_fee_abs": 0,
  "card_block_baas_fee_pct": 0,
  "card_block_fee_abs": 0,
  "card_block_fee_pct": 0,
  "card_currency_id": 6,
  "card_freeze_baas_fee_abs": 0,
  "card_freeze_baas_fee_pct": 0,
  "card_freeze_fee_abs": 0,
  "card_freeze_fee_pct": 0,
  "card_min_activation_abs": 0,
  "card_min_top_up_abs": 0,
  "card_order_baas_price": 0,
  "card_order_price": 0,
  "card_unfreeze_baas_fee_abs": 0,
  "card_unfreeze_baas_fee_pct": 0,
  "card_unfreeze_fee_abs": 0,
  "card_unfreeze_fee_pct": 0,
  "form_factor": "VIRTUAL",
  "monthly_maintenance_abs": 0,
  "monthly_maintenance_baas_abs": 0,
  "name": `PLAYWRIGHT_${sixRandom()}`,
  "network": "VISA",
  "platform_id": 2,
  "tariff_currency_id": 2,
  "terms": {
    "faqEn": "https://bitbanker.org/faq#cryptocurrency-card.terms-issuance",
    "faqRu": "https://bitbanker.org/ru/faq#cryptocurrency-card.terms-issuance",
    "limitPerDay": 1000,
    "limitPerMonth": 100000,
    "paymentSystems": [
      {
        "label": "ApplePay",
        "checked": false
      },
      {
        "label": "GooglePay",
        "checked": true
      }
    ]
  },
  "top_up_baas_fee_abs": 0,
  "top_up_baas_fee_pct": 0,
  "top_up_fee_abs": 0,
  "top_up_fee_pct": 0,
  "transaction_fee_abs": 0,
  "transaction_fee_baas_abs": 0,
  "transaction_fee_baas_pct": 0,
  "transaction_fee_pct": 0,
  "type_id": `VIRTUAL_AUTO_CARD_${sixRandom()}`
};

export const originalTerms = {"terms":{"limitPerDay":2000,"limitPerMonth":30000,"faqRu":"https://bitbanker.org/ru/faq#cryptocurrency-card.terms-issuance","faqEn":"https://bitbanker.org/faq#cryptocurrency-card.terms-issuance","paymentSystems":[{"label":"ApplePay","checked":false},{"label":"GooglePay","checked":true},{"label":"AliPay","checked":false}]}};
export const newTerms = {"terms":{"limitPerDay":1000,"limitPerMonth":20000,"faqRu":"empty","faqEn":"https://bitbanker.org/faq#cryptocurrency-card.terms-issuance","paymentSystems":[{"label":"ApplePay","checked":false},{"label":"GooglePay","checked":true},{"label":"AliPay","checked":false}]}};

export const newFees = {
  "card_order_price": 15,
  "monthly_maintenance_abs": 1,
  "top_up_fee_abs": 0,
  "top_up_fee_pct": 1.25,
  "transaction_fee_abs": 0,
  "transaction_fee_pct": 0.15,
  "card_block_fee_abs": 1,
  "card_block_fee_pct": 0,
  "card_freeze_fee_abs": 1.5,
  "card_freeze_fee_pct": 0,
  "card_unfreeze_fee_abs": 0,
  "card_unfreeze_fee_pct": 0,
  "card_order_baas_price": 1,
  "monthly_maintenance_baas_abs": 2,
  "top_up_baas_fee_abs": 0,
  "top_up_baas_fee_pct": 1.3,
  "transaction_fee_baas_abs": 0,
  "transaction_fee_baas_pct": 0.2,
  "card_block_baas_fee_abs": 2,
  "card_block_baas_fee_pct": 0,
  "card_freeze_baas_fee_abs": 2.5,
  "card_freeze_baas_fee_pct": 0,
  "card_unfreeze_baas_fee_abs": 1,
  "card_unfreeze_baas_fee_pct": 0
}
export const originalFees = {
  "card_order_price": 16,
  "monthly_maintenance_abs": 1,
  "top_up_fee_abs": 0,
  "top_up_fee_pct": 1.45,
  "transaction_fee_abs": 0,
  "transaction_fee_pct": 0.35,
  "card_block_fee_abs": 1,
  "card_block_fee_pct": 3,
  "card_freeze_fee_abs": 1.5,
  "card_freeze_fee_pct": 0,
  "card_unfreeze_fee_abs": 0,
  "card_unfreeze_fee_pct": 0,
  "card_order_baas_price": 15,
  "monthly_maintenance_baas_abs": 2,
  "top_up_baas_fee_abs": 0,
  "top_up_baas_fee_pct": 1.3,
  "transaction_fee_baas_abs": 0,
  "transaction_fee_baas_pct": 0.2,
  "card_block_baas_fee_abs": 2,
  "card_block_baas_fee_pct": 0,
  "card_freeze_baas_fee_abs": 2.5,
  "card_freeze_baas_fee_pct": 0,
  "card_unfreeze_baas_fee_abs": 1,
  "card_unfreeze_baas_fee_pct": 0
};
export const originalMain = {"card_currency_id":2,"tariff_currency_id":2,"form_factor":"VIRTUAL","name":"PLAYWRIGHT","network":"VISA","type_id":"VIRTUAL_AUTO_CARD"};
export const newMain = {"card_currency_id":6,"tariff_currency_id":2,"form_factor":"VIRTUAL","name":"PLAYWRIGHTUpdated","network":"VISA","type_id":"VIRTUAL_AUTO_UPDATED"};

export const originalToggle = {"is_active":true};
export const newToggle = {"is_active":false};


export const cardOne = {
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