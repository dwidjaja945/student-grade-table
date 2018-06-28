import { combineReducers } from 'redux';
import studentListReducer from './student_list_reducer';
import inputReducer from './input_reducer';
import averageGradeReducer from './average_grade_reducer';
import toggleUpdateReducer from './toggle_update_reducer';
import toggleServerReducer from './toggle_server';

export default combineReducers({
  studentListReducer: studentListReducer,
  inputReducer: inputReducer,
  averageGradeReducer: averageGradeReducer,
  toggleUpdateReducer: toggleUpdateReducer,
  toggleServerReducer: toggleServerReducer
});