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
export default function filter(array, props) {
  return array.filter(obj => (
    checkObj(obj, props)))
};
