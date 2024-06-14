<script setup>
import {
  questions,
  selectedQuestion,
  textAreaSize,
  items,
  addQuestion,
  deleteQuestion,
  selectQuestion,
  updateQuestionLabel,
  updateQuestionText,
  updateTextAreaSize
} from './formBuilderSetup'
import QuestionList from './QuestionList.vue'
import QuestionTypeDropdown from './QuestionTypeDropdown.vue'
import QuestionPreview from './QuestionPreview.vue'
</script>

<template>
  <div class="wrapper">
    <div class="form-builder-container">
      <QuestionList
        :questions="questions"
        :selected-question="selectedQuestion"
        @select-question="selectQuestion"
        @delete-question="deleteQuestion"
      />
      <QuestionTypeDropdown :items="items" @add-question="addQuestion" />
    </div>
    <QuestionPreview
      v-if="selectedQuestion"
      :selected-question="selectedQuestion"
      :text-area-size="textAreaSize"
      @update-question-label="updateQuestionLabel"
      @update-question-text="updateQuestionText"
      @update-text-area-size="updateTextAreaSize"
    />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}
.form-builder-container {
  width: 550px;
  height: 100vh;
  border: solid 1px;
  padding: 20px 20px;
}

::v-deep .p-slider.p-slider-horizontal .p-slider-handle {
  margin-top: -0.5715rem;
  margin-left: -0.5715rem;
}
</style>
