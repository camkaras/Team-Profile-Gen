let Manager = require('../lib/Manager');
let Engineer = require('../lib/Engineer');
let Intern = require('../lib/Intern');
let engineer = [];
let intern = [];

const generateManager = () => {
const {name, id, email, officeNumber} = Manager;
    return `
        <div class="flex-row justify-space-around">
            <div class="card mb-2 mr-4">
                <div class="col-3 mb-1 bg-tertiary text-light p-3">
                <h3 class="text-light">${name}</h3>
                <i class="fas fa-mug-hot mr-3"> Manager</i>
                </div>
            <div class="bg-light text-dark p-3">
            </br>
                <p>ID: ${id}</p>
                <p>Email: <a href="mailto:${email}">${email}</a></p>
                <p> Office number: ${officeNumber}</p>
            </br>
            </div>     
        </div>    
    `;
}

const generateEngineer = (engineer) => {
    return `
        <div class="flex-row justify-space-around">
        <div class="card mb-2 mr-4">
            <div class="col-3 mb-1 bg-tertiary text-light p-3">
            <h3 class="text-light">${engineer.name}</h3>
            <i class="fas fa-glasses mr-3"> Engineer</i>
            </div>
        <div class="bg-light text-dark p-3">
            </br>
            <p>ID: ${engineer.id}</p>
            <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p> GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </br>
        </div>     
        </div>    
`;
}

const generateIntern = () => {
    let str = '';
    for (var i=0; i<intern.length; i++) {
    str += `
            <div class="flex-row justify-space-around">
            <div class="card mb-2 mr-4">
                <div class="col-3 mb-1 bg-tertiary text-light p-3">
                <h3 class="text-light">${intern[i].name}</h3>
                <i class="fas fa-user-graduate mr-2"> Intern</i>
                </div>
            <div class="bg-light text-dark p-3">
                </br>
                    <p>ID: ${intern[i].id}</p>
                    <p>Email: <a href="mailto:${intern[i].email}">${intern[i].email}</a></p>
                    <p> School: ${intern[i].school}</p>
                </br>
            </div>     
            </div>    
    `;
    }
        return str;
};

module.exports = templateData => {
    const  employee  = templateData;
    Manager = employee[0];
    for (var i=1; i<employee.length; i++) {
        if (employee[i].id2 === 'Engineer') {
            Engineer = employee[i];
            engineer.push(Engineer);     
        } else {     
            Intern = employee[i];
            intern.push(Intern);      
    }
}

return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header>
        <div class="container flex-row justify-center align-center py-3">
            <h1 class="page-title text-secondary py-2 px-3">My team</h1>
        </div>
    </header>
    <main class="container my-5">
        <section>
            ${ generateManager() }
            ${ engineer.map(engineer => generateEngineer(engineer))}
            ${ intern.length > 0 ? generateIntern(): '' }
        </section>       
    </main>
    <footer>
    </footer>
        </body>
    </html>
    `;
};