<script setup>
import { useToast } from 'primevue/usetoast'
import { saveQuestion } from '../formBuilderSetup.js'

const toast = useToast()

const handleSaveQuestion = async () => {
  try {
    await saveQuestion()
    toast.add({ severity: 'success', summary: 'question saved', life: 1200 })
  } catch (error) {
    toast.add({ severity: 'warn', summary: `${error}`, life: 2000 })
  }
}
</script>

<template>
  <Toast></Toast>
  <header class="header">
    <span class="title">Form builder prototype</span>
    <Button @click="handleSaveQuestion" label="Save" icon="pi pi-save" class="save-button" />
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
</style>
