const Employee = require('../lib/Employee.js');
test('employee name/#/username', () => {
    const employee = new Employee('Name');
    expect(employee.name).toBe('Name');
    employee.id = 1;
    expect(employee.id).toEqual(expect.any(Number));
    employee.email = 'email@example.com';
    expect(employee.email).toEqual(expect.any(String));
});

test('name', () => {
    const employee = new Employee('Name');
    expect(employee.getName()).toEqual(expect.any(String));
});

test('Id', () => {
    const employee = new Employee('Name');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('email', () => {
    const employee = new Employee('Name');
    expect(employee.getEmail()).toEqual(expect.any(String));
});
