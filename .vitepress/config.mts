import { defineConfig } from "vitepress";

export default defineConfig({
  title: " ",
  description: "Официальная документация прокторинговой системы TrustExam",
  lang: "ru-RU",

  vite: {
    assetsInclude: ["**/*.jpg", "**/*.jpeg", "**/*.png", "**/*.gif"],
  },

  themeConfig: {
    logo: "/logo.svg",

    nav: [
      { text: "Главная", link: "/" },
      { text: "Быстрый старт", link: "/getting-started" },
      {
        text: "Руководства",
        items: [
          { text: "Для студентов", link: "/students/" },
          { text: "Для менеджеров/Учителей", link: "/managers/" },
          { text: "Для администраторов", link: "/admin/" },
        ],
      },
      { text: "Частые вопросы", link: "/faq" },
    ],

    sidebar: {
      "/students/": [
        {
          text: "Для студентов",
          items: [{ text: "Введение", link: "/students/" }],
        },
      ],

      "/managers/": [
        {
          text: "Для менеджеров/учителей",
          items: [{ text: "Введение", link: "/managers/" }],
        },
        {
          text: "Управление контентом",
          collapsed: false,
          items: [
            { text: "Создание Теста (Quiz)", link: "/managers/create-quiz" },
            { text: "Управление Группами", link: "/managers/manage-classes" },
          ],
        },
        {
          text: "Создание экзамена (Assignments)",
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

    search: {
      provider: "local",
    },

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
