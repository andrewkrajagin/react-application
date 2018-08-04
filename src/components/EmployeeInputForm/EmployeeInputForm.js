import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { successForm, cancelForm } from '../../actions/actions';
import IDInput from './IDInput';
import NameInput from './NameInput';
import PhoneInput from './PhoneInput';
import BirthdayInput from './BirthdayInput';
import RoleSelect from './RoleSelect';
import IsArchiveCheckbox from './IsArchiveCheckbox';

export default connect(
  state => ({
    obj: { ...state.formState.obj },
    head: state.formState.head,
  })
)(
  function EmployeeInputForm({
    obj, head, dispatch,
  }) {
    const handleSuccessForm = (e) => {
      if (Object.values(obj).some(value => (value === ''))) {
        console.error('Ошибка ввода. Не все поля заполнены');
        e.preventDefault();
        return false;
      }
      dispatch(successForm(obj));
      return false;
    };
    return (
      <div
        className={
          "form-group "+ 
          "form-control "+
          "was-validated "+
          "col-xs-10 col-sm-8 col-md-6 col-lg-6"
        }
      >
        <h3>
          <label>
            {head}
          </label>
        </h3>
        <IDInput />
        <NameInput />
        <PhoneInput />
        <BirthdayInput />
        <RoleSelect />
        <IsArchiveCheckbox />
        <p className="row">
          <Link
            to="/"
            className="btn btn-success col-md-5"
            onClick={handleSuccessForm}
          >
  Применить
          </Link>
          <Link
            to="/"
            className="btn btn-danger col-md-5"
            onClick={() => dispatch(cancelForm())}
          >
  Отменить
          </Link>
        </p>
      </div>
    );
  }
);
