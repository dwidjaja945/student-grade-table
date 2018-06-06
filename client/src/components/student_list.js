import React from 'react';
import { connect } from 'react-redux';
import { getStudentList } from '../actions';

class StudentList extends React.Component {
    render() {
        console.log( "this.props.getStudentList called", this.props.getStudentList() );

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

export default connect( mapStateToProps , { getStudentList } )(StudentList);