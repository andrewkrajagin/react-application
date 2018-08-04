import React from 'react';
import { connect } from 'react-redux';
import InputMask from 'react-input-mask';
import { changeObj } from '../../actions/actions';

export default connect(
  state => ({
    birthday: state.formState.obj.birthday,
  })
)(
  function BirthdayInput({ birthday, dispatch }) {
    return (
      <p className="row">
        <label htmlFor="birthday" className="control-label col-md-4">
  Дата рождения
        </label>
        <InputMask
          type="text"
          id="birthday"
          mask="99.99.9999"
          maskChar=""
          className="form-control col-md-7"
          placeholder="дд.мм.гггг"
          value={birthday}
          onChange={e => (
            dispatch(changeObj('birthday', e.target.value))
          )}
          required
        />
      </p>
    );
  }
);
