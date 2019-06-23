import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';

it('works for ones', () => {
  expect(ones.evalRoll([1, 1, 1, 2, 2])).toEqual(3);
  expect(ones.evalRoll([3, 2, 2, 2, 2])).toEqual(0);
});

it('works for twos', () => {
  expect(twos.evalRoll([3, 2, 2, 2, 2])).toEqual(8);
});

it('works for threes', () => {
  expect(threes.evalRoll([3, 2, 2, 2, 2])).toEqual(3);
});

it('works for fours', () => {
  expect(fours.evalRoll([4, 4, 2, 2, 2])).toEqual(8);
});

it('works for fives', () => {
  expect(fives.evalRoll([3, 5, 2, 2, 2])).toEqual(5);
});

it('works for sixes', () => {
  expect(sixes.evalRoll([6, 2, 1, 3, 4])).toEqual(6);
});

it('works for three of kind', () => {
  expect(threeOfKind.evalRoll([1, 1, 1, 2, 2])).toEqual(7);
  expect(threeOfKind.evalRoll([1, 1, 1, 1, 1])).toEqual(5);
  expect(threeOfKind.evalRoll([1, 1, 3, 2, 2])).toEqual(0);
})

it('works for four of kind', () => {
  expect(fourOfKind.evalRoll([1, 1, 1, 1, 2])).toEqual(6);
  expect(fourOfKind.evalRoll([1, 1, 1, 1, 1])).toEqual(5);
  expect(fourOfKind.evalRoll([1, 1, 1, 2, 2])).toEqual(0);
})

it('works for full house', () => {
  expect(fullHouse.evalRoll([1, 1, 1, 2, 2])).toEqual(25);
  expect(fullHouse.evalRoll([1, 1, 1, 1, 1])).toEqual(0);
  expect(fullHouse.evalRoll([1, 1, 1, 1, 2])).toEqual(0);
})

it('works for small straights', () => {
  expect(smallStraight.evalRoll([1, 2, 3, 4, 6])).toEqual(30);
  expect(smallStraight.evalRoll([2, 1, 3, 4, 6])).toEqual(30);
  expect(smallStraight.evalRoll([1, 3, 4, 5, 6])).toEqual(30);
  expect(smallStraight.evalRoll([1, 2, 3, 4, 4])).toEqual(30);
  expect(smallStraight.evalRoll([2, 2, 3, 4, 5])).toEqual(30);
  expect(smallStraight.evalRoll([1, 2, 3, 4, 5])).toEqual(30);
  expect(smallStraight.evalRoll([2, 2, 3, 4, 6])).toEqual(0);
  expect(smallStraight.evalRoll([1, 3, 4, 5, 1])).toEqual(0);
})

it('works for large straights', () => {
  expect(largeStraight.evalRoll([1, 2, 3, 4, 5])).toEqual(40);
  expect(largeStraight.evalRoll([2, 1, 3, 4, 5])).toEqual(40);
  expect(largeStraight.evalRoll([2, 3, 4, 5, 6])).toEqual(40);
  expect(largeStraight.evalRoll([1, 2, 3, 4, 4])).toEqual(0);
  expect(largeStraight.evalRoll([2, 2, 3, 4, 5])).toEqual(0);
});

it('works for yahtzee', () => {
  expect(yahtzee.evalRoll([1, 1, 1, 1, 1])).toBe(50);
  expect(yahtzee.evalRoll([1, 1, 1, 1, 2])).toBe(0);
})

it('works for chance', () => {
  expect(chance.evalRoll([1, 1, 1, 1, 1])).toBe(5);
  expect(chance.evalRoll([1, 2, 3, 4, 5])).toBe(15);
})