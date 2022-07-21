const inquirer = require('inquirer');
const {writeFile, copyFile} = require('./src/site.js');
const generatePage = require('./src/page-template');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter Manager name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter Manager employee ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please entervalid number');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address: ',
            default: () => {},
            validate: function (email) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log(" Please valid email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter Manager office number"            
        }
    ]);
}

const totalData = [];
const promptEmployee = (teamData) => {
    if (!teamData) {
        teamData = [];
        }
    console.log(`
        =================
        Add a Employee
        =================
        `);
    return inquirer.prompt([                   
    {
        type: 'list',
        name: 'id2',
        message: 'Provide a type for employee',
        choices: ['Engineer', 'Intern']
    },  
    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub username ',
        when: (input) => input.id2 === 'Engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter intern school ",
        when: (input) => input.id2 === 'Intern'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Employee Name? (Required)',
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
                console.log('Please enter valid name!');
            return false;
            }
        }
    },
    {
    type: 'input',
    name: 'id',
    message: 'Provide employee ID (Required)',
        validate: idInput => {
            if (idInput) {
            return true;
            } else {
                console.log('Please enter valid ID!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address: ',
        default: () => {},
        validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log(" Please enter valid email")
                return false;
            }
        }
        },
        {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to enter another employee?',
        default: 'false'
        }
])
    .then(employeeData => {
        teamData.push(employeeData);   
        totalData.push(employeeData);
        if (employeeData.confirmAddEmployee) {         
            return promptEmployee(teamData);       
        } else {                                   
        return generatePage(totalData);                      
        }
    })
    .then(pageHTML => {
    
        if(pageHTML) {
            return writeFile(pageHTML);
        }
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
}; 

promptManager()
    .then(answers => {totalData.push(answers);
        console.log(totalData);
    })
    .then(promptEmployee);