<script setup>
import { defineProps, ref, watch } from 'vue'
import Slider from 'primevue/slider'
import { QUESTION_TYPE } from './constants'

const props = defineProps({
  selectedQuestion: Object,
  textAreaSize: Number
})

const localTextAreaSize = ref(props.textAreaSize)

watch(
  () => props.textAreaSize,
  (newSize) => {
    localTextAreaSize.value = newSize
  }
)
</script>

<template>
  <div class="preview-question">
    <h3>Settings</h3>
    <div>
      <label for="questionLabel">Question</label>
      <input
        id="questionLabel"
        v-model="selectedQuestion.label"
        @input="$emit('update-question-label', $event)"
      />
    </div>
    <div v-if="selectedQuestion.type === QUESTION_TYPE.LONG">
      <label for="textAreaSize">Text field size</label>
      <Slider
        id="textAreaSize"
        v-model="localTextAreaSize"
        style="max-width: 400px"
        @change="$emit('update-text-area-size', localTextAreaSize)"
      />
    </div>
    <h4>PREVIEW</h4>
    <div>
      <p>{{ selectedQuestion.label }}</p>
      <textarea
        :rows="selectedQuestion.size"
        v-model="selectedQuestion.text"
        style="width: 100%"
      ></textarea>
    </div>
  </div>
</template>

<style scoped>
.preview-question {
  flex-grow: 1;
  border: solid 1px #ccc;
  padding: 20px;
  margin-left: 20px;
}
.preview-question h3 {
  margin-top: 0;
}
.preview-question div {
  margin-bottom: 1rem;
}
.preview-question label {
  display: block;
  font-weight: bold;
  margin: 1rem 0rem 0.5rem;
}
.preview-question input {
  max-width: 400px;
}
.preview-question input,
.preview-question textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}
h4 {
  margin: 1rem 0rem 0.5rem;
}
div > p {
  margin: 1rem 0rem 0.5rem;
}
</style>
