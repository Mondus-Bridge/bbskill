export const transactionEmail = {
  "items": [
    {
      "id": 4,
      "type": "confirmation_code",
      "description": "Код подтверждения операции.",
      "vars": {
        "confirmation_code": "код подтверждения"
      },
      "is_active": true,
      "contents": [
        {
          "id": 76,
          "subject": "Action required: confirmation code ",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n      <strong>{confirmation_code} </strong>\n      <br><br>\n      To complete the operation of funds, please send the confirmation code to the operator.\n      <br><br>\nIf it wasn't you, please contact support via \n  <a href=\"https://app.bitbanker.org/\"> the chat on the website\n  </a> or <a href=\"https://t.me/bitbanker_help_bot\">the Telegram bot</a>.\n</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n  </mj-text>\n  </mj-column>\n</mj-section>\n\n",
          "email_template_id": 4,
          "lang": "en"
        },
        {
          "id": 6,
          "subject": "Код подтверждения операции",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n       <strong>{confirmation_code}</strong>\n        <br><br>\nЧтобы завершить операцию, сообщите код подтверждения оператору.<br><br>\n      Если это были не вы, свяжитесь со службой поддержки <a href=\"https://app.bitbanker.org/\"> через чат на сайте</a> или <a href=\"https://t.me/bitbanker_help_bot\">Telegram-бот</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. \n    </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 4,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 1,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 15,
      "type": "invoice_payed",
      "description": "Отправляется клиенту, оплатившему инвойс",
      "vars": {
        "header": "Кто выставил счёт (магазин)",
        "invoice_id": "ID платежа",
        "description": "За какие услуги платёж",
        "currency_symbol": "Валюта полученных средст",
        "received_amount": "Количество полученных средств"
      },
      "is_active": true,
      "contents": [
        {
          "id": 83,
          "subject": "Invoice paid",
          "content": " <mj-section>\n  <mj-column>\n    <mj-text>\n\tYou have successfully paid the invoice {invoice_id} for {description} in the amount of {received_amount} {currency_symbol}.\n\t<br><br>\n{header} thank you for your purchase!\n<br><br>\nSave on commissions for purchases at {header}. Register on <a href=\"https://app.bitbanker.org/\">Bitbanker.org</a> and pay invoices directly from your account.\n</mj-text> \n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Earn Rewards with Bitbanker!\n      <br><br>\n      Invite your friends to use crypto-processing in Bitbanker and get \n      paid. Earn 30 USDT for every friend who signs up through your \n      referral link, plus some bonuses!\n      <br><br>\n      Your personal promo code: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/acquiring\" \n          target=\"_blank\" style=\"padding: 16px 40px; \n          border: 1px solid #2D5FB4; color: #2D5FB4; \n          text-decoration: none; border-radius: 14px;\">Learn More</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 15,
          "lang": "en"
        },
        {
          "id": 17,
          "subject": "Счет оплачен",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t Вы оплатили счет {invoice_id} за {description} на сумму {received_amount} {currency_symbol}.\n<br><br>\n{header} благодарит вас за покупку!\n</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Зарабатывайте в Bitbanker!\n      <br><br>\n     Приглашайте друзей пользоваться криптоэквайрингом в Bitbanker. \n      Заплатим за каждого друга, кто зарегистрируется по вашей ссылке, и \n      подарим бонусы!<br><br>\n      Ваш персональный промокод: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/acquiring\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Подробнее</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 15,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 7,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 21,
      "type": "invoice_created",
      "description": "Отправляется, когда создается счет на оплату.",
      "vars": {
        "amount": "Количество полученных средств",
        "header": "Кто выставил счёт (магазин)",
        "description": "За какие услуги платёж",
        "invoice_link": "ссылка на счет",
        "currency_symbol": "Валюта полученных средст"
      },
      "is_active": true,
      "contents": [
        {
          "id": 1,
          "subject": "Вам выставлен счет",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  {header} выставил вам \n <a href=\"{invoice_link}\" target=\"_blank\">счет</a> за {description}, на сумму {amount} {currency_symbol}.\n </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 21,
          "lang": "ru"
        },
        {
          "id": 89,
          "subject": "You got an invoice",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  {header} has sent you an <a href=\"{invoice_link}\" target=\"_blank\">invoice</a> for {description} in the amount of {amount} {currency_symbol}. \n\t  <br><br>\nSave on commissions for purchases at {header}. Register on Bitbanker and pay invoices directly from your account.\n\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>\n\t",
          "email_template_id": 21,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 7,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 22,
      "type": "withdrawal_success",
      "description": "Успешный вывод криптовалюты",
      "vars": {
        "amount": "Кол-во выведенных средств",
        "to_address": "На какой адрес выводятся средства",
        "transaction_id": "ID транзакции",
        "currency_symbol": "Символ выводимых средств"
      },
      "is_active": true,
      "contents": [
        {
          "id": 90,
          "subject": "Cryptocurrency withdrawal completed",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYour withdrawal request for {amount} {currency_symbol} has been completed.\n<br><br>\nWithdraw address: {to_address}<br>\nTransaction ID: {transaction_id}\n\n\t\t</mj-text> \n  </mj-column>\n</mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Earn Rewards with Bitbanker!\n      <br><br>\n     Invite your friends to use Bitbanker and get paid. Earn 30 USDT for \n      every friend who signs up through your referral link, plus some \n      bonuses!\n      <br><br>\n      Your personal promo code: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/faq#promo-codes\" target=\"_blank\" \n          style=\"padding: 16px 40px; border: 1px solid #2D5FB4; \n          color: #2D5FB4; text-decoration: none; border-radius: 14px;\">\n          Learn More</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n   <mj-text font-size=\"16px\" color=\"#8794AA\">\n      This is an automated message. Please do not reply to this email. \n      For assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n    </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 22,
          "lang": "en"
        },
        {
          "id": 24,
          "subject": "Успешный вывод криптовалюты",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВаша заявка на вывод {amount} {currency_symbol} выполнена.\n<br><br>\nАдрес вывода средств: {to_address}\n<br>\nID транзакции: {transaction_id}\n</mj-text>\n</mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Зарабатывайте в Bitbanker!\n      <br><br>\n      Приглашайте друзей в Bitbanker: заплатим за каждого друга, кто \n      зарегистрируется по вашей ссылке и подарим бонусы!\n      <br><br>\n      Ваш персональный промокод: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Подробнее</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text font-size=\"16px\" color=\"#8794AA\">\n      Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> на сайте</a>.\n  \t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 22,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 1,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 23,
      "type": "deposit_success",
      "description": "Поступление крипты на счет клиента",
      "vars": {
        "amount": "Кол-во пришедших средств",
        "currency_symbol": "Символьное обозначение пришедших средств"
      },
      "is_active": true,
      "contents": [
        {
          "id": 25,
          "subject": "Баланс пополнен",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВходящая транзакция успешно прошла AML-проверку и счет пополнен на {amount} {currency_symbol}.\n<br><br>\nБаланс вашего счета {balance} {currency_symbol}.\n\t</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Зарабатывайте в Bitbanker!\n      <br><br>\n      Приглашайте друзей в Bitbanker: заплатим за каждого друга, кто \n      зарегистрируется по вашей ссылке, и подарим бонусы!\n      <br><br>\n      Ваш персональный промокод: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Подробнее</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n      Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 23,
          "lang": "ru"
        },
        {
          "id": 91,
          "subject": "Account deposit confirmation",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nThe incoming transaction has successfully passed AML verification, and the account has been credited with {amount} {currency_symbol}.\n<br><br>\nYou now have a balance of {balance} {currency_symbol} available in your account.\n\t</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Earn Rewards with Bitbanker!\n      <br><br>\n     Invite your friends to use Bitbanker and get paid. Earn 30 USDT for \n      every friend who signs up through your referral link, plus some \n      bonuses! \n      <br><br>\n      Your personal promo code: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Learn More</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. For assistance, please <a href=\"https://bitbanker.org/ru\">contact</a> support.\n\t</mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 23,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 1,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 26,
      "type": "order_completed",
      "description": "Исполнение ордера",
      "vars": {
        "order_cost": "Сумма сделки (квотируемая валюта)",
        "order_price": "Цена",
        "order_amount": "Кол-во базового актива",
        "order_base_currency_symbol": "Символьное обозначение базового актива",
        "order_quote_currency_symbol": "Символьное обозначение квотируемого актива"
      },
      "is_active": true,
      "contents": [
        {
          "id": 93,
          "subject": "Exchange request completed successfully",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYour request for the exchange of {order_amount} {order_base_currency_symbol} for {order_cost} {order_quote_currency_symbol} has been successfully completed in full.\n<br><br>\nAverage price: {order_price} {order_quote_currency_symbol}.\n\t</mj-text> \n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Earn Rewards with Bitbanker!\n      <br><br>\n      Invite your friends to trade crypto with limit and market orders in \n      Bitbanker and get paid. Earn 30 USDT for every friend who signs up \n      through your referral link, plus some bonuses! \n      <br><br>\n      Your personal promo code: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/faq#promo-codes\" target=\"_blank\" \n          style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: \n            #2D5FB4; text-decoration: none; border-radius: 14px;\">Learn More</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org\">contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 26,
          "lang": "en"
        },
        {
          "id": 27,
          "subject": "Ордер исполнен",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВаша заявка по обмену {order_amount} {order_base_currency_symbol} на {order_cost} {order_quote_currency_symbol} полностью исполнена.\n<br><br>\nСредняя цена: {order_price} {order_quote_currency_symbol}.\n\t</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Зарабатывайте в Bitbanker!\n      <br><br>\n      Приглашайте друзей торговать криптовалютой по рыночным и лимитным \n      ордерам в Bitbanker. Заплатим за каждого, кто зарегистрируется \n      по вашей ссылке, и подарим бонусы!\n      <br><br>\n      Ваш персональный промокод: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Подробнее</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 26,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 6,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 27,
      "type": "transfer_success",
      "description": "Поступление средств пользователю от другого клиента BB без комменатрия",
      "vars": {
        "from_user_email": "От какого пользователя поступили средства",
        "transfered_amount": "Сколько средств поступило",
        "transfered_currency_symbol": "Символьное обозначение поступивших средств"
      },
      "is_active": true,
      "contents": [
        {
          "id": 28,
          "subject": "Вам поступил перевод",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь {from_user_email} перевел вам {transfered_amount} {transfered_currency_symbol}. \n      Средства поступили на ваш счет {datetime}. \n  <br><br>\nБаланс вашего счета {balance} {transfered_currency_symbol}.\n\t</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Зарабатывайте в Bitbanker!\n      <br><br>\n     Приглашайте друзей пользоваться переводами между пользователями \n      Bitbanker. Заплатим за каждого, кто зарегистрируется по вашей ссылке, \n      и подарим бонусы!\n      <br><br>\n      Ваш персональный промокод: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Подробнее</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\">на сайте</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 27,
          "lang": "ru"
        },
        {
          "id": 94,
          "subject": "Incoming transfer received",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n      User {from_user_email} has transferred {transfered_amount} {transfered_currency_symbol} to your account.\n     <br><br>\n    The funds were received on your account on {datetime}.\n    <br><br>\n    You now have a balance of {balance} {transfered_currency_symbol} available in your account.\n\t</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Earn Rewards with Bitbanker!\n      <br><br>\n      Invite your friends to use transfers via email in Bitbanker and get \n      paid. Earn 30 USDT for every friend who signs up through your referral\n      link, plus some bonuses!\n      <br><br>\n      Your personal promo code: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Learn More</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n    <br><br>\n    For assistance, please <a href=\"https://bitbanker.org/ru\">contact </a>support.\n\t</mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 27,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 2,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 30,
      "type": "withdrawal_crypto_initialized",
      "description": "Заявка на вывод крипты",
      "vars": {
        "amount": "Сколько средств выводится",
        "to_address": "Адрес кошелька, на который выводятся средства",
        "date_and_time": "Дата и время действия",
        "currency_symbol": "Символьное обозначение выводимых средств"
      },
      "is_active": true,
      "contents": [
        {
          "id": 31,
          "subject": "Заявка на вывод криптовалюты",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n{date_and_time} вы создали заявку на вывод {amount} {currency_symbol} на адрес\n      {to_address}.\n<br><br>\nКогда средства будут выведены, вам придет письмо с подтверждением. \n<br><br>\nЕсли это были не вы, обратитесь в службу поддержки через \n      <a href=\"https://bitbanker.org/ru\">чат на сайте</a> или \n      <a href=\"https://t.me/bitbanker_help_bot\">Телеграм-бот</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nBitbanker не несет ответственности за средства, отправленные на неверный адрес.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 30,
          "lang": "ru"
        },
        {
          "id": 97,
          "subject": "Сryptocurrency withdrawn from your account",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nOn {date_and_time}, you withdrew {amount} {currency_symbol} to the following address {to_address}.\n<br><br>\nIf you did not initiate this operation, please contact the operator via <a href=\"https://app.bitbanker.org/\">the chat</a> or Telegram <a href=\"https://t.me/bitbanker_help_bot\">support bot</a> immediately.\n<br><br>\nBitbanker cannot be held responsible for any funds sent to wrong addresses.\n\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\">contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 30,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 1,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 55,
      "type": "order_partially_completed",
      "description": "Частичное исполнение ордера",
      "vars": {
        "order_cost": "Сумма сделки (квотируемая валюта)",
        "order_price": " Цена",
        "order_amount": "Кол-во базового актива",
        "order_base_currency_symbol": "Символьное обозначение базового актива",
        "order_quote_currency_symbol": "Символьное обозначение квотируемого актива"
      },
      "is_active": true,
      "contents": [
        {
          "id": 61,
          "subject": "Ордер частично исполнен",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВаш ордер по обмену {order_amount} {order_base_currency_symbol} \n      на {order_cost} {order_quote_currency_symbol} частично исполнен. \n<br><br>\nВы обменяли {trade_amount} {order_base_currency_symbol}.\n<br><br>\nСредняя цена: {order_price} {order_quote_currency_symbol}.\n\t</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Зарабатывайте в Bitbanker!\n      <br><br>\n      Приглашайте друзей торговать криптовалютой по рыночным и лимитным \n      ордерам в Bitbanker. Заплатим за каждого, кто зарегистрируется по \n      вашей ссылке, и подарим бонусы!\n      <br><br>\n      Ваш персональный промокод: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Подробнее</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n\t\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. \n      Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> \n        на сайте</a>.\n     </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 55,
          "lang": "ru"
        },
        {
          "id": 98,
          "subject": "Your order has been partially executed",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYour exchange order for {order_amount} {order_base_currency_symbol} into {order_cost} {order_quote_currency_symbol} has been partially fulfilled. \n<br><br>\nYou’ve exchanged  {trade_amount} {order_base_currency_symbol}.\n<br><br>\nThe average exchange rate for this transaction: {order_price} {order_quote_currency_symbol}.\n\t</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Earn Rewards with Bitbanker!\n      <br><br>\n      Invite your friends to trade crypto with limit and market orders in \n      Bitbanker and get paid. Earn 30 USDT for every friend who signs up \n      through your referral link, plus some bonuses!\n      <br><br>\n      Your personal promo code: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Learn More</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\">contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 55,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 6,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 56,
      "type": "p2p_accept_buy",
      "description": "Пользователь принял ваше предложение на продажу",
      "vars": {
        "sum": "Сумма сделки",
        "total": "Общая сумма сделки",
        "symbol": "Валюта сделки",
        "deal_id": "Id сделки",
        "timeout": "Время на принятие сделки",
        "commission": "Комиссия сделки",
        "offerer_name": "Имя мейкера"
      },
      "is_active": true,
      "contents": [
        {
          "id": 114,
          "subject": "Your P2P offer received a response",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n A client has responded to your offer to withdraw funds from the Bitbanker balance to {bank} card.\n<br><br>\nDeal amount: {sum} {symbol}.\n<br>\nAmount you will receive on the card after deduction of commission: {total} {symbol}.\n<br><br>\nPlease accept the deal within {timeout} minutes. Otherwise, it will be automatically cancelled.\n<br><br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/p2p/deals/{deal_id}\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Proceed to the deal</a>\n        </p>\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. For assistance, please <a href=\"https://bitbanker.org/ru\">contact </a>support.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 56,
          "lang": "en"
        },
        {
          "id": 63,
          "subject": "Отклик на ваше P2P-предложение",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь принял ваше предложение на вывод средств с баланса Bitbanker на карту {bank}.\n<br><br>\nСумма сделки: {sum} {symbol}\n<br>\nВы получите на карту с учетом комиссии: {total} {symbol}\n<br><br>\nПожалуйста, подтвердите сделку в течение {timeout} минут. В противном случае она автоматически отменится.\n<br><br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/p2p/deals/{deal_id}\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Открыть сделку</a>\n        </p>\n\t</mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\">на сайте</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 56,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 3,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 57,
      "type": "p2p_accept_sell",
      "description": "Пользователь принял ваше предложение на пополнение",
      "vars": {
        "sum": "Сумма сделки",
        "total": "Общая сумма сделки",
        "symbol": "Валюта сделки",
        "deal_id": "Id сделки",
        "timeout": "Время на принятие сделки",
        "commission": "Комиссия сделки",
        "offerer_name": "Имя мейкера"
      },
      "is_active": true,
      "contents": [
        {
          "id": 161,
          "subject": "Your P2P offer received a response",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nA client has responded to your offer to top up the Bitbanker balance from {bank} card.\n<br><br>\nDeal amount: {sum} {symbol}.\n<br>\nYou will send to the card after deduction of commission: {total} {symbol}.\n<br><br>\nPlease accept the transaction within {timeout} minutes. Otherwise, it will be automatically cancelled, and your rating will be decreased.\n<br><br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/p2p/deals/{deal_id}\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Proceed to the deal</a>\n        </p>\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not reply to this email. For assistance, please <a href=\"https://bitbanker.org/ru\">contact </a>support.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 57,
          "lang": "en"
        },
        {
          "id": 64,
          "subject": "Отклик на ваше P2P-предложение",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь принял ваше предложение на пополнение баланса Bitbanker с карты {bank}.\n<br><br>\nСумма сделки: {sum} {symbol}\n<br>\nВы отправите на карту с учетом комиссии {total} {symbol}\n<br><br>\nПожалуйста, подтвердите сделку в течение {timeout} минут. В противном случае она автоматически отменится, а ваш рейтинг снизится.\n<br><br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/p2p/deals/{deal_id}\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Открыть сделку</a>\n        </p>\n\t</mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\">на сайте</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 57,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 3,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 58,
      "type": "p2p_deposit_min_hidden",
      "description": "P2P Объявление на пополнение скрыто по минимуму",
      "vars": {
        "offer_id": "Id сделки",
        "offerer_name": "Имя мейкера"
      },
      "is_active": true,
      "contents": [
        {
          "id": 168,
          "subject": "Your offer {offer_id} has been hidden",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n We have hidden your offer for topping up from the {bank} bank card.\n <br><br>\nThe balance on the offer has fallen below the minimum limit you have set.\n<br><br>\nYou can modify or delete the offer.\n<br><br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/p2p/offers?type=deposit&id={offer_id}\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Go to the offer</a>\n               </p>\n\t</mj-text> \n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. For assistance, please <a href=\"https://bitbanker.org/ru\"> contact</a> support.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 58,
          "lang": "en"
        },
        {
          "id": 65,
          "subject": "Ваше объявление {offer_id} скрыто",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n Мы скрыли ваше объявление на пополнение с карты {bank}.\n <br><br>\nОстаток по объявлению опустился ниже минимального лимита, который вы установили.\n<br><br>\nВы можете изменить объявление или удалить его. \n<br><br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/p2p/offers?type=deposit&id={offer_id}\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Открыть объявление</a>\n        </p>\n\t</mj-text> \n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 58,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 3,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 59,
      "type": "p2p_withdrawal_min_hidden",
      "description": "P2P-объявление на вывод скрыто по минимуму",
      "vars": {
        "offer_id": "Id сделки",
        "offerer_name": "Имя мейкера"
      },
      "is_active": true,
      "contents": [
        {
          "id": 66,
          "subject": "Ваше объявление {offer_id} скрыто",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nМы скрыли ваше объявление о выводе на карту {bank}.\n<br><br>\nОстаток по объявлению опустился ниже минимального лимита, который вы установили.\n<br><br>\nВы можете изменить объявление или удалить его. \n<br><br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/p2p/offers?type=withdrawal&id={offer_id}\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Открыть объявление</a>\n        </p>\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n      Если письмо пришло к вам по ошибке, просто проигнорируйте его.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 59,
          "lang": "ru"
        },
        {
          "id": 170,
          "subject": "Your Offer {offer_id} Has Been Hidden",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nWe have hidden your offer for withdrawing funds from the {bank} bank card.\n<br><br>\nThe balance on the offer has dropped below the minimum limit that you have set.\n<br><br>\nYou can modify or delete the offer.\n<br><br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/p2p/offers?type=withdrawal&id={offer_id}\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Proceed to the offer</a>\n        </p>\n\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 59,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 3,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 60,
      "type": "swift_sended_by_bank",
      "description": "Swift прошел валютный контроль и принят в обработку",
      "vars": {
        "amount": "Сумма перевода",
        "currency_symbol": "Валюта перевода"
      },
      "is_active": true,
      "contents": [
        {
          "id": 171,
          "subject": "Status Update on SWIFT Transfer",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n         Your SWIFT transfer in the amount of {amount} {currency_symbol} has passed currency control and is now being processed.\n        <br/><br/>\n        The details of the currency transfer are attached to this email. Please monitor the status of the transfer in the <a href=\"https://app.bitbanker.org/operations\">Operations History</a> section of the website.\n\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 60,
          "lang": "en"
        },
        {
          "id": 68,
          "subject": "SWIFT-перевод принят в обработку",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            Ваш SWIFT-перевод на сумму {amount} {currency_symbol} прошел \n      валютный контроль и принят в обработку.\n        <br/><br/>\n        Информация о валютном переводе прикреплена к этому письму. \n      Следить за статусом перевода можно в <a href=\"https://app.bitbanker.org/operations\">истории операций</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. \n    Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> на сайте</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 60,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 4,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 61,
      "type": "swift_completed",
      "description": "Изменение статуса SWIFT перевода на завершено",
      "vars": {
        "amount": "Сумма перевода",
        "currency_symbol": "Валюта перевода"
      },
      "is_active": true,
      "contents": [
        {
          "id": 172,
          "subject": "SWIFT Transfer Sent to Recipient",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n           Your SWIFT transfer in the amount of {amount} {currency_symbol} has been sent.\n        <br/><br/>\n        The payment will be delivered within five business days.\n        </mj-text> \n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Earn Rewards with Bitbanker!\n      <br><br>\n      Invite your friends to use SWIFT Transfers in Bitbanker and get paid. \n      Earn 30 USDT for every friend who signs up through your referral link, \n      plus some bonuses!\n      <br><br>\n      Your personal promo code: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Learn More</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 61,
          "lang": "en"
        },
        {
          "id": 70,
          "subject": "SWIFT-перевод отправлен получателю",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            Ваш SWIFT-перевод на сумму {amount} {currency_symbol} отправлен.\n        <br/><br/>\n        Платеж будет доставлен в течение 5 рабочих дней.\n\t</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Зарабатывайте в Bitbanker!\n      <br><br>\n     Приглашайте друзей пользоваться международными переводами SWIFT в \n      Bitbanker. Заплатим за каждого, кто зарегистрируется по вашей ссылке, \n      и подарим бонусы!\n      <br><br>\n      Ваш персональный промокод: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Подробнее</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n      Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 61,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 4,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 69,
      "type": "invoice_payed_for_receiver",
      "description": "Отправляется создателю счета, когда поступает полная оплата",
      "vars": {
        "header": "Кто выставил счёт (магазин) ",
        "invoice_id": "ID платежа",
        "description": "За какие услуги платёж",
        "currency_symbol": "Валюта полученных средст",
        "received_amount": "Количество полученных средств"
      },
      "is_active": true,
      "contents": [
        {
          "id": 106,
          "subject": "Счет оплачен",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПополнение счета {invoice_id} на {received_amount}{currency_symbol} прошло AML-проверку и успешно зачислено.\n\t</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Зарабатывайте в Bitbanker!\n      <br><br>\n      Приглашайте друзей пользоваться криптоэквайрингом в Bitbanker. \n      Заплатим за каждого, кто зарегистрируется по вашей ссылке, и подарим \n      бонусы!\n      <br><br>\n      Ваш персональный промокод: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Подробнее</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text font-size=\"16px\" color=\"#8794AA\">\n      Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> на сайте</a>.\n  \t</mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 69,
          "lang": "ru"
        },
        {
          "id": 107,
          "subject": "Your invoice has been paid",
          "content": " <mj-section>\n  <mj-column>\n    <mj-text>\nThe deposit for invoice {invoice_id} in the amount of {received_amount}{currency_symbol} has passed AML verification and has been successfully credited.\n\t</mj-text> \n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Earn Rewards with Bitbanker!\n      <br><br>\n      Invite your friends to use crypto-processing in Bitbanker and get \n      paid. Earn 30 USDT for every friend who signs up through your referral \n      link, plus some bonuses.\n      <br><br>\n      Your personal promo code: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Learn More</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 69,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 7,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 71,
      "type": "withdrawal_canceled",
      "description": "Отменённый вывод",
      "vars": {
        "amount": " Кол-во выведенных средств ",
        "currency_symbol": "Символ выводимых средств "
      },
      "is_active": true,
      "contents": [
        {
          "id": 111,
          "subject": "Withdrawal canceled",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYour withdrawal request for {amount} {currency_symbol} was canceled.\n<br><br>\nIf you did not cancel or initiate the operation, <a href=\"https://bitbanker.org/ru\">contact</a> the support team immediately.\n\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 71,
          "lang": "en"
        },
        {
          "id": 110,
          "subject": "Вывод отменен",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВаша заявка на вывод {amount} {currency_symbol} отменена.\n<br><br>\nЧтобы узнать причину отмены, обратитесь в <a href=\"https://app.bitbanker.org/ru/\">службу поддержки</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\">на сайте</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 71,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 1,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 72,
      "type": "transfer_to_unregistered_user",
      "description": "Письмо о переводе средств незарегистрированному пользователю через тг",
      "vars": {
        "amount": "сумма перевода",
        "currency": "название валюты",
        "user_from": "перевод от кого"
      },
      "is_active": true,
      "contents": [
        {
          "id": 112,
          "subject": "Вам поступили средства от пользователя Bitbanker",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  {user_from} перевел вам {amount} {currency}. \n<br> <br>Средства поступят на ваш счет после регистрации в <a href=\"https://app.dev.bitbanker.org/auth/register\">Bitbanker</a> и подключения Телеграм-аккаунта к счету.\n<br><br>Чтобы вывести средства, необходимо пройти <a href=\"https://bitbanker.org/faq#verification-kyc.how-can-pass-kyc-verification\">верификацию KYC</a>.\n<br> <br>\nНе знаете, как пройти регистрацию на Bitbanker? Мы подготовили <a href=\"https://bitbanker.org/faq#registering-and-setting.signing-on-exchange\">подробное руководство</a>.\n\t</mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\">на сайте</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 72,
          "lang": "ru"
        },
        {
          "id": 113,
          "subject": "Action required: complete Bitbanker registration to receive your funds",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nUser {user_from} has transferred {amount} {currency} to you via Bitbanker. \n<br><br>\nRegister on <a href=\"https://app.bitbanker.org/auth/register\">Bitbanker</a> to receive the funds. Once your registration is finalized, the transferred funds will be at your disposal.\n<br><br>Please note that you are also required to undergo the <a href=\"https://bitbanker.org/faq#verification-kyc.how-can-pass-kyc-verification\">KYC verification</a> process in order to withdraw the funds.\n<br><br>\nTo assist you with the registration process and answer any questions you may have, we have prepared a dedicated <a href=\"https://bitbanker.org/faq#registering-and-setting.signing-on-exchange\">FAQ article</a>.\n\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\">contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 72,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 2,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 85,
      "type": "swift_edits",
      "description": "Для SWIFT-перевода требуются корректировки",
      "vars": {
        "{amount}": "сумма",
        "{currency_symbol}": "валюта ",
        "{comment_from_operator}": "комментарий оператора"
      },
      "is_active": true,
      "contents": [
        {
          "id": 129,
          "subject": "Обновите информацию для SWIFT-перевода",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nТребуется обновить информацию для SWIFT-перевода на сумму {amount} {currency_symbol}.\n<br><br>\nКомментарий от оператора: \n<br>\n{comment_from_operator}\n<br><br>\nИзменить данные SWIFT-перевода можно <a href=\"https://app.bitbanker.org/operations\"> в истории операций</a>.\n</mj-text>\n<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 85,
          "lang": "ru"
        },
        {
          "id": 173,
          "subject": "Adjustments Required for SWIFT Transfer",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nAdjustments are required for your SWIFT transfer in the amount of {amount} {currency_symbol}.\n<br><br>\nOperator's Comment:\n<br>\n{comment_from_operator}\n<br><br>\nYou can make the necessary edits to the SWIFT transfer in the <a href=\"https://app.bitbanker.org/operations\"> Operations history</a> section of the website.\n</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 85,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 4,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 86,
      "type": "visa_withdrawal_request",
      "description": "Заявка на вывод виза",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 130,
          "subject": "Вывод на карту VISA принят в обработку",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n   Ваша заявка на вывод {amount} {currency_symbol} на карту VISA принята в обработку. Когда перевод будет отправлен, вам придет письмо с подтверждением.\n<br> <br>\n  Следить за статусом перевода можно  <a href=\"https://app.bitbanker.org/operations\"> в истории операций.</a>\n<br> <br>\n  Если операцию создали не вы, срочно обратитесь <a href=\"https://bitbanker.org/ru\"> в службу поддержки</a>, затем смените пароль и включите двухфакторную аутентификацию. \n\t</mj-text>\n   \n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 86,
          "lang": "ru"
        },
        {
          "id": 131,
          "subject": "Application received: withdrawal to VISA card",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n We have received an application for the withdrawal of {amount} {currency_symbol} to a VISA card. You will receive a notification once the transfer is completed. \n <br> <br>\n  Track the transfer status in the <a href=\"https://app.bitbanker.org/operations\">transaction history</a> section.\n<br> <br>\nIf you did not initiate this operation, contact our <a href=\"https://bitbanker.org\">support service</a> immediately, then change your password and enable two-factor authentication. \n</mj-text> \n  \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 86,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 5,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 88,
      "type": "visa_withdrawal_canceled",
      "description": "Вывод на Visa отменен",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 174,
          "subject": "Visa Card Withdrawal Cancelled",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYour withdrawal request of {amount} {currency_symbol} to your Visa card has been cancelled. \n<br><br>\nPlease inquire about the cancellation reason by contacting our <a href=\"https://bitbanker.org/ru\">support service</a>. \n</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 88,
          "lang": "en"
        },
        {
          "id": 134,
          "subject": "Вывод на карту VISA отменен",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nЗаявка на вывод {amount} {currency_symbol} на карту VISA отменена. Причину отмены можно узнать в <a href=\"https://bitbanker.org/ru\">службе поддержки</a>. \n</mj-text>\n<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 88,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 5,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 89,
      "type": "visa_withdrawal_completed",
      "description": "Перевод VISA выполнен",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 141,
          "subject": "Перевод на карту VISA выполнен",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n{amount} {currency_symbol} выведены на карту VISA.\n</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Зарабатывайте в Bitbanker!\n      <br><br>\n      Приглашайте друзей выводить USD на карту VISA в Bitbanker. Заплатим \n      за каждого, кто зарегистрируется по вашей ссылке, и подарим бонусы!\n      <br><br>\n      Ваш персональный промокод: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Подробнее</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 89,
          "lang": "ru"
        },
        {
          "id": 175,
          "subject": "Funds Successfully Transferred to VISA Card",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n{amount} {currency_symbol} has been successfully transferred to the VISA card.\n</mj-text> \n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Earn Rewards with Bitbanker!\n      <br><br>\n      Invite your friends to withdraw to VISA card in Bitbanker and get \n      paid. Earn 30 USDT for every friend who signs up through your \n      referral link, plus some bonuses!\n      <br><br>\n      Your personal promo code: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Learn More</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 89,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 5,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 90,
      "type": "swift_canceled",
      "description": "Свифт отменен",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 176,
          "subject": "SWIFT Transfer Cancelled",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYour SWIFT transfer in the amount of {amount} {currency_symbol} has been cancelled.\n<br><br>\nTo inquire about the reasons for the cancellation, please contact our <a href=\"https://app.bitbanker.org/ru/\">support service</a>.\n</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 90,
          "lang": "en"
        },
        {
          "id": 142,
          "subject": "SWIFT-перевод отменен",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВаш SWIFT-перевод на сумму {amount} {currency_symbol} отменен.\n<br><br>\nЧтобы узнать причину отмены, обратитесь в <a href=\"https://app.bitbanker.org/ru/\">службу поддержки</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 90,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 4,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 95,
      "type": "p2p_taker_buy",
      "description": "Уведомление тейкера об участии в сделке на пополнение",
      "vars": {
        "sum": "Сумма перевода на карту",
        "total": "Сумма сделки",
        "symbol": "символ суммы",
        "deal_id": "Номер сделки",
        "commission": "Комиссия сделки"
      },
      "is_active": true,
      "contents": [
        {
          "id": 150,
          "subject": "The creator of offer № {deal_id} has confirmed participation in the transaction",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n<br>\n      The user confirmed participation in the deposit transaction using the {bank} card.\n<br><br>\nTransaction amount: {sum} {symbol}\n<br>\nYou will send, including the commission: {total} {symbol}\n<br><br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/p2p/deals/{deal_id}\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Proceed to the deal</a>\n        </p>\n</mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n     This is an automated message. Please do not reply to this email. For assistance, please <a href=\"https://bitbanker.org/ru\">contact </a>support.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 95,
          "lang": "en"
        },
        {
          "id": 149,
          "subject": "Статус P2P-сделки № {deal_id} обновился",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь подтвердил участие в сделке на пополнение средств с карты {bank}.\n<br><br>\nСумма сделки: {sum} {symbol}\n<br>\nВы отправите на карту с учетом комиссии {total} {symbol}\n<br><br><br><br>\n<p style=\"text-align: center\">\n<a href=\"https://app.bitbanker.org/p2p/deals/{deal_id}\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Открыть сделку</a>\n</mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\">на сайте</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 95,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 3,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 97,
      "type": "p2p_transaction_confirmed",
      "description": "Оповещение о том, что вторая сторона выполнила перевод",
      "vars": {
        "sum": "Сумма перевода",
        "symbol": "Символ суммы",
        "deal_id": "Номер сделки",
        "nickname": "Ник второго участника сделки "
      },
      "is_active": true,
      "contents": [
        {
          "id": 154,
          "subject": "You have been sent a transfer for P2P transaction {deal_id}",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nUser {nickname} has confirmed the transfer of {sum} {symbol} to your {bank} card.\n<br><br>\nPlease check the receipt of funds.\n<br><br>\nBe cautious: confirm the receipt of funds in the transaction chat only after they have been credited to your bank account.\n<br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/p2p/deals/{deal_id}\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Continue to the chat</a>\n        </p>\n</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 97,
          "lang": "en"
        },
        {
          "id": 151,
          "subject": "Вам отправлен перевод по P2P-сделке {deal_id}",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n    \nПользователь {nickname} подтвердил перевод {sum} {symbol} на вашу карту {bank}. \n <br><br>\n Пожалуйста, проверьте поступление средств.\n <br><br> \n Будьте внимательны: не подтверждайте получение средств, пока не убедитесь, что вся сумма поступила на ваш счет.\n<br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/p2p/deals/{deal_id}\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Перейти к сделке</a>\n        </p>\n\t</mj-text>\n    <mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 97,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 3,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 98,
      "type": "p2p_new_message",
      "description": "Новое сообщение в чате сделки",
      "vars": {
        "deal_id": "Номер сделки ",
        "nickname": " Ник второго участника сделки",
        "message_text": "Текст сообщения в чате сделки"
      },
      "is_active": true,
      "contents": [
        {
          "id": 152,
          "subject": "Новое сообщение по P2P-сделке {deal_id}",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь {nickname} прислал вам сообщение в чат сделки.\n<br><br>\nТекст сообщения: {message_text}\n<br><br>\nПерейдите в чат, чтобы ответить.\n<br><br>\n<br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/p2p/deals/{deal_id}\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Перейти к сделке</a>\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 98,
          "lang": "ru"
        },
        {
          "id": 155,
          "subject": "New message in the P2P transaction {deal_id} chat",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nUser {nickname} has sent you a message in the transaction chat.\n<br><br>\nMessage text: {message_text}\n<br><br>\nGo to the transaction chat to reply.\n<br><br>\n<br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/p2p/deals/{deal_id}\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Continue to the chat</a>\n</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\">contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 98,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 3,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 99,
      "type": "p2p_operator_requested",
      "description": "Оповещение о том, что второй участник вызвал оператора",
      "vars": {
        "deal_id": "Номер сделки",
        "nickname": "Ник второго участника сделки"
      },
      "is_active": true,
      "contents": [
        {
          "id": 156,
          "subject": "User {nickname} called the operator in the transaction {deal_id} chat",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nUser {nickname} has requested assistance from an operator in the transaction {deal_id} chat.\n<br><br>\nPlease remain in the chat and wait for an operator.\n<br><br>\n<br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/p2p/deals/{deal_id}\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Continue to the chat</a>\n        </p>\n</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 99,
          "lang": "en"
        },
        {
          "id": 153,
          "subject": "Пользователь {nickname} вызвал оператора в P2P-сделке {deal_id}",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь {nickname} вызвал оператора в чате сделки {deal_id}.\n<br><br>\nПожалуйста, оставайтесь в чате и дождитесь оператора.\n<br><br>\n<br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/p2p/deals/{deal_id}\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Перейти к сделке</a>\n        </p>\n\t</mj-text>\n    <mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 99,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 3,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 100,
      "type": "p2p_taker_sell",
      "description": "Уведомление тейкера об участии в сделке на вывод (для тейкера)",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 157,
          "subject": "Статус P2P-сделки № {deal_id} обновился",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь подтвердил участие в сделке на вывод средств с баланса Bitbanker на карту {bank}.\n<br><br>\nСумма сделки: {sum} {symbol}\n<br>\nВы получите на карту с учетом комиссии {total} {symbol}\n<br><br>\nЧтобы завершить сделку, перейдите <a href=\"https://app.bitbanker.org/p2p/deals\">на сайт Bitbanker</a>.\n</mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\">на сайте</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 100,
          "lang": "ru"
        },
        {
          "id": 160,
          "subject": "The creator of Offer № {deal_id} has confirmed participation in the transaction",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n    The user confirmed participation in the withdrawal transaction from the \n      Bitbanker balance to the {bank} card.\n    <br><br>\n    Deal amount: {sum} {symbol}.\n    <br>\n    You will send to the card after deduction of commission: {total} {symbol}.\n    <br><br><br><br>\n    <p style=\"text-align: center\">\n      <a href=\"https://app.bitbanker.org/p2p/deals/{deal_id}\" target=\"_blank\" \n        style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; \n        text-decoration: none; border-radius: 10px; font-weight: 700;\">Proceed\n        to the deal</a>\n      </p>\n</mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n     This is an automated message. Please do not reply to this email. For \n      assistance, please <a href=\"https://bitbanker.org/ru\">contact </a>\n      support.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 100,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 3,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 101,
      "type": "revenue_order",
      "description": "Описание дохода на лимитный ордер ",
      "vars": {
        "amount": "сумма ордера",
        "symbol": "валюта ордера",
        "revenue_per_order": "проценты на лимитный ордер"
      },
      "is_active": true,
      "contents": [
        {
          "id": 158,
          "subject": "Лимитный ордер выставлен",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВы выставили ордер на продажу {amount} {symbol}. \n<br><br>\nПока ваши средства заблокированы в ордере, на них начисляется доход {revenue_per_order}% годовых. \n<br><br>\nПроценты будут поступать на счет ежедневно за прошедший полный день, пока по ордеру не будет совершена первая сделка. За день, когда ордер выкупят полностью или частично, проценты не начисляются.\n</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 101,
          "lang": "ru"
        },
        {
          "id": 159,
          "subject": "You have placed a limit order",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYou have placed a sell order for {amount} {symbol}.\n<br><br>\nWhile your funds are locked in the order, they earn a revenue of {revenue_per_order}% per annum.\n<br><br>\nInterest is credited to your account daily for each full day that has passed until the first transaction is completed on the order. \n<br><br>No interest is accrued on the day when the order is fully or partially executed.\n</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>For assistance, please <a href=\"https://bitbanker.org\">contact</a> support.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 101,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 6,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 102,
      "type": "revenue_order_bot",
      "description": "Доходный лимитный ордер+упоминание тг-бота",
      "vars": {
        "amount": "сумма ордера",
        "symbol": "валюта ордера",
        "revenue_per_order": "процент на доходный ордер"
      },
      "is_active": true,
      "contents": [
        {
          "id": 164,
          "subject": "You have placed a limit order",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYou have placed an order to sell {amount} {symbol}. \n<br><br>\nWhile your funds are locked in the order, they earn {revenue_per_order}% interest per annum. \n<br><br>\nThe interest accrues to your account daily for the previous day until the first trade is made on the order. No interest is accrued for the day on which the order is executed in full or in part.\n<br><br>\nTo follow the trade execution, connect the <a href=\"https://t.me/bitbanker_official_bot\">Bitbanker Telegram bot</a>. Please refer to the <a href=\"https://bitbanker.org/ru/faq#Notifications.notifyTelegram\">FAQ</a> for more information. \n</mj-text> \n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br> For assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 102,
          "lang": "en"
        },
        {
          "id": 162,
          "subject": "Лимитный ордер выставлен",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВы выставили ордер на продажу {amount} {symbol}. \n<br><br>\nПока ваши средства заблокированы в ордере, на них начисляется доход {revenue_per_order}% годовых. \n<br><br>\nПроценты будут поступать на счет ежедневно за прошедший полный день, пока по ордеру не будет совершена первая сделка. За день, когда ордер выкупят полностью или частично, проценты не начисляются.\n<br><br>\nЧтобы следить за исполнением сделки, подключите <a href=\"https://t.me/bitbanker_official_bot\">Телеграм-бот Bitbanker</a>. Инструкцию, как подключить бот, читайте <a href=\"https://bitbanker.org/ru/faq#Notifications.notifyTelegram\">в нашем FAQ</a>. \n</mj-text> \n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 102,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 6,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 103,
      "type": "limit_order_bot",
      "description": "Клиент выставил лимитный ордер, но у него не подключена телега",
      "vars": {
        "amount": "сумма ордера",
        "symbol": "валюта ордера"
      },
      "is_active": true,
      "contents": [
        {
          "id": 165,
          "subject": "You have placed a limit order",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYou have placed an order to exchange {amount} {symbol}. \n<br><br>\nTo follow the order execution, connect the <a href=\"https://t.me/bitbanker_official_bot\">Bitbanker Telegam bot</a>. \n<br><br>\nFor instructions, please refer to the  <a href=\"https://bitbanker.org/ru/faq#Notifications.notifyTelegram\">FAQ</a>. \n</mj-text> \n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 103,
          "lang": "en"
        },
        {
          "id": 163,
          "subject": "Вы выставили лимитный ордер",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВы выставили ордер на обмен {amount} {symbol}. \n<br><br>\nЧтобы следить за исполнением сделки, подключите <a href=\"https://t.me/bitbanker_official_bot\">Телеграм-бот Bitbanker</a>. Инструкцию, как подключить бот, читайте <a href=\"https://bitbanker.org/ru/faq#Notifications.notifyTelegram\">в нашем FAQ</a>.\n</mj-text> \n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 103,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 6,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 104,
      "type": "withdrawal_fiat",
      "description": "Клиент создал заявку на вывод фиата",
      "vars": {
        "amount": "сумма операции",
        "currency_name": "валюта операции",
        "confirmation_code": "код операции"
      },
      "is_active": true,
      "contents": [
        {
          "id": 166,
          "subject": "Заявка на вывод средств создана",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            Вы создали операцию на вывод {amount} {currency_name}.\n            <br><br>\n            Код операции: {confirmation_code} \n  <br><br>\n            Отправьте код оператору <a href=\"https://app.bitbanker.org/\">в чат на сайте</a> или <a href=\"https://t.me/bitbanker_help_bot\">в Телеграме</a>, чтобы согласовать время встречи.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n            Если вы не запрашивали код, срочно обратитесь <a href=\"https://app.bitbanker.org/\">в службу поддержки</a>. \nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 104,
          "lang": "ru"
        },
        {
          "id": 177,
          "subject": "New Funds Withdrawal Transaction",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            You have initiated a funds withdrawal transaction of {amount} {currency_name}.\n            <br><br>\n            Transaction code: {confirmation_code} \n  <br><br>\n            Please send this code to our operator via the <a href=\"https://app.bitbanker.org/\">website chat</a> or <a href=\"https://t.me/bitbanker_help_bot\">Telegram</a> to coordinate a meeting time.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n            If you did not request this code, please contact our <a href=\"https://app.bitbanker.org/\">support service</a> immediately.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 104,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 1,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 105,
      "type": "p2p_maker_cancelled_sell",
      "description": "Мейкер отменил предложение тейкера",
      "vars": {
        "bank": "с картой какого банка проходит сделка",
        "amount": "сумма сделки",
        "currency_symbol": "валюту сделки "
      },
      "is_active": true,
      "contents": [
        {
          "id": 167,
          "subject": "Пользователь отменил сделку {deal_id}",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь отклонил ваше предложение на вывод {sum} {symbol} на карту {bank}.\n<br><br>\nВы можете выбрать другое объявление или изменить предложение. \n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 105,
          "lang": "ru"
        },
        {
          "id": 178,
          "subject": "Offer Creator Cancelled Deal {deal_id}",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nThe offer creator has rejected your proposal to withdraw {sum} {symbol} to the {bank} bank card.\n<br><br>\nPlease choose another offer or modify your proposal.\n</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 105,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 3,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 106,
      "type": "p2p_maker_cancelled_buy",
      "description": "Мейкер отменил предложение тейкера",
      "vars": {
        "bank": "Банк, с карты которого будут переводить средства",
        "amount": "Сумма сделки",
        "currency_symbol": "валюта сделки"
      },
      "is_active": true,
      "contents": [
        {
          "id": 169,
          "subject": "Пользователь отменил сделку {deal_id}",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь отклонил ваше предложение на перевод {sum} {symbol} с карты {bank}.\n<br><br>\nВы можете выбрать другое объявление или изменить предложение. \n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 106,
          "lang": "ru"
        },
        {
          "id": 179,
          "subject": "Offer Creator Cancelled Deal {deal_id}",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nThe offer creator has rejected your proposal to transfer {sum} {symbol} from {bank} bank card.\n<br><br>\nPlease choose another listing or modify your proposal.\n\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 106,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 3,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 107,
      "type": "p2p_doubting",
      "description": "Письмо для сомневающегося трейдера",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 183,
          "subject": "Как провести P2P-сделку",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n     Если вам нужна помощь в P2P-сделках, посмотрите видео-инструкцию.\n        <br><br>\nИз видео вы узнаете:\n      <br>\n<br> - как проходят P2P-сделки\n<br> - как принять предложение другого пользователя\n<br> - как создать свое объявление\n<br> - как разобраться в процентах комиссии\n<br><br>\n      <a href=\"https://youtu.be/G49zRzN20XE?si=OOG-1ReBXY-kTV_E\">Смотреть инструкцию   на YouTube </a> \n      <br><br>\n      Если у вас остались вопросы, свяжитесь со <a href=\"https://t.me/bitbanker_help_bot\"> службой поддержки</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 107,
          "lang": "ru"
        },
        {
          "id": 184,
          "subject": "Как использовать P2P",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n     If you need help with P2P transactions, check out the video tutorial.\n        <br><br>\nWhat you'll learn from the video:\n      <br>\n<br> - How P2P transactions work\n<br> - How to respond to another user's offer\n<br> - How to create your own listing\n<br> - How to understand percentages\n<br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://www.youtube.com/watch?v=QPT8sBprHao\" target=\"_blank\" \n              style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; \n              text-decoration: none; border-radius: 10px; font-weight: 700;\">Watch the\n              tutorial</a>\n        </p>\n      <br><br>\n      If you still have questions, don't hesitate to ask  <a href=\"https://bitbanker.org\"> our support team</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 107,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 3,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 122,
      "type": "widget_invoice_payed_for_receiver",
      "description": "Получает мерчант, когда клиент оплатил покупку",
      "vars": {
        "username": "Почта плательщика",
        "invoice_id": "id (номер) счета",
        "description": "Название товара/услуги",
        "currency_symbol": "Валюта счета",
        "received_amount": "Сумма счета"
      },
      "is_active": true,
      "contents": [
        {
          "id": 188,
          "subject": "Поступила оплата по счету",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь {username} оплатил счет <a href=\"{invoice_link}\" target=\"_blank\">{invoice_id}</a> на сумму {received_amount} {currency_symbol} за {description}. \n</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Зарабатывайте в Bitbanker!\n      <br><br>\n      Приглашайте друзей пользоваться криптоэквайрингом в Bitbanker. \n      Заплатим за каждого, кто зарегистрируется по вашей ссылке, и \n      подарим бонусы!\n       <br><br>\n      Ваш персональный промокод: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Подробнее</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> на сайте</a>.\n</mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 122,
          "lang": "ru"
        },
        {
          "id": 191,
          "subject": "Payment received for the invoice",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\nUser {username} paid <a href=\"{invoice_link}\" target=\"_blank\"> the invoice {invoice_id}</a> in the amount of {received_amount} {currency_symbol} for {description}.\n    </mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Earn Rewards with Bitbanker!\n      <br><br>\n      Invite your friends to use crypto-processing in Bitbanker and get \n      paid. Earn 30 USDT for every friend who signs up through your \n      referral link, plus some bonuses! \n      <br><br>\n      Your personal promo code: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Learn More</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\">contact support</a>.\n</mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 122,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 7,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 123,
      "type": "widget_invoice_created",
      "description": "Получает мерчант, когда клиент создал счет на оплату",
      "vars": {
        "username": "Почта плательщика",
        "invoice_id": "id (номер) счета",
        "description": "Название товара/услуги",
        "currency_symbol": "валюта счета",
        "received_amount": "сумма счета"
      },
      "is_active": true,
      "contents": [
        {
          "id": 192,
          "subject": "The customer has created an invoice for payment",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nUser {username} created an <a href=\"{invoice_link}\" target=\"_blank\">invoice {invoice_id}</a> for {received_amount} {currency_symbol} for {description}.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 123,
          "lang": "en"
        },
        {
          "id": 189,
          "subject": "Клиент создал счет на оплату",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Пользователь {username} создал <a href=\"{invoice_link}\" target=\"_blank\">счет</a> <a href=\"{invoice_link}\" target=\"_blank\">{invoice_id}</a> на сумму {received_amount} {currency_symbol} за {description}.\n\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> на сайте</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 123,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 7,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 124,
      "type": "widget_invoice_payed",
      "description": "Получает клиент, когда оплатит покупку у мерчанта",
      "vars": {
        "header": "название магазина мерчанта ",
        "invoice_id": "id (номер) счета ",
        "description": "Название товара/услуги",
        "currency_symbol": "валюта счета",
        "received_amount": "сумма счета"
      },
      "is_active": true,
      "contents": [
        {
          "id": 193,
          "subject": "You have paid the invoice",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t You have paid the invoice {invoice_id} in the amount of {received_amount} {currency_symbol} for {description}.\n<br><br>\n      {header} thanks you for your purchase!\n</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Earn Rewards with Bitbanker!\n      <br><br>\n     Invite your friends to use Bitbanker and get paid. Earn 30 USDT for \n      every friend who signs up through your referral link, plus some \n      bonuses!\n      <br><br>\n      Your personal promo code: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Learn More</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 124,
          "lang": "en"
        },
        {
          "id": 190,
          "subject": "Вы оплатили счет",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t Вы оплатили счет {invoice_id} на сумму {received_amount} {currency_symbol} за {description}.\n<br><br>\n{header} благодарит вас за покупку!\n</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n     Зарабатывайте в Bitbanker!\n      <br><br>\n      Приглашайте друзей в Bitbanker: заплатим за каждого, кто \n      зарегистрируется по вашей ссылке, и подарим бонусы!<br><br>\n      Ваш персональный промокод: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Подробнее</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 124,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 7,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 130,
      "type": "transfer_to_unregistered_user_email",
      "description": "Отправили деньги незарегистрированному пользователю по email",
      "vars": {
        "amount": "сумма перевода",
        "user_from": "Кто отправил перевод",
        "currency_symbol": "валюта перевода"
      },
      "is_active": true,
      "contents": [
        {
          "id": 204,
          "subject": "Вам поступили средства от пользователя Bitbanker",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  {user_from} перевел вам {amount} {currency}. \n<br> <br>\nСредства поступят на ваш счет после регистрации в \n      <a href=\"https://app.bitbanker.org/auth/register\">Bitbanker</a>.\n<br><br>Чтобы вывести средства, необходимо пройти <a href=\"https://bitbanker.org/faq#verification-kyc.how-can-pass-kyc-verification\">верификацию KYC</a>.\n<br> <br>\nМы подготовили \n      <a href=\"https://bitbanker.org/faq#registering-and-setting.signing-on-exchange\">обучающую статью</a>, как зарегистрироваться в Bitbanker.\n\t</mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\">на сайте</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 130,
          "lang": "ru"
        },
        {
          "id": 226,
          "subject": "Funds Received from a Bitbanker User",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n{user_from} has sent you {amount} {currency}.\n<br><br>\nThe funds will be credited to your account after you register with Bitbanker.\n<br><br>\nYou will also need to complete the verification (KYC) process to withdraw the funds. \n<br><br>\nHere's a handy guide to walk you through the registration process!     \n\t\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 130,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 1,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 131,
      "type": "registration_reminder_unregistered_user",
      "description": "Письмо-напоминалка для человека, что ему перевели деньги через Битбанкер и надо зарегистрироваться",
      "vars": {
        "amount": "сумма перевода",
        "user_from": "Кто отправил перевод",
        "currency_symbol": "валюта перевода"
      },
      "is_active": true,
      "contents": [
        {
          "id": 227,
          "subject": "Sign Up to Access Your Transfer",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n{user_from} has sent you {amount} {currency}.\n<br><br>\nThe funds will be credited to your account after you register with Bitbanker.\n<br><br>\nYou will also need to complete the verification (KYC) process to withdraw the funds. \n<br><br>\nHere's a handy guide to walk you through the registration process!     \n\t\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 131,
          "lang": "en"
        },
        {
          "id": 205,
          "subject": "Зарегистрируйтесь, чтобы получить перевод",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  {user_from} перевел вам {amount} {currency}. \n<br> <br>\n\nСредства будут доступны после регистрации в <a href=\"https://app.bitbanker.org/auth/register\">Bitbanker</a>.\n<br><br>Чтобы вывести средства, необходимо пройти <a href=\"https://bitbanker.org/faq#verification-kyc.how-can-pass-kyc-verification\">верификацию KYC</a>.\n<br> <br>\nМы подготовили <a href=\"https://bitbanker.org/faq#registering-and-setting.signing-on-exchange\">обучающую статью</a>, как зарегистрироваться.\n\t</mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\">на сайте</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 131,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 1,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 444,
      "type": "sbp_payed",
      "description": "покупка крипты по СБП",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 217,
          "subject": "Успешная покупка криптовалюты",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВы купили {amount} {currency_symbol} за {cost} {quote_currency} \n      через СБП. \n<br><br>\nСредний курс покупки: {order_price} {quote_currency}.\n\t</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Зарабатывайте в Bitbanker!\n      <br><br>\n     Приглашайте друзей покупать криптовалюту по СБП в Bitbanker. Заплатим \n      за каждого, кто зарегистрируется по вашей ссылке, и подарим бонусы!\n      <br><br>\n      Ваш персональный промокод: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Подробнее</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\">на сайте</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 444,
          "lang": "ru"
        },
        {
          "id": 223,
          "subject": "Your Cryptocurrency Purchase Was Successful",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYou have purchased {amount} {currency_symbol} for {cost} \n      {quote_currency} via SBP (Faster Payment System)\n        \n<br><br>\nThe average purchase rate was: {order_price} {quote_currency}.\n</mj-text> \n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Earn Rewards with Bitbanker!\n      <br><br>\n     Invite your friends to buy crypto via SBP in Bitbanker and get paid. \n      Earn 30 USDT for every friend who signs up through your referral \n      link, plus some bonuses! \n      <br><br>\n      Your personal promo code: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Learn More</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 444,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 1,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 445,
      "type": "revenue_order_not_enough_money",
      "description": "на акке админа ВЛ недостаточно денег для начисления по лимитным ордерам",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 220,
          "subject": "На счете недостаточно средств",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nНа вашем счете {currency_symbol} недостаточно средств для начисления дохода по доходным ордерам.\n<br><br>\nПожалуйста, пополните счет в ближайшее время и выплатите {amount} {currency_symbol} по ордеру №{order_id}.\n</mj-text>\n\n  </mj-column>\n</mj-section>",
          "email_template_id": 445,
          "lang": "ru"
        },
        {
          "id": 224,
          "subject": "Insufficient Funds on Account",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYour account does not have enough {currency_symbol} to credit revenue orders.\n<br><br>\nPlease top up your account as soon as possible and pay {amount} {currency_symbol} for order №{order_id}.\n\t\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 445,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 6,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 447,
      "type": "income_has_not_been_accrued",
      "description": "отправляется юзеру, которому не начислился доход по лимитным ордерам",
      "vars": {
        "order_id": "order id"
      },
      "is_active": true,
      "contents": [
        {
          "id": 222,
          "subject": "Доход по лимитному ордеру не начислен",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nК сожалению, доход по ордеру №{order_id} не начислен из-за внутренней ошибки. \n      <br><br>\nСредства поступят в ближайшее время.\n      \n      Приносим извинения за доставленные неудобства. \n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. \n Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\">на сайте</a>.\n    </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 447,
          "lang": "ru"
        },
        {
          "id": 225,
          "subject": "Revenue Not Credited for Order",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nUnfortunately, revenue for order №{order_id} was not credited due \n      to an internal error.\n\t\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 447,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 6,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 613,
      "type": "deposit_fiat",
      "description": "Депозит фиата",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 237,
          "subject": "Заявка на пополнение наличными создана",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            Вы создали операцию на пополнение {amount} {currency_name}.\n            <br><br>\n            Код операции: {confirmation_code} \n  <br><br>\n            Отправьте код оператору <a href=\"https://app.bitbanker.org/\">в чат на сайте</a> или в <a href=\"https://t.me/bitbanker_help_bot\">Телеграме</a>, чтобы согласовать время встречи.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n            Если код запрашивали не вы, срочно обратитесь <a href=\"https://app.bitbanker.org/\">в службу поддержки</a>. \nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 613,
          "lang": "ru"
        },
        {
          "id": 239,
          "subject": "New fiat deposit operation",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            You have initiated a deposit of {amount} {currency_name}.\n            <br><br>\n            Transaction code: {confirmation_code} \n  <br><br>\n            Please send this code to our operator via the <a href=\"https://app.bitbanker.org/\">website chat</a> or <a href=\"https://t.me/bitbanker_help_bot\">Telegram</a> to coordinate a meeting time.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n            If you did not request this code, please contact our <a href=\"https://app.bitbanker.org/\">support service</a> immediately.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 613,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 1,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 630,
      "type": "sbp_warning",
      "description": "Не оплачен qr-код сбп",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 233,
          "subject": "Вы не оплатили покупку по СБП",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВы не оплатили покупку по СБП. \n<br><br>\nПожалуйста, завершите операцию, чтобы избежать блокировки сервиса СБП.\n    </mj-text>\n\t\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, \n      не отвечайте на него. \n      Связаться с поддержкой можно \n      <a href=\"https://bitbanker.org/ru\"> \n        на сайте</a>.\n     </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 630,
          "lang": "ru"
        },
        {
          "id": 235,
          "subject": "You haven't completed your SBP purchase",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYou haven't completed your SBP purchase. \n<br><br>\nPlease finalize the transaction to avoid being blocked from using the SBP service.\n    </mj-text>\n\t\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not \n      reply to this email. \n<br><br>\nFor assistance, please \n      <a href=\"https://bitbanker.org/ru\">contact \n        support</a>.\n     </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 630,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 21,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 631,
      "type": "sbp_ban",
      "description": "Пользователю заблокировали СБП",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 236,
          "subject": "SBP Purchase Blocked",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYou generated multiple QR codes for SBP purchases but didn’t complete the payments. As a result, your access to the SBP service has been blocked.\n      <br><br>\nTo remove the block, please contact <a href=\"https://bitbanker.org/ru\">customer support.\n    </a>\n    </mj-text>\n\t\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not \n      reply to this email. \n\n     </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 631,
          "lang": "en"
        },
        {
          "id": 234,
          "subject": "Покупка по СБП заблокирована",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВы создали несколько QR-кодов для покупки по СБП и не \n      оплатили их. Мы вынуждены заблокировать для вас сервис СБП.\n      <br><br>\nЧтобы снять блокировку, обратитесь <a href=\"https://bitbanker.org/ru\"> \n        в службу поддержки</a>.\n</mj-text>\n\t\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. \n    \n     </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 631,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 21,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 718,
      "type": "telegram_bot_reconnect_needed",
      "description": "у юзера отвязали телеграм, предлагаем привязать заново",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 242,
          "subject": "Подключите Телеграм-бот Bitbanker",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Телеграм-бот отключен от вашего аккаунта Bitbanker. <br> <br>Подключите Телеграм-бот, чтобы:\n     <br><br> • использовать P2P для вывода и пополнения баланса;\n      <br>• пополнять и проверять баланс Bitbanker;\n     <br>• отправлять переводы по имени пользователя в Телеграме.\n     <br><br>  Узнайте, как подключить Телеграм-бот, из <a href=\"https://bitbanker.org/ru/faq#registration-and-receipt-of-telegram.connect-telegram-bot\">нашего руководства</a>.\n<br><br><br>\n   <p style=\"text-align: center\">\n      <a href=\"https://app.bitbanker.org/profile/notifications\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Подключить</a>\n   </p>\n </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 718,
          "lang": "ru"
        },
        {
          "id": 243,
          "subject": "Connect the Bitbanker Telegram Bot",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  The Bitbanker Telegram bot was disconnected from your account.<br> <br>\nConnect the Telegram bot to:\n   <br><br>• use P2P for balance deposits and withdrawals;\n<br>• top up and check your Bitbanker balance;\n<br>• send transfers by Telegram username.\n<br><br>Learn how to connect the Telegram bot in <a href=\"https://bitbanker.org/faq#registration-and-receipt-of-telegram.connect-telegram-bot\">our guide</a>.<br> <br>\n <br>  <p style=\"text-align: center\">\n      <a href=\"https://app.bitbanker.org/profile/notifications\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Connect</a>\n   </p>\n </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 718,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 8,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 806,
      "type": "provider_invitation",
      "description": "Отправляем всем ИП инфу о новом свифте",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 256,
          "subject": "SWIFT Transfer Operation Created",
          "content": "",
          "email_template_id": 806,
          "lang": "en"
        },
        {
          "id": 247,
          "subject": "Создана операция на SWIFT-перевод",
          "content": "",
          "email_template_id": 806,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 4,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 807,
      "type": "OTC_invite",
      "description": "Пользователю пришло приглашение в ОТС-сделку",
      "vars": {
        "user": "Пользователь, которому предлагают ОТС-сделку",
        "base_currensy_symbol": "Валюта, которую создатель сделки хочет продать ",
        "quote_currency_symbol": "Валюта, которую создатель сделки хочет купить"
      },
      "is_active": true,
      "contents": [
        {
          "id": 257,
          "subject": "New OTC Trade Proposal Received",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nUser {user} has proposed an OTC trade to exchange {base_currensy_symbol} for {quote_currency_symbol}.\n<br><br>\n      Log in to your personal account to see the offer details.\n      <br><br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/otc/deals\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">View Trade</a>\n        </p>\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not \n      reply to this email. \n<br><br>\nFor assistance, please \n      <a href=\"https://bitbanker.org\">contact \n        support</a>.\n     </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 807,
          "lang": "en"
        },
        {
          "id": 248,
          "subject": "Предложение ОТС-сделки",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь {user} предлагает вам OTC-сделку по обмену {base_currensy_symbol} на \n      {quote_currency_symbol}.\n<br><br>\n      Перейдите в личный кабинет, чтобы узнать детали предложения.\n<br><br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/otc/deals\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Открыть сделку</a>\n        </p>\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 807,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 22,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 808,
      "type": "OTC_cancelled",
      "description": "Создатель предложения отменил сделку",
      "vars": {
        "user": "Пользователь, которому предложили сделку",
        "base_currensy_symbol": "Валюта, которую создатель хочет продать в сделке",
        "quote_currency_symbol": "Валюта, которую создатель сделки хочет купить"
      },
      "is_active": true,
      "contents": [
        {
          "id": 249,
          "subject": "ОТС-сделка отменена ",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь {user} отменил сделку по обмену {base_currensy_symbol} на \n      {quote_currency_symbol}.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 808,
          "lang": "ru"
        },
        {
          "id": 258,
          "subject": "OTC Trade Canceled",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n{user} has canceled the OTC trade to exchange {base_currensy_symbol} for {quote_currency_symbol}.\n\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not \n      reply to this email. \n<br><br>\nFor assistance, please \n      <a href=\"https://bitbanker.org\">contact \n        support</a>.\n     </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 808,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 22,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 809,
      "type": "OTC_accept",
      "description": "Юзер принял ОТС-сделку",
      "vars": {
        "user": "Пользователь, которому предложили сделку",
        "base_currensy_symbol": "Валюта, которую создатель сделки хочет продать ",
        "quote_currency_symbol": "Валюта, которую создатель сделки хочет купить"
      },
      "is_active": true,
      "contents": [
        {
          "id": 250,
          "subject": "ОТС-сделка проведена",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь {user} принял OTC-сделку по обмену \n      {base_currensy_symbol} на {quote_currency_symbol}.\n<br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.dev.bitbanker.org/otc/deals\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Открыть личный кабинет</a>\n        </p>\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 809,
          "lang": "ru"
        },
        {
          "id": 259,
          "subject": "OTC Trade Completed",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nUser {user} has accepted the OTC trade to exchange {base_currensy_symbol} for {quote_currency_symbol}.\n<br><br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/otc/deals\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Open App</a>\n        </p>\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not \n      reply to this email. \n<br><br>\nFor assistance, please \n      <a href=\"https://bitbanker.org\">contact \n        support</a>.\n     </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 809,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 22,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 811,
      "type": "OTC_reject",
      "description": "Юзер отказался от ОТС-сделки",
      "vars": {
        "user": "создатель ОТС-сделки",
        "base_currensy_symbol": "Валюта, которую создатель хочет продать в сделке",
        "quote_currency_symbol": "Валюта, которую создатель хочет купить в сделке"
      },
      "is_active": true,
      "contents": [
        {
          "id": 260,
          "subject": "OTC Trade Declined",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nUser {user} has declined the OTC trade to exchange {base_currensy_symbol} for {quote_currency_symbol}.\n<br><br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/otc/deals\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Open App</a>\n        </p>\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not \n      reply to this email. \n<br><br>\nFor assistance, please \n      <a href=\"https://bitbanker.org\">contact \n        support</a>.\n     </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 811,
          "lang": "en"
        },
        {
          "id": 251,
          "subject": "Отказ от ОТС-сделки",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь {user} отклонил OTC-сделку по обмену {base_currensy_symbol} на {quote_currency_symbol}.\n<br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.dev.bitbanker.org/otc/deals\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Личный кабинет</a>\n        </p>\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 811,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 22,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 812,
      "type": "transfer_success_comment",
      "description": "Поступление средств пользователю от другого клиента BB с комментарием",
      "vars": {
        "balance": "сумма на балансе пользователя в валюте перевода",
        "comment": "комментарий пользователя",
        "datetime": "Время поступления средств на акк",
        "from_user_email": "от кого пришел перевод",
        "transfered_amount": "сумма перевода",
        "transfered_currency_symbol": "валюта перевода"
      },
      "is_active": true,
      "contents": [
        {
          "id": 252,
          "subject": "Вам поступил перевод",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь {from_user_email} перевел вам {transfered_amount} \n      {transfered_currency_symbol}. \n      Средства поступили на ваш счет {datetime}.\n<br><br> \n Комментарий к переводу: {comment}     \n  <br><br>\nБаланс вашего счета {balance} {transfered_currency_symbol}.\n  </mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Зарабатывайте в Bitbanker!\n      <br><br>\n     Приглашайте друзей пользоваться переводами между пользователями \n      Bitbanker. Заплатим за каждого, кто зарегистрируется по вашей ссылке, \n      и подарим бонусы!\n      <br><br>\n      Ваш персональный промокод: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Подробнее</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n    <mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\">на сайте</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 812,
          "lang": "ru"
        },
        {
          "id": 253,
          "subject": "Incoming transfer received",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n      User {from_user_email} has transferred {transfered_amount} {transfered_currency_symbol} to your account.\n     <br><br>\n Comment: {comment}\n      <br><br>\n    The funds were received on your account on {datetime}.\n    <br><br>\n    You now have a balance of {balance} {transfered_currency_symbol} available in your account.\n\t</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Earn Rewards with Bitbanker!\n      <br><br>\n      Invite your friends to use transfers via email in Bitbanker and get \n      paid. Earn 30 USDT for every friend who signs up through your referral\n      link, plus some bonuses!\n      <br><br>\n      Your personal promo code: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Learn More</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n    <br><br>\n    For assistance, please <a href=\"https://bitbanker.org/ru\">contact </a>support.\n\t</mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 812,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 2,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 903,
      "type": "sbp_invoice_ban",
      "description": "Создание новых операций по сбп заблокировано для клиента, отправляется не чаще раза в сутки ",
      "vars": {
        "time": "кол-во часов, за которое проверяется кол-во созданных операций сбп",
        "user": "email-адрес клиента"
      },
      "is_active": true,
      "contents": [
        {
          "id": 262,
          "subject": "Создание операций по СБП приостановлено",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nНа вашем аккаунте {user} достигнут лимит по количеству неоплаченных операций по СБП за последние {time} ч.\n<br><br>\nПополнение счетов по СБП временно отключено. Для снятия блокировки необходимо оплатить выставленные счета.\n<br><br>\nДля изменения общего лимита неоплаченных счетов, вы можете обратиться к администратору Bitbanker.\n</mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\">на сайте</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 903,
          "lang": "ru"
        },
        {
          "id": 267,
          "subject": "SBP Transactions Suspended",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYour account {user} has reached the limit for unpaid SBP invoices within the past {time} hours.\n<br><br>\nAccount top-ups via SBP are temporarily disabled. To lift the restriction, please pay the invoices you’ve already created.\n<br><br>\nIf you wish to adjust the overall limit for unpaid invoices, please contact Bitbanker administrator.\n</mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not reply to this email. For assistance, please <a href=\"https://bitbanker.org/\">contact </a>support.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 903,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": false,
      "group": 1,
      "subgroup_id": 21,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 905,
      "type": "sbp_invoice_critical_limit",
      "description": "Лимит для создания операций по сбп для Клиента почти исчерпан ",
      "vars": {
        "time": "кол-во часов, за которое проверяется кол-во созданных операций сбп",
        "user": "email-адрес клиента",
        "limit": "кол-во неоплаченных счетов, которое может быть создано Клиентом",
        "pct_limit": "на какой процент от лимита создано неоплаченных счетов "
      },
      "is_active": true,
      "contents": [
        {
          "id": 268,
          "subject": "SBP Transactions May Be Suspended Soon",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYour account {user} has reached {pct_limit}% of the unpaid SBP invoice limit within the past {time} hours.\n<br><br>\nOnce the number of unpaid invoices reaches {limit}, the ability to top up accounts via SBP will be temporarily disabled. To avoid this, please pay the invoices you’ve already created.\n<br><br>\nIf you wish to adjust the overall limit for unpaid invoices, please contact Bitbanker administrator.\n</mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n     This is an automated message. Please do not reply to this email. For assistance, please <a href=\"https://bitbanker.org/\">contact </a>support.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 905,
          "lang": "en"
        },
        {
          "id": 263,
          "subject": "Создание операций по СБП скоро будет приостановлен",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nНа вашем аккаунте {user} достигнуто {pct_limit}% лимита неоплаченных операций по СБП за последние {time} ч.\n<br><br>\nКогда количество неоплаченных счетов достигнет {limit}, возможность пополнять счета по СБП будет временно отключена. Чтобы избежать блокировку, необходимо оплатить выставленные счета.\n<br><br>\nДля изменения общего лимита неоплаченных счетов, вы можете обратиться к администратору Bitbanker.\n</mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\">на сайте</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 905,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": false,
      "group": 1,
      "subgroup_id": 21,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 906,
      "type": "provider_refusal",
      "description": "У ИП истекло время для подтверждения свифт-поручения ",
      "vars": {
        "withdrawal_id": "Номер свифт-поручения"
      },
      "is_active": true,
      "contents": [
        {
          "id": 264,
          "subject": "Время для подтверждения SWIFT поручения истекло",
          "content": "",
          "email_template_id": 906,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 4,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 907,
      "type": "swift_confirmation_of_receipt",
      "description": "Спрашиваем у юзера подтверждение получения свифта",
      "vars": {
        "bank": "банк-получатель свифта",
        "amount": "Сумма выплаты свифта",
        "currency_symbol": "валюта свифта"
      },
      "is_active": true,
      "contents": [
        {
          "id": 265,
          "subject": "Подтвердите получение SWIFT-платежа",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nМы отправили ваш перевод на сумму {amount} {currency_symbol} в банк {bank}. \n  <br><br>\nЕсли перевод уже дошел, пожалуйста, подтвердите его получение. \n  <br><br>  \n  Для подтверждения перевода, сначала войдите в личный кабинет Bitbanker, а затем \n      вернитесь к этому письму и нажмите на кнопку «Подтвердить». \n\t<br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.dev.bitbanker.org?confirm-swift={swift_id}\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Подтвердить</a>\n        </p>\n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org\">на сайте</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 907,
          "lang": "ru"
        },
        {
          "id": 266,
          "subject": "Confirm Receipt of Your SWIFT Payment",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYour transfer of {amount} {currency_symbol} has been sent to {bank}. \n  <br><br>\nIf you’ve received the transfer, please confirm by clicking the button below.\n  <br><br>\n    To confirm the transfer, first log in to your Bitbanker personal account, then return to this email and click the \"Confirm\" button.\n\t<br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.dev.bitbanker.org?confirm-swift={swift_id}\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Confirm Receipt</a>\n        </p>\n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n     This is an automated message. Please do not reply to this email. For assistance, please <a href=\"https://bitbanker.org\">contact </a>support.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 907,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 4,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 920,
      "type": "investment_user_allocation_in_process",
      "description": "Уведомление, если администратор инвестпродукта не нажал вывести в пул 4 дня(8 дней, 12 дней)",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 291,
          "subject": "Команда Bitbanker продолжает размещение средств",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n      Команда Bitbanker.org успешно продолжает размещение \n      ваших средств в инвестиционную стратегию. На текущий \n      момент размещено {pct}%.\n    <br><br>\n    После полного размещения ваших средств вы получите итоговое \n      уведомление. \n   <br><br>   \n    Если у вас возникли вопросы, пожалуйста, напишите нам на \n      invest@bitbanker.org, и мы с удовольствием вам ответим.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 920,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 17,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 2181,
      "type": "qr_deposit",
      "description": "Пополнение банковским переводом (по QR-коду)",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 298,
          "subject": "Пополнение банковским переводом (по QR-коду)",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВаш счет пополнен на сумму {amount} {currency_symbol}.\n<br><br>\nСкачать отчет об операции пополнения по QR-коду вы можете в приложении к письму, либо в личном кабинете <a href=\"https://app.bitbanker.org/operations\">в истории операций</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\">на сайте</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2181,
          "lang": "ru"
        },
        {
          "id": 300,
          "subject": "Top-up via bank transfer (QR code)",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYour account has been credited with {amount} {currency_symbol}.\n<br><br>\nYou can download the report for your QR code top-up from the email attachment \n      or <a href=\"https://app.bitbanker.org/operations\">your account history</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n  This is an automated message. Please do not reply to this email. \nFor assistance, please <a href=\"https://bitbanker.org/\"> contact support</a>.  \n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2181,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 1,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 2184,
      "type": "revenue_timelimit_order",
      "description": "Доходный таймлимит ордер",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 306,
          "subject": "You have placed a limit order",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYou have placed a time-limited order to sell {amount} {symbol}.\n<br><br>\nOrder validity: until {closing_time} UTC.\n<br><br>\nAfter the expiration date, the order will be executed at the best price in the order book.\n<br><br>\nWhile your funds are locked in the order, they earn a revenue of {revenue_per_order}% per annum.\n<br><br>\nInterest is credited to your account daily for each full day that has passed until the first transaction is completed on the order. \n<br><br>No interest is accrued on the day when the order is fully or partially executed.\n</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \nFor assistance, please <a href=\"https://bitbanker.org/ru\">contact</a> support.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2184,
          "lang": "en"
        },
        {
          "id": 305,
          "subject": "Вы выставили лимитный ордер",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВы выставили ордер с ограничением по времени на продажу {amount} {symbol}. \n<br><br>\nСрок действия лимитного ордера: до {closing_time} UTC.\n<br><br>\nПосле окончания срока действия ордер исполнится по лучшей цене в стакане.\n<br><br>\nПока ваши средства заблокированы в ордере, на них начисляется доход {revenue_per_order}% годовых. \n<br><br>\nПроценты приходят на счет ежедневно за прошедший полный день, пока по ордеру не будет совершена первая сделка. За день, когда ордер выкупят полностью или частично, проценты не начисляются.\n</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2184,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 6,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 2185,
      "type": "revenue_timelimit_order_bot",
      "description": "Доходный таймлимит ордер для тех, у кого не подключен тг-бот",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 303,
          "subject": "Вы выставили лимитный ордер",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВы выставили ордер с ограничением по времени на продажу {amount} {symbol}. \n<br><br>\nСрок действия лимитного ордера: до {closing_time} UTC.\n<br><br>\nПосле окончания срока действия ордер исполнится по лучшей цене в стакане.\n<br><br>\nПока ваши средства заблокированы в ордере, на них начисляется доход {revenue_per_order}% годовых. \n<br><br>\nПроценты приходят на счет ежедневно за прошедший полный день, пока по ордеру не будет совершена первая сделка. За день, когда ордер выкупят полностью или частично, проценты не начисляются.\n<br><br>\nЧтобы следить за исполнением сделки, подключите <a href=\"https://t.me/bitbanker_official_bot\">Telegam-бот Bitbanker</a>. Инструкцию по подключению можете найти <a href=\"https://bitbanker.org/ru/faq#Notifications.notifyTelegram\">в FAQ</a> . \n</mj-text> \n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2185,
          "lang": "ru"
        },
        {
          "id": 304,
          "subject": "You have placed a limit order",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYou have placed a time-limited order to sell {amount} {symbol}.\n<br><br>\nOrder validity: until {closing_time} UTC.\n<br><br>\nAfter the expiration date, the order will be executed at the best price in the order book.\n      <br><br>\nWhile your funds are locked in the order, they earn {revenue_per_order}% interest per annum. \n<br><br>\nThe interest accrues to your account daily for the previous day until the first trade is made on the order. No interest is accrued for the day on which the order is executed in full or in part.\n<br><br>\nTo follow the trade execution, connect the <a href=\"https://t.me/bitbanker_official_bot\">Bitbanker Telegram bot</a>. Please refer to the <a href=\"https://bitbanker.org/ru/faq#Notifications.notifyTelegram\">FAQ</a> for more information. \n</mj-text> \n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br> For assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2185,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 6,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 2187,
      "type": "timelimit_order_bot",
      "description": "Таймлиммит ордер выставил клиент, у которого не подключен тг-бот",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 302,
          "subject": "You have placed a limit order",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYou have placed a time-limited order to sell {amount} {symbol}.\n<br><br>\nOrder validity: until {closing_time} UTC.\n<br><br>\nAfter the expiration date, the order will be executed at the best price in the order book.\n      <br><br>\nTo follow the order execution, connect the <a href=\"https://t.me/bitbanker_official_bot\">Bitbanker Telegam bot</a>. \nFor instructions, please refer to the  <a href=\"https://bitbanker.org/ru/faq#Notifications.notifyTelegram\">FAQ</a>. \n</mj-text> \n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2187,
          "lang": "en"
        },
        {
          "id": 301,
          "subject": "Вы выставили лимитный ордер",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВы выставили ордер с ограничением по времени на продажу {amount} {symbol}. \n<br><br>\nСрок действия лимитного ордера: до {closing_time} UTC.\n<br><br>\nПосле окончания срока действия ордер исполнится по лучшей цене в стакане.    \n<br><br>\nЧтобы следить за исполнением ордера, подключите <a href=\"https://t.me/bitbanker_official_bot\">Telegam-бот Bitbanker</a>. Инструкцию по подключению можете найти <a href=\"https://bitbanker.org/ru/faq#Notifications.notifyTelegram\">в FAQ</a> . \n</mj-text> \n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно \n    <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2187,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 6,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 2188,
      "type": "banking_card_order_completed",
      "description": "Сообщение о выпуске карты",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 312,
          "subject": ".",
          "content": " <mj-section>\n  <mj-column>\n    <mj-text>\n  Your card {card_name} has been successfully issued.\n      <br><br>\n  To activate it, please top up your card with at least 25 USDT.\n <br><br><br>\n  <p style=\"text-align: center\">\n <a href=\"https://app.bitbanker.org/cards\" target=\"_blank\" \n  style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; \n  text-decoration: none; border-radius: 10px; font-weight: 700;\">Top up card</a>\n        </p> \n      </mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2188,
          "lang": "en"
        },
        {
          "id": 307,
          "subject": "Ваша карта выпущена",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВаша карта {card_name} выпущена. \n      <br><br>\nДля ее активации, пожалуйста, пополните карту на сумму не менее 25 USDT.\n <br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/cards\" target=\"_blank\" \n              style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; \n              text-decoration: none; border-radius: 10px; font-weight: 700;\">Пополнить</a>\n        </p>     \n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2188,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 23,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 2189,
      "type": "banking_card_order_cancelled",
      "description": "Не удалось выпустить карту",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 308,
          "subject": "Не удалось выпустить карту",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВаша карта {card_name} не выпущена. Мы вернули {amount} \n      {currency_symbol} на ваш счет.\n      <br><br>\nВыпустите карту заново или обратитесь <a href=\"https://bitbanker.org/ru\">в службу поддержки</a>, чтобы узнать причину.\n     <br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/cards\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Выпустить</a>\n        </p>\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. \n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2189,
          "lang": "ru"
        },
        {
          "id": 313,
          "subject": "Card issuance failed",
          "content": " <mj-section>\n  <mj-column>\n    <mj-text>\nWe couldn't issue your card {card_name}. \n  <br><br>\n  We’ve returned {amount} {currency_symbol} to your account.\n       <br><br>\n      You can try again or <a href=\"https://bitbanker.org/\">contact support</a> to find out what went wrong.\n    <br><br><br>\n      <p style=\"text-align: center\">\n      <a href=\"https://app.bitbanker.org/cards\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Try again</a>\n        </p>\n      </mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2189,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 23,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 2190,
      "type": "banking_card_activated",
      "description": "карта успешно активирована",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 309,
          "subject": "Ваша карта успешно активирована",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n    Карта {card_number} {card_name} пополнена и активирована. \n     <br><br>\n    Баланс карты {balance} {currency_symbol}.    \n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2190,
          "lang": "ru"
        },
        {
          "id": 314,
          "subject": "Your card is activated",
          "content": " <mj-section>\n  <mj-column>\n    <mj-text>\n    Card {card_number} {card_name} has been funded and activated.\n    <br><br>\n     Current balance: {balance} {currency_symbol}.\n      </mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2190,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 23,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 2191,
      "type": "banking_card_freeze_completed",
      "description": "карта заморожена",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 320,
          "subject": "Your card is frozen",
          "content": " <mj-section>\n  <mj-column>\n    <mj-text>\n    Card {card_number} {card_name} is frozen.\n      <br><br>\n      All transactions are temporarily blocked.\n    <br><br>\n      To resume using the card, please send an unfreeze request to our <a href=\"https://bitbanker.org\">support team</a>.\n      <br><br><br>\n    <p style=\"text-align: center\">\n    <a href=\"https://app.bitbanker.org/cards\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Unfreeze</a>\n        </p> \n      </mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2191,
          "lang": "en"
        },
        {
          "id": 310,
          "subject": "Ваша карта заморожена",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n    Карта {card_number} {card_name} заморожена. Операции по карте приостановлены до её разморозки. \n    <br><br>\n    Для возобновления операций отправьте заявку на разморозку <a href=\"https://bitbanker.org/ru\">в службу поддержки</a>.  \n    <br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://app.bitbanker.org/cards\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Личный кабинет</a>\n        </p>  \n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n    </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2191,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 23,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 2192,
      "type": "banking_card_unfreeze_completed",
      "description": "карта успешно разморожена",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 311,
          "subject": "Ваша карта успешно разморожена",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t Карта {card_number} {card_name} разморожена. Вы снова можете оплачивать покупки этой картой.\n      \n\t  </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2192,
          "lang": "ru"
        },
        {
          "id": 321,
          "subject": "Your card has been unfrozen",
          "content": " <mj-section>\n  <mj-column>\n    <mj-text>\nCard {card_number} {card_name} has been successfully unfrozen.\n<br><br>\n      You can now use it for purchases again.\n\n      </mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2192,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 23,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 2193,
      "type": "banking_card_block_completed",
      "description": "карта заблокирована",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 322,
          "subject": "Your card has been blocked",
          "content": " <mj-section>\n  <mj-column>\n    <mj-text>\n    Card {card_number} {card_name} has been blocked.\n    <br><br>\n      The remaining balance of {amount} {currency_symbol}, minus a provider fee of {commission} {currency_symbol}, has been credited back to your account.\n    <br><br>\n      The blocked card will stay visible in your dashboard for seven days before being removed.\n      </mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2193,
          "lang": "en"
        },
        {
          "id": 315,
          "subject": "Ваша карта заблокирована",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n  Карта {card_number} {card_name} заблокирована. \n      <br><br>\n  Остаток {amount} {currency_symbol} за вычетом комиссии провайдера {commission} {currency_symbol} зачислен на ваш счет.\n  <br><br>\n      Заблокированная карта будет отображаться в личном кабинете в течение недели, а затем пропадет. \n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> на сайте</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2193,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 23,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 2194,
      "type": "banking_card_block_cancelled",
      "description": "Не удалось заблокировать карту",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 316,
          "subject": "Не удалось заблокировать карту",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n    Не удалось заблокировать карту {card_number} {card_name}. \n    <br><br>\n    Повторите попытку позже или обратитесь <a href=\"https://bitbanker.org/ru\">в службу поддержки</a>.\n  <br><br><br>\n  <p style=\"text-align: center\">\n   <a href=\"https://app.bitbanker.org/cards\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Личный кабинет</a>\n     </p>   \n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2194,
          "lang": "ru"
        },
        {
          "id": 323,
          "subject": "/",
          "content": " <mj-section>\n  <mj-column>\n    <mj-text>\n\n      </mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2194,
          "lang": "en"
        }
      ],
      "finalized": false,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 23,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 2195,
      "type": "banking_top_up_completed",
      "description": "Баланс карты успешно пополнен",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 317,
          "subject": "Баланс карты успешно пополнен",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n    Карта {card_number} {card_name} пополнена на {amount} {currency_symbol}.\n    <br><br>\n    Баланс карты {balance} {currency_symbol}.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2195,
          "lang": "ru"
        },
        {
          "id": 324,
          "subject": "/",
          "content": " <mj-section>\n  <mj-column>\n    <mj-text>\n\n      </mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2195,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 23,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 2196,
      "type": "banking_top_up_cancelled",
      "description": "Не удалось пополнить карту",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 325,
          "subject": "/",
          "content": " <mj-section>\n  <mj-column>\n    <mj-text>\n\n      </mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2196,
          "lang": "en"
        },
        {
          "id": 318,
          "subject": "/",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\n      \n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2196,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 23,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 2197,
      "type": "banking_card_balance_changed",
      "description": "Баланс карты изменился",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 319,
          "subject": "/",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\n      \n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2197,
          "lang": "ru"
        },
        {
          "id": 326,
          "subject": "/",
          "content": " <mj-section>\n  <mj-column>\n    <mj-text>\n\n      </mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 2197,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 23,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3087,
      "type": "company_person_swift_rejected_by_operator",
      "description": "Заявка отклонена оператором вывода",
      "vars": {
        "message": "сообщение от оператора"
      },
      "is_active": true,
      "contents": [
        {
          "id": 797,
          "subject": "Заявка на вывод отклонена оператором",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nОператор отклонил вашу заявку на вывод. \n<br><br>\nЕсли возникли вопросы, пожалуйста, обратитесь в <a href=\"https://bitbanker.org/\">службу поддержки</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3087,
          "lang": "ru"
        },
        {
          "id": 798,
          "subject": "The withdrawal request has been rejected by the operator",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nThe operator has rejected your withdrawal request.\n<br><br>\nIf you have any questions, please <a href=\"https://bitbanker.org/\">contact support</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     This is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3087,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 24,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3088,
      "type": "company_person_swift_processing_executor_waiting",
      "description": "Назначена новая заявка на вывод",
      "vars": {
        "withdrawal_id": "номер заявки"
      },
      "is_active": true,
      "contents": [
        {
          "id": 792,
          "subject": "A new withdrawal request has been created",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nThe user has submitted a withdrawal request to the bank. \n<br><br>\nPlease log in to the admin panel and process request №{withdrawal_id}.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     This is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3088,
          "lang": "en"
        },
        {
          "id": 791,
          "subject": "Назначена новая заявка на вывод",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь отправил заявку на вывод средств в банк. \n<br><br>\nПожалуйста, зайдите в админ-панель и обработайте заявку №{withdrawal_id}.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3088,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 24,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3089,
      "type": "company_person_swift_need_user_action_executor",
      "description": "Нужны уточнения для оператора номинальной организации",
      "vars": {
        "comment_from_operator": "комментарий от оператора номинальной организации"
      },
      "is_active": true,
      "contents": [
        {
          "id": 794,
          "subject": "Clarifications are required for your withdrawal request",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nThe operator has requested clarifications regarding your withdrawal request.\n<br><br>\nOperator’s comment: {comment_from_operator}.\n<br><br>\nPlease edit the details of your request in your personal account and resubmit it for review. If you have any questions, please <a href=\"https://bitbanker.org/\">contact support</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3089,
          "lang": "en"
        },
        {
          "id": 793,
          "subject": "Требуются уточнения по вашей заявке на вывод",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nОператор запросил уточнения по вашей заявке на вывод. \n<br><br>\nКомментарий оператора: {comment_from_operator}. \n<br><br>\nПожалуйста, отредактируйте данные по заявке в личном кабинете и отправьте на повторную проверку. Если возникли вопросы, пожалуйста, обратитесь в <a href=\"https://bitbanker.org/\">службу поддержки</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3089,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 24,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3090,
      "type": "company_person_swift_need_user_action_operator",
      "description": "Нужны уточнения для оператора вывода",
      "vars": {
        "comment_from_operator": "комментарий от оператора вывода"
      },
      "is_active": true,
      "contents": [
        {
          "id": 796,
          "subject": "Clarifications are required for your withdrawal request",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nThe operator has requested clarifications regarding your withdrawal request.\n<br><br>\nOperator’s comment: {comment_from_operator}.\n<br><br>\nPlease edit the details of your request in your personal account and resubmit it for review. If you have any questions, please <a href=\"https://bitbanker.org/\">contact support</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3090,
          "lang": "en"
        },
        {
          "id": 795,
          "subject": "Требуются уточнения по вашей заявке на вывод",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nОператор запросил уточнения по вашей заявке на вывод. \n<br><br>\nКомментарий оператора: {comment_from_operator}. \n<br><br>\nПожалуйста, отредактируйте данные по заявке в личном кабинете и отправьте на повторную проверку. Если возникли вопросы, пожалуйста, обратитесь в <a href=\"https://bitbanker.org/\">службу поддержки</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3090,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 24,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3091,
      "type": "company_person_swift_sent_to_bank",
      "description": "Перевод отправлен в банк",
      "vars": {
        "amount": "сумма заявки",
        "currency_symbol": "символ валюты заявки"
      },
      "is_active": true,
      "contents": [
        {
          "id": 789,
          "subject": "Средства отправлены на банковский счет",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n{amount} {currency_symbol} отправлены на ваш банковский счет по заявке на вывод.\n<br><br>\nСредства поступят в течение 1 рабочего дня. Если в течение 3 календарных дней средства не поступили, пожалуйста, обратитесь в <a href=\"https://bitbanker.org/\">службу поддержки</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3091,
          "lang": "ru"
        },
        {
          "id": 790,
          "subject": "Funds have been sent to the bank account",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n{amount} {currency_symbol} have been sent to your bank account as per your withdrawal request.\n<br><br>\nThe funds should arrive within 1 business day. If the funds have not arrived within 3 calendar days, please <a href=\"https://bitbanker.org/\">contact support</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3091,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 24,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3092,
      "type": "company_swift_processing",
      "description": "На заявку от компании назначена ном. организация (вывод юрлица)",
      "vars": {
        "amount": "сумма заявки"
      },
      "is_active": true,
      "contents": [
        {
          "id": 799,
          "subject": "Ваша заявка на вывод в обработке",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВаша заявка на вывод {amount} {currency_symbol} обрабатывается.\n<br><br>\nВы получите уведомление после отправки средств по указанным реквизитам, или если потребуются уточнения по вашей заявке.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3092,
          "lang": "ru"
        },
        {
          "id": 806,
          "subject": "Your withdrawal request is being processed",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYour withdrawal request for {amount} {currency_symbol} is being processed.\n<br><br>\nYou will receive a notification once the funds have been sent to the specified details, or if any clarifications are needed regarding your request.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     This is an automated message. Please do not reply to this email. For assistance, please <a href=\"https://bitbanker.org/\"> contact support</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3092,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 24,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3093,
      "type": "company_person_swift_processing",
      "description": "На заявку назначена ном. организация",
      "vars": {
        "amount": "сумма заявки"
      },
      "is_active": true,
      "contents": [
        {
          "id": 805,
          "subject": "Your withdrawal request is being processed",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYour withdrawal request for {amount} {currency_symbol} is being processed.\n<br><br>\nYou will receive a notification once the funds have been sent to the specified details, or if any clarifications are needed regarding your request.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     This is an automated message. Please do not reply to this email. For assistance, please <a href=\"https://bitbanker.org/\"> contact support</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3093,
          "lang": "en"
        },
        {
          "id": 800,
          "subject": "Ваша заявка на вывод в обработке",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВаша заявка на вывод {amount} {currency_symbol} обрабатывается.\n<br><br>\nВы получите уведомление после отправки средств по указанным реквизитам, или если потребуются уточнения по вашей заявке.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3093,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 24,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3094,
      "type": "company_swift_executor_user_made_action",
      "description": "Компания изменила данные по заявке (вывод юрлица)",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 801,
          "subject": "Изменились данные по заявке на вывод",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь изменил данные по заявке на безналичный вывод. \n<br><br>\nПожалуйста, зайдите в админ-панель и обработайте заявку №{withdrawal_id} повторно. \n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3094,
          "lang": "ru"
        },
        {
          "id": 803,
          "subject": "The withdrawal request details have been updated",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nThe user has updated the details of the non-cash withdrawal request. \n<br><br>\nPlease log in to the admin panel and process request №{withdrawal_id} again.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     This is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3094,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 24,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3095,
      "type": "company_person_swift_executor_user_made_action",
      "description": "Пользователь изменил данные по заявке",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 804,
          "subject": "The withdrawal request details have been updated",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nThe user has updated the details of the non-cash withdrawal request. \n<br><br>\nPlease log in to the admin panel and process request №{withdrawal_id} again.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     This is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3095,
          "lang": "en"
        },
        {
          "id": 802,
          "subject": "Изменились данные по заявке на вывод",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь изменил данные по заявке на безналичный вывод. \n<br><br>\nПожалуйста, зайдите в админ-панель и обработайте заявку №{withdrawal_id} повторно. \n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3095,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 24,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3354,
      "type": "timelimit_order_expired",
      "description": "Истек срок жизни тайм лимит ордера",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 813,
          "subject": "Истек срок тайм лимит ордера",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nУ тайм лимит ордера на обмен {order_amount} {order_base_currency_symbol} на {order_quote_currency_symbol} по курсу {order_price_timelimit} {order_quote_currency_symbol} истек срок. \n      ожидания {closing_time} UTC.\n<br><br>\nОрдер был исполнен по лучшей цене в стакане {order_price} {order_quote_currency_symbol}.\n    \n</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3354,
          "lang": "ru"
        },
        {
          "id": 814,
          "subject": "The time limit on your order has expired",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYour time-limit order to exchange {order_amount} {order_base_currency_symbol} for {order_quote_currency_symbol} at {order_price_timelimit} {order_quote_currency_symbol} expired at {closing_time} UTC.\n<br><br>\nThe order has been executed at the best available market price of {order_price} {order_quote_currency_symbol}.\n    \n</mj-text>\n<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>For assistance, please <a href=\"https://bitbanker.org\">contact</a> support.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3354,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": false,
      "group": 1,
      "subgroup_id": 6,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3355,
      "type": "invoice_auto_close_expired",
      "description": "Отправляется пользователю, создавшему счет при закрытии инвойса, по причине истечения срока действия ",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 815,
          "subject": "Срок действия вашего счета истек",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nУ вашего счета {invoice_id} за {description} на сумму {amount} {currency_symbol} истек срок действия, поэтому оплата по нему больше невозможна.\n<br><br>\n      Оплачено по счету за все время: {received_amount} {currency_symbol}\n      <br><br>\n      Для получения оплаты, пожалуйста, создайте новый счет.\n      <br><br>\nЕсли у вас есть вопросы, пожалуйста, обратитесь в <a href=\"https://bitbanker.org/\">службу поддержки</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3355,
          "lang": "ru"
        },
        {
          "id": 816,
          "subject": "Your invoice has expired",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYour invoice {invoice_id} for {description} in the amount of {amount} {currency_symbol} has expired, and payment for it is no longer possible.\n<br><br>\n     Total paid under the invoice to date: {recieved_amount} {currency_symbol}\n      <br><br>\n      To receive the payment, please create a new invoice.\n       <br><br>\nIf you have any questions, please <a href=\"https://bitbanker.org/\">contact support</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     This is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3355,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 7,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3356,
      "type": "aml_deposit_failed",
      "description": "Cредства не зачислены из-за непрохождения AML-проверки у Отправителя в автоматическом режиме",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 818,
          "subject": "Your deposit did not pass the security (AML) check",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            The sender’s wallet {address} failed AML verification on {aml_check_date}, and the deposit of {amount}{currency_symbol} has not been credited. \n  <br><br>\n           Please <a href=\"https://app.bitbanker.org/\">contact support</a> for further instructions.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3356,
          "lang": "en"
        },
        {
          "id": 817,
          "subject": "Ваше пополнение не прошло проверку безопасности (AML)",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            Кошелек отправителя {address} не прошел AML-проверку {aml_check_date}, пополнение на {amount}{currency_symbol} не зачислено. \n  <br><br>\n            Пожалуйста, обратитесь <a href=\"https://app.bitbanker.org/\">в службу поддержки</a> за дальнейшими инструкциями.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3356,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 1,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3357,
      "type": "test_2",
      "description": "test",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 819,
          "subject": "test",
          "content": "gfdhtgf",
          "email_template_id": 3357,
          "lang": "ru"
        }
      ],
      "finalized": false,
      "is_supported": false,
      "group": 1,
      "subgroup_id": 15,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3358,
      "type": "aml_deposit_rejected",
      "description": "Администратор вернул средства на кошелек-отправитель по транзакции, которая не прошла автопроверку",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 820,
          "subject": "Средства возвращены на кошелек-отправитель",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            Администратор рассмотрел пополнение, не прошедшее автоматическую AML-проверку {aml_check_date}, и вернул средства на кошелек-отправитель {address}. \n  <br><br>\n      Cредства в размере {amount}{currency_symbol} возвращены. \n      <br><br>\n           Пожалуйста, обратитесь <a href=\"https://app.bitbanker.org/\">в службу поддержки</a> за дальнейшими инструкциями.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3358,
          "lang": "ru"
        },
        {
          "id": 821,
          "subject": "The funds have been returned to the sender’s wallet",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            The administrator reviewed the deposit that failed the automatic AML verification on {aml_check_date} and returned the funds to the sender’s wallet {address}. \n  <br><br>\n      Funds in the amount of {amount}{currency_symbol} have been returned.\n      <br><br>\n           Please <a href=\"https://app.bitbanker.org/\">contact support</a> for further instructions.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3358,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 1,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3359,
      "type": "aml_deposit_accepted",
      "description": "Администратор зачислил средства по транзакции, которая не прошла автопроверку",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 822,
          "subject": "Проверка пополнения завершена: средства зачислены",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            Администратор рассмотрел пополнение, не прошедшее автоматическую AML-проверку {aml_check_date}, и зачислил {amount}{currency_symbol} на ваш кошелек. \n  <br><br>\n            Если у вас возникли вопросы, пожалуйста, обратитесь <a href=\"https://app.bitbanker.org/\">в службу поддержки</a>.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3359,
          "lang": "ru"
        },
        {
          "id": 823,
          "subject": "Deposit verification completed: funds have been credited",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            The administrator reviewed the deposit that failed the automatic AML verification on {aml_check_date} and credited {amount}{currency_symbol} to your wallet.\n  <br><br>\n           If you have any questions, please <a href=\"https://app.bitbanker.org/\">contact support</a>.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3359,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 1,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3360,
      "type": "aml_invoice_failed",
      "description": "Отправляется создателю счета если средства не зачислены из-за непрохождения AML-проверки у Отправителя в автоматическом режиме",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 825,
          "subject": "Invoice payment issue: AML verification failed",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            During the payment of invoice {id} for {amount}{currency_symbol}, the sender’s wallet {address} failed the AML verification on {aml_check_date}, and the deposit of {amount}{currency_symbol} was not credited.\n  <br><br>\n           Please <a href=\"https://app.bitbanker.org/\">contact support</a> for further instructions.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3360,
          "lang": "en"
        },
        {
          "id": 824,
          "subject": "Проблема с оплатой счета: не пройдена AML-проверка",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            Во время оплаты счета {id} на {amount}{currency_symbol} кошелек отправителя {address} не прошел AML-проверку {aml_check_date}, пополнение на {amount}{currency_symbol} не зачислено. \n  <br><br>\n            Пожалуйста, обратитесь <a href=\"https://app.bitbanker.org/\">в службу поддержки</a> за дальнейшими инструкциями.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3360,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 7,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3361,
      "type": "aml_invoice_rejected",
      "description": "Отправляется создателю счета если администратор вернул средства на кошелек-отправитель за оплату, которая не прошла автопроверку",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 827,
          "subject": "The funds for the invoice payment have been returned to the sender’s wallet",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            The administrator reviewed the deposit for invoice {id} in the amount of {amount}{currency_symbol}, which failed the automatic AML verification on {aml_check_date}, and returned the funds to the sender’s wallet {address}. \n  <br><br>\n      Funds in the amount of {amount}{currency_symbol} have been returned.\n      <br><br>\n           Please <a href=\"https://app.bitbanker.org/\">contact support</a> for further instructions.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3361,
          "lang": "en"
        },
        {
          "id": 826,
          "subject": "Средства за оплату счета возвращены на кошелек-отправитель",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            Администратор рассмотрел пополнение на оплату счета {id} на {amount}{currency_symbol}, не прошедшее автоматическую AML-проверку {aml_check_date}, и вернул средства на кошелек-отправитель {address}.\n  <br><br>\n      Cредства в размере {amount}{currency_symbol} возвращены. \n      <br><br>\n           Пожалуйста, обратитесь <a href=\"https://app.bitbanker.org/\">в службу поддержки</a> за дальнейшими инструкциями.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3361,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 7,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3362,
      "type": "aml_invoice_accepted",
      "description": "Отправляется создателю счета если администратор зачислил средства за оплату, которая не прошла автопроверку",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 829,
          "subject": "The invoice payment has passed verification and has been successfully credited",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            The administrator reviewed the deposit that failed the automatic AML verification on {aml_check_date} and credited {amount}{currency_symbol} to your wallet.\n  <br><br>\n           If you have any questions, please <a href=\"https://app.bitbanker.org/\">contact support</a>.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3362,
          "lang": "en"
        },
        {
          "id": 828,
          "subject": "Оплата счета прошла проверку и успешно зачислена",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            Администратор рассмотрел пополнение, не прошедшее автоматическую AML-проверку {aml_check_date}, и зачислил {amount}{currency_symbol} на ваш кошелек. \n  <br><br>\n            Если у вас возникли вопросы, пожалуйста, обратитесь <a href=\"https://app.bitbanker.org/\">в службу поддержки</a>.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3362,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 7,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3363,
      "type": "company_swift_rejected_by_operator",
      "description": "Заявка отклонена оператором вывода (вывод юрлица)",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 830,
          "subject": "Заявка на вывод отклонена оператором",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nОператор отклонил вашу заявку на вывод. \n<br><br>\nЕсли возникли вопросы, пожалуйста, обратитесь в <a href=\"https://bitbanker.org/\">службу поддержки</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3363,
          "lang": "ru"
        },
        {
          "id": 831,
          "subject": "The withdrawal request has been rejected by the operator",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nThe operator has rejected your withdrawal request.\n<br><br>\nIf you have any questions, please <a href=\"https://bitbanker.org/\">contact support</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     This is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3363,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 24,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3364,
      "type": "company_swift_processing_executor_waiting",
      "description": "Назначена новая заявка на вывод (вывод юрлица)",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 833,
          "subject": "A new withdrawal request has been created",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nThe user has submitted a withdrawal request to the bank. \n<br><br>\nPlease log in to the admin panel and process request №{withdrawal_id}.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     This is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3364,
          "lang": "en"
        },
        {
          "id": 832,
          "subject": "Назначена новая заявка на вывод",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПользователь отправил заявку на вывод средств в банк. \n<br><br>\nПожалуйста, зайдите в админ-панель и обработайте заявку №{withdrawal_id}.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3364,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 24,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3365,
      "type": "company_swift_need_user_action_executor",
      "description": "Нужны уточнения для оператора номинальной организации (вывод юрлица)",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 834,
          "subject": "Требуются уточнения по вашей заявке на вывод",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nОператор запросил уточнения по вашей заявке на вывод. \n<br><br>\nКомментарий оператора: {comment_from_operator}. \n<br><br>\nПожалуйста, отредактируйте данные по заявке в личном кабинете и отправьте на повторную проверку. Если возникли вопросы, пожалуйста, обратитесь в <a href=\"https://bitbanker.org/\">службу поддержки</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3365,
          "lang": "ru"
        },
        {
          "id": 835,
          "subject": "Clarifications are required for your withdrawal request",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nThe operator has requested clarifications regarding your withdrawal request.\n<br><br>\nOperator’s comment: {comment_from_operator}.\n<br><br>\nPlease edit the details of your request in your personal account and resubmit it for review. If you have any questions, please <a href=\"https://bitbanker.org/\">contact support</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3365,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 24,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3366,
      "type": "company_swift_need_user_action_operator",
      "description": "Нужны уточнения для оператора вывода (вывод юрлица)",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 837,
          "subject": "Clarifications are required for your withdrawal request",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nThe operator has requested clarifications regarding your withdrawal request.\n<br><br>\nOperator’s comment: {comment_from_operator}.\n<br><br>\nPlease edit the details of your request in your personal account and resubmit it for review. If you have any questions, please <a href=\"https://bitbanker.org/\">contact support</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3366,
          "lang": "en"
        },
        {
          "id": 836,
          "subject": "Требуются уточнения по вашей заявке на вывод",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nОператор запросил уточнения по вашей заявке на вывод. \n<br><br>\nКомментарий оператора: {comment_from_operator}. \n<br><br>\nПожалуйста, отредактируйте данные по заявке в личном кабинете и отправьте на повторную проверку. Если возникли вопросы, пожалуйста, обратитесь в <a href=\"https://bitbanker.org/\">службу поддержки</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3366,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 24,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3367,
      "type": "company_swift_sent_to_bank",
      "description": "Средства отправлены на банковский счет (вывод юрлица)",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 838,
          "subject": "Перевод отправлен в банк",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n{amount} {currency_symbol} отправлены на ваш банковский счет по заявке на вывод.\n<br><br>\nСредства поступят в течение 1 рабочего дня. Если в течение 3 календарных дней средства не поступили, пожалуйста, обратитесь в <a href=\"https://bitbanker.org/\">службу поддержки</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3367,
          "lang": "ru"
        },
        {
          "id": 839,
          "subject": "Funds have been sent to the bank account",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n{amount} {currency_symbol} have been sent to your bank account as per your withdrawal request.\n<br><br>\nThe funds should arrive within 1 business day. If the funds have not arrived within 3 calendar days, please <a href=\"https://bitbanker.org/\">contact support</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3367,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 24,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3368,
      "type": "test_1",
      "description": "тестовый шаблон",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 840,
          "subject": "тестирование",
          "content": "",
          "email_template_id": 3368,
          "lang": "ru"
        }
      ],
      "finalized": false,
      "is_supported": false,
      "group": 1,
      "subgroup_id": 22,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3800,
      "type": "withdrawal_point",
      "description": "Для сторонних точек",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 1123,
          "subject": "da",
          "content": "",
          "email_template_id": 3800,
          "lang": "ru"
        }
      ],
      "finalized": false,
      "is_supported": false,
      "group": 1,
      "subgroup_id": 1,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3801,
      "type": "deposit_fiat_bb_external",
      "description": "Депозит в ББ через точку другого ВЛ",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 1127,
          "subject": "New fiat deposit operation",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            You have initiated a deposit of {amount} {currency_name}.\n            <br><br>\n            Transaction code: {confirmation_code} \n  <br><br>\n            Please send this code to our operator via the <a href=\"https://app.dev.bitbanker.org/operations?operation_id={operation_id}&action=chat\">website chat</a> to coordinate a meeting time.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n            If you did not request this code, please contact our <a href=\"https://app.dev.bitbanker.org/operations?operation_id={operation_id}&action=chat\">support service</a> immediately. This is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3801,
          "lang": "en"
        },
        {
          "id": 1124,
          "subject": "Заявка на пополнение наличными создана",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            Вы создали операцию на пополнение {amount} {currency_name}.\n            <br><br>\n            Код операции: {confirmation_code} \n  <br><br>\n            Отправьте код оператору <a href=\"https://app.dev.bitbanker.org/operations?operation_id={operation_id}&action=chat\">в чат на сайте</a>, чтобы согласовать время встречи.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n            Если вы не запрашивали код, срочно обратитесь <a href=\"https://app.dev.bitbanker.org/operations?operation_id={operation_id}&action=chat\">в службу поддержки</a>. \nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3801,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 1,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3802,
      "type": "withdrawal_fiat_bb_external",
      "description": "Вывод в ББ через точку другого ВЛ",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 1125,
          "subject": "Заявка на вывод наличными создана",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            Вы создали операцию на вывод {amount} {currency_name}.\n            <br><br>\n            Код операции: {confirmation_code} \n  <br><br>\n            Отправьте код оператору <a href=\"https://app.dev.bitbanker.org/operations?operation_id={operation_id}&action=chat\">в чат на сайте</a>, чтобы согласовать время встречи.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n            Если вы не запрашивали код, срочно обратитесь <a href=\"https://app.dev.bitbanker.org/operations?operation_id={operation_id}&action=chat\">в службу поддержки</a>. \nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3802,
          "lang": "ru"
        },
        {
          "id": 1128,
          "subject": "New Funds Withdrawal Transaction",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n            You have initiated a funds withdrawal transaction of {amount} {currency_name}.\n            <br><br>\n            Transaction code: {confirmation_code} \n  <br><br>\n            Please send this code to our operator via the <a href=\"https://app.dev.bitbanker.org/operations?operation_id={operation_id}&action=chat\">website chat</a> to coordinate a meeting time.\n            </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n            If you did not request this code, please contact our <a href=\"https://app.dev.bitbanker.org/operations?operation_id={operation_id}&action=chat\">support service</a> immediately. This is an automated message. Please do not reply to this email.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3802,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 1,
      "subgroup_id": 1,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 3803,
      "type": "dada",
      "description": "dada",
      "vars": {
        "{operation_id}": "ID операции по которой нужно открыть чат",
        "{wl_domain_name}": "Домен вл, например - app.dev.bitbanker.org"
      },
      "is_active": true,
      "contents": [
        {
          "id": 1126,
          "subject": "dada",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n      Высоздали операцию на пополнение\n      \n      <br><br>\n      Код операции\n      \n      <br><br>\n      Отправьте код оператору <a href=\"https://app.dev.bitbanker/operations?operation_id={operation_id}&action=chat\">в чат на сайте</a> или в <a href=\"ссылка на телеграм\">Телеграме</a> чтобы согласовать время встречи.\n  \t</mj-text>\n    \n  \t<mj-text font-size=\"16px\" color=\"#8794AA\">\n      Если код запрашивали не вы, срочно обратитесь <a href=\"https://app.bitbanker.org/\">в службу поддержки.</a>\n      Это письмо создано автоматически. Пожалуйста, не отвечайте на него. \n    </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3803,
          "lang": "ru"
        }
      ],
      "finalized": false,
      "is_supported": false,
      "group": 1,
      "subgroup_id": 24,
      "wl_short_name": "Bitbanker"
    }
  ],
  "page": 1,
  "count": 100,
  "per_page": 200
};

export const transactionGroups = {"items": [{"id": 1, "group": 1, "name": "Пополнение и вывод"}, {"id": 2, "group": 1, "name": "Переводы"}, {"id": 3, "group": 1, "name": "P2P"}, {"id": 4, "group": 1, "name": "SWIFT"}, {"id": 5, "group": 1, "name": "VISA"}, {"id": 6, "group": 1, "name": "Торговля"}, {"id": 7, "group": 1, "name": "Криптоэквайринг"}, {"id": 8, "group": 1, "name": "Телеграм-бот"}, {"id": 15, "group": 1, "name": "test"}, {"id": 21, "group": 1, "name": "SBP"}, {"id": 22, "group": 1, "name": "OTC-сделки"}, {"id": 23, "group": 1, "name": "Карты"}, {"id": 24, "group": 1, "name": "Вывод по реквизитам"}]};

export const informEmail = {
  "items": [
    {
      "id": 3,
      "type": "referral_user_registered",
      "description": "Отправляется реферу, когда по его промокоду кто-то зарегистрировался",
      "vars": {
        "referred_user_email": "email приглашённого юзера"
      },
      "is_active": true,
      "contents": [
        {
          "id": 5,
          "subject": "По вашему промокоду зарегистрировался пользователь",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПоздравляем! По вашему промокоду {promo_code} зарегистрировался пользователь.\n<br><br>\nВаше вознаграждение:\n    <br>  \n<br>\n— 30 USDT\n<br>\n— месяц торговли без комиссии\n<br>\n— 30% от комиссии реферала за каждую сделку в течение года\n<br><br>\nБонусы станут доступны, когда пользователь обменяет валюту на общую сумму от 1500 USDT в любой валюте в течение месяца после регистрации.\n</a>\n<br><br>\nСтатистику реферальной программы можно отслеживать <a href=\"https://app.bitbanker.org/profile/referral\">в личном кабинете</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3,
          "lang": "ru"
        },
        {
          "id": 75,
          "subject": "You have a new referral",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nA new user has registered with your promo code {promo_code}.\n<br><br>\nYour rewards:<br>\n— 30 USDT\n<br>\n— 30% of referral trade commissions for one year\n<br>\n— One month of commission-free trading\n<br><br>\nThe bonuses will be available once the referral completes trades \n      totaling 1500 USDT (or equivalent) within a month.\n<br><br>\nReferral statistics are available \n      <a href=\"https://app.bitbanker.org/profile/referral\">\n        in the profile section</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 3,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 9,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 7,
      "type": "add_bonus",
      "description": "Оповещение о начислении бонусных биткоинов.",
      "vars": {
        "amount": "сумма бонусов"
      },
      "is_active": true,
      "contents": [
        {
          "id": 79,
          "subject": "Bonus bitcoins received ",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nGood news! We have credited your account with {amount} BTC. \n<br>\n<br>\nYou can now freely use them. You have a range of options, like selling or transferring them to another wallet.\n</mj-text> \n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Earn Rewards with Bitbanker!\n      <br><br>\n      Invite your friends to trade crypto with limit and market orders in \n      Bitbanker and get paid. Earn 30 USDT for every friend who signs up \n      through your referral link, plus some bonuses!\n      <br><br>\n      Your personal promo code: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Learn More</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 7,
          "lang": "en"
        },
        {
          "id": 8,
          "subject": "Вам начислен бонус {amount} биткоинов",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n        Начислили на ваш счет {amount} бонусных биткоинов!\n           <br>\n           <br>\n           Средствами уже можно пользоваться — например, продать их или перевести на другой кошелек.\n\t</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Зарабатывайте в Bitbanker!\n      <br><br>\n      Приглашайте друзей торговать криптовалютой по рыночным и лимитным \n      ордерам в Bitbanker. Заплатим за каждого, кто зарегистрируется по \n      вашей ссылке, и подарим бонусы!\n      <br><br>\n      Ваш персональный промокод: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Подробнее</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>\n\n\n",
          "email_template_id": 7,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 14,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 8,
      "type": "kyc_rejected",
      "description": "KYC отклонено",
      "vars": {
        "reason": "причина"
      },
      "is_active": true,
      "contents": [
        {
          "id": 80,
          "subject": "KYC Verification denied",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nUnfortunately, we couldn't verify your documents this time around.  \n<br><br> \nThe reason for this is: {reason}.\n<br><br> \nNo worries, though! Just upload the documents again and make sure to consider the comments we provided. \n<br><br> \nIf you need guidance on how to submit the photos of the documents, check out the detailed explanation in our <a href=\"https://bitbanker.org/faq#VerificationKYC\">FAQ section</a>.\n<br><br> \nWe'll be here, eagerly waiting for your documents. Looking forward to working together!\n\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 8,
          "lang": "en"
        },
        {
          "id": 9,
          "subject": "Ваши документы отклонены",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n      К сожалению, ваши документы не прошли верификацию.\n             <br> <br>\n            Причина: {reason}.\n            <br> <br>\n            Пожалуйста, устраните причину и загрузите документы еще раз. <a href=\"https://bitbanker.org/ru/faq#VerificationKYC.howcanpasskycverificationwide\">В разделе FAQ </a>есть подробное описание, как должны выглядеть фотографии документов.\n            <br><br>\n            Ждем вас в Bitbanker. \n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 8,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 11,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 9,
      "type": "kyc_accepted",
      "description": "KYC пройден",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 11,
          "subject": "Вы успешно прошли KYC",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n        Вы прошли полную верификацию, и теперь вам доступны все сервисы Bitbanker.org.\n <br><br>\n        Не знаете с чего начать? Свяжитесь с <a href=\"https://app.bitbanker.org/ru/\">поддержкой в чате</a>, чтобы получить консультацию.\n\t</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Зарабатывайте в Bitbanker!\n      <br><br>\n      Приглашайте друзей в Bitbanker. Заплатим за каждого, кто \n      зарегистрируется по вашей ссылке, и подарим бонусы!\n      <br><br>\n      Ваш персональный промокод: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Подробнее</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 9,
          "lang": "ru"
        },
        {
          "id": 81,
          "subject": "Verification accepted",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nCongratulations!\n           <br>  <br>\nYou have successfully completed the full verification process! You now have full access to all the services offered by Bitbanker.\n           <br>  <br>\nIf you're unsure about where to begin or have any questions, our <a href=\"https://app.bitbanker.org/\">support service</a> is here to help.\n        <br>  <br>\nThank you for choosing Bitbanker. We're excited to have you on board!\n</mj-text> \n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Earn Rewards with Bitbanker!\n      <br><br>\n      Invite your friends to use Bitbanker and get paid. Earn 30 USDT for \n      every friend who signs up through your referral link, plus some \n      bonuses! \n      <br><br>\n      Your personal promo code: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Learn More</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 9,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 11,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 14,
      "type": "borrowing_reminder",
      "description": "Отправляется, когда курс средств в залоге приближается к уровню ликвидации.",
      "vars": {
        "borrowing_amount": "Размер занятых средств",
        "borrowing_currency_symbol": "Валюта занятых средств (например RUB)"
      },
      "is_active": true,
      "contents": [
        {
          "id": 16,
          "subject": "Займ скоро будет ликвидирован",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nСтоимость залога по займу на {borrowing_amount} {borrowing_currency_symbol} снижается. Если цена продолжит снижаться, залог будет ликвидирован. \n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 14,
          "lang": "ru"
        },
        {
          "id": 82,
          "subject": "Loan liquidation notice",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYour loan on {borrowing_amount} {borrowing_currency_symbol} is nearing the liquidation process.\n<br><br>\nIf you have any questions or require any support, please feel free to <a href=\"https://bitbanker.org/ru\"> reach out to us</a>.\n</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 14,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 10,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 16,
      "type": "security_auth_from_new_device",
      "description": "Отправляется, когда юзер логинится с нового девайса",
      "vars": {
        "user_ip": "С какого IP пользователь авторизовался",
        "datetime": "Дата и время, когда была совершена авторизация",
        "date_limit": "Дата по UTC, до которой у пользователя заблокирован вывод средств",
        "user_email": "Email пользователя",
        "user_device": "Информация о девайсе, с которого была произведена авторизация",
        "time_limit_in_hours": "Кол-во часов, на которое у пользователя заблокирован вывод средств",
        "time_limit_in_minutes": "Кол-во минут, на которое у пользователя заблокирован вывод средств"
      },
      "is_active": true,
      "contents": [
        {
          "id": 18,
          "subject": "Подозрительная активность",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Вход с нового устройства\n\t  <br><br>Мы заметили, что вы вошли в личный кабинет с нового устройства. Почта: {user_email}\n<br><br>\nВремя: {datetime} <br>\nIP адрес: {user_ip}<br>\nУстройство: {user_device}\n<br><br>\nЕсли это были не вы, срочно свяжитесь со <a href=\"https://app.bitbanker.org/\">службой поддержки на сайте</a>.\n<br><br>\nВ целях безопасности мы ограничили вывод средств с вашего аккаунта на {time_limit_in_minutes} мин.\n\t  </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 16,
          "lang": "ru"
        },
        {
          "id": 84,
          "subject": "Login from a new device",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\tWe noticed that you logged into your {user_email} account from a new device. \n\t<br><br> Time: {datetime} (UTC)\n\t<br>IP address: {user_ip}\n\t<br>Device: {user_device}\n\t<br><br>\nIf this was not you, please contact <a href=\"https://app.bitbanker.org/\">support</a> immediately.\n\t<br><br>\nFor security reasons, we have limited the withdrawal of funds from account for {time_limit_in_minutes} min.\n\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n  </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 16,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 13,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 17,
      "type": "borrowing_reminder_on_term_end",
      "description": "Отправляется, когда срок погашения займа подходит к концу",
      "vars": {
        "borrowing_amount": "Сколько средств пользователь взял взаймы",
        "borrowing_number": "Красивый идендификатор займа",
        "borrowing_amount_left": "Сколько осталось выплатить",
        "borrowing_total_interest": "Накапавшие по займу проценту",
        "borrowing_currency_symbol": "Символ валюты займа"
      },
      "is_active": true,
      "contents": [
        {
          "id": 19,
          "subject": "Срок вашего займа заканчивается сегодня",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nСрок вашего займа {borrowing_number} заканчивается сегодня. Не забудьте его погасить.\n<br><br>\nЕсли не внести средства до {third_day_after_term_end}, процент по займу удвоится, а через месяц {month_after_term_end} залог будет ликвидирован. \n<br><br>\nРазмер займа: {borrowing_amount} {borrowing_currency_symbol}\nПроценты: {borrowing_total_interest} {borrowing_currency_symbol}\nК оплате: {borrowing_amount_left} {borrowing_currency_symbol}\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>\n\n",
          "email_template_id": 17,
          "lang": "ru"
        },
        {
          "id": 85,
          "subject": "Loan Repayment Due Today",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nThe term of your loan {borrowing_number} is ending today. Don't forget to repay it.\n<br><br>\nLoan amount: {borrowing_amount} {borrowing_currency_symbol}<br>\nInterest: {borrowing_total_interest} {borrowing_currency_symbol}<br>\nAmount due: {borrowing_amount_left} {borrowing_currency_symbol}\n</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 17,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 10,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 18,
      "type": "borrowing_reminder_on_expired",
      "description": "Отправляется, когда юзер просрочил погашение займа",
      "vars": {
        "borrowing_amount": "Сколько средств пользователь взял взаймы",
        "borrowing_number": "Красивый идендификатор займа",
        "borrowing_amount_left": "Сколько осталось выплатить",
        "borrowing_total_interest": "Накапавшие по займу проценту",
        "borrowing_currency_symbol": "Символ валюты займа"
      },
      "is_active": true,
      "contents": [
        {
          "id": 86,
          "subject": "[Bitbanker] Loan repayment",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Please repay the loan {borrowing_number}.<br><br>Loan amount: {borrowing_amount} {borrowing_currency_symbol}<br>Percentage: {borrowing_total_interest} {borrowing_currency_symbol}<br>amount owed: {borrowing_amount_left} {borrowing_currency_symbol}\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n      If this is a mistake, please ignore this letter.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 18,
          "lang": "en"
        },
        {
          "id": 20,
          "subject": "Срок займа истек",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nСрок вашего займа истек. Пожалуйста, погасите займ {borrowing_number} до {third_day_after_term_end}. \n<br><br>\nЕсли не погасить займ, процент по нему удвоится, а через месяц {month_after_term_end} займ будет ликвидирован. \n<br><br>\nРазмер займа: {borrowing_amount} {borrowing_currency_symbol}<br>\nПроценты: {borrowing_total_interest} {borrowing_currency_symbol}<br>\nК оплате: {borrowing_amount_left} {borrowing_currency_symbol}\n\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 18,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 10,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 19,
      "type": "borrowing_reminder_on_fine",
      "description": "Отправляется, когда юзер получил штраф за непогашенный займ",
      "vars": {
        "borrowing_number": "Красивый идендификатор займа"
      },
      "is_active": true,
      "contents": [
        {
          "id": 21,
          "subject": "Проценты по вашему займу удвоились",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nВы просрочили срок платежа по займу {borrowing_number}. Проценты займа удвоились.\n<br><br>\nПогасите займ {borrowing_number} и через месяц залог будет ликвидирован.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 19,
          "lang": "ru"
        },
        {
          "id": 87,
          "subject": "Loan {borrowing_number} payment overdue, collateral liquidation notice",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nUnfortunately, you are past due on your loan {borrowing_number}. The interest on the loan has been doubled.\n<br><br>\nPlease repay the loan {borrowing_number}, otherwise the collateral will be liquidated in one month.\n</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 19,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 10,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 20,
      "type": "borrowing_liquidated_on_term_expired",
      "description": "Отправляется, когда был ликвидирован непогашенный займ",
      "vars": {
        "borrowing_number": "Красивый идендификатор займа"
      },
      "is_active": true,
      "contents": [
        {
          "id": 22,
          "subject": "Займ закрыт",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n К сожалению, вы не погасили займ {borrowing_number}. Ваш залог ликвидирован.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 20,
          "lang": "ru"
        },
        {
          "id": 88,
          "subject": "Your collateral has been liquidated",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYou have not repaid the loan {borrowing_number}. Your collateral has been liquidated.\n\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 20,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 10,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 28,
      "type": "auth_2fa_enabled",
      "description": "Активация 2FA",
      "vars": {
        "base_domain": "Базовый домен сервиса"
      },
      "is_active": true,
      "contents": [
        {
          "id": 95,
          "subject": "Google Authenticator Connection Notice",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYou have connected Google Authenticator to your Bitbanker account.\n<br><br>\nIf it wasn't you, please contact <a href=\"https://app.bitbanker.org/\">the operator in the chat</a> or <a href=\"https://t.me/bitbanker_help_bot\">Telegram support bot</a> immediately.\n<br><br>\nIf you have received suspicious emails or SMS claiming to be from Bitbanker, please report the incident to our support service immediately.\n<br><br>\nMake sure that the domain name is correct: \"{base_domain}\" before accessing your personal account.\n</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 28,
          "lang": "en"
        },
        {
          "id": 29,
          "subject": "Активация двухфакторной аутентификации",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n    Вы привязали приложение аутентификатор к своему аккаунту Bitbanker.\n<br><br>\nЕсли это были не вы, срочно свяжитесь с поддержкой через <a href=\"https://bitbanker.org/ru\">чат на сайте</a> или <a href=\"https://t.me/bitbanker_help_bot\">Телеграм-бот</a>.\n<br><br>\nЕсли вы получили подозрительное электронное письмо или СМС-сообщение, якобы от администрации Bitbanker, пожалуйста, сообщите об этом в поддержку.\n<br><br>\nПеред входом в личный кабинет убедитесь, что вы на сайте Bitbanker: «{base_domain}». \n</mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 28,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 13,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 29,
      "type": "auth_2fa_disabled",
      "description": "Отключение 2FA",
      "vars": {
        "base_domain": "Базовый домен сервиса"
      },
      "is_active": true,
      "contents": [
        {
          "id": 30,
          "subject": "Отключение двухфакторной аутентификации",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\tВы отключили Google Authenticator от своего аккаунта Bitbanker.\n      <br><br>\n    В целях безопасности мы ограничили вывод средств на 24 часа.\n<br><br>\nЕсли это были не вы, срочно обратитесь в \n      <a href=\"https://bitbanker.org/ru\">службу поддержки</a>.  \n<br><br>\nПеред входом в личный кабинет убедитесь, что вы на сайте Bitbanker: «{base_domain}». \n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. \n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 29,
          "lang": "ru"
        },
        {
          "id": 96,
          "subject": "Google Authenticator disconnected",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYou have disconnected Google Authenticator from your Bitbanker account.\n<br><br>\nIf it wasn't you, please contact <a href=\"https://app.bitbanker.org/\">the operator in the chat</a> or <a href=\"https://t.me/bitbanker_help_bot\">Telegram support bot</a> immediately.\n<br><br>\nIf you have received suspicious emails or SMS claiming to be from Bitbanker, please report the incident to our support service immediately.\n<br><br>\nMake sure that the domain name is correct: \"{base_domain}\" before accessing your personal account.\n\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 29,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 13,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 63,
      "type": "telegram_bot_confirmation_code",
      "description": "Код подтверждения для подключения уведомлений в Telegram",
      "vars": {
        "confirmation_code": "Код подтверждения"
      },
      "is_active": true,
      "contents": [
        {
          "id": 100,
          "subject": "Telegram notification confirmation code",
          "content": "<mj-section>\n  <mj-column>\n  <mj-text>\n  <p style=\"text-align: center\">\n  <b>{confirmation_code}</b>\n  </p>\n  <br>\nThis is your confirmation code for connecting Telegram notifications. Please send this code to our Telegram notification bot.\n<br>  <br>\nIf it wasn't you, please contact <a href=\"https://app.bitbanker.org/\">the operator in the chat</a> or <a href=\"https://t.me/bitbanker_help_bot\">Telegram support bot</a> immediately.\n<br><br>\nIf you have received suspicious emails or SMS claiming to be from Bitbanker, please report the incident to our support service immediately.\n</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 63,
          "lang": "en"
        },
        {
          "id": 99,
          "subject": "Код подтверждения",
          "content": "<mj-section>\n  <mj-column>\n  <mj-text>\n  <p style=\"text-align: center\">\n  <b>{confirmation_code}</b>\n  </p>\n  <br>\n  Это ваш код для подключения уведомлений в Телеграме. Пожалуйста, отправьте его в бот Bitbanker.\n    </mj-text>\n    <mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 63,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 14,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 70,
      "type": "forgot_password",
      "description": "Отправляется, когда пользователь восстанавливает пароль",
      "vars": {
        "confirmation_code": "Код подтверждения"
      },
      "is_active": true,
      "contents": [
        {
          "id": 109,
          "subject": "Password reset confirmation",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nUse the following confirmation code to proceed with your password reset: <b>{confirmation_code}</b>.\n<br><br>\nIf you did not initiate this password reset request, please consider this a security concern. We strongly advise reaching out to our <a href=\"https://bitbanker.org/\">support team</a> immediately to report the incident and safeguard your account.\n\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 70,
          "lang": "en"
        },
        {
          "id": 108,
          "subject": "Восстановление пароля",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nЧтобы сбросить пароль, пожалуйста, введите код подтверждения <b>{confirmation_code}</b>.\n<br><br>\nЕсли вы не запрашивали сброс пароля, срочно обратитесь <a href=\"https://bitbanker.org/\"> в поддержку</a> и смените пароль. Возможно, кто-то пытается получить доступ к вашему аккаунту. <br>\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 70,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 13,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 73,
      "type": "double_opt_in",
      "description": "Подтверждение подписки на email-рассылку с блога",
      "vars": {
        "{token}": "Ключ подтверждения",
        "{api_url}": "Путь до апи подтверждения подписки",
        "{user_email}": "Почта, с которой пользователь подписывается на рассылку"
      },
      "is_active": true,
      "contents": [
        {
          "id": 115,
          "subject": "Подтвердите подписку на рассылку Bitbanker",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nСпасибо, что подписались на рассылку Bitbanker!\n<br><br>\nНажмите «Подтвердить», чтобы получать рассылку каждый месяц. Письма будут приходить на {user_email}\n<br><br><br>\n<p style=\"text-align: center\">\n  <a href=\"\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Подтвердить </a>\n        </p>\n<br><br>   \nРаз в месяц вы будете получать подборку наших лучших статей о криптовалютах, финансах и инвестициях. \n\t</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Зарабатывайте в Bitbanker!\n      <br><br>\n      Приглашайте друзей в Bitbanker. Заплатим за каждого, кто \n      зарегистрируется по вашей ссылке, и подарим бонусы!\n      <br><br>\n      Ваш персональный промокод: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Подробнее</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 73,
          "lang": "ru"
        },
        {
          "id": 116,
          "subject": "Confirm your subscription to Bitbanker's newsletter",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nThank you for choosing to subscribe to Bitbanker's monthly newsletter! To confirm your subscription, click the \"Confirm\" button below.\n        <br><br>\nOnce confirmed, you'll receive exciting content directly to your inbox at: {user_email}.\n<br><br><br>\n<p style=\"text-align: center\">\n  <a href=\"\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Confirm</a>\n        </p>\n <br><br>\nOur newsletters will provide you with information about the crypto market, blockchain technology, and much more. Stay tuned for exclusive insights, trends, and updates from the world of cryptocurrencies!\n\t</mj-text> \n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Earn Rewards with Bitbanker!\n      <br><br>\n      Invite your friends to use Bitbanker and get paid. Earn 30 USDT for \n      every friend who signs up through your referral link, plus some \n      bonuses! \n      <br><br>\n      Your personal promo code: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Learn More</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 73,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 14,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 76,
      "type": "bonus_for_referer",
      "description": "Рефер получает 30 USDT, реферал совершил обмен на 1,5к usdt",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 117,
          "subject": "30 USDT ждут вас",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nОдин из ваших рефералов совершил обмен валют на 1500 USDT. \n<br><br>\nВаше вознаграждение:\n<br><br>   \n — 30 USDT\n      <br>\n— месяц торговли без комиссии  \n      <br>\n— 30% от комиссии реферала за каждую сделку в течение года после окончания периода без комиссии\n<br><br>\nБонусы станут доступны через несколько часов в аккаунте Bitbanker. \n      <br><br>\nСтатистику реферальной программы можно отслеживать <a href=\"https://app.bitbanker.org/profile/referral\">в личном кабинете</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. \n    Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-column>\n</mj-section>",
          "email_template_id": 76,
          "lang": "ru"
        },
        {
          "id": 118,
          "subject": "Your 30 USDT bonus is unlocked",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nOne of your referrals has conducted transactions for more than 1,500 USDT. \n<br><br>\nYour rewards:\n      <br>\n— 30 USDT\n<br>\n— 30% of the referred user's commission for each transaction within a year after \n      their commission-free period ends\n<br>\n— One month of commission-free trading\n<br><br>\n  Which will be displayed in your account within a few hours.\n<br><br>\nReferral statistics are available \n      <a href=\"https://app.bitbanker.org/profile/referral\">in the profile section</a>.\n</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 76,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 9,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 77,
      "type": "registration_in_bitbanker_promo_code",
      "description": "Клиент зарегистрировался по промокоду",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 120,
          "subject": "Welcome to Bitbanker! Enjoy your referral promo rewards",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nThank you for registering with Bitbanker through our referral program! 🎉 \n<br><br>\nFor joining us with a referral promo code, you are entitled to \n      <b>exclusive rewards</b>:\n<br><br>\n• One month of commission-free trading\n<br>\n• 30 USDT transferred to your account balance\n<br>\n• Boosted income on deposits (+2%) for the entire month.\n<br>\n• A loan with a reduced interest rate (-5%) for an amount up \n      to 1,000 USDT for one month. This loan can be used once within three \n      months.      \n<br><br>\n30 USDT and additional rewards will be unlocked once you complete \n      currency exchange operations totaling 1500 USDT or equivalent \n      within 30 days.\n<br><br>\nIf you have any questions or need assistance, our \n      <a href=\"https://bitbanker.org/ru\">support service</a> \n      is always here to help.\n<br><br>\nWelcome to Bitbanker, and happy trading!\n</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 77,
          "lang": "en"
        },
        {
          "id": 119,
          "subject": "Добро пожаловать в Bitbanker! Узнайте больше о своих бонусах",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n🎉 Спасибо за регистрацию в Bitbanker!  \n<br><br>\nВаше вознаграждение по промокоду:\n<br><br>\n• месяц торговли без комиссии;\n<br><br>\n• 30 USDT на баланс Bitbanker;\n<br><br>\n• повышенный доход по вкладам (+2%) в течение месяца;\n<br><br>\n• займ со сниженным процентом (−5%) на сумму не больше 1000 USDT сроком на один месяц. \n     Взять займ можно один раз в течение трех \n      месяцев.\n<br><br>\nБонусы будут разблокированы после того, как вы обменяете валюту на общую сумму от 1500 USDT в любой валюте в течение 30 дней после регистрации.\nЕсли у вас остались вопросы, свяжитесь с <a href=\"https://bitbanker.org/ru\"> \n  поддержкой</a>.\n\t</mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 77,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 9,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 78,
      "type": "the_referral_fulfilled_the_condition",
      "description": "Реферал выполнил условие и разблокировал бонусы",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 122,
          "subject": "Congratulations! Your rewards are unlocked",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYou have exchanged more than 1,500 USD and unlocked your rewards! 🎉\n<br><br>\nThe <b>30 USDT bonus</b> is now unlocked and can be transferred to another account or withdrawn to an external wallet.\n<br><br>\nAdditional rewards have also become available to you: \n<br><br>\n1. Enjoy increased income on deposits (+2%) during one month.\n<br>\n2. A loan with a reduced interest rate (-5%) for an amount up to 1,000 USDT \n      for one month. This loan can be used once within three months.\t\n<br>\n3. One month of commission-free trading       \n    </mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 78,
          "lang": "en"
        },
        {
          "id": 121,
          "subject": "Вы получили 30 USDT, повышенный доход по вкладам и льготный кредит",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПоздравляем! Вы обменяли средства на сумму от 1500 USDT. \n      <br><br>Начислили вам бонус 30 USDT.\n<br><br>\nВаши дополнительные награды:\n<br><br>\n• повышенный доход по вкладам (+2%) в течение месяца;\n<br><br>\n• займ со сниженным процентом (−5%) на сумму не больше 1000 USDT сроком на один месяц. Взять займ можно один раз в течение трех месяцев;\n<br><br>\n• месяц торговли без комиссии.\n\t</mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 78,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 9,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 80,
      "type": "the_referral_has_2_weeks_left",
      "description": "У реферала осталось 2 недели до конца периода активации промокода",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 136,
          "subject": "Get 30 USDT and more bonuses ",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nDear client!\n<br><br>\nBy registering with the promo code, you received a reward of 30 USDT.\n<br><br>\nTo activate it, you need to exchange currency worth 1,500 USDT or its \n      equivalent within the next two weeks, so you don't miss out on your \n      reward.\n<br><br>\n<b>Additional Rewards</b>:\n<br><br>\n1. Increased income on deposits (+2%) throughout the month. \n<br>\n2.A loan with a reduced interest rate (-5%) for an amount up to 1,000 USDT \n      for one month. This loan can be used once within three months.\t\n<br>    \n3. One month of commission-free trading.    \n    </mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 80,
          "lang": "en"
        },
        {
          "id": 124,
          "subject": "Осталось две недели, чтобы получить 30 USDT и другие бонусы",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n  При регистрации по промокоду вы получили 30 USDT и другие бонусы. \n  <br><br> \n  Чтобы разблокировать награды, нужно обменять валюту на общую сумму от 1500 USDT\n      в любой валюте в течение двух недель, или бонусы сгорят.\n<br><br>\nДополнительные награды:\n<br><br>\n• повышенный доход по вкладам (+2%) в течение месяца;\n<br><br>\n• займ со сниженным процентом (−5%) на сумму не больше 1000 USDT сроком на один месяц. Взять займ можно один раз в течение трех месяцев;\n<br><br>\n• месяц торговли без комиссии.   \n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 80,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 9,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 81,
      "type": "the_first_introductory_letter",
      "description": "Приветственное письмо, в котором рассказываем об основных сервисах Bitbanker и KYC",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 137,
          "subject": "Welcome to Bitbanker! Let us show you around",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nGet to know Bitbanker a bit better! \n<br><br>\n<b>This letter will tell you more about</b>:\n<br><br>\n👉 Currencies available on Bitbanker\n<br>\n👉 Three ways to top up your account\n<br>\n👉 Useful services on Bitbanker\n<br><br>\n<b>Supported currencies </b>\n<br><br>\nBitbanker offers twelve currencies: USDT, USDC, Bitcoin, Ether, Tron, AVAX, Atom, US Dollars, UAE Dirhams, euro, Kyrgyz som,  and Rubles. \n<br><br>\nTo work with fiat currencies, you need to pass identity verification process also known as KYC (know your client). You can only top up your account with cryptocurrencies if you have not passed the verification. \n<br><br>\n❓ <a href=\"https://bitbanker.org/faq#verification-kyc.whatis-kyc\">How to pass KYC?</a>\n<br><br>\nOne you have passed the verification, you can regain access to your account if you lose your password or access it with your phone with two-factor authentication. \n<br><br>\n<b>Balance top-up</b>\n<br><br>\nYou can deposit funds:\n<br><br>\n- <a href=\"https://app.bitbanker.org/wallet/deposit\">In cash:</a> rubles, euros, and dollars in Moscow; dirhams in Dubai; dollars and soms in Bishkek, \n<br>\n- <a href=\"https://app.bitbanker.org/p2p/offers\">In rubles from a card via P2P</a>\n<br>\n- By ruble transfer using bank details\n<br>\n- <a href=\"https://app.bitbanker.org/wallet/deposit\">Cryptocurrencies</a>.\n<br><br>\n<b>Bitbanker Services </b>\n<br><br>\n <a href=\"https://app.bitbanker.org/exchange/TRX/RUB\">Buying and selling  </a>\n<br><br>\nCurrency exchange is possible in simplified and exchange modes. In simplified mode, you can quickly exchange currencies, the transaction fee is 0.15%. In advanced mode, you can examine the order book and place your order at the desired price. The commission for such a transaction is 0.1%. \n<br><br>\n<a href=\"https://app.bitbanker.org/lend/borrows\">Loans and deposits </a>\n<br><br>\nYou can take out a loan secured by cryptocurrencies in USDT or Rubles. You can also open a deposit in USDT or Rubles. Current rates on deposits and loans are available on the website.  \n<br><br>\n<a href=\"https://app.bitbanker.org/acquiring\">Crypto payment processing </a>\n<br><br>\nDiscover the convenience of crypto payment processing, effortlessly billing your customers for the services you offer. This innovative service streamlines the accounting of cryptocurrency payments, allowing you to include the payer's name and the specific service provided on each invoice. By doing so, you can easily track the source of payments and the corresponding services received.\n<br><br>\t\n<a href=\"https://app.bitbanker.org/investment/products\">Investing </a>     \n<br><br>\nInvest in banking assets (RWA) or innovative DeFi platforms safely. Choose from four investment strategies with different entry thresholds.    \n    </mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 81,
          "lang": "en"
        },
        {
          "id": 125,
          "subject": "👋 Добро пожаловать в Bitbanker",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n<b>Поздравляем! Вы создали аккаунт на платформе Bitbanker.</b>\n<br>\n<br>\n      В этом письме расскажем:\n<br><br>\n      — Какие валюты доступны в Bitbanker<br>\n— Четыре способа пополнить счет<br>\n— Все о сервисах Bitbanker<br>\n<br>\n<b>Валюты</b>\n<br><br>\nВ Bitbanker доступны криптовалюты USDT, USDC, Bitcoin, Ethereum, Toncoin, Atom, Tron, AVAX и фиатные валюты: рубли, доллары США, евро, дирхамы ОАЭ и киргизские сомы.\n<br><br>Чтобы пользоваться фиатными валютами, нужно пройти верификацию личности с паспортом (KYC). \nДля операций с криптовалютой верификация не обязательна.\n\n<br><br>\n👉 <a href=\"https://bitbanker.org/ru/faq#VerificationKYC\">Узнайте, как пройти KYC</a>\n<br><br>\nПосле успешной KYC-верификации можно восстановить доступ к аккаунту по паспорту.\n\n<br><br>\n<b>Как пополнить счет</b>\n<br><br>\nПополнить баланс можно:\n<br><br>\n💳 Рублями с карты  через <a href=\"https://app.dev.bitbanker.org/p2p/offers\">P2P</a>\n<br>\n 🏦 <a href=\"https://app.dev.bitbanker.org/wallet/deposit\">Банковским переводом</a> в рублях или дирхамах ОАЭ  \n <br>\n💰 <a href=\"https://app.dev.bitbanker.org/wallet/deposit\">Наличными</a>:\n   <br>  — Рублями, евро, долларами в Москве\n<br>— Рублями в Санкт-Петербурге, Екатеринбурге и Ставрополе\n— долларами и сомами в Бишкеке\n<br>🪙 <a href=\"https://app.bitbanker.org/wallet/deposit\">Криптовалютой</a>\n\n<br><br>\n<b>Сервисы Bitbanker</b>\n<br><br>\n🛒 <a href=\"https://app.bitbanker.org/exchange/buy-sell\">Покупка и продажа</a>\n<br>\n<br>Доступны два режима торговли. В упрощенном режиме можно быстро обменять валюту, комиссия за сделку: 0,15%.\n<br><br>В PRO режиме доступны биржевой стакан и торговля по лимитным ордерам. Комиссия: 0,1%.\n\n<br><br>\n🫴 <a href=\"https://app.bitbanker.org/lend/borrows\">Займы и вклады</a>\n<br><br>\nЗаймы в рублях или USDT под залог криптовалют и вклады в рублях и USDT. Актуальные ставки по вкладам и займам смотрите в личном кабинете.\n<br><br>\n👥 <a href=\"https://app.bitbanker.org/acquiring\">Криптоэквайринг</a>\n<br><br>\nВыставляйте инвойсы клиентам, указывайте имя и другие детали, чтобы всегда знать, от кого и за что пришла оплата. <br><br>\n      ✈️ <a href=\"https://app.bitbanker.org/wallet/withdraw/USD_R/swift\">Переводы SWIFT и VISA</a>\n<br><br>Переводите рубли, доллары, евро и дирхамы ОАЭ через SWIFT и отправляйте доллары на заграничные карты VISA по всему миру.\n  <br><br>💸 <a href=\"https://app.bitbanker.org/investment/products\">Инвестиции</a>\n  <br><br>\nИнвестируйте безопасно. Выбирайте готовые инвестиционные стратегии с разным риск-профилем и доходностью. \n<br><br>\n🤝 <a href=\"https://app.bitbanker.org/otc/offer\">ОТС-сделки</a>\n<br><br>\n      Торгуйте криптовалютой на крупные суммы по своему курсу напрямую с другими пользователями. Без дополнительных комиссий.\n\n    </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 81,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 12,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 82,
      "type": "kyc_reminder",
      "description": "Напоминалка новому клиенту, что без kyc пользоваться фиатом нельзя",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 138,
          "subject": "Complete your identity verification (KYC) for enhanced access and security",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nWe noticed that you haven't completed your identity verification (KYC) yet 🤔\n<br><br>\nWe wanted to emphasize the importance and benefits of completing this process using your passport:\n<br><br>\n<b>Unlock more possibilities</b>: Verification is necessary to work with fiat currencies like US Dollars or UAE Dirhams. By passing KYC, you gain access to a broader range of services and transactions beyond cryptocurrencies.\n<br><br>\n<b>Get enhanced security</b>: Completing KYC helps ensure your account's security. In case you lose your password, you can easily restore access using your passport.\n<br><br>\nAt Bitbanker, we prioritize KYC to safeguard both our platform and our clients from any illegal activities related to \"dirty\" money.\n<br><br>\nTake a moment to verify your identity, and enjoy the full benefits of our platform.\n<br><br>\n❓Need help? We have a dedicated page in our <a href=\"https://bitbanker.org/faq#verification-kyc.how-can-pass-kyc-verification\">FAQ section</a>.\n</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 82,
          "lang": "en"
        },
        {
          "id": 126,
          "subject": "Зачем нужна верификация в Bitbanker",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nМы заметили, что вы не прошли верификацию личности (KYC)🤔\n<br><br>\nВерификация — это подтверждение личности по паспорту.\n<br><br>\n<b>Какие преимущества дает верификация</b>\n<br><br>\n1. Без верификации нельзя совершать операции с фиатными валютами: рублями, долларами США и дирхамами ОАЭ. Доступна только криптовалюта.<br>\n<br>\n2. Верификация позволяет восстановить доступ к аккаунту по паспорту, если пароль будет утерян.\n<br><br>\nС помощью KYC биржа защищает себя и клиентов от «грязных» денег, полученных незаконным путем.\n<br><br>\n❓Не знаете, как пройти KYC-верификацию? Мы подготовили <a href=\"https://bitbanker.org/faq#verification-kyc.how-can-pass-kyc-verification\">подробную инструкцию</a>.\n</mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 82,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 12,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 83,
      "type": "referral_letter_for_new_clients",
      "description": "Рассказываем о рефералке новым клиентам",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 139,
          "subject": "Share your promo code and earn rewards!",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nParticipate in our referral program! Whenever you invite someone and share your promo code, here's what you get:\n<br><br>\n👉 One month of commission-free trading;\n<br>\n👉 30% of all commissions paid by the referral;\n<br>\n👉 A 30 USDT reward credited to your balance.\n<br><br>\nThe first two bonuses are available to you immediately. You can withdraw the 30 USDT reward or transfer it to another Bitbanker account when the referral makes a currency exchange in the amount of 1,500 USD or more. \n<br><br>\nLearn more about Bitbanker promo codes <a href=\"https://bitbanker.org/faq#PromoCodes\">here</a>.\n\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 83,
          "lang": "en"
        },
        {
          "id": 127,
          "subject": "Зарабатывайте вместе с Bitbanker",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nУчаствуйте в нашей реферальной программе!<br> <br>За каждого приглашенного реферала вы получите:\n<br><br>\n\n— месяц торговли без комиссии\n<br><br>\n— 30% от комиссии реферала за каждую сделку в течение года\n    <br><br>  — 30 USDT\n<br>\n<br>\n\n\nПервые два бонуса активируются сразу.<br> 30 USDT можно вывести или перевести на другой аккаунт Bitbanker, если реферал обменяет валюту на общую сумму от 100 000 рублей в любой валюте в течение месяца после регистрации.\n<br><br>\nПодробные условия реферальной программы читайте в <a href=\"https://bitbanker.org/ru/faq#PromoCodes\">FAQ</a>.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n</mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 83,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 12,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 84,
      "type": "we_invite_you_to_take_the_survey",
      "description": "Зовем клиента дать обратную связь через опрос",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 128,
          "subject": "Оставьте отзыв о работе Bitbanker",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nПоделитесь своими впечатлениями о Bitbanker 🙌🏻\n       <br><br>\nМесяц назад вы зарегистрировались на Bitbanker.org. Расскажите, что думаете о нашем сервисе.\n<br><br>\n\tСпасибо, что вы с нами!\n\t<br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://forms.gle/6fVXgSeJxiBSXFsx6\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Пройти опрос</a>\n        </p>\n\t\n</mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 84,
          "lang": "ru"
        },
        {
          "id": 140,
          "subject": "What do you think of our services? Share your feedback",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nLet us know what you think about Bitbanker and help us improve our services! 🙌🏻\n        <br><br>\nA month ago, you registered at Bitbanker.org. Now, we'd love to hear about your experience with our service – what you liked, what you didn't, and how we helped you achieve your goals.\n        <br><br>\nClick the button below to fill out our feedback form.\n<br><br><br>\n<p style=\"text-align: center\">\n            <a href=\"https://forms.gle/pJPkpXsJZq4RKsQY8\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Fill out the form</a>\n        </p>\n\t<br><br>\n\tThank you for being part of the Bitbanker community!\n</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 84,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 12,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 92,
      "type": "start_recovery_password",
      "description": "Письмо с началом процедуры восстановления пароля",
      "vars": {
        "code": "Код подтверждения ",
        "email": "Email пользователя",
        "api_url": "Url подтверждения операции"
      },
      "is_active": true,
      "contents": [
        {
          "id": 143,
          "subject": "Подтвердите начало восстановления пароля",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\tНа сайте <a href=\"https://app.bitbanker.org\">Bitbanker</a> была запрошена процедура восстановления пароля для вашей учетной записи.\n\t<br><br>\n\tДля начала процедуры перейдите по <a href=\"{api_url}?email={email}&code={code}\">ссылке.</a>\n<br><br>\nЕсли это были не вы, немедленно обратитесь в службу поддержки через <a href=\"https://bitbanker.org/ru\">чат на сайте</a> или <a href=\"https://t.me/bitbanker_help_bot\">телеграм-бот</a>.\n</mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.</a>\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 92,
          "lang": "ru"
        },
        {
          "id": 144,
          "subject": "Password recovery request for your Bitbanker account",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nA password recovery procedure has been initiated for your <a href=\"https://app.bitbanker.org\">Bitbanker</a> account.\n\t<br><br>\nTo initiate the recovery process, please follow <a href=\"{api_url}?email={email}&code={code}\">this link</a>.\n\t<br><br>\nIf you did not initiate this request or have any concerns, please reach out to our <a href=\"https://bitbanker.org/ru\">support team</a> immediately for further assistance.\n</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 92,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 13,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 93,
      "type": "registration_code",
      "description": "Код подтверждения регистрации",
      "vars": {
        "confirmation_code": "Код подтверждения регистрации"
      },
      "is_active": true,
      "contents": [
        {
          "id": 145,
          "subject": "Registration confirmation code",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n{confirmation_code}\n<br><br>\nEnter the code on the website to complete your registration procedure on <a href=\"https://bitbanker.org\">Bitbanker.org</a>.\n</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 93,
          "lang": "en"
        },
        {
          "id": 146,
          "subject": "Код подтверждения регистрации",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n{confirmation_code}\n<br><br>\nВведите код на сайте, чтобы закончить регистрацию на <a href=\"https://bitbanker.org/ru\">Bitbanker.org</a>\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n      Если письмо пришло к вам по ошибке, просто проигнорируйте его.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 93,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": false,
      "group": 2,
      "subgroup_id": 13,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 120,
      "type": "insufficient_funds",
      "description": "На счету криптоматов недостаточно средств для операции",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 186,
          "subject": "Недостаточно средств для исполнения операции",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n  На вашем балансе недостаточно средств, чтобы клиент завершил пополнение баланса через криптомат. \n <br> <br>\n Пожалуйста, пополните баланс, чтобы не приостанавливать операции.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n</mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 120,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 14,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 121,
      "type": "investment_income",
      "description": "Уведомление о том, что клиенту начислен доход по инвестициям",
      "vars": {
        "balance": "Сумма баланса полученной валюты на счете",
        "currency_symbol": "Валюта дохода",
        "return_on_investment": "Сумма дохода по инвестициям"
      },
      "is_active": true,
      "contents": [
        {
          "id": 187,
          "subject": "Начислен доход по инвестпродукту",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n  Вам начислен доход {return_on_investment} {currency_symbol} \n      после вычета комиссии по инвестиционному продукту \n      «{name_of_investment}».  \n<br><br>\nНа вашем балансе доступно {balance} {currency_symbol}.\n      <br><br>\n      Если у вас возникли вопросы, пожалуйста, напишите нам \n      на invest@bitbanker.org, и мы с удовольствием вам \n      ответим.\n\t</mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Зарабатывайте в Bitbanker!\n      <br><br>\n      Приглашайте друзей <a href=\"https://bitbanker.org/ru/invest\">инвестировать в Bitbanker</a>. Заплатим за каждого друга, кто зарегистрируется \n      по вашей ссылке и подарим бонусы!\n      <br><br>\n      Ваш персональный промокод: <b>{promocode}</b>\n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/ru/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Подробнее</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n    Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 121,
          "lang": "ru"
        },
        {
          "id": 240,
          "subject": "Investment income has been credited",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nYou’ve earned a return of {return_on_investment} {currency_symbol} (net of fees) from the {name_of_investment} investment product.\n<br><br>\nYour available balance is now {balance} {currency_symbol}.\t\n   <br><br>\n    If you have any questions, feel free to contact us at invest@bitbanker.org, and we’ll be happy to assist you.\n    </mj-text>\n    </mj-section>\n\n<mj-section>\n    <mj-column>\n      <mj-divider padding=\"0\" border-width=\"1px\" border-color=\"#F0F4FA\" />\n    </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-image align=\"left\" width=\"80px\" height=\"80px\" src=\"https://main.cdn.aws.dev.bitbanker.org/img/emails/referral.png\"></mj-image>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n    <mj-text padding=\"0\">\n      Earn Rewards with Bitbanker!\n      <br><br>\n      Invite your friends <a href=\"https://bitbanker.org/ru/faq#promo-codes\">to invest in Bitbanker</a> and get paid. Earn 30 USDT\n      for every friend who signs up through your referral link, plus some \n      bonuses!  \n      <br><br>\n      Your personal promo code: <b>{promocode}</b>\n      \n      <br><br><br>\n      <p>\n        <a href=\"https://bitbanker.org/faq#promo-codes\" target=\"_blank\" style=\"padding: 16px 40px; border: 1px solid #2D5FB4; color: #2D5FB4; text-decoration: none; border-radius: 14px;\">Learn More</a>\n      </p>\n    </mj-text>\n  </mj-column>\n</mj-section>\n\n<mj-section>\n  <mj-column>\n\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n   This is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\">contact support</a>\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 121,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 17,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 125,
      "type": "admin_blocked_funds",
      "description": "Оператор заблокировал средства пользователя",
      "vars": {
        "amount": "сумма блокировки",
        "currency_symbol": "валюта средств"
      },
      "is_active": true,
      "contents": [
        {
          "id": 197,
          "subject": "Operator Blocked Funds",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nThe operator has blocked {amount} {currency_symbol} on your balance.\n<br><br>\nFor details regarding the procedure, please contact customer support.\n</mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 125,
          "lang": "en"
        },
        {
          "id": 194,
          "subject": "Средства заблокированы оператором",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nОператор заблокировал {amount} {currency_symbol} на вашем балансе.\n      <br><br>\n      Причину блокировки можно уточнить в службе поддержки.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 125,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 18,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 126,
      "type": "admin_unblocked_funds",
      "description": "Оператор разблокировал заблокированные средства",
      "vars": {
        "amount": "сумма блокировки",
        "currency_symbol": "валюта средств"
      },
      "is_active": true,
      "contents": [
        {
          "id": 195,
          "subject": "Средства разблокированы оператором",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nНа вашем балансе разблокированы {amount} {currency_symbol}.\n      <br><br>\n      Причину блокировки можно выяснить в службе поддержки.\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 126,
          "lang": "ru"
        },
        {
          "id": 198,
          "subject": "Operator Unblocked Funds",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n{amount} {currency_symbol} has been unblocked on your balance.\n<br><br>\nFor operation details, please contact customer support.\n\t\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 126,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 18,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 127,
      "type": "admin_write_out_funds",
      "description": "Заблокированные средства списаны со счета",
      "vars": {
        "amount": "сумма",
        "currency_symbol": "валюта средств"
      },
      "is_active": true,
      "contents": [
        {
          "id": 196,
          "subject": "Заблокированные средства списаны оператором",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nС вашего баланса списаны {amount} {currency_symbol}, которые были заблокированы \n      оператором. \n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 127,
          "lang": "ru"
        },
        {
          "id": 199,
          "subject": "Funds Withdrawn from Balance",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nAn amount of {amount} {currency_symbol} has been deducted from your \n      account balance. These funds have been temporarily reserved by \n      the operator.\n</mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 127,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 18,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 128,
      "type": "blocking_by_2FA",
      "description": "клиент неправильно ввел код 2 фа несколько раз при авторизации",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 203,
          "subject": "Вход в аккаунт заблокирован на 10 минут",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n     Вход в аккаунт заблокирован на 10 минут после неудачных попыток \n      ввести код двухфакторной аутентификации.\n      <br><br>\nЕсли это были не вы, срочно обратитесь в службу поддержки через\n      <a href=\"https://app.bitbanker.org/\">чат на сайте</a> или \n      <a href=\"https://t.me/bitbanker_help_bot\">Телеграм-бот</a>.\n    </mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    Это письмо содано автоматически. Пожалуйста не отвечайте на него.\n        </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 128,
          "lang": "ru"
        },
        {
          "id": 200,
          "subject": "Account Access Blocked for 10 Minutes",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n     Login has been restricted for 10 minutes. \n        <br><br>\n      This security measure is in response to multiple incorrect \n      attempts to enter the two-factor authentication code, aimed at \n      securing your account from unauthorized access.\n      <br><br>\nIf you did not initiate this operation, please contact our team \n      via <a href=\"https://app.bitbanker.org/\">the chat</a> or Telegram \n      <a href=\"https://t.me/bitbanker_help_bot\">support bot</a> immediately.\n    </mj-text>\n  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not reply to this email.\n        </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 128,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 13,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 129,
      "type": "changing_the_password",
      "description": "пользователь изменил пароль, ему заблокировался вывод на 1 час",
      "vars": {
        "user_email": "Email пользователя"
      },
      "is_active": true,
      "contents": [
        {
          "id": 201,
          "subject": "Пароль от аккаунта изменен",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\tВы изменили пароль для входа в аккаунт {user_email}. \n\t<br><br>\n\tВ целях безопасности мы ограничили вывод средств на 1 час.\n\t<br><br>\n\tЕсли это были не вы, срочно обратитесь в службу поддержки \n      через <a href=\"https://bitbanker.org/ru\">чат на сайте</a> \n      или <a href=\"https://t.me/bitbanker_help_bot\">Телеграм-бот</a>.\n\t</mj-text>\n\t <mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 129,
          "lang": "ru"
        },
        {
          "id": 202,
          "subject": "Password Change Notification for Your Account",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\tYou have successfully changed the password for the account associated \n      with {user_email}. \n\t<br><br>\n\tFor security purposes, we have temporarily restricted \n      withdrawal operations for 1 hour.\n\t<br><br>\n\tIf you did not initiate this operation, please contact the operator \n      via <a href=\"https://app.bitbanker.org/\">the chat</a> \n      or <a href=\"https://t.me/bitbanker_help_bot\">Telegram support bot</a> \n      immediately.\n\t</mj-text>\n\t <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 129,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 13,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 132,
      "type": "Test_invoice_2024",
      "description": "test",
      "vars": {},
      "is_active": true,
      "contents": [],
      "finalized": false,
      "is_supported": false,
      "group": 2,
      "subgroup_id": 1,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 448,
      "type": "contracts_accepted",
      "description": "Админ утвердил доки юзера",
      "vars": {
        "name_contracts": "Название договора"
      },
      "is_active": true,
      "contents": [
        {
          "id": 230,
          "subject": "The document is approved",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n    The document {name_contracts} is approved.\n\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 448,
          "lang": "en"
        },
        {
          "id": 228,
          "subject": "Ваши документы утверждены",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n    Документ {name_contracts} утвержден\n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 448,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 20,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 449,
      "type": "contracts_rejected",
      "description": "Админ отклонил договор юзера",
      "vars": {
        "reason": "Причина отклонения",
        "name_contracts": "Название договора"
      },
      "is_active": true,
      "contents": [
        {
          "id": 231,
          "subject": "The document is rejected",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n    Unfortunately, the document {name_contracts} has been rejected.\n<br><br>\n      Reason: {reason}.\n<br><br>\n     Please fill out the documents again considering the comment and upload it to your personal account. \n \n\t</mj-text> \n  <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 449,
          "lang": "en"
        },
        {
          "id": 229,
          "subject": "Документ отклонен",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nК сожалению, документ {name_contracts} отклонен.\n             <br> <br>\nПричина: {reason}.\n            <br> <br>\nПожалуйста, устраните ошибку и загрузите документ еще раз \n      в личном кабинете. \n           \n\t</mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\nЭто письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 449,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 20,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 719,
      "type": "change_address",
      "description": "Сообщаем, что адрес крипто-кошелька для депозитов изменился. Причину не указываем",
      "vars": {
        "currency_symbol": "криптовалюта, по которой изменился адрес кошелька"
      },
      "is_active": true,
      "contents": [
        {
          "id": 245,
          "subject": "Адрес вашего криптокошелька изменился",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nАдреса для пополнения счета криптовалютами в сети {blockchain_symbol} изменились.\n<br><br>\nНе забудьте проверить и отправить актуальные адреса кошельков, если вы ожидаете переводы.\n\t<br><br><br><br>\n<p style=\"text-align: center\">\n  <a href=\"https://app.bitbanker.org/wallet/deposit\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Открыть приложение</a>\n        </p>\n    </mj-text>\n\t<mj-text font-size=\"16px\" color=\"#8794AA\">\n     Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\">на сайте</a>.\n\t</mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 719,
          "lang": "ru"
        },
        {
          "id": 255,
          "subject": "Your Cryptocurrency Wallet Address Has Been Updated",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\nThe deposit addresses for cryptocurrencies on the {blockchain_symbol} network have been updated.\n<br><br>\nPlease verify and share the new wallet addresses if you are expecting incoming transfers.\n\t<br><br><br><br>\n<p style=\"text-align: center\">\n  <a href=\"https://app.bitbanker.org/wallet/deposit\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Open App</a>\n        </p>\n    </mj-text>\n\t <mj-text font-size=\"16px\" color=\"#8794AA\">\nThis is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org/ru\"> contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>\n",
          "email_template_id": 719,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 13,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 908,
      "type": "investment_application_buy",
      "description": "деньги для покупки инвест-стратегии отправляются управляющему",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 269,
          "subject": "Заявка на покупку инвестпродукта принята",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Ваша заявка на покупку инвестпродукта \n      {name_of_investment} на сумму {amount} {currency_symbol} \n      принята.\n\t  <br><br>\n    Количество лотов: {lot}\n      <br><br>\n    Ваши средства временно размещены на техническом счете. \n      Перевод в инвестиционный продукт может занять до 14 дней. \n      Мы уведомим вас, как только средства будут размещены в \n      продукте.\n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 908,
          "lang": "ru"
        },
        {
          "id": 272,
          "subject": " Investment product purchase request accepted",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Your request to purchase the {name_of_investment} investment product for {amount} {currency_symbol} has been accepted.\n\t  <br><br>\n   Number of lots: {lot}\n     <br><br>\n      Your funds are temporarily held in a technical account. Transferring them to the investment product may take up to 14 days. We will notify you once the funds are allocated to the product.\n    <br><br>\n    If you have any questions, feel free to contact us at invest@bitbanker.org, \n      and we’ll be happy to assist you.\n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org\">contact support</a>\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 908,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 17,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 909,
      "type": "investment_completed_buy",
      "description": "Уведомление клиента о том, что деньги зачислены в стратегию",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 273,
          "subject": "Средства переведены в инвестпродукт",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Ваша заявка на покупку инвестпродукта {name_of_investment} на сумму {amount} {currency_symbol} исполнена.\n\t  <br><br>\n    Количество лотов: {lot}\n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 909,
          "lang": "ru"
        },
        {
          "id": 274,
          "subject": "Funds allocated to the investment product",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Your request to purchase the {name_of_investment} investment product for {amount} {currency_symbol} has been successfully completed.\n\t  <br><br>\n   Number of lots: {lot}\n     <br><br>\n    If you have any questions, feel free to contact us at invest@bitbanker.org, \n      and we’ll be happy to assist you.\n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org\">contact support</a>\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 909,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 17,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 910,
      "type": "investment_application_sell",
      "description": "Заявка на продажу лотов инвестпродукта принята",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 275,
          "subject": "Заявка на продажу инвестпродукта в работе",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Мы получили вашу заявку на продажу инвестпродукта {name_of_investment} на сумму {amount} {currency_symbol}. \n\t  <br><br>\n    Количество лотов: {lot}\n      <br><br>\n    Вывод средств из стратегии занимает до 14 дней.\n      <br><br>\n      Если у вас возникли вопросы, пожалуйста, напишите нам на invest@bitbanker.org, и мы с удовольствием вам ответим.\n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 910,
          "lang": "ru"
        },
        {
          "id": 276,
          "subject": "Investment sell request in progress",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t We’ve received your request to sell the {name_of_investment} investment product for {amount} {currency_symbol}. \n\t  <br><br>\n   Number of lots: {lot}\n     <br><br>\nThe withdrawal process may take up to 14 days. \n     <br><br>\n    If you have any questions, feel free to contact us at invest@bitbanker.org, \n      and we’ll be happy to assist you.\n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org\">contact support</a>\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 910,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 17,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 911,
      "type": "investment_cancel_sell",
      "description": "заявка на продажу лотов инвестпродукта отменена",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 277,
          "subject": "Заявка на продажу инвестпродукта отменена",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Ваша заявка на продажу инвестпродукта {name_of_investment} \n      на сумму {amount} {currency_symbol} отменена. Ваши \n      средства остаются в инвестпродукте.\n\t  <br><br>\n    В соответствии с условиями стратегии, вы будете получать \n      регулярные выплаты и обновления по стоимости. Обо всех \n      обновлениях вы будете получать уведомления и сможете \n      отследить операции <a href=\"https://app.dev.bitbanker.org/investment/my\">в личном кабинете</a> .\n    <br><br>\n     Если у вас есть вопросы, напишите нам на invest@bitbanker.org, \n      и мы с радостью вам ответим. \n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    Это письмо создано автоматически. Пожалуйста, не отвечайте \n      на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 911,
          "lang": "ru"
        },
        {
          "id": 278,
          "subject": "Investment sell request canceled",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Your request to sell the {name_of_investment} investment product for {amount} {currency_symbol} has been canceled. Your funds remain in the investment product.\n\t  <br><br>\n   Number of lots: {lot}\n   <br><br>\nAs per the strategy terms, you will continue to receive regular updates and payouts. You’ll be notified of all updates and can track operations <a href=\"https://app.dev.bitbanker.org/investment/my\">in your account</a>.\n<br><br>\n     If you have any questions, feel free to contact us at invest@bitbanker.org, and we’ll be happy to assist you. \n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org\">contact support</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 911,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 17,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 912,
      "type": "investment_completed_sale",
      "description": "Заявка на продажу лотов инвестпродукта исполнена",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 280,
          "subject": "Funds from the investment product sale received",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Your request to sell the {name_of_investment} investment product for {amount} {currency_symbol} has been completed. The funds were credited to your account on {datetime}.\n\t  <br><br>\n   Number of lots: {lot}\n     <br><br>\n    The commission was {commission} {currency_symbol}.\n      <br><br>\n      Your available balance is now {balance} {currency_symbol}.\n      <br><br>\n      Invite your friends to invest in Bitbanker and get paid. Earn 30 USDT\n      for every friend who signs up through your referral link, plus some \n      bonuses!\n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org\">contact support</a>\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 912,
          "lang": "en"
        },
        {
          "id": 279,
          "subject": "Начислены средства от продажи инвестпродукта",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Ваша заявка на продажу инвестпродукта {name_of_investment} \n      на сумму {amount} {currency_symbol} исполнена. \n<br><br>\n    Количество лотов: {lot}\n      <br><br>\n      Средства поступили на ваш счет {datetime}. \n\t  <br><br>\n    Комиссия составила {commission} {currency_symbol}. \n      На вашем балансе доступно {balance} {currency_symbol}.\n      <br><br>\n      Если у вас возникли вопросы, пожалуйста, напишите нам \n      на invest@bitbanker.org, и мы с удовольствием вам ответим.\n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 912,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 17,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 913,
      "type": "investment_cancel_buy",
      "description": "Заявка на покупку лотов инвестпродукта отменена",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 281,
          "subject": "Заявка на покупку инвестпродукта отменена",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Ваша заявка на покупку инвестпродукта {name_of_investment} \n      на сумму {amount} {currency_symbol} отменена.\n\t  <br><br>\n    Средства были возвращены на ваш счет {datetime}.\n      <br><br>\n      Если у вас возникли вопросы, пожалуйста, напишите нам \n      на invest@bitbanker.org, и мы с удовольствием вам \n      ответим.\n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 913,
          "lang": "ru"
        },
        {
          "id": 282,
          "subject": "The investment product purchase request has been canceled",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Your request to purchase the {name_of_investment} investment product for {amount} {currency_symbol} has been canceled.\n\t  <br><br>\n   The funds were returned to your account on {datetime}.\n  <br><br>\n    If you have any questions, feel free to contact us at invest@bitbanker.org, and we’ll be happy to assist you.  \n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org\">contact support</a>\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 913,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 17,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 914,
      "type": "investment_admin_buy",
      "description": "Уведомление администратора, что клиент отправил заявку на покупку инвестпродукта",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 283,
          "subject": "Поступила заявка на покупку инвестпродукта",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Клиент {email} отправил заявку и средства на покупку \n      инвестпродукта {name_of_investment} в размере {amount} \n      {currency_symbol}.\n\t  <br><br>\n    Пожалуйста, выведите средства во внешний фонд и нажмите \n      \"Вывести в пул\" в личном кабинете. \n      <br><br>\n      Кол-во лотов: {lot}\n      <br>\n      Комиссия: {commission}\n      <br><br><br>\n       <p style=\"text-align: center\">\n            <a href=\"https://admin.dev.bitbanker.org/wl/1/investment/products\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Админ-панель</a>\n        </p>\n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 914,
          "lang": "ru"
        },
        {
          "id": 284,
          "subject": "New investment purchase request",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  The client {email} has submitted a request to purchase the {name_of_investment} investment product for {amount} {currency_symbol}. Please transfer the funds to the external pool and click 'Withdraw to pool' in the admin panel.\n\t  <br><br>\n   Number of lots: {lot}\n    <br><br>\n    Commission: {commission}\n      <br><br><br>\n     <p style=\"text-align: center\">\n            <a href=\"https://admin.dev.bitbanker.org/wl/1/investment/products\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Admin Panel</a>\n        </p> \n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org\">contact support</a>\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 914,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 17,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 915,
      "type": "investment_admin_sell",
      "description": "Уведомление админу, что клиент отправил заявку на продажу лотов инвестпродукта",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 285,
          "subject": "Поступила заявка на продажу инвестпродукта",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Клиент {email} отправил заявку на продажу инвестпродукта \n      {name_of_investment} в размере {amount} {currency_symbol}.\n\t  <br><br>\n    Пожалуйста, выведите средства из внешнего фонда и \n      перечислите клиенту.\n      <br><br>\n      Кол-во лотов: {lot}\n      <br><br><br>\n      <p style=\"text-align: center\">\n            <a href=\"https://admin.dev.bitbanker.org/wl/1/investment/products\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Админ-панель</a>\n        </p>\n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 915,
          "lang": "ru"
        },
        {
          "id": 286,
          "subject": "New investment sell request",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  The client {email} has submitted a request to sell the {name_of_investment} investment product for {amount} {currency_symbol}. Please transfer the funds from the external pool to the client’s account.\n\t  <br><br>\n   Number of lots: {lot}\n      <br><br><br>\n    <p style=\"text-align: center\">\n            <a href=\"https://admin.dev.bitbanker.org/wl/1/investment/products\" target=\"_blank\" style=\"padding: 20px 40px; background-color: #2D5FB4; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700;\">Admin Panel</a>\n        </p> \n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org\">contact support</a>\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 915,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 17,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 916,
      "type": "investment_manager_buy",
      "description": "Уведомление управляющего инвестпродуктом, что админ нажал \"вывести в пул\" средства клиента ",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 288,
          "subject": "New investment purchase request",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Funds have been credited to your account {manager_email} for the product {name_of_investment}.\n\t  <br><br>\n   Please allocate the funds to the strategy.\n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org\">contact support</a>\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 916,
          "lang": "en"
        },
        {
          "id": 287,
          "subject": "Поступила заявка на покупку инвестпродукта",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  На ваш счет {manager_email} поступили средства для размещения в продукте {name_of_investment}. \n      <br><br>\n      Пожалуйста, заведите средства в стратегию.\n    </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 916,
          "lang": "ru"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 17,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 917,
      "type": "investment_user_show_profit",
      "description": "Уведомление пользователя в случае, если администратор инвестпродукта нажал \"Показать доходность\"",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 289,
          "subject": "Обновлена нераспределенная прибыль по инвестпродукту",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t Ваша стратегия продолжает зарабатывать доход, текущий баланс {balance} {currency_symbol}. \n\t  <br><br>\n    Нераспределенная прибыль, без учета комиссий, на текущий момент составляет {accrued_income_abs} {currency_symbol} ({accrued_income_pct}%). \n    <br><br>\n    Если у вас возникли вопросы, пожалуйста, напишите нам на invest@bitbanker.org, и мы с удовольствием вам ответим\n      <br><br>\n      \n\t  </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 917,
          "lang": "ru"
        },
        {
          "id": 290,
          "subject": "Investment product profit has been updated",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t Your strategy continues to generate income. Your current balance is {balance} {currency_symbol}. \n\t  <br><br>\n    The current unrealized profit, excluding fees, is {accrued_income_abs} {currency_symbol}({accrued_income_pct}%). \n    <br><br>\n    If you have any questions, please feel free to contact us at invest@bitbanker.org, and we’ll be happy to assist you.\n    <br><br>\n\n      \n\t  </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    This is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org\">contact support</a>\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 917,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 17,
      "wl_short_name": "Bitbanker"
    },
    {
      "id": 919,
      "type": "investment_inviting_friends",
      "description": "Письмо с призывом приглашать друзей в инвестиции ББ",
      "vars": {},
      "is_active": true,
      "contents": [
        {
          "id": 270,
          "subject": "Приглашайте друзей инвестировать и зарабатывайте с ними",
          "content": "<mj-section>\n  <mj-column>\n      <mj-text>\n\t  Расскажите друзьям об инвестициях с Bitbanker и получайте \n      процент с их покупок. Чем больше ваши друзья инвестируют,\n      тем больше вы зарабатываете.\n\t  <br><br>\n    Обратите внимание: процент прибыли, который вы \n      получаете с покупок друзей, может варьироваться в \n      зависимости от выбранного инвестиционного продукта.\n    <br><br>\n    Узнать больше о том, как это работает, можно <a href=\"\">в статье FAQ</a>.\n\t  </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n    Это письмо создано автоматически. Пожалуйста, не отвечайте на него. Связаться с поддержкой можно <a href=\"https://bitbanker.org/ru\"> через сайт</a>.\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 919,
          "lang": "ru"
        },
        {
          "id": 271,
          "subject": "Invite your friends to invest and earn together",
          "content": "<mj-section>\n  <mj-column>\n    <mj-text>\n\t  Invite your friends to invest with Bitbanker and earn a \n      percentage of their purchases. The more your friends \n      invest, the more you earn.\n\t  <br><br>\n    Please note that the percentage you receive may vary \n      depending on the investment product your friends choose.\n    <br><br>\n    Learn more about how it works in our <a href=\"\">FAQ article</a>.\n\t  </mj-text>\n\t  <mj-text font-size=\"16px\" color=\"#8794AA\">\n   This is an automated message. Please do not reply to this email. \n<br><br>\nFor assistance, please <a href=\"https://bitbanker.org\">contact support</a>\n  </mj-text>\n  </mj-column>\n</mj-section>",
          "email_template_id": 919,
          "lang": "en"
        }
      ],
      "finalized": true,
      "is_supported": true,
      "group": 2,
      "subgroup_id": 17,
      "wl_short_name": "Bitbanker"
    }
  ],
  "page": 1,
  "count": 47,
  "per_page": 200
};

export const informGroups = {"items": [{"id": 9, "group": 2, "name": "Промокоды"}, {"id": 10, "group": 2, "name": "Вклады и займы"}, {"id": 11, "group": 2, "name": "KYC"}, {"id": 12, "group": 2, "name": "Welcome-рассылка"}, {"id": 13, "group": 2, "name": "Безопасность"}, {"id": 14, "group": 2, "name": "Уведомления"}, {"id": 16, "group": 2, "name": "test"}, {"id": 17, "group": 2, "name": "Инвестиции"}, {"id": 18, "group": 2, "name": "Блокировка средств"}, {"id": 19, "group": 2, "name": "Криптоэквайринг"}, {"id": 20, "group": 2, "name": "Договора"}]};

export const baseTemplate = {
  "content": "<mjml>\n  <mj-head>\n    <mj-title>Bitbanker Notification</mj-title>\n    <mj-attributes>\n      <mj-section padding=\"20px 10%\" background-color=\"white\" />\n      <mj-column padding=\"0\" />\n      <mj-text padding=\"20px 0\" />\n      <mj-image padding=\"0\" />\n      <mj-table padding=\"0\" />\n      <mj-class name=\"social-column\" width=\"12%\" />\n      <mj-font name=\"Roboto\" href=\"https://fonts.googleapis.com/css?family=Roboto\"/>\n       <mj-all font-family=\"'Roboto',\n          'ui-sans-serif',\n          '-apple-system',\n          'system-ui',\n          'Segoe UI',\n          'Roboto',\n          'Helvetica Neue',\n          'Arial',\n          'Noto Sans',\n          'sans-serif',\n          'Apple Color Emoji',\n          'Segoe UI Emoji',\n          'Segoe UI Symbol',\n          'Noto Color Emoji'\" font-size=\"18px\" line-height=\"1.3\" />\n    </mj-attributes>\n  </mj-head>\n  <mj-body background-color=\"#F0F4FA\">\n    <mj-wrapper padding=\"30px 15px\" background-color=\"#F0F4FA\">\n      <!--header-->\n      <mj-section background-color=\"white\" border-radius=\"20px 20px 0 0\" padding=\"55px 10% 0\">\n        <mj-column>\n          <mj-image href=\"https://bitbanker.org/\" align=\"left\" width=\"176px\" height=\"64px\" src=\"https://main.cdn.aws.bitbanker.org/wl/app.bitbanker.org/icons/mails/logo.png\"></mj-image>\n        </mj-column>\n      </mj-section>\n\n      <!--content-->\n\n      <!--footer-->\n      <mj-section background-color=\"#F8FAFD\" border-top=\"2px solid #F0F4FA\" padding-top=\"40px\" padding-bottom=\"32px\" css-class=\"row\">\n        <mj-column>\n          <mj-text font-size=\"14px\" color=\"#9AA5B7\" padding=\"0\">\n            © 2021–2026\n            <a href=\"https://bitbanker.org/\" style=\"text-decoration: none; color: #305cb4;\">Bitbanker.org</a>\n          </mj-text>\n        </mj-column>\n      </mj-section>\n      \n       <mj-section background-color=\"#F8FAFD\" padding-top=\"0px\" padding-bottom=\"32px\" css-class=\"row\">\n        <mj-column>\n          <mj-text font-size=\"12px\" color=\"#9AA5B7\" padding=\"0 0 16px\">Для связи:</mj-text>\n          <mj-text font-size=\"14px\" padding=\"0\" color=\"#2D5FB4\">contact@bitbanker.org</mj-text>\n        </mj-column>\n      </mj-section>\n\n      <mj-section padding-top=\"0px\" padding-bottom=\"36px\" background-color=\"#F8FAFD\" border-radius=\"0 0 20px 20px\" css-class=\"row\">\n        <mj-column>\n          <mj-text font-size=\"12px\" padding=\"0\" padding-bottom=\"16px\" color=\"#9AA5B7\">Сообщество Bitbanker</mj-text>\n          <mj-social padding=\"0\" inner-padding=\"0 24px 24px 0\" align=\"left\" font-size=\"15px\" icon-size=\"24px\" mode=\"horizontal\">\n            <mj-social-element background-color=\"transparent\" href=\"https://blog.bitbanker.org/ru/\" src=\"https://main.cdn.aws.bitbanker.org/wl/app.bitbanker.org/icons/mails/blog.png\" />\n            <mj-social-element background-color=\"transparent\" href=\"https://t.me/bitbanker_news\" src=\"https://main.cdn.aws.bitbanker.org/wl/app.bitbanker.org/icons/mails/telegram.png\" />\n            <mj-social-element background-color=\"transparent\" href=\"https://t.me/bitbanker_users\" src=\"https://main.cdn.aws.bitbanker.org/wl/app.bitbanker.org/icons/mails/telegram-chat.png\" />\n            <mj-social-element background-color=\"transparent\" href=\"https://vk.com/bitbanker\" src=\"https://main.cdn.aws.bitbanker.org/wl/app.bitbanker.org/icons/mails/vk.png\" />\n            <mj-social-element background-color=\"transparent\" href=\"https://vc.ru/bitbanker\" src=\"https://main.cdn.aws.bitbanker.org/wl/app.bitbanker.org/icons/mails/vc.png\" />\n            <mj-social-element background-color=\"transparent\" href=\"https://www.youtube.com/@bitbanker_org/featured\" src=\"https://main.cdn.aws.bitbanker.org/wl/app.bitbanker.org/icons/mails/youtube.png\" />\n          </mj-social>\n        </mj-column>\n      </mj-section>\n    </mj-wrapper>\n  </mj-body>\n</mjml>"
};