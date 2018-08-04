import React from 'react';
import { connect } from 'react-redux';
import { changeObj } from '../../actions/actions';

export default connect(
  state => ({
    id: state.formState.obj.id,
  })
)(
  function IDInput({ id, dispatch }) {
    return (
      <p className="row">
        <label htmlFor="id" className="control-label col-md-4">
ID
        </label>
        <input
          type="text"
          id="id"
          className="form-control col-md-7"
          value={id}
          onChange={e => dispatch(changeObj('id', e.target.value))}
          readOnly
        />
      </p>
    );
  }
);
