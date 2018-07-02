import React from 'react';
import { connect } from 'react-redux';
import { getStudentList, toggleDeleteModal, deleteStudent, calculateAverageGrade } from '../actions';

class DeleteModal extends React.Component {
    constructor(props) {
        super(props);

        this.deleteStudent = this.deleteStudent.bind(this);
    }

    async deleteStudent() {
        await this.props.deleteStudent(this.props.delete_modal.delete_id, this.props.node_server);
        this.props.toggleDeleteModal(this.props);
        await this.props.getStudentList();
        await this.props.calculateAverageGrade(this.props.studentList);
    };

    toggleDeleteModal() {
        this.props.toggleDeleteModal(this.props);
    }

    render() {
        return (
            <div className='modalContainer'>
                <div className="modalContent">
                    <h4>Are you sure you want to delete?</h4>
                    <button onClick={() => { this.deleteStudent(this.props.delete_id) }} type="button" className="btn btn-default btn-danger addButton"  > Yes </button>
                    <button onClick={this.toggleDeleteModal.bind(this)} type="button" className="btn btn-default cancelButton" > No </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        node_server: state.toggleServerReducer.node_server,
        delete_modal: state.toggleDeleteModalReducer.delete_modal,
        studentList: state.studentListReducer.studentList
    }
}

export default connect( mapStateToProps , {getStudentList, toggleDeleteModal, deleteStudent, calculateAverageGrade} )(DeleteModal);