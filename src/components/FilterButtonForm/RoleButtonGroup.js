import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button';
import { filter } from '../../actions/actions';
import rolesRu from '../../rolesRu';

export default connect()(
  function RoleButtonGroup({ dispatch }) {
    return (
      <div className="row">
        <label className="col-md-3 control-label">
По должности
        </label>
        <div className="col-md-9">
          {
            Object.keys(rolesRu).map(role => (
              <Button
                key={role}
                label={rolesRu[role]}
                className="btn btn-outline-primary"
                onClick={() => dispatch(filter('role', role))}
              />
            ))
          }
        </div>
      </div>
    );
  }
);
