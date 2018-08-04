import check from './check';
import find from './find';
import filter from './filter';
import sort from './sort';

export default function setData(array, props, propsRu) {
  let data = [...array];
  data = check(data, props.checkedKeys);
  data = find(data, props.find, propsRu);
  data = filter(data, props.filter);
  data = sort(data, props.sort);
  return data;
};
