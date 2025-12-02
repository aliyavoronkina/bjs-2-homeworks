"use strict";

// Задача 1: Сравнить массивы
function compareArrays(arr1, arr2) {
  // Проверяем одинаковую длину массивов
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Используем метод every для сравнения элементов
  // every проверяет, удовлетворяют ли ВСЕ элементы условию
  return arr1.every((element, index) => element === arr2[index]);
}

// Задача 2: Получение среднего возраста пользователей одного пола
function getUsersNamesInAgeRange(users, gender) {
  // Проверяем пустой массив
  if (users.length === 0) {
    return 0;
  }

  // 1. Фильтруем пользователей по полу
  const filteredUsers = users.filter(user => user.gender === gender);

  // 2. Проверяем, есть ли пользователи нужного пола
  if (filteredUsers.length === 0) {
    return 0;
  }

  // 3. Получаем массив возрастов (map)
  const ages = filteredUsers.map(user => user.age);

  // 4. Вычисляем средний возраст (reduce)
  const sumAges = ages.reduce((sum, age) => sum + age, 0);

  // 5. Возвращаем среднее значение
  return sumAges / filteredUsers.length;
}

// Альтернативный вариант одной цепочкой:
// function getUsersNamesInAgeRange(users, gender) {
//   if (users.length === 0) return 0;
//
//   const filtered = users.filter(user => user.gender === gender);
//   if (filtered.length === 0) return 0;
//
//   return filtered.reduce((sum, user) => sum + user.age, 0) / filtered.length;
// }