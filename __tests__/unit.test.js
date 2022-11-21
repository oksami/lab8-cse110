// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('valid phone number return true', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('valid phone number return true', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('invalid phone number return false', () => {
    expect(functions.isPhoneNumber('123')).toBe(false);
});
test('invalid phone number return false', () => {
    expect(functions.isPhoneNumber('123456789101112131415')).toBe(false);
});
test('valid email return true', () => {
    expect(functions.isEmail('abcd@hotmail.com')).toBe(true);
});
test('valid email return true', () => {
    expect(functions.isEmail('abcd@hyahoo.com')).toBe(true);
});
test('invalid email return false', () => {
    expect(functions.isEmail('abcdhotmail@om')).toBe(false);
});
test('invalid email return false', () => {
    expect(functions.isEmail('dotcom')).toBe(false);
});
test('valid password return true', () => {
    expect(functions.isStrongPassword('newyork2014')).toBe(true);
});
test('valid password return true', () => {
    expect(functions.isStrongPassword('avengers')).toBe(true);
});
test('invalid password return false', () => {
    expect(functions.isStrongPassword('a')).toBe(false);
});
test('invalid password return false', () => {
    expect(functions.isStrongPassword('avengersendgameinfinitywarcivilwarwintersoldier')).toBe(false);
});
test('valid date return true', () => {
    expect(functions.isDate('11/20/2022')).toBe(true);
});
test('valid date return true', () => {
    expect(functions.isDate('8/3/2001')).toBe(true);
});
test('invalid date return false', () => {
    expect(functions.isDate('8/3/01')).toBe(false);
});
test('invalid date return false', () => {
    expect(functions.isDate('11-20-2022')).toBe(false);
});
test('valid hex return true', () => {
    expect(functions.isHexColor('#FC94AF')).toBe(true);
});
test('valid hex return true', () => {
    expect(functions.isHexColor('#f0f')).toBe(true);
});
test('invalid hex return false', () => {
    expect(functions.isHexColor('rosepink')).toBe(false);
});
test('invalid hex return false', () => {
    expect(functions.isHexColor('#f#0f')).toBe(false);
});