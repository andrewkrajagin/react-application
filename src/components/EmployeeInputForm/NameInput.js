import React from 'react';
import { connect } from 'react-redux';
import { changeObj } from '../../actions/actions';

export default connect(
  state => ({
    name: state.formState.obj.name,
  })
)(
  function NameInput({ name, dispatch }) {
    const handleChange = (e) => {
      const value = [];
      e.target.value.split('').forEach((s) => {
        value.push((s !== ' ') ? ((Number.isNaN(s * 1)) ? s : '') : ' ');
      });
      if (e.target.value === '') {
        e.target.style.border = '1px solid red';
        console.error('Имя - обязательное поле');
      } else e.target.style.border = '1px solid #ced4da';
      e.target.value = value.join('');
      dispatch(changeObj('name', e.target.value));
    };
    return (
      <p className="row">
        <label htmlFor="name" className="control-label col-md-4">
Имя
        </label>
        <input
          type="text"
          id="name"
          placeholder="Имя"
          className="form-control col-md-7"
          value={name}
          onChange={handleChange}
          required
        />
      </p>
    );
  }
);
