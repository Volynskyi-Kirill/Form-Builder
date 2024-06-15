<script setup>
import { onMounted } from 'vue'
import {
  questions,
  selectedQuestion,
  textAreaSize,
  fetchQuestions,
  addQuestion,
  deleteQuestion,
  selectQuestion,
  updateTextAreaSize
} from '../formBuilderSetup'
import QuestionList from './QuestionList.vue'
import QuestionTypeDropdown from './QuestionTypeDropdown.vue'
import QuestionPreview from './QuestionPreview.vue'
import { STORAGE, EVENT } from '../constants'

onMounted(async () => {
  await fetchQuestions()
  const lastSelectedQuestionId = localStorage.getItem(STORAGE.SELECTED_QUESTION_ID)
  const questionToSelect = questions.value.find((q) => q._id === lastSelectedQuestionId)
  selectQuestion(questionToSelect)
})
</script>

<template>
  <div class="wrapper">
    <div class="form-builder-container">
      <QuestionList
        :questions="questions"
        :selected-question="selectedQuestion"
        @[EVENT.SELECT_QUESTION]="selectQuestion"
        @[EVENT.DELETE_QUESTION]="deleteQuestion"
      />
      <QuestionTypeDropdown @[EVENT.ADD_QUESTION]="addQuestion" />
    </div>
    <QuestionPreview
      v-if="selectedQuestion"
      :selected-question="selectedQuestion"
      :text-area-size="textAreaSize"
      @[EVENT.UPDATE_TEXT_AREA_SIZE]="updateTextAreaSize"
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
  border-right: solid 1px;
  padding: 20px 20px;
}

@media (max-width: 1200px) {
  .wrapper {
    flex-direction: column;
  }

  .form-builder-container {
    width: 100%;
    height: auto;
    border-right: none;
  }
}
</style>
