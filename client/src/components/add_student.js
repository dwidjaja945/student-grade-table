import React from "react";
import { connect } from 'react-redux';
import { addStudent, updateInput , clearInput , getStudentList , calculateAverageGrade , toggleUpdate } from "../actions";

class AddStudent extends React.Component {
    constructor(props) {
        super(props);

        this.student = {
            student_name: '',
            grade_value: '',
            class_name: ''
        };
    }

    async addStudentToServer() {
        const { student_name, grade_value, class_name, inputsAreValid } = this.props;
        
        if(!student_name || !grade_value || !class_name) {
            return;
        }

        this.student = {
            student_name,
            grade_value,
            class_name
        };

        await this.props.addStudent(this.student);

        await this.props.getStudentList();
        await this.props.calculateAverageGrade(this.props.studentList);
        this.clearInput();
    }

    clearInput() {
        for( let key in this.student ){
            this.props.clearInput(key);
        }
    }

    updateInput(event) {
        const { name, value } = event.target;

        this.props.updateInput(name, value);
    }

    checkValidInputs(grade , name) {
        if( !grade && !name ) {
            this.props.toggleValidInputs();
        };
    }

    checkIfGradeIsNumber(grade) {
        if(isNaN(grade) || grade > 100) {
            return (
                <div className='invalidMessage'>Please enter a valid grade</div>
            )
        }
    }

    checkValidName(studentName) {
        let regex = studentName.match(/^[a-zA-Z]+$/);

        if (regex === null && studentName !== "") {
            return (
                <div className="invalidMessage" >Please enter a valid name</div>
            )
        };
    }

    render() {
        const { student_name, grade_value, class_name } = this.props;

        const invalidGradeMessage = this.checkIfGradeIsNumber(grade_value);
        const invalidNameMessage = this.checkValidName(student_name);

        return (
            <div className="col-lg-4 student-add-form form-group">
                <h4>Add Student</h4>
                <div className="form-group input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-user" />
                    </span>
                    <input
                        onChange={this.updateInput.bind(this)}
                        type="text"
                        className="textField col form-control col-sm input-sm"
                        name="student_name"
                        value={student_name}
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
                        onChange={this.updateInput.bind(this)}
                        type="text"
                        className="textField col form-control col-sm input-sm"
                        name="class_name"
                        value={class_name}
                        id="course"
                        placeholder="Student Course"
                    />
                </div>
                <div className="form-group input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-education" />
                    </span>
                    <input
                        onChange={this.updateInput.bind(this)}
                        type="text"
                        className="textField col form-control col-sm input-sm"
                        name="grade_value"
                        value={grade_value}
                        id="studentGrade"
                        placeholder="Student Grade"
                    />
                </div>
                {invalidGradeMessage}
                <button onClick={() => { this.addStudentToServer() }} type="button" className="btn btn-default btn-success addButton"  > Add </button>
                <button onClick={ () => { this.clearInput() }} type="button" className="btn btn-default cancelButton"  >Cancel</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        student_name: state.inputReducer.student_name,
        class_name: state.inputReducer.class_name,
        grade_value: state.inputReducer.grade_value,
        studentList: state.studentListReducer.studentList,
        updateOn: state.toggleUpdateReducer.updateOn,
    }
}

export default connect(mapStateToProps, { addStudent, updateInput, clearInput, getStudentList, calculateAverageGrade, toggleUpdate } )(AddStudent);