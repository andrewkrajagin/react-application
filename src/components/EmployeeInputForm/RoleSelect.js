import React from 'react';
import { connect } from 'react-redux';
import { changeObj } from '../../actions/actions';
import rolesEng from '../../rolesEng';
import rolesRu from '../../rolesRu';

export default connect(
  state => ({
    role: state.formState.obj.role,
  })
)(
  function RoleSelect({ role, dispatch }) {
    return (
      <p className="row">
        <label htmlFor="role" className="control-label col-md-4">
Должность
        </label>
        <select
          id="role"
          className="custom-select col-md-4"
          value={rolesRu[role]}
          onChange={e => (
            dispatch(changeObj('role', rolesEng[e.target.value]))
          )}
        >
          {
            Object
            .values(rolesRu)
            .map(roleRu => (
              <option key={roleRu}>
                {roleRu}
              </option>
            ))
          }
        </select>
      </p>
    );
  }
);
