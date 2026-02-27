const sum = require('./index');
const rest = require('./index');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds -1 + -1 to equal -2', () => {
    expect(sum(-1, -1)).toBe(-2);
});

test('rest 5 - 2 to equal 3', () => {
    expect(rest(5, 2)).toBe(3);
});

test('rest -1 - -1 to equal 0', () => {
    expect(rest(-1, -1)).toBe(0);
});