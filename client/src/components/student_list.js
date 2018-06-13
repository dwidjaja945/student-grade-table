import React from 'react';
import { connect } from 'react-redux';
import { getStudentList , deleteStudent , calculateAverageGrade } from '../actions';

class StudentList extends React.Component {
    constructor ( props ) {
        super(props);

        this.getStudentData();
        this.deleteStudent = this.deleteStudent.bind(this);
    };

    async getStudentData() {
        await this.props.getStudentList();

        await this.props.calculateAverageGrade(this.props.studentList);
    }

    async deleteStudent(id) {
        await this.props.deleteStudent(id);
        this.getStudentData();
    };
    
    render() {
        console.log('this.props: ' ,this.props);

        const studentData = this.props.studentList.map( (item , itemIndex) => {
            return (
                <tr key={itemIndex}>
                    <td>{item.student_name}</td>
                    <td>{item.class_name}</td>
                    <td>{item.grade_value}</td>
                    <td><button className="btn btn-default btn-danger" onClick={ () => {this.deleteStudent(item.id)}} >Delete</button></td>
                </tr>
            )
        });

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
                <div className="noData">No Data to Display</div>
            </div>
        );
    }
}

function mapStateToProps ( state ) {

    return ({
        studentList : state.studentListReducer.studentList
    });

};

export default connect( mapStateToProps , { getStudentList , deleteStudent , calculateAverageGrade } )(StudentList);