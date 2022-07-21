class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getId() { 
        return 2;
    }
    
    getName() { 
        return 'this.name';
    }

    getRole() {
        return `Employee`
    }

    getEmail() {
        return 'email@example.com';
    }
}

module.exports = Employee;