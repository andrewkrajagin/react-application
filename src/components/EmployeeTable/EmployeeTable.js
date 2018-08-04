import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import setData from '../../reducers/setData';
import isArchiveRu from '../../isArchiveRu';
import rolesRu from '../../rolesRu';
import { sort, openRedactForm } from '../../actions/actions';

export default connect(
  state => ({
    employees: setData(
      state.employees,
      state.props,
      {
        role: rolesRu,
        isArchive: isArchiveRu
      }
    ),
  })
)(
  function EmployeeTable({ employees, dispatch }) {
    const showObjValue = (obj, key) => {
      let value = obj[key];
      let item;
      if (key === 'isArchive') item = isArchiveRu[value];
      else if (key === 'role') item = rolesRu[value];
      else if (key === 'name') {
        item = (
          <Link
            to="/EmployeeInputForm"
            onClick={() => dispatch(openRedactForm({ ...obj }))}
          >
            {value}
          </Link>
        );
      } else item = value;
      return item;
    };
    const headerData = [
      {
        label: 'ID',
        title: 'Сортировка по ID',
        onClick: () => dispatch(sort('id')),
      },
      {
        label: 'Имя',
        title: 'Сортировка по имени',
        onClick: () => dispatch(sort('name')),
      },
      {
        label: 'Статус',
      },
      {
        label: 'Должность',
      },
      {
        label: 'Телефон',
      },
      {
        label: 'Дата рождения',
        title: 'Сортировка по дате рождения',
        onClick: () => dispatch(sort('birthday')),
      },
    ];
    return (
      <div className="list">
        <table className="table table-hover table-bordered">
          <thead className="tableHeader">
            <tr>
              {
                headerData.map(obj => (
                  <th
                    key={obj.label}
                    {...obj}
                  >
                    {obj.label}
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              employees.map(obj => (
                <tr
                  key={obj.id}
                >
                  {
                    Object.keys(obj).map(key => (
                      <td
                        key={key}
                      >
                        {showObjValue(obj, key)}
                      </td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
);
