import { ref } from 'vue'
import { QUESTION_TYPE } from './constants'

const questions = ref([])
const selectedQuestion = ref(null)
const textAreaSize = ref(3)

const items = Object.values(QUESTION_TYPE).map((type) => ({ label: type }))

const addQuestion = (type) => {
  const newQuestion = {
    id: Date.now(),
    label: `What is your question?`,
    type: type.label,
    text: '',
    size: 3
  }
  questions.value.push(newQuestion)
  selectedQuestion.value = newQuestion
  textAreaSize.value = newQuestion.size
}

const deleteQuestion = (questionId) => {
  questions.value = questions.value.filter((question) => questionId !== question.id)
  if (selectedQuestion.value?.id === questionId) {
    selectedQuestion.value = null
    textAreaSize.value = 3 // Reset slider if no question is selected
  }
}

const selectQuestion = (question) => {
  selectedQuestion.value = question
  textAreaSize.value = question.size // Update slider value based on selected question
}

const updateQuestionLabel = (event) => {
  if (selectedQuestion.value) {
    selectedQuestion.value.label = event.target.value
  }
}

const updateQuestionText = (event) => {
  if (selectedQuestion.value) {
    selectedQuestion.value.text = event.target.value
  }
}

const updateTextAreaSize = (newSize) => {
  if (selectedQuestion.value && selectedQuestion.value.type === QUESTION_TYPE.LONG) {
    selectedQuestion.value.size = newSize
  }
}

export {
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
}
