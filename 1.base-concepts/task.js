"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const d = b * b - 4 * a * c;

  if (d < 0) {
    return arr;
  }

  if (d === 0) {
    arr.push(-b / (2 * a));
    return arr;
  }

  arr.push((-b + Math.sqrt(d)) / (2 * a));
  arr.push((-b - Math.sqrt(d)) / (2 * a));
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);
  countMonths = parseInt(countMonths);

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  const P = percent / 100 / 12;
  const S = amount - contribution;

  if (S <= 0) {
    return 0;
  }

  const payment = S * (P + P / (Math.pow(1 + P, countMonths) - 1));
  const total = payment * countMonths;

  return Math.round(total * 100) / 100;
}