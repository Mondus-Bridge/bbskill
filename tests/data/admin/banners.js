export const allBanners = [
  {"id": 5, "is_active": true, "name": "Приглашайте друзей и зарабатывайте!", "order": 0}, 
  {"id": 8, "is_active": true, "name": "P2P", "order": 1}, 
  {"id": 7, "is_active": true, "name": "Карты", "order": 2}, 
  {"id": 14, "is_active": true, "name": "Playwright", "order": 3}, 
  {"id": 33, "is_active": true, "name": "Dont touch 1 (banner for auto test)", "order": 4}, 
  {"id": 34, "is_active": true, "name": "Dont touch 2 (banner for auto test)", "order": 5}
];

export const rotation = {"banner_rotation_delay": 5};

export const specificBanner7 = {"id": 7, "is_active": true, "name": "Карты", "order": 2, 
  "data": {"en": {"btn": {"text": "More", "linkMobile": "https://dev.bitbanker.org/cards", "linkDesktop": "https://dev.bitbanker.org/cards"}, "text": "Pay for your purchases with a virtual card linked to your account!", "caption": "Connect a virtual card"}, "ru": {"btn": {"text": "Подробнее", "linkMobile": "https://dev.bitbanker.org/ru/cards", "linkDesktop": "https://dev.bitbanker.org/ru/cards"}, "text": "Оплачивайте ваши покупки виртуальной картой, привязанной к вашему счёту!", "caption": "Подключите виртуальную карту"}}, 
  "is_section_visit_counter_enabled": true, "section_visit_count": 20000, "is_banner_dismiss_enabled": true, "banner_dismiss_count": 2, "is_group_enabled": false, "group_id": 19
};

export const changeOrders = [
  { name: 'Order 1', payload: { ids: [8, 5, 7, 14, 33, 34] } }, //orignal order
  { name: 'Order 2', payload: { ids: [5, 8, 7, 14, 33, 34] } } //updated order
];

export const bannerCreate = {
  "banner_dismiss_count": 1,
  "data": {
  "en": {"btn": {"text": "More", "linkMobile": "https://dev.bitbanker.org/cards", "linkDesktop": "https://dev.bitbanker.org/cards"}, "text": "Pay for your purchases with a virtual card linked to your account!", "caption": "Connect a virtual card"}, 
  "ru": {"btn": {"text": "Подробнее", "linkMobile": "https://dev.bitbanker.org/ru/cards", "linkDesktop": "https://dev.bitbanker.org/ru/cards"}, 
  "text": "Оплачивайте ваши покупки виртуальной картой, привязанной к вашему счёту!", "caption": "Подключите виртуальную карту"}},
  "group_id": null,
  "is_active": true,
  "is_banner_dismiss_enabled": true,
  "is_group_enabled": false,
  "is_section_visit_counter_enabled": true,
  "name":"PlaywrightActions",
  "section_visit_count": 1
};

export const bannerEdited = {
  "banner_dismiss_count": 1,
  "data": {
  "en": {"btn": {"text": "More", "linkMobile": "https://dev.bitbanker.org/cards", "linkDesktop": "https://dev.bitbanker.org/cards"}, "text": "Pay for your purchases with a virtual card linked to your account!", "caption": "Connect a virtual card"}, 
  "ru": {"btn": {"text": "Подробнее", "linkMobile": "https://dev.bitbanker.org/ru/cards", "linkDesktop": "https://dev.bitbanker.org/ru/cards"}, 
  "text": "Оплачивайте ваши покупки виртуальной картой, привязанной к вашему счёту!", "caption": "Подключите виртуальную карту"}},
  "group_id": null,
  "is_active": false,
  "is_banner_dismiss_enabled": true,
  "is_group_enabled": false,
  "is_section_visit_counter_enabled": true,
  "name":"PlaywrightEdited",
  "section_visit_count": 1
};

export const limitedBanner = [
  {
    "id": 8,
    "is_active": true,
    "name": "P2P",
    "order": 1,
    "data": {
      "en": {
        "btn": {
          "text": "More",
          "linkMobile": "https://dev.bitbanker.org/p2p",
          "linkDesktop": "https://dev.bitbanker.org/p2p"
        },
        "text": "Safe balance replenishment in rubles or withdrawal to bank cards.",
        "caption": "P2P withdrawal and balance replenishment"
      },
      "ru": {
        "btn": {
          "text": "Подробнее",
          "linkMobile": "https://dev.bitbanker.org/ru/p2p",
          "linkDesktop": "https://dev.bitbanker.org/ru/p2p"
        },
        "text": "Безопасное пополнение баланса рублями или вывод на банковские карты.",
        "caption": "P2P‑вывод и пополнение баланса"
      }
    }
  },
  {
    "id": 7,
    "is_active": true,
    "name": "Карты",
    "order": 2,
    "data": {
      "en": {
        "btn": {
          "text": "More",
          "linkMobile": "https://dev.bitbanker.org/cards",
          "linkDesktop": "https://dev.bitbanker.org/cards"
        },
        "text": "Pay for your purchases with a virtual card linked to your account!",
        "caption": "Connect a virtual card"
      },
      "ru": {
        "btn": {
          "text": "Подробнее",
          "linkMobile": "https://dev.bitbanker.org/ru/cards",
          "linkDesktop": "https://dev.bitbanker.org/ru/cards"
        },
        "text": "Оплачивайте ваши покупки виртуальной картой, привязанной к вашему счёту!",
        "caption": "Подключите виртуальную карту"
      }
    }
  },
  {
    "id": 14,
    "is_active": true,
    "name": "Playwright",
    "order": 3,
    "data": {
      "en": {
        "btn": {
          "text": "More",
          "linkMobile": "https://playwright.dev/",
          "linkDesktop": "https://playwright.dev/"
        },
        "text": "Playwright enables reliable end-to-end testing for modern web apps.",
        "caption": "Be with a Playwright"
      },
      "ky": {
        "btn": {
          "text": "Подробнее",
          "linkMobile": "https://playwright.dev/",
          "linkDesktop": "https://playwright.dev/"
        },
        "text": "Playwright обеспечивает надежное сквозное тестирование современных веб-приложений.",
        "caption": "Будь с Playwright"
      },
      "ru": {
        "btn": {
          "text": "Подробнее",
          "linkMobile": "https://playwright.dev/",
          "linkDesktop": "https://playwright.dev/"
        },
        "text": "Playwright обеспечивает надежное сквозное тестирование современных веб-приложений.",
        "caption": "Будь с Playwright"
      }
    }
  },
  {
    "id": 33,
    "is_active": true,
    "name": "Dont touch 1 (banner for auto test)",
    "order": 4,
    "data": {
      "en": {
        "btn": {
          "text": "More",
          "linkMobile": "https://playwright.dev/",
          "linkDesktop": "https://playwright.dev/"
        },
        "text": "Any browser • Any platform • One API",
        "caption": "Auto tests tool"
      }
    }
  }
];