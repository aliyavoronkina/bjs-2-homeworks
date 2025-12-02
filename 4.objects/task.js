"use strict";

// Функция-конструктор Student
function Student(name, gender, age) {
  // Сохраняем аргументы в свойства
  this.name = name;
  this.gender = gender;
  this.age = age;

  // Добавляем свойство marks с пустым массивом
  this.marks = [];
}

// Метод для установки предмета
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

// Метод для добавления оценок
Student.prototype.addMarks = function (...marksToAdd) {
  // Проверяем, существует ли свойство marks и студент не отчислен
  if (!this.marks || this.excluded) {
    console.log("Студент отчислен, добавление оценок невозможно");
    return;
  }

  // Добавляем все оценки в массив marks
  this.marks.push(...marksToAdd);
};

// Метод для вычисления среднего балла
Student.prototype.getAverage = function () {
  // Проверяем, существует ли свойство marks и есть ли оценки
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }

  // Вычисляем сумму оценок
  const sum = this.marks.reduce((total, mark) => total + mark, 0);

  // Вычисляем среднее значение
  return sum / this.marks.length;
};

// Метод для отчисления студента
Student.prototype.exclude = function (reason) {
  // Удаляем свойства subject и marks
  delete this.subject;
  delete this.marks;

  // Добавляем свойство excluded с причиной
  this.excluded = reason;
};
