import React from 'react';
import { connect } from 'react-redux';
import UpdateModal from './update_modal';
import DeleteModal from './delete_modal';
import { getStudentList , deleteStudent , calculateAverageGrade , updateStudent , toggleUpdate , getSingleStudent, toggleDeleteModal } from '../actions';

class StudentList extends React.Component {
    constructor ( props ) {
        super(props);

        this.getStudentData();
        this.toggleUpdate = this.toggleUpdate.bind(this);
        this.displayDeleteModal = this.displayDeleteModal.bind(this);
        this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    };

    async getStudentData() {
        await this.props.getStudentList(this.props.node_server);
        await this.props.calculateAverageGrade(this.props.studentList);
    }

    displayUpdateModal () {
        const { updateOn } = this.props.updateOn;
        if (updateOn) {
            return (<UpdateModal/>)
        } else {
            return <span></span>
        }
    }

    async toggleUpdate(e, student) {
        await this.props.getSingleStudent(student.id, this.props.node_server)
        this.props.toggleUpdate(this.props);
    }

    displayDeleteModal() {
        const { delete_modal } = this.props;
        if(delete_modal.on) {
            return (<DeleteModal />)
        } else {
            return <span></span>
        }
    }

   toggleDeleteModal(id) {
       this.props.toggleDeleteModal(this.props, id);
   }

    render() {

        const studentData = this.props.studentList.map((item, itemIndex) => {
            return (
                <tr key={itemIndex}>
                    <td>{item.student_name}</td>
                    <td>{item.class_name}</td>
                    <td>{item.grade_value}</td>
                    <td>
                        <div className="studentButtons">
                            <button className="btn btn-default" onClick={(id) => this.toggleUpdate(null , item)} >
                                Edit
                            </button>
                            <button className="btn btn-default btn-danger" onClick={() => { this.toggleDeleteModal(item.id) }} >
                            Delete
                            </button>
                        </div>
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
        const deleteModal = this.displayDeleteModal();

        return (
            <div className="pull-left col-lg-8 student-list-container col-xs-12">
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
                <div className="deleteModal">{deleteModal}</div>
                <div className="noData"><h3>{noDataMessage}</h3></div>
            </div>
        );
    }
}

function mapStateToProps ( state ) {
    return ({
        studentList : state.studentListReducer.studentList,
        updateOn: state.toggleUpdateReducer.updateOn,
        node_server: state.toggleServerReducer.node_server,
        delete_modal: state.toggleDeleteModalReducer.delete_modal
    });

};

export default connect( mapStateToProps , { getStudentList , deleteStudent , calculateAverageGrade , updateStudent , toggleUpdate , getSingleStudent, toggleDeleteModal } )(StudentList);