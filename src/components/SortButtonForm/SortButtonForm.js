import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button';
import { sort, cancelSort } from '../../actions/actions';
import sortButtonData from './sortButtonData';
    
export default connect()(
  function SortButtonForm({ dispatch }) {
    return (
      <div className="form-group form-control">
        <h3>
          <label>
Сортировка
          </label>
        </h3>
        <div className="row">
          {
            sortButtonData.map(el => (
              <Button
                key={el.label}
                label={el.label}
                className="btn btn-outline-primary"
                onClick={() => dispatch(sort(el.sortType))}
              />
            ))
          }
          <Button
            label="Отменить сортировку"
            className="btn btn-secondary"
            onClick={() => dispatch(cancelSort())}
          />
        </div>
      </div>
    );
  }
);
