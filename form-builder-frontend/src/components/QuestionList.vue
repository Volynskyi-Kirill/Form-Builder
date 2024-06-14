<script setup>
import { EVENT } from '../constants'

defineProps({
  questions: Array,
  selectedQuestion: Object
})

defineEmits([EVENT.SELECT_QUESTION, EVENT.DELETE_QUESTION])
</script>

<template>
  <div>
    <div
      v-for="question in questions"
      :key="question._id"
      :class="[
        'question-item',
        { 'question-item-selected': selectedQuestion?._id === question._id }
      ]"
    >
      <Card class="card" @click="() => $emit(EVENT.SELECT_QUESTION, question)">
        <template #title>
          <span>{{ question.title }}</span>
          <Button
            icon="pi pi-times"
            class="p-button-danger p-button-text delete-button"
            @click.stop="() => $emit(EVENT.DELETE_QUESTION, question._id)"
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
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

:deep().p-card-body {
  padding: 1rem;
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
