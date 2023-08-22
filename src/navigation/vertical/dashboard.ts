export default [
  {
    title: 'Добавить',
    icon: { icon: 'tabler-smart-home' },
    children: [
      {
        title: 'Новый ремонт',
        to: 'dashboards-analytics',
      },
      {
        title: 'Новая продажа',
        to: 'dashboards-ecommerce',
      },
      {
        title: 'Новая задача',
        to: 'dashboards-crm',
      },
      {
        title: 'Новая запись',
        to: 'dashboards-crm',
      },
    ],
    badgeContent: '3',
    badgeClass: 'bg-primary',
  },
]
