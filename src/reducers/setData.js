/**
* функция проверки объекта
* @param {object} obj Объект, который проверяется,
* @param {object} props Объект, содержащий пары свойств (ключей) и значений,
* по которым проверяется obj,
* @return {boolean} Булевое значенеие сранения значений свойства объекта
* с указанными значениями: 
* при props[key] != '' возвращает результат сравнения:
* соответствии - true, при несоответствии - false,
* при props[key] = '' - true
*/
const checkObj = (obj, props) => (
  Object.entries(props).every(([key, value]) => (
    (value !== '' ? obj[key] === value : true)))
);
/**
* функция фильтрации массива объектов по нескольким свойствам
* @param {array} array Массив объектов,
* @param {object} props Объект с парами ключей и значений,
* @return {array} Массив объектов, прошедших проверку значений свойств,
* циклически проверяя на соответствие каждый объект
* по нескольким парам свойств и значенияй с помощью функции checkObj
*/
const filter = (array, props) => (
  array.filter(obj => (
    checkObj(obj, props)))
);

/**
* sortTypes Объект, содержащий функции-шаблоны
* соответствующих типов сортировки для полученя
* соответствующих свойств объектов, по которым
* и производится сортировка,
* функция-шаблон возвращает модифицированное значение свойства,
* @param {object} obj Объект, из которого получается значение
* @return {string}
*/
const sortTypes = {
  id(obj) {
    return obj.id;
  },
  name(obj) {
    return obj.name;
  },
  birthday(obj) {
    return obj
      .birthday
      .split('.')
      .reverse();
  },
};
/**
* функция сортировки
* @param {array} array Массив объектов,
* @param {object} prop Объект, содержащий
* две пары ключ-значение:
* {string} type Строка, указывает тип сортировки,
* {number} dir Число, указывающее направление сортировки,
* тип шаблона сортировки получает из объекта sortTypes
* @return {array} Массив объектов
*/
const sort = (array, prop) => {
  if (prop.type !== 'none') {
    array.sort((a, b) => {
      const i = sortTypes[prop.type](a);
      const j = sortTypes[prop.type](b);

      if (i > j) return 1 * prop.dir;
      if (i < j) return -1 * prop.dir;

      return false;
    });
  }
  return array;
};
/*
Object.defineProperty(Array.prototype, 'sorting', {
  enumerable: false,

  value: function(key, dir) {
    this.sort((a, b) => {

      if (a[key] > b[key]) return 1 * dir;
      if (a[key] < b[key]) return -1 * dir;

      return false;
    });
  }
});
*/

/* Object.defineProperty(Array.prototype, 'checking', {
  enumerable: false,
  value: function(keys) {
    return keys.map(key => this[key-1]);
  }
}); */
/**
* функция получения объектов с указанными ключами-идентификаторами
* @param {array} array Массив объектов,
* @param {array} keys Массив ключей-идентификаторов
* @return {array} Массив объектов,
* прошедших проверку на соотвествие указанным ключам-идентификаторам
*/
const check = (array, keys) => (
  array.filter(obj => (
    keys.indexOf(obj.id.toString()) > -1))
);

/**
*функция поиска подстроки в значениях свойств
*/
const find = (array, value, propsRu) => {
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

export default (array, props, propsRu) => (
  check(
    find(
      filter(
        sort(
          [...array],
          props.sort
        ),
        props.filter
      ),
      props.find,
      propsRu
    ),
    props.checkedKeys
  )
);
