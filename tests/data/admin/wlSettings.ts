export const addUserWriteOff = {
  "is_default": false,
  "name": "Acc for write-off",
  "user_email": "qa+plwrwriteoffadmin@bitbanker.org"
};

export const bbWlSettings = {
  "ui_settings": {
    "links": {
      "faq": "https://dev.bitbanker.org/faq",
      "blog": "https://blog.dev.bitbanker.org",
      "tgBot": "https://t.me/bb_dev_notify_bot",
      "licenses": "https://dev.bitbanker.org/licenses",
      "pressKit": "https://bitbanker.org/presskit",
      "terms_en": "https://main.cdn.aws.dev.bitbanker.org/wl/app.dev.bitbanker.org/documents/terms_en.pdf",
      "terms_ru": "https://main.cdn.aws.dev.bitbanker.org/wl/app.dev.bitbanker.org/documents/terms.pdf",
      "companyName": "https://app.dev.bitbanker.org",
      "contactEmail": "contact@bitbanker.ru",
      "tgBotSupport": "https://t.me/bitbanker_help_bot",
      "socialNetworks": [
        {
          "link": "https://t.me/bitbanker_news",
          "name": "tg",
          "color": "#26A5E4",
          "is_active": true
        },
        {
          "link": "https://t.me/bitbanker_users",
          "name": "tg-chat",
          "color": "#26A5E4",
          "is_active": true
        },
        {
          "link": "https://vk.com/bitbanker",
          "name": "vk",
          "color": "#4680C2",
          "is_active": true
        },
        {
          "link": "https://vc.ru/bitbanker",
          "name": "vc",
          "color": "#D05D6F",
          "is_active": true
        },
        {
          "link": "https://www.youtube.com/@bitbanker_org",
          "name": "yt",
          "color": "#FF0000",
          "is_active": true
        },
        {
          "link": "https://twitter.com/bitbanker_org",
          "name": "twitter",
          "color": "#000000",
          "is_active": true
        },
        {
          "link": "https://www.instagram.com/",
          "name": "instagram",
          "color": "#E4405F",
          "is_active": false
        }
      ],
      "privacyPolicy_en": "https://main.cdn.aws.dev.bitbanker.org/wl/app.dev.bitbanker.org/documents/policy_en.pdf",
      "privacyPolicy_ru": "https://main.cdn.aws.dev.bitbanker.org/wl/app.dev.bitbanker.org/documents/policy.pdf",
      "cookiesConditions_en": "https://bitbanker.org/privacy-policy",
      "cookiesConditions_ru": "https://bitbanker.org/ru/privacy-policy"
    },
    "theme": {
      "css": ":root {\r\n  /* --------------------- Вне категории --------------------- */\r\n  --color-transparent: transparent;\r\n  --color-current: currentColor;\r\n  --color-inherit: inherit;\r\n  --color-black: #000;\r\n\r\n  /* ---------------------- Общие цвета ---------------------- */\r\n  --color-monochrome-max: #222B46;\r\n  --color-monochrome-zero: #ffffff;\r\n  --color-monochrome-zero-up: #F8FAFD;\r\n  --color-monochrome-zero-down: #E6EDF8;\r\n  --color-primary: #2D5FB4;\r\n  --color-primary-up: #4175CD;\r\n  --color-primary-down: #1F54AF;\r\n  --color-primary-medium: #C0DCFE;\r\n  --color-accent: #1E3787;\r\n  --color-sub-ocean: #4678CE;\r\n  --color-sub-ice: #4FB9D2;\r\n  --color-sub-ice-intensive: #4092A5;\r\n  --color-additional: #DBEAFC;\r\n  --color-additional-low: #EEF6FF;\r\n  --color-additional-up: #E4F1FF;\r\n  --color-additional-down: #D0E2F8;\r\n  --color-sky: #85A5E5;\r\n  --color-sky-down: #4288FF;\r\n  --color-negative: #F95D5D;\r\n  --color-negative-up: #FF7171;\r\n  --color-negative-down: #F25252;\r\n  --color-negative-medium: #F7C9C9;\r\n  --color-negative-low: #FFEFEF;\r\n  --color-positive: #40A55C;\r\n  --color-positive-up: #4AB568;\r\n  --color-positive-down: #369B52;\r\n  --color-positive-medium: #B8E3C4;\r\n  --color-positive-low: #E8FBED;\r\n  --color-sub-jungle: #4CDF75;\r\n  --color-sub-salat: #B6DE00;\r\n  --color-secondary: #FFB900;\r\n  --color-secondary-up: #FFC733;\r\n  --color-secondary-down: #FCA702;\r\n  --color-secondary-medium: #FFE0A3;\r\n  --color-secondary-low: #FFF6DE;\r\n  --color-secondary-intensive: #EB9B00;\r\n  --color-sub-ochre: #FFA800;\r\n  --color-monochrome-medium: #8794AA;\r\n  --color-monochrome-low: #F0F4FA;\r\n  --color-monochrome-intensive: #4E5D76;\r\n  --color-sub-rock: #8B91A2;\r\n  --color-disabled: #D2DCEF;\r\n\r\n  /* ---------------------- Системные нотификации ---------------------- */\r\n  --color-system-messages-positive: #E8FBED;\r\n  --color-system-messages-positive2: #40A55C;\r\n  --color-system-messages-negative: #FFEFEF;\r\n  --color-system-messages-negative2: #F95D5D;\r\n  --color-system-messages-pending: #FFF6DE;\r\n  --color-system-messages-pending2: #EB9B00;\r\n  --color-system-messages-info: #E4F1FF;\r\n  --color-system-messages-review: #EEFADA;\r\n  --color-system-messages-review2: #88993B;\r\n  --color-system-messages-rejected: #F0F4FA;\r\n  --color-system-messages-rejected2: #8794AA;\r\n\r\n  /* ---------------------- Иконки ---------------------- */\r\n  --color-icons-default: #222B46;\r\n  --color-icons-additional: #DBEAFC;\r\n\r\n  /* ---------------------- Информеры ---------------------- */\r\n  --color-informers-warning-bg: #FFB900;\r\n  --color-informers-warning-text: #E79A00;\r\n  --color-informers-info-bg: #689BF1;\r\n  --color-informers-info-text: #2D5FB4;\r\n  --color-informers-danger-bg: #FF5151;\r\n  --color-informers-danger-text: #F95D5D;\r\n  --color-informers-success-bg: #40A55C;\r\n  --color-informers-success-text: #40A55C;\r\n}\r\n\r\n/* ---------------------- Кнопки (Buttons/AppButton2) ---------------------- */\r\n.button2 {\r\n  &.button-extra-small {\r\n    border-radius: var(--radius-md);\r\n    padding-inline: calc(var(--spacing) * 2);\r\n    padding-block: calc(var(--spacing) * 1);\r\n    font-size: var(--text-xs);\r\n\r\n    &.is-icon {\r\n      padding: calc(var(--spacing) * 1);\r\n    }\r\n\r\n    &.is-round {\r\n      border-radius: 12px;\r\n    }\r\n  }\r\n\r\n  &.button-small {\r\n    border-radius: var(--radius-lg);\r\n    padding-inline: calc(var(--spacing) * 4);\r\n    padding-block: calc(var(--spacing) * 1.5);\r\n    font-size: var(--text-sm);\r\n\r\n    &.is-icon {\r\n      padding: calc(var(--spacing) * 1.5);\r\n    }\r\n\r\n    &.is-round {\r\n      border-radius: var(--radius-2xl);\r\n    }\r\n  }\r\n\r\n  &.button-medium {\r\n    border-radius: var(--radius-xl);\r\n    padding-inline: calc(var(--spacing) * 4);\r\n    padding-block: calc(var(--spacing) * 2);\r\n    font-size: var(--text-base);\r\n\r\n    &.is-icon {\r\n      padding: calc(var(--spacing) * 2);\r\n    }\r\n\r\n    &.is-round {\r\n      border-radius: var(--radius-3xl);\r\n    }\r\n  }\r\n\r\n  &.button-large {\r\n    border-radius: 12px;\r\n    padding-inline: calc(var(--spacing) * 6);\r\n    padding-block: calc(var(--spacing) * 4);\r\n    font-size: var(--text-base);\r\n\r\n    &.is-icon {\r\n      padding: calc(var(--spacing) * 4);\r\n    }\r\n\r\n    &.is-round {\r\n      border-radius: 28px;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n/* ---------------------- Алерты (AppAlert2) ---------------------- */\r\n.alert2 {\r\n  &.alert-small {\r\n    border-radius: var(--radius-lg);\r\n    padding: calc(var(--spacing) * 3);\r\n    font-size: 12px;\r\n  }\r\n\r\n  &.alert-default {\r\n    border-radius: 12px;\r\n    padding: calc(var(--spacing) * 4);\r\n    font-size: 16px;\r\n  }\r\n\r\n  &.alert-large {\r\n    border-radius: 16px;\r\n    padding: calc(var(--spacing) * 4);\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n",
      "ver": 3,
      "cssUrl": "https://cdn.oaistatic.com/assets/root-nl0dd3h2.css",
      "cssFile": "Bitbanker_theme_2025-11-28T13-06-33+0700Z.css",
      "enabled": false,
      "useStandartIcons": false
    },
    "companyName": {
      "en": "LLC Bitbanker",
      "ru": "Битбанкер"
    },
    "availableLocales": [
      "ky",
      "en",
      "ru"
    ],
    "titleCompanyName": "Bitbanker"
  },
  "short_name": "Bitbanker",
  "is_active": true,
  "is_maintenance": false,
  "is_video_guides_available": true,
  "is_tg_bot_available": true,
  "is_fee_enabled": true,
  "fee_pct": 1,
  "jivo_data": {
    "secret_key": "ffc790179c2b4f33faf4607a67f28f673b6a27afc98d9d746e47520b763d44c1",
    "widget_ids": {
      "en": "NLqTeVN7kG",
      "ky": "NLqTeVN7kK",
      "ru": "NLqTeVN7kM"
    }
  },
  "is_jivo_enabled": true,
  "is_limit_order_profit_enabled": true,
  "fee_pct_limit_order_profit": 4,
  "is_acquiring_available": true,
  "is_borrowing_available": true,
  "is_investing_available": true,
  "is_lending_available": true,
  "is_p2p_available": true,
  "is_trading_available": true,
  "is_banking_available": true,
  "is_contracts_available": true,
  "is_email_from_wl_domain": false,
  "is_sbp_available": true,
  "is_visa_available": true,
  "is_swift_available": true,
  "is_referral_bonus_available": true,
  "is_withdrawal_company_available": true,
  "is_person_withdrawal_company_available": true,
  "is_otc_deals_available": true,
  "is_public_orderbooks_available": true,
  "is_personal_qr_deposit_available": true,
  "is_corporate_qr_deposit_available": true,
  "is_cookie_policy_available": false,
  "is_cross_wl_withdrawals_via_blockchain": false,
  "internal_transfers_between_wl_enabled": true,
  "hide_sensitive_data": false,
  "is_onboarding_companies_available": true,
  "is_epr": false,
  "name": "Bitbanker",
  "domain": "app.dev.bitbanker.org",
  "owner_email": "qa+ownerbb@bitbanker.org",
  "borrowing_email": "qa+bank@bitbanker.org"
};