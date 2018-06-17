import React from 'react';
import { connect } from 'react-redux';
import UpdateModal from './update_modal';
import { getStudentList , deleteStudent , calculateAverageGrade , updateStudent , toggleUpdate , getSingleStudent } from '../actions';

class StudentList extends React.Component {
    constructor ( props ) {
        super(props);

        this.getStudentData();
        this.deleteStudent = this.deleteStudent.bind(this);
        this.toggleUpdate = this.toggleUpdate.bind(this);
    };

    async getStudentData() {
        await this.props.getStudentList();

        await this.props.calculateAverageGrade(this.props.studentList);
    }

    async deleteStudent(id) {
        await this.props.deleteStudent(id);
        this.getStudentData();
    };
    
    displayUpdateModal () {
        const { updateOn } = this.props.updateOn;
        if (updateOn) {
            return (<UpdateModal/>)
        } else {
            return <span></span>
        }
    }

    async toggleUpdate(e, student) {
        await this.props.getSingleStudent(student.id)
        this.props.toggleUpdate(this.props , student);
    }

    render() {

        const studentData = this.props.studentList.map((item, itemIndex) => {
            return (
                <tr key={itemIndex}>
                    <td>{item.student_name}</td>
                    <td>{item.class_name}</td>
                    <td>{item.grade_value}</td>
                    <td>
                        <button className="btn btn-default btn-danger" onClick={() => { this.deleteStudent(item.id) }} >
                        Delete
                        </button>
                        <button className="btn btn-default" onClick={(id) => this.toggleUpdate(null , item)} >
                            Edit
                        </button>
                    </td>
                </tr>
            )
        });

        let noDataMessage = '';

        if (this.props.studentList.length === 0) {
            noDataMessage = 'No Data To Display';
        } else {
            noDataMessage = "";
        }

        const updateModal = this.displayUpdateModal();

        return (
            <div className="pull-left col-lg-8 student-list-container">
                <table className="table media-heading student-list">
                    <thead>
                        <tr>
                            <th className="col-lg-4">Student Name</th>
                            <th className="col-lg-4">Student Course</th>
                            <th className="col-lg-4">Student Grade</th>
                            <th className="col-lg-4">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentData}
                    </tbody>
                </table>
                <div className="updateModal">{updateModal}</div>
                <div className="noData"><h3>{noDataMessage}</h3></div>
            </div>
        );
    }
}

function mapStateToProps ( state ) {
    return ({
        studentList : state.studentListReducer.studentList,
        updateOn: state.toggleUpdateReducer.updateOn
    });

};

export default connect( mapStateToProps , { getStudentList , deleteStudent , calculateAverageGrade , updateStudent , toggleUpdate , getSingleStudent } )(StudentList);