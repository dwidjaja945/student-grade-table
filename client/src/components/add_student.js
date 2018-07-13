import React from "react";
import { connect } from 'react-redux';
import { checkIfGradeIsNumber , checkValidName } from '../helpers';
import { addStudent, updateInput, clearInput, getStudentList, calculateAverageGrade, toggleUpdate, toggleServer } from "../actions";

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
        const { student_name, grade_value, class_name } = this.props;

        if (!student_name || !grade_value || !class_name) {
            return;
        }

        this.student = {
            student_name,
            grade_value,
            class_name
        };

        let validGrade = checkIfGradeIsNumber(grade_value);
        let validName = checkValidName(student_name);
        if (!validGrade || !validName) {
            return;
        }

        await this.props.addStudent(this.student, this.props.node_server);
        this.clearInput();
        await this.props.getStudentList(this.props.node_server);
        await this.props.calculateAverageGrade(this.props.studentList);
    }

    clearInput() {
        for (let key in this.student) {
            this.props.clearInput(key);
        }
    }

    updateInput(event) {
        const { name, value } = event.target;

        this.props.updateInput(name, value);
    }

    render() {
        const { student_name, grade_value, class_name } = this.props;

        let invalidGradeMessage;
        let invalidNameMessage;
        const validGrade = checkIfGradeIsNumber(grade_value);
        const validName = checkValidName(student_name);

        if (!validGrade) {
            invalidGradeMessage = (<div className='invalidMessage'>Please enter a valid grade</div>);
        }

        if (!validName) {
            invalidNameMessage = (<div className="invalidMessage" >Please enter a valid name</div>);
        }
        
        let serverType = "";
        if (this.props.node_server) {
            serverType = "PHP";
        } else {
            serverType = "Node";
        };

        return <div className="col-lg-4 student-add-form form-group">
            <h4>Add Student</h4>
            <div className="form-group input-group">
                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-user" />
                </span>
                <input onChange={this.updateInput.bind(this)} type="text" className="textField col form-control col-sm input-sm" name="student_name" value={student_name} id="studentName" placeholder="Student Name" />
            </div>
            {invalidNameMessage}
            <div className="form-group input-group">
                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-th-list" />
                </span>
                <input onChange={this.updateInput.bind(this)} type="text" className="textField col form-control col-sm input-sm" name="class_name" value={class_name} id="course" placeholder="Student Course" />
            </div>
            <div className="form-group input-group">
                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-education" />
                </span>
                <input onChange={this.updateInput.bind(this)} type="text" className="textField col form-control col-sm input-sm" name="grade_value" value={grade_value} id="studentGrade" placeholder="Student Grade" />
            </div>
            {invalidGradeMessage}
            <div className="buttonContainer">
                <button onClick={() => {
                    this.addStudentToServer();
                }} type="button" className="btn btn-default btn-success addButton">
                    {" "}
                    Add{" "}
                </button>
                <button onClick={() => {
                    this.clearInput();
                }} type="button" className="btn btn-default cancelButton">
                    Cancel
              </button>
            </div>
            {/* <button onClick={() => { this.props.toggleServer(this.props) }} type="button" className="btn btn-default btn-primary toggleServer">
                Click for {serverType} Server
            </button> */}
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        student_name: state.inputReducer.student_name,
        class_name: state.inputReducer.class_name,
        grade_value: state.inputReducer.grade_value,
        studentList: state.studentListReducer.studentList,
        updateOn: state.toggleUpdateReducer.updateOn,
        node_server: state.toggleServerReducer.node_server
    }
}

export default connect(mapStateToProps, { addStudent, updateInput, clearInput, getStudentList, calculateAverageGrade, toggleUpdate, toggleServer })(AddStudent);