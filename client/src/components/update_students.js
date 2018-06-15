import React from 'react';
import { connect } from 'react-redux';
import { updateStudent } from "../actions";

class UpdateStudentModal extends React.Component {
    constructor(props) {
        super(props);
    }

    updateStudent() {
        debugger;
        const student = {
            student_name : this.props.student_name,
            class_name: this.props.class_name, 
            grade_value: this.props.grade_value 
        };
        
        updateStudent(student);
    }

    render() {
        return (
            <div className='modalContainer'>
                <div className="modalContent">
                    <h4>Add Student</h4>
                    <div className="form-group input-group">
                        <span className="input-group-addon">
                            <span className="glyphicon glyphicon-user" />
                        </span>
                        <input
                            onChange={this.updateInput.bind(this)}
                            type="text"
                            className="col form-control col-sm input-sm"
                            name="student_name"
                            value={student_name}
                            id="studentName"
                            placeholder="Student Name"
                        />
                    </div>
                    <div className="form-group input-group">
                        <span className="input-group-addon">
                            <span className="glyphicon glyphicon-th-list" />
                        </span>
                        <input
                            onChange={this.updateInput.bind(this)}
                            type="text"
                            className="col form-control col-sm input-sm"
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
                            className="col form-control col-sm input-sm"
                            name="grade_value"
                            value={grade_value}
                            id="studentGrade"
                            placeholder="Student Grade"
                        />
                    </div>
                    <button onClick={() => { this.addStudentToServer() }} type="button" className="btn btn-default btn-success addButton"  > Add </button>
                    <button onClick={() => { this.clearInput() }} type="button" className="btn btn-default cancelButton"  >Cancel</button>
                    <button type="button" className="btn btn-default btn-primary getServerDataButton" >Get Data From Server</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        student_name : state.inputReducer.studentName,
        class_name: state.inputReducer.className,
        grade_value: state.inputReducer.grade_value
    }
}


export default connect( mapStateToProps, { updateStudent} )(UpdateStudentModal);