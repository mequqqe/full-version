export default [
  { heading: 'Отчеты' },
  {
    title: 'Должники',
    icon: { icon: 'tabler-user-minus' },
    children: [
      { title: 'Autocomplete', to: 'forms-autocomplete' },
      { title: 'Checkbox', to: 'forms-checkbox' },
      { title: 'Combobox', to: 'forms-combobox' },
      { title: 'Date Time Picker', to: 'forms-date-time-picker' },
      { title: 'File Input', to: 'forms-file-input' },
      { title: 'Radio', to: 'forms-radio' },
      { title: 'Custom Input', to: 'forms-custom-input' },
      { title: 'Range Slider', to: 'forms-range-slider' },
      { title: 'Rating', to: 'forms-rating' },
      { title: 'Select', to: 'forms-select' },
      { title: 'Slider', to: 'forms-slider' },
      { title: 'Switch', to: 'forms-switch' },
      { title: 'Textarea', to: 'forms-textarea' },
      { title: 'Textfield', to: 'forms-textfield' },
    ],
  },
  {
    title: 'Кредиторы',
    icon: { icon: 'tabler-user-plus' },
    to: 'forms-form-layouts',
  },
  {
    title: 'Движение товара',
    icon: { icon: 'tabler-replace' },
    to: 'forms-form-validation',
  },
  {
    title: 'Расход торвара',
    icon: { icon: 'tabler-transfer-out' },
    children: [
      { title: 'Simple Table', to: 'tables-simple-table' },
      { title: 'Data Table', to: 'tables-data-table' },
    ],
  },
  {
    title: 'По продажам',
    icon: { icon: 'tabler-file-dollar' },
    children: [
      { title: 'Simple Table', to: 'tables-simple-table' },
      { title: 'Data Table', to: 'tables-data-table' },
    ],
  },
  {
    title: 'По сервису',
    icon: { icon: 'tabler-file-analytics' },
    children: [
      { title: 'Simple Table', to: 'tables-simple-table' },
      { title: 'Data Table', to: 'tables-data-table' },
    ],
  },
  {
    title: 'По сотрудникам',
    icon: { icon: 'tabler-user' },
    children: [
      { title: 'Simple Table', to: 'tables-simple-table' },
      { title: 'Data Table', to: 'tables-data-table' },
    ],
  },
]
