import { ref } from 'vue'
import axios from 'axios'
import { QUESTION_TYPE, API, QUESTION, STORAGE } from './constants'

const questions = ref([])
const selectedQuestion = ref(null)
const textAreaSize = ref(3)

const fetchQuestions = async () => {
  try {
    const response = await axios.get(API.QUESTION)
    questions.value = response.data
  } catch (error) {
    console.error('Error fetching questions:', error)
  }
}

const addQuestion = async (type) => {
  const newQuestion = {
    type: type.label,
    title: QUESTION.DEFAULT_TITLE,
    text: QUESTION.DEFAULT_TEXT,
    size: QUESTION.DEFAULT_SIZE
  }
  try {
    const response = await axios.post(API.QUESTION, newQuestion)
    questions.value.push(response.data)
    selectedQuestion.value = response.data
    textAreaSize.value = response.data.size
    localStorage.setItem(STORAGE.SELECTED_QUESTION_ID, response.data._id)
  } catch (error) {
    console.error('Error adding question:', error.response.data.message)
  }
}

const deleteQuestion = async (questionId) => {
  try {
    await axios.delete(`${API.QUESTION}/${questionId}`)
    questions.value = questions.value.filter((question) => questionId !== question._id)
    if (selectedQuestion.value?._id === questionId) {
      selectedQuestion.value = null
      textAreaSize.value = 3
    }
  } catch (error) {
    console.error('Error deleting question:', error)
  }
}

const selectQuestion = (question) => {
  selectedQuestion.value = question
  textAreaSize.value = question.size
  localStorage.setItem(STORAGE.SELECTED_QUESTION_ID, question._id)
}

const updateTextAreaSize = (newSize) => {
  if (selectedQuestion.value && selectedQuestion.value.type === QUESTION_TYPE.LONG) {
    selectedQuestion.value.size = newSize
  }
}

const saveQuestion = async () => {
  if (selectedQuestion.value) {
    try {
      await axios.patch(`${API.QUESTION}/${selectedQuestion.value._id}`, {
        title: selectedQuestion.value.title,
        text: selectedQuestion.value.text,
        size: selectedQuestion.value.size
      })
    } catch (error) {
      throw error.message
    }
  }
}

export {
  questions,
  selectedQuestion,
  textAreaSize,
  fetchQuestions,
  addQuestion,
  deleteQuestion,
  selectQuestion,
  updateTextAreaSize,
  saveQuestion
}
