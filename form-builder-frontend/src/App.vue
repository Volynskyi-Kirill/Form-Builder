<script setup>
import Header from './components/Header.vue'
import FormBuilder from './components/FormBuilder.vue'
</script>

<template>
  <Header />
  <FormBuilder />
</template>

<style>
* {
  box-sizing: border-box;
}
body,
html {
  height: 100%;
  width: 100%;
  margin: 0;
}
@media (max-width: 440px) {
  .p-toast {
    width: 18rem;
    top: 10px;
    padding: 0 10px;
  }
}
</style>
