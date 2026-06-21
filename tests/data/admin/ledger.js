export const typesOfOperationAdmin = [
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
    "id": 32,
    "name": "Clearing Settlement"
  },
  {
    "id": 31,
    "name": "Commission"
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
    "id": 33,
    "name": "OTC Deal"
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

export const typesOfOperationAdminCheck = [
  {
    "id": 30,
    "name": "banking",
    "shouldHaveOperations": false
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
    "shouldHaveOperations": true
  },
  {
    "id": 26,
    "name": "Blocking",
    "shouldHaveOperations": true
  },
  {
    "id": 8,
    "name": "Bonus",
    "shouldHaveOperations": false
  },
  {
    "id": 14,
    "name": "Borrow",
    "shouldHaveOperations": true
  },
  {
    "id": 32,
    "name": "Clearing Settlement",
    "shouldHaveOperations": false
  },
  {
    "id": 31,
    "name": "Commission",
    "shouldHaveOperations": false
  },
  {
    "id": 35,
    "name": "Company withdrawal SWIFT transfer",
    "shouldHaveOperations": false
  },
  
  {
    "id": 1,
    "name": "Deposit",
    "shouldHaveOperations": true
  },
  {
    "id": 24,
    "name": "Income order percent",
    "shouldHaveOperations": true
  },
  {
    "id": 25,
    "name": "Investment",
    "shouldHaveOperations": false
  },
  {
    "id": 11,
    "name": "Invoice",
    "shouldHaveOperations": true
  },
  {
    "id": 13,
    "name": "Lend",
    "shouldHaveOperations": true
  },
  {
    "id": 20,
    "name": "Lending percent",
    "shouldHaveOperations": true
  },
  {
    "id": 4,
    "name": "Order",
    "shouldHaveOperations": true
  },
  {
    "id": 33,
    "name": "OTC Deal",
    "shouldHaveOperations": true
  },
  {
    "id": 17,
    "name": "P2P Deposit",
    "shouldHaveOperations": true
  },
  {
    "id": 18,
    "name": "P2P Withdrawal",
    "shouldHaveOperations": true
  },
  {
    "id": 16,
    "name": "Referral",
    "shouldHaveOperations": false
  },
  {
    "id": 21,
    "name": "referral_bonus",
    "shouldHaveOperations": false
  },
  {
    "id": 29,
    "name": "SBP",
    "shouldHaveOperations": true
  },
  {
    "id": 34,
    "name": "Swift account transfer",
    "shouldHaveOperations": false
  },
  {
    "id": 15,
    "name": "Transfer",
    "shouldHaveOperations": true
  },
  {
    "id": 2,
    "name": "Withdraw",
    "shouldHaveOperations": true
  },
  {
    "id": 22,
    "name": "Withdrawal transfer",
    "shouldHaveOperations": true
  },
  {
    "id": 23,
    "name": "Withdrawal Visa",
    "shouldHaveOperations": false
  },
  {
    "id": 27,
    "name": "Write Off",
    "shouldHaveOperations": true
  }
];

export const ledgerActions = {
  "create": "Создание",
  "cancel": "Отмена",
  "convert": "Конвертация",
  "fill": "Завершен",
  "update": "Обновление",
  "pay": "Покупка",
  "burn": "Burn",
  "liquidate": "Ликвидация",
  "percent": "Распределение",
  "confirm": "Подтверждение",
  "sell": "Продажа",
  "pending_to_pool": "Зачисление в инвестпродукт",
  "pending_from_pool": "Вывод из инвестпродукта",
  "fee": "Комиссия",
  "treasury": "Резерв казначейства",
  "return_treasury": "Отмена резерва казначейства",
};