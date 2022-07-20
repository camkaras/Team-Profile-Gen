const Engineer = require('../lib/Engineer.js');
test("engineer test GH/Name", () => {
    const engineer = new Engineer('Name', 'gituser');
    expect(engineer.name).toBe('Name');
    expect(engineer.github).toEqual(expect.any(String));
});

test("test role", () => {
    const engineer = new Engineer('Name', 'gituser');
    expect(engineer.getRole()).toBe('Engineer');
});

test("test engineer GH", () => {
    const engineer = new Engineer('Name', 'Jack');
    expect(engineer.getGithub()).toEqual(expect.any(String));
})