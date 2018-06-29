import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    render() {
        return (
            <div className="form-group">
                <div className="visible-sm visible-md visible-lg page-header gradeTableHeader">
                    <h1 className="" >Student Grade Table
                <small className="col-lg-offset-6 col-md-offset-4 col-sm-offset-2">Grade Average : <span className="avgGrade label label-default">{this.props.averageGrade}%</span></small>
                    </h1>
                </div>
                <div className="visible-xs page-header gradeTableHeader">
                    <h3 className="" >Student Grade Table
                <small className="pull-right">Grade Average : <span className="avgGrade label label-default">{this.props.averageGrade}%</span></small>
                    </h3>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        averageGrade: state.averageGradeReducer.averageGrade
    }
}

export default connect(mapStateToProps, {  })(Header);