import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openAddForm } from '../../actions/actions';

export default connect(
  state => ({
    id: state.employees.length + 1,
  })
)(
  function OpenAddButton({ id, dispatch }) {
    return (
      <div className="form-group form-control">
        <Link
          to="/EmployeeInputForm"
          className="btn btn-secondary"
          onClick={() => dispatch(openAddForm(id))}
        >
Добавить сотрудника
        </Link>
      </div>
    );
  }
);
