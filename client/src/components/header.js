import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    render() {
        return (
            <div className="form-group">
                <h1 className="page-header visible-sm visible-md visible-lg visible-md" >Student Grade Table
            <small className="col-lg-offset-6 col-md-offset-5 col-sm-offset-3">Grade Average : <span className="avgGrade label label-default">{this.props.averageGrade}%</span></small>
                </h1>
                <h3 className="page-header visible-xs" >Student Grade Table
            <small className="pull-right">Grade Average : <span className="avgGrade label label-default">{this.props.averageGrade}%</span></small>
                </h3>
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