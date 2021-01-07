const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates new slot', () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe('slot');
});

test