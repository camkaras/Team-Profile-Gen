const Intern = require('../lib/Intern.js');
test("test intern school/name", () => {
    const intern = new Intern('Name', 'Jack');
    expect(intern.name).toBe('Name');
    expect(intern.school).toEqual(expect.any(String));
});

test("test intern role", () => {
    const intern = new Intern('Name', 'Jack');
    expect(intern.getRole()).toBe('Intern');
});