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
export default function sort(array, prop) {
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
