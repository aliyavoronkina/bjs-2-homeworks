describe('Домашнее задание', () => {
  describe('Задача 1', () => {
    it('2 корня', () => {
      expect(solveEquation(1, 5, 4)).toEqual([-1, -4]);
    });
    it('1 корень', () => {
      expect(solveEquation(1, 2, 1)).toEqual([-1]);
    });
    it('нет корней', () => {
      expect(solveEquation(1, 2, 10)).toEqual([]);
    });
  });

  describe('Задача 2', () => {
    it('кейс 1', () => {
      expect(calculateTotalMortgage(10, 0, 50000, 12)).toEqual(52749.53);
    });
    it('кейс 2', () => {
      expect(calculateTotalMortgage(10, 1000, 50000, 12)).toEqual(51694.54);
    });
    it('кейс 3', () => {
      expect(calculateTotalMortgage(10, 20000, 20000, 48)).toEqual(0);
    });
    it('кейс 4', () => {
      expect(calculateTotalMortgage(10, 0, 10000, 36)).toEqual(11616.19);
    });
    it('кейс 5', () => {
      expect(calculateTotalMortgage(15, 0, 10000, 36)).toEqual(12479.52);
    });
  });
});