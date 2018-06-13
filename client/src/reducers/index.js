import { combineReducers } from 'redux';
import countReducer from './count_reducer';
import studentListReducer from './student_list_reducer';
import inputReducer from './input_reducer';
import averageGradeReducer from './average_grade_reducer';

export default combineReducers({
  countReducer: countReducer,
  studentListReducer: studentListReducer,
  inputReducer: inputReducer,
  averageGradeReducer : averageGradeReducer
});