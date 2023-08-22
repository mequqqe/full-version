<script setup lang="ts">
interface Transaction {
  date: string
  operation: string
  buyer: string
  cost: number
  payment: string
}

const transactions: Transaction[] = [
  {
    category: '3D принтер',
    product: '3D принтер Photon',
    optResidue: 5,
    currentBalance: 5,
    requiredQuantity: 5,
  },
  {
    category: '3D принтер',
    product: '3D принтер Photon',
    optResidue: 5,
    currentBalance: 5,
    requiredQuantity: 5,
  },

  // ... (other transactions)
]
</script>

<template>
  <div>
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

    <div class="button-container">
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

    <table>
      <thead>
        <tr>
          <th>КАТЕГОРИЯ</th>
          <th>ТОВАР</th>
          <th>ОПТИМАЛЬНЫЙ ОСТАТОК </th>
          <th>ТЕКУЩИЙ ОСТАТОК </th>
          <th>НЕОБХОДИМОЕ КОЛ-ВО</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in transactions"
          :key="index"
        >
          <td>{{ item.category }}</td>
          <td>{{ item.product }}</td>
          <td>{{ item.optResidue }}</td>
          <td>{{ item.currentBalance }}</td>
          <td>{{ item.requiredQuantity }}</td>
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
</style>
