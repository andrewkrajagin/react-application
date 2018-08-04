/**
*функция поиска подстроки в значениях свойств
*/
export default function find(array, value, propsRu) {
  if (value !== '') {
    const str = value
      .toString()
      .toLowerCase();

    return array.filter(obj => (
      Object.entries(obj).some(([key, val]) => {
        const el = ((propsRu && propsRu[key]) ? propsRu[key][val] : val)
          .toString()
          .toLowerCase();

        return (el.indexOf(str) > -1);
      })));
  }

  return array;
};
