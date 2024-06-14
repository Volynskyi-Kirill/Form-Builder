<template>
  <header class="header">
    <span class="title">Form builder prototype</span>
    <Button label="Save" icon="pi pi-save" class="save-button" />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  padding: 10px 20px;
  color: white;
}

.title {
  font-size: 1.5rem;
}

.save-button {
  background-color: white;
  color: black;
  padding: 10px 30px;
}

.save-button:hover {
  background-color: #f1f1f1;
}

::v-deep .p-button .p-button-icon-left {
  margin-right: 0.5rem;
}
</style>
