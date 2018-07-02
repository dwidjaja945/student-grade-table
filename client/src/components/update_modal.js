import React from 'react';
import { connect } from 'react-redux';
import { getStudentList, toggleUpdate, editInput, updateStudent, clearInput, getSingleStudent, calculateAverageGrade } from "../actions";
import { checkIfGradeIsNumber , checkValidName } from '../helpers/index';

class UpdateModal extends React.Component {
    constructor(props) {
        super(props);

        this.updateInput = this.updateInput.bind(this);

        this.student = {
            student_name: '',
            grade_value: '',
            class_name: '',
            id: ''
        };
        this.removeModal = this.removeModal.bind(this);
    }

    async updateStudent() {
        const student = {
            student_name : this.props.edit_student_name,
            class_name: this.props.edit_class_name, 
            grade_value: this.props.edit_grade_value 
        };

        const { student_name , grade_value , class_name } = student;
        
        if (!student_name || !grade_value || !class_name) {
          return;
        }

        let validGrade = checkIfGradeIsNumber(grade_value);
        let validName = checkValidName(student_name);
        if (!validGrade || !validName ) {
            return;
        }

        const id = this.props.id
        
        await this.props.updateStudent(student , id, this.props.node_server);
        await this.props.getStudentList(this.props.node_server);
        await this.props.calculateAverageGrade(this.props.studentList);
        this.removeModal();
        this.clearInput();
    }

    updateInput(event) {
        const { name, value } = event.target;

        this.props.editInput(name, value);
    }

    clearInput() {
        for (let key in this.student) {
            this.props.clearInput(key);
        }
    }

    removeModal() {
        this.clearInput();
        this.props.toggleUpdate(this.props.updateOn);
    }
    
    render() {

        const { edit_student_name , edit_class_name , edit_grade_value } = this.props;

        let invalidGradeMessage;
        let invalidNameMessage;
        const validGrade = checkIfGradeIsNumber(edit_grade_value);
        const validName = checkValidName(edit_student_name);

        if( !validGrade ) {
            invalidGradeMessage = (<div className='invalidMessage'>Please enter a valid grade</div>);
        }

        if( !validName ) {
            invalidNameMessage = (<div className="invalidMessage" >Please enter a valid name</div>);
        }

        return (
            <div className='modalContainer'>
                <div className="modalContent">
                    <h4>Edit Student</h4>
                    <div className="form-group input-group">
                        <span className="input-group-addon">
                            <span className="glyphicon glyphicon-user" />
                        </span>
                        <input
                            onChange={this.updateInput}
                            type="text"
                            className="col form-control col-sm input-sm"
                            name="edit_student_name"
                            value={edit_student_name}
                            id="studentName"
                            placeholder="Student Name"
                        />
                    </div>
                    {invalidNameMessage}
                    <div className="form-group input-group">
                        <span className="input-group-addon">
                            <span className="glyphicon glyphicon-th-list" />
                        </span>
                        <input
                            onChange={this.updateInput}
                            type="text"
                            className="col form-control col-sm input-sm"
                            name="edit_class_name"
                            value={edit_class_name}
                            id="course"
                            placeholder="Student Course"
                        />
                    </div>
                    <div className="form-group input-group">
                        <span className="input-group-addon">
                            <span className="glyphicon glyphicon-education" />
                        </span>
                        <input
                            onChange={this.updateInput}
                            type="text"
                            className="col form-control col-sm input-sm"
                            name="edit_grade_value"
                            value={edit_grade_value}
                            id="studentGrade"
                            placeholder="Student Grade"
                        />
                    </div>
                    {invalidGradeMessage}
                    <button onClick={() => { this.updateStudent(); }} type="button" className="btn btn-default btn-success addButton"  > Save </button>
                    <button onClick={ () => { this.removeModal()} } type="button" className="btn btn-default cancelButton"  >Cancel</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        student_name : state.inputReducer.student_name,
        class_name: state.inputReducer.class_name,
        grade_value: state.inputReducer.grade_value,
        edit_student_name: state.inputReducer.edit_student_name,
        edit_class_name: state.inputReducer.edit_class_name,
        edit_grade_value: state.inputReducer.edit_grade_value,
        id : state.inputReducer.id,
        updateOn : state.toggleUpdateReducer.updateOn,
        node_server: state.toggleServerReducer.node_server,
        studentList: state.studentListReducer.studentList
    }
}


export default connect(mapStateToProps, { getStudentList, editInput, updateStudent, toggleUpdate, clearInput, getSingleStudent, calculateAverageGrade})(UpdateModal);