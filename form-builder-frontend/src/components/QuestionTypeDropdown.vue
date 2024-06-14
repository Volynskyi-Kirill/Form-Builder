<script setup>
import { defineProps, defineEmits } from 'vue'
import Dropdown from 'primevue/dropdown'

const props = defineProps({
  items: Array
})

const emits = defineEmits(['add-question'])

const addQuestion = (event) => {
  emits('add-question', event.value)
}
</script>

<template>
  <Dropdown
    :options="items"
    optionLabel="label"
    placeholder="Select a question type"
    @change="addQuestion"
    class="dropdown"
  />
</template>

<style scoped>
.dropdown {
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
