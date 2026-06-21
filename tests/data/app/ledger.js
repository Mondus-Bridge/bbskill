export const typesOfOperations = [
  {
    "id": 30,
    "name": "banking",
    "shouldHaveOperations": false,
    "incomingOperations": true,
    "outgoingOperations": false
  },
  {
    "id": 37,
    "name": "Banking block",
    "shouldHaveOperations": false
  },
  {
    "id": 36,
    "name": "Banking top-up",
    "shouldHaveOperations": false
  },
  {
    "id": 28,
    "name": "Bank transfer deposit",
    "shouldHaveOperations": true,
    "incomingOperations": true,
    "outgoingOperations": false
  },
  {
    "id": 26,
    "name": "Blocking",
    "shouldHaveOperations": true,
    "incomingOperations": true,
    "outgoingOperations": true
  },
  {
    "id": 8,
    "name": "Bonus",
    "shouldHaveOperations": false,
    "incomingOperations": true,
    "outgoingOperations": false
  },
  {
    "id": 14,
    "name": "Borrow",
    "shouldHaveOperations": true,
    "incomingOperations": true,
    "outgoingOperations": true
  },
  {
    "id": 35,
    "name": "Company withdrawal SWIFT transfer",
    "shouldHaveOperations": false,
    "incomingOperations": true,
    "outgoingOperations": true
  },
  {
    "id": 1,
    "name": "Deposit",
    "currencies": [2, 4, 28],
    "shouldHaveOperations": true,
    "incomingOperations": true,
    "outgoingOperations": true
  },
  {
    "id": 24,
    "name": "Income order percent",
    "currencies": [4,6],
    "shouldHaveOperations": false,
    "incomingOperations": true,
    "outgoingOperations": false
  },
  {
    "id": 25,
    "name": "Investment",
    "currencies": [6],
    "shouldHaveOperations": true,
     "incomingOperations": true,
    "outgoingOperations": true
  },
  {
    "id": 11,
    "name": "Invoice",
    "currencies": [6],
    "shouldHaveOperations": true,
    "incomingOperations": true,
    "outgoingOperations": true
  },
  {
    "id": 13,
    "name": "Lend",
    "currencies": [6],
    "shouldHaveOperations": true,
    "incomingOperations": true,
    "outgoingOperations": true
  },
  {
    "id": 20,
    "name": "Lending percent",
    "shouldHaveOperations": false,
    "incomingOperations": true,
    "outgoingOperations": false
  },
  {
    "id": 4,
    "name": "Order",
    "currencies": [2, 3, 5, 6, 9, 10, 25, 26, 28, 32, 34],
    "shouldHaveOperations": true,
    "incomingOperations": true,
    "outgoingOperations": true
  },
  {
    "id": 17,
    "name": "P2P Deposit",
    "shouldHaveOperations": false
  },
  {
    "id": 18,
    "name": "P2P Withdrawal",
    "shouldHaveOperations": false
  },
  {
    "id": 16,
    "name": "Referral",
    "shouldHaveOperations": false,
    "incomingOperations": true,
    "outgoingOperations": false
  },
  {
    "id": 21,
    "name": "referral_bonus",
    "shouldHaveOperations": false
  },
  {
    "id": 29,
    "name": "SBP",
    "shouldHaveOperations": true,
    "incomingOperations": true,
    "outgoingOperations": true
  },
  {
    "id": 34,
    "name": "Swift account transfer",
    "shouldHaveOperations": false
  },
  {
    "id": 15,
    "name": "Transfer",
    "currencies": [4],
    "shouldHaveOperations": true,
    "incomingOperations": true,
    "outgoingOperations": true
  },
  {
    "id": 2,
    "name": "Withdraw",
    "currencies": [2, 4, 28],
    "shouldHaveOperations": true,
    "incomingOperations": true,
    "outgoingOperations": true
  },
  {
    "id": 33,
    "name": "OTC deals",
    "currencies": [6],
    "shouldHaveOperations": true,
    "incomingOperations": true,
    "outgoingOperations": true
  },
  {
    "id": 22,
    "name": "Withdrawal transfer",
    "shouldHaveOperations": false,
    "incomingOperations": true,
    "outgoingOperations": true
  },
  {
    "id": 23,
    "name": "Withdrawal Visa",
    "shouldHaveOperations": false,
    "incomingOperations": true,
    "outgoingOperations": true
  },
  {
    "id": 27,
    "name": "Write Off",
    "shouldHaveOperations": true,
    "incomingOperations": false,
    "outgoingOperations": true
  }
];

