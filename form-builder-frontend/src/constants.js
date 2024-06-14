export const QUESTION_TYPE = {
  LONG: 'long',
  SHORT: 'short'
}
export const QUESTION = {
  DEFAULT_TITLE: 'What is your question',
  DEFAULT_TEXT: '',
  DEFAULT_SIZE: 1
}

const baseUrl = 'http://localhost:3000'

export const API = {
  QUESTION: `${baseUrl}/question`
}

export const EVENT = {
  ADD_QUESTION: 'add-question',
  SELECT_QUESTION: 'select-question',
  DELETE_QUESTION: 'delete-question',
  UPDATE_QUESTION_LABEL: 'update-question-label',
  UPDATE_TEXT_AREA_SIZE: 'update-text-area-size'
}

export const STORAGE = {
  SELECTED_QUESTION_ID: 'selectedQuestionId'
}
