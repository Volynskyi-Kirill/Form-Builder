<script setup>
import { EVENT, QUESTION_TYPE } from '../constants'

const items = Object.values(QUESTION_TYPE).map((type) => ({ label: type }))
const emits = defineEmits([EVENT.ADD_QUESTION])

const addQuestion = (event) => {
  emits(EVENT.ADD_QUESTION, event.value)
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
