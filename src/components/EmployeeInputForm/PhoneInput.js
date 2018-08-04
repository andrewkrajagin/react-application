import React from 'react';
import { connect } from 'react-redux';
import InputMask from 'react-input-mask';
import { changeObj } from '../../actions/actions';

export default connect(
  state => ({
    phone: state.formState.obj.phone,
  })
)(
  function PhoneInput({ phone, dispatch }) {
    return (
      <p className="row">
        <label htmlFor="phone" className="control-label col-md-4">
Телефон
        </label>
        <InputMask
          mask="+7 (999) 99-9999"
          maskChar=""
          type="text"
          id="phone"
          className="form-control col-md-7"
          placeholder="+7 (999) 99-9999"
          value={phone}
          onChange={e => (
            dispatch(changeObj('phone', e.target.value))
          )}
          required
        />
      </p>
    );
  }
);
