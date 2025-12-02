"use strict";

// Задача 1: Исследовать массив
function getArrayParams(...arr) {
  // Если массив пустой
  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }

  // Начальные значения
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  // Проходим по всем элементам массива
  for (let i = 0; i < arr.length; i++) {
    // Ищем минимальный элемент
    if (arr[i] < min) {
      min = arr[i];
    }

    // Ищем максимальный элемент
    if (arr[i] > max) {
      max = arr[i];
    }

    // Суммируем все элементы
    sum += arr[i];
  }

  // Вычисляем среднее значение и округляем до 2 знаков
  const avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задача 2: Насадки преобразователи

// 2.1 Насадка суммирования элементов
function summElementsWorker(...arr) {
  // Если массив пустой - возвращаем 0
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;

  // Суммируем все элементы
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// 2.2 Насадка вычисления разницы максимального и минимального элементов
function differenceMaxMinWorker(...arr) {
  // Если массив пустой - возвращаем 0
  if (arr.length === 0) {
    return 0;
  }

  // Начальные значения
  let min = arr[0];
  let max = arr[0];

  // Ищем min и max
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Возвращаем разницу
  return max - min;
}

// 2.3 Насадка вычисления разницы сумм чётных и нечётных элементов
function differenceEvenOddWorker(...arr) {
  // Если массив пустой - возвращаем 0
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0; // Сумма чётных элементов
  let sumOddElement = 0;  // Сумма нечётных элементов

  for (let i = 0; i < arr.length; i++) {
    // Проверяем чётность
    if (arr[i] % 2 === 0) {
      // Чётный - добавляем к сумме чётных
      sumEvenElement += arr[i];
    } else {
      // Нечётный - добавляем к сумме нечётных
      sumOddElement += arr[i];
    }
  }

  // Возвращаем разницу: сумма чётных - сумма нечётных
  return sumEvenElement - sumOddElement;
}

// 2.4 Насадка вычисления среднего значения чётных элементов
function averageEvenElementsWorker(...arr) {
  // Если массив пустой - возвращаем 0
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0; // Сумма чётных элементов
  let countEvenElement = 0; // Количество чётных элементов

  for (let i = 0; i < arr.length; i++) {
    // Проверяем чётность
    if (arr[i] % 2 === 0) {
      // Чётный - добавляем к сумме и увеличиваем счётчик
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  // Если нет чётных элементов - возвращаем 0
  if (countEvenElement === 0) {
    return 0;
  }

  // Вычисляем среднее и округляем до 2 знаков
  return Number((sumEvenElement / countEvenElement).toFixed(2));
}

// Задача 3: Агрегатор преобразователей
function makeWork(arrOfArr, func) {
  // Начальное значение - самое маленькое возможное число
  let maxWorkerResult = -Infinity;

  // Проходим по всем массивам в arrOfArr
  for (let i = 0; i < arrOfArr.length; i++) {
    // Вызываем функцию-насадку для текущего массива
    // Используем spread оператор для передачи элементов массива как аргументов
    const result = func(...arrOfArr[i]);

    // Если результат больше текущего максимального - обновляем
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}