export const typesOfOperation = [
  {
    "id": 30,
    "name": "banking"
  },
  {
    "id": 37,
    "name": "Banking block"
  },
  {
    "id": 36,
    "name": "Banking top-up"
  },
  {
    "id": 28,
    "name": "Bank transfer deposit"
  },
  {
    "id": 26,
    "name": "Blocking"
  },
  {
    "id": 8,
    "name": "Bonus"
  },
  {
    "id": 14,
    "name": "Borrow"
  },
  {
    "id": 35,
    "name": "Company withdrawal SWIFT transfer"
  },
  {
    "id": 1,
    "name": "Deposit"
  },
  {
    "id": 24,
    "name": "Income order percent"
  },
  {
    "id": 25,
    "name": "Investment"
  },
  {
    "id": 11,
    "name": "Invoice"
  },
  {
    "id": 13,
    "name": "Lend"
  },
  {
    "id": 20,
    "name": "Lending percent"
  },
  {
    "id": 4,
    "name": "Order"
  },
  {
    "id": 17,
    "name": "P2P Deposit"
  },
  {
    "id": 18,
    "name": "P2P Withdrawal"
  },
  {
    "id": 16,
    "name": "Referral"
  },
  {
    "id": 21,
    "name": "referral_bonus"
  },
  {
    "id": 29,
    "name": "SBP"
  },
  {
    "id": 34,
    "name": "Swift account transfer"
  },
  {
    "id": 15,
    "name": "Transfer"
  },
  {
    "id": 2,
    "name": "Withdraw"
  },
  {
    "id": 22,
    "name": "Withdrawal transfer"
  },
  {
    "id": 23,
    "name": "Withdrawal Visa"
  },
  {
    "id": 27,
    "name": "Write Off"
  }
];

export const currencyForLedger = [{
    "id": 3, "symbol": "BTC", "name": "Bitcoin", "sort": 1, 
    "id": 5, "symbol": "ETH", "name": "Ether", "sort": 2, 
    "id": 6, "symbol": "USDT", "name": "Tether USD", "sort": 3, 
    "id": 10, "symbol": "USDC", "name": "USD Coin", "sort": 4, 
    "id": 9, "symbol": "TRX", "name": "Tron", "sort": 5, 
    "id": 4, "symbol": "RUBR", "name": "Ruble Coin", "sort": 6, 
    "id": 2, "symbol": "USD.R", "name": "US Dollar (Russia)", "sort": 7, 
    "id": 28, "symbol": "EUR", "name": "Euro", "sort": 7, 
    "id": 31, "symbol": "USD.PD", "name": "US Dollar Dubai", "sort": 8, 
    "id": 34, "symbol": "TON", "name": "Ton", "sort": 9, 
    "id": 35, "symbol": "RUB.N", "name": "Rouble (Non resident)", "sort": 10, 
    "id": 8, "symbol": "AED", "name": "UAE Dirham", "sort": 11, 
    "id": 26, "symbol": "ATOM", "name": "Cosmos", "sort": 100, 
    "id": 33, "symbol": "AED.PD", "name": "UAE Dirham Dubai", "sort": 100, 
    "id": 25, "symbol": "AVAX", "name": "Avalanche", "sort": 101, 
    "id": 32, "symbol": "GLD.PD", "name": "Gold Dubai", "sort": 150, 
}];

export const emailList = ["@yujasc", "@yumurta_store", "loveandpeace1331+bb22@gmail.com", "loveandpeace1331+bb23@gmail.com", "loveandpeace1331+bb2@gmail.com", "loveandpeace1331+rusadmin@gmail.com", "qa+amluser@bitbanker.org", "qa+fulladmin@bitbanker.org", "qa+innuser2@bitbanker.org", "qa+lana7701793872korpbb@bitbanker.org"];