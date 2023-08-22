<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <!-- Первая группа -->
        <div class="form-group">
          <label>Реализация </label>
          <input
            type="text"
            class="form-control"
          >
          <label>Дата</label>
          <input
            type="date"
            class="form-control"
          >
          <label>Покупатель</label>
          <div class="d-flex align-items-center">
            <select
              class="form-select me-2"
              aria-label="Выберите покупателя"
            >
              <option selected>
                IBM
              </option>
              <option value="1">
                Microsoft
              </option>
              <option value="2">
                Nvidia
              </option>
              <option value="3">
                AMD
              </option>
            </select>
            <button class="btn btn-primary">
              <FontAwesomeIcon :icon="['fas', 'user']" />
            </button>
          </div>
        </div>
      </div>
      <div class="col-3">
        <!-- Вторая группа -->
        <div class="form-group">
          <div class="form-check form-switch">
            <input
              id="flexSwitchCheckChecked"
              class="form-check-input"
              type="checkbox"
              checked
            >
            <label
              class="form-check-label"
              for="flexSwitchCheckChecked"
            >Закрыть после сохранения</label>
          </div>
          <div class="form-check form-switch">
            <input
              id="flexSwitchCheckChecked"
              class="form-check-input"
              type="checkbox"
              checked
            >
            <label
              class="form-check-label"
              for="flexSwitchCheckChecked"
            >Закрыть после оплаты</label>
          </div>
          <div class="form-check form-switch">
            <input
              id="flexSwitchCheckChecked"
              class="form-check-input"
              type="checkbox"
              checked
            >
            <label
              class="form-check-label"
              for="flexSwitchCheckChecked"
            >Печать чека после оплаты</label>
          </div>
          <div class="form-check form-switch">
            <input
              id="flexSwitchCheckChecked"
              class="form-check-input"
              type="checkbox"
              checked
            >
            <label
              class="form-check-label"
              for="flexSwitchCheckChecked"
            >Умножить стоимость на курс</label>
          </div>
          <label>Текущий курс</label>
          <input
            type="number"
            class="form-control"
          >
        </div>
      </div>
      <div class="col-3">
        <!-- Третья группа -->
        <div class="form-group">
          <label>Тип цены</label>
          <select class="form-select">
            <option value="1">
              1
            </option>
            <option value="2">
              2
            </option>
            <option value="3">
              3
            </option>
          </select>
          <label>Сумма</label>
          <input
            type="number"
            class="form-control"
          >
          <label>Скидка</label>
          <input
            type="number"
            class="form-control"
          >
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-9">
        <!-- Длинный селект и кнопки -->
        <div class="form-group">
          <div class="row">
            <div class="col-9">
              <select class="form-control" />
            </div>
            <div class="col-3">
              <button class="btn btn-primary me-2">
                <FontAwesomeIcon :icon="['fas', 'cart-shopping']" />
              </button>
              <button class="btn btn-primary me-2">
                <FontAwesomeIcon :icon="['fas', 'wrench']" />
              </button>
              <button class="btn btn-primary me-2">
                <FontAwesomeIcon :icon="['fas', 'eye']" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-9">
        <!-- Таблица -->
        <table class="table">
          <thead>
            <tr>
              <th>Наименование</th>
              <th>Кол-во</th>
              <th>Стоимость</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-3">
        <!-- Примечание и кнопки -->
        <div class="form-group">
          <label>Примечание</label>
          <textarea class="form-control" />
          <div class="mt-3 d-grid gap-2 col-12 mx-auto">
            <button class="btn btn-primary">
              Документы
            </button>
          </div>
          <div class="mt-3 d-grid gap-2 col-12 mx-auto">
            <button class="btn btn-primary">
              Оплаты
            </button>
          </div>
          <!-- Место для блока кнопок -->
        </div>
      </div>
    </div>
  </div>
</template>
