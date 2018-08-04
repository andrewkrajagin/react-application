import React from 'react';
import { connect } from 'react-redux';
import { changeObj } from '../../actions/actions';

export default connect(
  state => ({
    isArchive: state.formState.obj.isArchive,
  })
)(
  function IsArchiveCheckbox({ isArchive, dispatch }) {
    return (
      <p className="row">
        <label htmlFor="isArchive" className="control-label col-md-4">
В архиве
        </label>
        <input
          type="checkbox"
          id="isArchive"
          className="form-check col-md-1"
          checked={isArchive}
          onChange={e => (
            dispatch(changeObj('isArchive', e.target.checked))
          )}
          required
        />
      </p>
    );
  }
);
