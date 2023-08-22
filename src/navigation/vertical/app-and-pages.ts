export default [
  { heading: 'Основное' },
  {
    title: 'Главная',
    icon: { icon: 'tabler:home-2' },
    to: 'apps-email',
  },
  {
    title: 'Сервис',
    icon: { icon: 'tabler:tool' },
    to: 'apps-chat',
  },
  {
    title: 'Магазин',
    icon: { icon: 'tabler:shopping-cart' },
    to: 'apps-calendar',
  },
  {
    title: 'Задачи',
    icon: { icon: 'tabler:list-details' },

    children: [
      { title: 'List', to: 'apps-invoice-list' },
      { title: 'Preview', to: { name: 'apps-invoice-preview-id', params: { id: '5036' } } },
      { title: 'Edit', to: { name: 'apps-invoice-edit-id', params: { id: '5036' } } },
      { title: 'Add', to: 'apps-invoice-add' },
    ],
  },
  {
    title: 'Записи',
    icon: { icon: 'tabler:list-check' },
    children: [
      { title: 'List', to: 'apps-user-list' },
      { title: 'View', to: { name: 'apps-user-view-id', params: { id: 21 } } },
    ],
  },
  {
    title: 'Финансы',
    icon: { icon: 'tabler:file-dollar' },
    to: 'apps-roles',
  },
  {
    title: 'Склад',
    icon: { icon: 'tabler:building-warehouse' },
    children: [
      { title: 'Help Center', to: 'pages-help-center' },
      { title: 'User Profile', to: { name: 'pages-user-profile-tab', params: { tab: 'profile' } } },
      { title: 'Account Settings', to: { name: 'pages-account-settings-tab', params: { tab: 'account' } } },
    ],
  },
  {
    title: 'Заказы',
    icon: { icon: 'tabler-package' },
    to: 'pages-pricing',
  },
]
