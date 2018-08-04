import React from 'react';
import { connect } from 'react-redux';
import { Tree } from 'antd';
import rolesRu from '../../rolesRu';
import isArchiveRu from '../../isArchiveRu';
import { check } from '../../actions/actions';
import filter from '../../constants/setData/filter';

export default connect(
  state => ({
    employees: [...state.employees],
    checkedKeys: [...state.props.checkedKeys],
  })
)(
  function EmployeeTree({
    employees, checkedKeys, dispatch,
  }) {
    const { TreeNode } = Tree;
    const handleCheck = (treeKeys) => {
      const keys = treeKeys.filter(key => Number.isInteger(key*1));
      dispatch(check(keys));
    };
    return (
      <div className="form-group form-control">
        <Tree
          checkable
          defaultExpandAll
          defaultSelectedKeys={[]}
          defaultCheckedKeys={[...checkedKeys]}
          onCheck={handleCheck}
        >
          <TreeNode title="Список" key="list">
            {
              Object.keys(rolesRu).map(role => (
                <TreeNode title={rolesRu[role]} key={role}>
                  {
                    Object.keys(isArchiveRu)
                    .map(str => str === 'true')
                    .map(isArchive => (
                      <TreeNode title={isArchiveRu[isArchive]} key={`${role}-${isArchive}`}>
                        {
                          filter(employees, { role, isArchive }).map(({id, name}) => (
                            <TreeNode title={name} key={id} />
                          ))
                        }
                      </TreeNode>
                    ))
                  }
                </TreeNode>
              ))
              }
          </TreeNode>
        </Tree>
      </div>
    );
  }
);
