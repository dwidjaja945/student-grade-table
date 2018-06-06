import React from "react";

class AddStudent extends React.Component {
    render() {
        return (
            <div className="col-lg-4 student-add-form form-group pull-right">
                <h4>Add Student</h4>
                <div className="form-group input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-user" />
                    </span>
                    <input
                        type="text"
                        className="col form-control col-sm input-sm"
                        name="studentName"
                        id="studentName"
                        placeholder="Student Name"
                    />
                </div>
                <div className="form-group input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-th-list" />
                    </span>
                    <input
                        type="text"
                        className="col form-control col-sm input-sm"
                        name="course"
                        id="course"
                        placeholder="Student Course"
                    />
                </div>
                <div className="form-group input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-education" />
                    </span>
                    <input
                        type="text"
                        className="col form-control col-sm input-sm"
                        name="studentGrade"
                        id="studentGrade"
                        placeholder="Student Grade"
                    />
                </div>
                <button type="button" className="btn btn-default btn-success addButton" onclick="" > Add </button>
                <button type="button" className="btn btn-default cancelButton" onclick="" >Cancel</button>
                <button type="button" className="btn btn-default btn-primary getServerDataButton" onclick="">Get Data From Server</button>
            </div>
        );
    }
}

export default AddStudent;