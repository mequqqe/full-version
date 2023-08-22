<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <label class="form-label">Implementation</label>
          <input
            type="text"
            class="form-control"
          >
          <label class="form-label">Date</label>
          <input
            type="date"
            class="form-control"
          >
          <label class="form-label">Buyer</label>
          <div class="d-flex align-items-center">
            <select
              class="form-select me-2"
              aria-label="Select a buyer"
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
              <i class="fas fa-user" />
            </button>
          </div>
        </div>
      </div>
      <!-- ... (rest of the code) -->
    </div>
    <!-- ... (rest of the code) -->
  </div>
</template>

<style scoped>
.container {
  margin-block: 0;
  margin-inline: auto;
  max-inline-size: 1200px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-inline: -15px;
}

.col-6 {
  flex: 0 0 50%;
  max-inline-size: 50%;
  padding-inline: 15px;
}

/* Add similar styles for other column sizes */

.form-group {
  margin-block-end: 1rem;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-block-end: 0.5rem;
}

.form-control {
  display: block;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  background-clip: padding-box;
  background-color: #fff;
  color: #495057;
  font-size: 1rem;
  inline-size: 100%;
  line-height: 1.5;
  padding-block: 0.375rem;
  padding-inline: 0.75rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-select {
  display: block;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  background-clip: padding-box;
  background-color: #fff;
  color: #495057;
  inline-size: 100%;
  line-height: 1.5;
  padding-block: 0.375rem;
  padding-inline: 0.75rem 1.75rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

/* Add styles for other form elements similarly */

.btn {
  display: inline-block;
  border: 1px solid #007bff;
  border-radius: 0.25rem;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding-block: 0.375rem;
  padding-inline: 0.75rem;
  text-align: center;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  user-select: none;
  vertical-align: middle;
}

.d-flex {
  display: flex;
}

.align-items-center {
  align-items: center;
}

/* Add any other necessary styles */
</style>
