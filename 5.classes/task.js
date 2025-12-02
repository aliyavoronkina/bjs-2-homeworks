"use strict";

// Задача 1: Печатное издание
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  // Геттер для state
  get state() {
    return this._state;
  }

  // Сеттер для state с ограничениями
  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  // Метод для улучшения состояния
  fix() {
    this.state = this._state * 1.5;
  }
}

// Класс Magazine (Журнал)
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

// Класс Book (Книга)
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

// Класс NovelBook (Роман)
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

// Класс FantasticBook (Фантастика)
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

// Класс DetectiveBook (Детектив)
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Задача 2: Библиотека
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  // Метод для добавления книги
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  // Метод для поиска книги по критерию
  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  // Метод для выдачи книги
  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        const book = this.books[i];
        this.books.splice(i, 1);
        return book;
      }
    }
    return null;
  }
}

// Задача 3: Журнал успеваемости (дополнительное задание)
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  // Метод для добавления оценки
  addMark(mark, subject) {
    // Проверяем корректность оценки
    if (mark < 2 || mark > 5) {
      return;
    }

    // Если предмета еще нет - создаем пустой массив
    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }

    // Добавляем оценку
    this.marks[subject].push(mark);
  }

  // Метод для получения среднего балла по предмету
  getAverageBySubject(subject) {
    // Проверяем, есть ли такой предмет
    if (!this.marks[subject] || this.marks[subject].length === 0) {
      return 0;
    }

    // Считаем среднее
    const sum = this.marks[subject].reduce((total, mark) => total + mark, 0);
    return sum / this.marks[subject].length;
  }

  // Метод для получения общего среднего балла
  getAverage() {
    // Получаем все предметы
    const subjects = Object.keys(this.marks);

    // Если нет предметов - возвращаем 0
    if (subjects.length === 0) {
      return 0;
    }

    // Считаем сумму средних баллов по всем предметам
    const totalSum = subjects.reduce((sum, subject) => {
      return sum + this.getAverageBySubject(subject);
    }, 0);

    // Возвращаем среднее арифметическое
    return totalSum / subjects.length;
  }
}