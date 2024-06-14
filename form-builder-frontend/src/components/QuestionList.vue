<script setup>
import { defineProps, defineEmits } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'

const props = defineProps({
  questions: Array,
  selectedQuestion: Object
})

const emits = defineEmits(['select-question', 'delete-question'])
</script>

<template>
  <div>
    <div
      v-for="(question, index) in questions"
      :key="index"
      :class="['question-item', { 'question-item-selected': selectedQuestion?.id === question.id }]"
    >
      <Card class="card" @click="() => $emit('select-question', question)">
        <template #title>
          <span>{{ question.label }}</span>
          <Button
            icon="pi pi-times"
            class="p-button-danger p-button-text delete-button"
            @click.stop="() => $emit('delete-question', question.id)"
          />
          <p class="question-type">{{ question.type }}</p>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.question-item {
  margin-bottom: 1rem;
}
.card {
  position: relative;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.delete-button {
  position: absolute;
  top: 10px;
  right: 10px;
}
.question-type {
  font-size: 0.9rem;
  color: #888;
  margin-top: 0.5rem;
}
.question-item-selected .card {
  border: 1px solid #2f94ff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  background-color: rgba(221, 221, 221, 0.2);
}
</style>
