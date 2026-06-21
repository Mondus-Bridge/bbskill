export const authTokenSchema = {
    "access_token": "string", 
    "refresh_token": "string",
    "id_token": "string",
    "groups": 'object'
};

export const publicMarketSchema = {
    "id": "number", 
    "is_active": "boolean",
    "name":  "string",
    "base_id": "number", 
    "quote_id": "number", 
    "limit_amount_min": "number", 
    "limit_amount_max": "number", 
    "limit_amount_precision": "number", 
    "limit_total_min": "number", 
    "limit_total_max": "number", 
    "limit_total_precision": "number", 
    "limit_price_precision": "number", 
    "kyc_kgz_is_necessary": "boolean"
};