import React from 'react';
import RoleButtonGroup from './RoleButtonGroup';
import IsArchiveButtonGroup from './IsArchiveButtonGroup';
import CancelFilterButton from './CancelFilterButton';

export default () => (
  <div className="form-group form-control">
    <h3>
      <label>
Фильтрция
      </label>
    </h3>
    <RoleButtonGroup />
    <IsArchiveButtonGroup />
    <CancelFilterButton />
  </div>
);
