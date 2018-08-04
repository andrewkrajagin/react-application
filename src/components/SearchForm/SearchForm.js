import React from 'react';
import { connect } from 'react-redux';
import { find } from '../../actions/actions';

export default connect(
  state => ({
    value: state.props.find,
  })
)(
  function SearchForm({ value, dispatch }) {
    return (
      <div className="form-group form-control">
        <label htmlFor="search" className="control-label col-md-2">
  Поиск...
        </label>
        <div className="col-md-10">
          <input
            type="text"
            placeholder="Поиск..."
            id="search"
            className="form-control"
            value={value}
            onChange={e => dispatch(find(e.target.value))}
          />
        </div>
      </div>
    );
  }
);
