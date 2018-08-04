import React from 'react';
import { connect } from 'react-redux';
import { cancelFilter } from '../../actions/actions';
import Button from '../Button';

export default connect()(
  ({ dispatch }) => (
    <Button
      label="Отменить фильтр"
      className="btn btn-secondary"
      onClick={() => dispatch(cancelFilter())}
    />
  )
);
