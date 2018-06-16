import React from 'react';
import AddStudent from './add_student';
import { connect } from 'react-redux';
import { getStudentList , toggleUpdate , updateInput , updateStudent , clearInput , getSingleStudent } from "../actions";

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
        debugger;
        const student = {
            student_name : this.props.student_name,
            class_name: this.props.class_name, 
            grade_value: this.props.grade_value 
        };

        const id = this.props.id
        
        await this.props.updateStudent(student , id);
        await this.props.getStudentList();
        await this.removeModal();
        this.clearInput();
    }

    updateInput(event) {
        const { name, value } = event.target;

        this.props.updateInput(name, value);
    }

    clearInput() {
        for (let key in this.student) {
            this.props.clearInput(key);
        }
    }

    removeModal() {
        this.clearInput();
        this.props.toggleUpdate(this.props.updateOn, this.student);
    }

    async getSingleStudentData() {
        await this.props.getSingleStudentData();
    }
    
    render() {

        const { student_name , class_name , grade_value } = this.props;


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
                            onChange={this.updateInput}
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
                            onChange={this.updateInput}
                            type="text"
                            className="col form-control col-sm input-sm"
                            name="grade_value"
                            value={grade_value}
                            id="studentGrade"
                            placeholder="Student Grade"
                        />
                    </div>
                    <button onClick={() => { this.updateStudent(); }} type="button" className="btn btn-default btn-success addButton"  > Save </button>
                    <button onClick={ () => { this.removeModal()} } type="button" className="btn btn-default cancelButton"  >Cancel</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    debugger;
    return {
        student_name : state.inputReducer.student_name,
        class_name: state.inputReducer.class_name,
        grade_value: state.inputReducer.grade_value,
        id : state.inputReducer.id,
        updateOn : state.toggleUpdateReducer.updateOn,
    }
}


export default connect(mapStateToProps, { getStudentList, updateInput, updateStudent, toggleUpdate, clearInput, getSingleStudent })(UpdateModal);