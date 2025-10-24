import { defineConfig } from "vitepress";

export default defineConfig({
  title: " ",
  description: "Официальная документация прокторинговой системы TrustExam",
  lang: "ru-RU",

  vite: {
    assetsInclude: [
      "**/*..jpg",
      "**/*.JPEG",
      "**/*..jpg",
      "**/*.jpeg",
      "**/*png,",
      "**/*PNG,",
    ],
  },

  themeConfig: {
    // Логотип и навигация
    logo: "/images/trustexam-logo.png", // добавьте логотип если нужно

    // Навигационная панель (верхнее меню)
    nav: [
      { text: "Главная", link: "/" },
      { text: "Быстрый старт", link: "/getting-started" },
      {
        text: "Руководства",
        items: [
          { text: "Для Студентов", link: "/students/" },
          { text: "Для Менеджеров/Учителей", link: "/managers/" },
          { text: "Для администраторов", link: "/admin/" },
        ],
      },
      { text: "Частые вопросы", link: "/faq" },
    ],

    // Боковая панель (sidebar)
    sidebar: {
      // Сайдбар для студентов
      "/students/": [
        {
          text: "Для Студентов",
          items: [
            { text: "Введение", link: "/students/" },
            // добавьте другие страницы студентов
          ],
        },
      ],

      // Сайдбар для менеджеров - ОСНОВНОЙ
      "/managers/": [
        {
          text: "Для Менеджеров/Учителей",
          items: [{ text: "Введение", link: "/managers/" }],
        },
        {
          text: "Управление Контентом",
          collapsed: false, // развернуто по умолчанию
          items: [
            { text: "Создание Теста (Quiz)", link: "/managers/create-quiz" },
            { text: "Управление Группами", link: "/managers/manage-classes" },
          ],
        },
        {
          text: "Создание Экзамена (Assignments)",
          collapsed: false,
          items: [
            {
              text: "Назначение и Планирование",
              link: "/managers/create-assignments",
            },
            {
              text: "Настройка прокторинга",
              link: "/managers/proctoring-settings",
            },
          ],
        },
      ],

      // Сайдбар для администраторов
      "/admin/": [
        {
          text: "Для администраторов",
          items: [
            { text: "Введение", link: "/admin/" },
            { text: "Мониторинг системы", link: "/admin/system-monitoring" },
          ],
        },
      ],
    },

    // Поиск
    search: {
      provider: "local",
    },

    // Хлебные крошки
    outline: {
      level: [2, 3],
      label: "На этой странице",
    },

    // Футер
    footer: {
      message:
        "TrustExam - надежный партнер в организации честного тестирования",
      copyright: `Copyright © ${new Date().getFullYear()} TrustExam`,
    },

    // Дополнительные настройки темы
    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница",
    },

    lastUpdated: {
      text: "Обновлено",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },

  // Markdown настройки
  markdown: {
    lineNumbers: true,
  },

  // Последнее обновление
  lastUpdated: true,
});
