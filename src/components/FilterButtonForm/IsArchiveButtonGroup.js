import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button';
import { filter } from '../../actions/actions';
import isArchiveRu from '../../isArchiveRu';

export default connect()(
  function IsArchiveButtonGroup({ dispatch }) {
    return (
      <div className="row">
        <label className="col-md-3 control-label">
По статусу
        </label>
        <div className="col-md-9">
          {
            Object.keys(isArchiveRu)
            .map(el => el === 'true')
            .map(el => (
              <Button
                key={el.toString()}
                label={isArchiveRu[el]}
                className="btn btn-outline-primary"
                onClick={() => dispatch(filter('isArchive', el))}
              />
            ))
          }
        </div>
      </div>
    );
  }
);
