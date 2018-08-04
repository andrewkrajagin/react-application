/**
* функция получения объектов с указанными ключами-идентификаторами
* @param {array} array Массив объектов,
* @param {array} keys Массив ключей-идентификаторов
* @return {array} Массив объектов,
* прошедших проверку на соотвествие указанным ключам-идентификаторам
*/
export default function check(array, keys) {
  return array.filter(obj => (
    keys.indexOf(obj.id.toString()) > -1))
};
