const Employee = require('./Employee');
class Engineer extends Employee { 
    constructor (name = '', github){
        super(name);
        this.github = github;
    }
    
    getRole() { 
        return `Engineer`
    }

    getGithub(){
        return `https://github.com/${this.github}/`
    }
}
module.exports = Engineer;