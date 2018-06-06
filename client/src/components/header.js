import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="form-group">
                <h1 className="page-header visible-sm visible-md visible-lg visible-md" >Student Grade Table
            <small className="col-lg-offset-6 col-md-offset-5 col-sm-offset-3">Grade Average : <span className="avgGrade label label-default"></span></small>
                </h1>
                <h3 className="page-header visible-xs" >Student Grade Table
            <small className="pull-right">Grade Average : <span className="avgGrade label label-default"></span></small>
                </h3>
            </div>
        )
    }
};

export default Header;