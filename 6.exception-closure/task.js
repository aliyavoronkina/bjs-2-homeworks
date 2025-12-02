"use strict";

// Задача 1: Форматирование чисел

// Функция для парсинга значения
function parseCount(value) {
  // Пытаемся преобразовать в число
  const parsedValue = Number.parseFloat(value);

  // Если результат NaN - выбрасываем ошибку
  if (isNaN(parsedValue)) {
    throw new Error("Невалидное значение");
  }

  // Возвращаем результат парсинга
  return parsedValue;
}

// Функция для валидации и парсинга значения
function validateCount(value) {
  try {
    // Пытаемся распарсить значение
    return parseCount(value);
  } catch (error) {
    // Если произошла ошибка - возвращаем её
    return error;
  }
}

// Задача 2: Треугольник

// Класс Triangle
class Triangle {
  constructor(a, b, c) {
    // Проверяем, существует ли треугольник
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }

    // Сохраняем стороны
    this.a = a;
    this.b = b;
    this.c = c;
  }

  // Геттер для периметра
  get perimeter() {
    return this.a + this.b + this.c;
  }

  // Геттер для площади
  get area() {
    // Полупериметр
    const p = this.perimeter / 2;

    // Формула Герона
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    // Округляем до 3 знаков после запятой
    return Number(area.toFixed(3));
  }
}

// Функция для создания треугольника с обработкой ошибок
function getTriangle(a, b, c) {
  try {
    // Пытаемся создать треугольник
    return new Triangle(a, b, c);
  } catch (error) {
    // Если не удалось - возвращаем объект с сообщением об ошибке
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      }
    };
  }
}