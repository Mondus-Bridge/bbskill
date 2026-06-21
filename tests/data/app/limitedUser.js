export const wlServices = {
  "is_acquiring_available": false,
  "is_borrowing_available": false,
  "is_investing_available": false,
  "is_lending_available": false,
  "is_p2p_available": false,
  "is_trading_available": true,
  "is_banking_available": false,
  "is_contracts_available": false,
  "is_maintenance": false,
  "is_video_guides_available": false,
  "is_sbp_available": false,
  "is_onboarding_companies_available": false,
  "is_visa_available": false,
  "is_swift_available": false,
  "is_referral_bonus_available": false,
  "is_withdrawal_company_available": false,
  "is_person_withdrawal_company_available": false,
  "is_otc_deals_available": false,
  "is_public_orderbooks_available": false,
  "is_epr": false
};

export const sendRubn = {"currency_id":35,"email":"qa+user2@bitbanker.org","amount":100};
export const sendUsdt = {"currency_id":6,"email":"qa+user2@bitbanker.org","amount":10};
export const sendUknown = {"currency_id":6,"email":"qa+user1dontexist@bitbanker.org","amount":10};

export const withdrawUsdtAvax = {"address":"0xFe8eBfa75Bb1fc2B99Ea7F7DFBb1fB030Dc31505","amount":100,"blockchain_network":14,"currency":6};
export const withdrawUsdtErc = {"address":"0xFe8eBfa75Bb1fc2B99Ea7F7DFBb1fB030Dc31505","amount":10,"blockchain_network":7,"currency":6};
export const withdrawUsdtBsc = {"address":"0xFe8eBfa75Bb1fc2B99Ea7F7DFBb1fB030Dc31505","amount":10,"blockchain_network":5,"currency":6};
export const withdrawUsdtTon = {"address":"UQCUUzj8tyPpo01B3b-tJpFxOd91xoSuMaVfYKPMP1-5Yemy","amount":10,"blockchain_network":79,"currency":6,"memo":161570331};
export const withdrawUsdtTron = {"address":"TFmNcCztkSCJbjw3AAxhZ1XxvCPnnH6dpF","amount":10,"blockchain_network":6,"currency":6};

export const withdrawSwift = {"amount":200,"currency":6,"save_swift_template":false,
    "swift":{"recipient_name":"bank","intermediary_bank_name":"bank","intermediary_bank_swift":"bank","recipient_iban":"bank","recipient_address":"bank","recipient_bank_address":"bank","recipient_bank_city":"bank","recipient_bank_country":"bank","recipient_bank_name":"bank","recipient_bank_swift":"bank","recipient_city":"bank","recipient_country":"bank"},"currency_transferable":28};

export const withdrawByVisa = {"currency":2,"amount":1000,"card_number":"4748445880045493","card_holder_name":"IVAN IVANOV"};
export const buyCNB = {"asset_amount":1,"investment_asset_id":89};
export const payInvoiceInternally = {"invoice_id":2138,"currency_id":6};

export const sellUsdtMarket = {"market":58,"side":"sell","amount":100};
export const sellUsdtMaker = {"market":58,"side":"sell","amount":100,"price":90,"is_market_maker":false,"with_external_counterorders":false,"is_auto_amount":false};
export const buyUsdtMarket = {"market":58,"side":"buy","amount":10};
export const buyUsdtMaker = {"market":58,"side":"buy","amount":100,"price":70,"is_market_maker":false,"with_external_counterorders":false,"is_auto_amount":false};

export const otcDeal = {"base_id":35,"amount":100,"buyer_email":"qa+user2@bitbanker.org","quote_id":6,"price":0.0111};

export const bankWithdrawlReq = {"recipient_bank_account_number":"40702810438000012345","recipient_bank_cor_account_number":"23232","recipient_bank_country":"Russia","recipient_bank_name":"test","recipient_bank_bic":"232323","recipient_kpp":"","recipient_full_name":"test","recipient_inn":"test","currency_id":35,"amount":10000};



