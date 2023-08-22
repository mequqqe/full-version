<script setup lang="ts">
interface Transaction {
  date: string
  operation: string
  buyer: string
  cost: number
  payment: string
}

const employeeData = [
  {
    employee: 'John Smith',
    product: 'Product A',
    serialNumber: '12345',
    quantity: 5,
    cost: 250,
  },
  {
    employee: 'Jane Doe',
    product: 'Product B',
    serialNumber: '67890',
    quantity: 3,
    cost: 180,
  },

  // ... (other employee data)
]

const transactions: Transaction[] = [
  {
    date: '2023-08-01',
    operation: 'Purchase',
    buyer: 'John Doe',
    cost: 100,
    payment: 'Credit Card',
  },
  {
    date: '2023-08-05',
    operation: 'Refund',
    buyer: 'Jane Smith',
    cost: -50,
    payment: 'PayPal',
  },

  // ... (other transactions)
]
</script>

<template>
  <div class="search-container">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Поиск..."
      class="search-input"
    >
  </div><div>
    <div class="button-container">
      <button
        class="icon-button"
        @click="handleButtonClick('add')"
      >
        <VIcon
          size="17"
          icon="tabler-repeat"
        />
      </button>
      <button
        class="icon-button"
        @click="handleButtonClick('edit')"
      >
        <VIcon
          size="17"
          icon="tabler-circle-plus"
        />
      </button>
      <button
        class="icon-button"
        @click="handleButtonClick('delete')"
      >
        <VIcon
          size="17"
          icon="tabler-list"
        />
      </button>
    </div>

    <!-- Другие кнопки с выбором диапазона дат могут быть добавлены здесь -->
  </div>

  <div class="button-container">
    <!-- Date range selection buttons -->
    <button
      class="date-button"
      @click="selectDateRange('today')"
    >
      C
    </button>
    <button
      class="date-button"
      @click="selectDateRange('all')"
    >
      B
    </button>
    <!-- Add and subtract day buttons -->
    <button
      class="nav-button"
      @click="navigateDays(-1)"
    >
      -
    </button>
    <button
      class="nav-button"
      @click="navigateDays(1)"
    >
      +
    </button>
  </div>
  <div>
    <table>
      <thead>
        <tr>
          <th>НОМЕР</th>
          <th>ДАТА</th>
          <th>ОПЕРАЦИЯ </th>
          <th>ПОКУПАТЕЛЬ</th>
          <th>СТОИМОСТЬ</th>
          <th>ОПЛАТА</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in transactions"
          :key="index"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.operation }}</td>
          <td>{{ item.buyer }}</td>
          <td>{{ item.cost }}</td>
          <td>{{ item.payment }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="table-spacing" />

  <!-- Main transactions table -->
  <div>
    <table class="custom-table">
      <thead>
        <tr>
          <th>СОТРУДНИК</th>
          <th>ТОВАР</th>
          <th>КОД/СЕРИЙНИК</th>
          <th>КОЛ-ВО</th>
          <th>СТОИМОСТЬ</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through transactions data -->
        <tr
          v-for="(item, index) in transactions"
          :key="index"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.operation }}</td>
          <td>{{ item.buyer }}</td>
          <td>{{ item.cost }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.search-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-button:hover {
  background-color: #3f3ca6;
}

table {
  border-collapse: collapse;
  inline-size: 100%;
}

th,
td {
  padding: 8px;
  border: 1px solid #ccc;
  text-align: start;
}

th {
  background-color: #f2f2f2;
}

.button-container {
  display: flex;
  align-items: center; /* Vertically align items */
  padding: 6px;
  gap: 10px;
}

.icon-button {
  border: none;
  border-radius: 4px;
  background-color: #7367f0;
  color: white;
  cursor: pointer;
  padding-block: 8px;
  padding-inline: 12px;
  transition: background-color 0.3s;
}

.icon-button:hover {
  background-color: #5e59d4;
}

.table-spacing {
  block-size: 40px; /* Adjust the spacing height as needed */
}

.icon-button i {
  font-size: 18px;
}

.date-button {
  border: none;
  background-color: #5e59d4;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.3s;
}

.date-button:hover {
  color: #5e59d4;
}

.nav-button {
  padding: 0;
  border: none;
  margin: 0;
  background-color: #5e59d4;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  transition: color 0.3s;
}

.nav-button:hover {
  color: #d45959;
}

.button-separator {
  background-color: #f06790;
  block-size: 1px;
  margin-block: 8px;
  margin-inline: 0;
}
</style>
