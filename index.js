class Student {
    constructor(name) {
        this.name = name;
    }
    
    describe() {
        return `${this.name} is a student`;
    }
} 
    
class Homeroom {
    constructor(name) {
        this.name = name; 
        this.students = [];
    }
    
    addStudent(student) {
        if (student instanceof Student) {
            this.students.push(student);
        } else {
            throw new Error(`You can only add an instance of Student. Argument is not a student: ${student}`);
        }
    }
    
    describe() { 
            return `${this.name} has ${this.students.length} students.`;
        }
    }

class Menu {
    constructor() {
        this.homerooms = [];
        this.selectedHomeroom = null;
    }
    
    start () {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createHomeroom();
                    break;
                case '2':
                    this.viewHomeroom();
                    break;
                case '3':
                    this.deleteHomeroom();
                    break; 
                case '4':
                    this.displayHomerooms();
                    break;
                default: 
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
            }
    
            alert('Goodbye!');
        }
    
        showMainMenuOptions() { //purple parenthesis
            return prompt(`
            0) Exit 
            1) Create new homeroom 
            2) View homeroom
            3) Delete homeroom 
            4) Display all homerooms
            `); 
        }

    showHomeroomMenuOptions(homeroomInfo) {
        return prompt(`
            0) back
            1) create student 
            2) delete student
            --------------------
            ${homeroomInfo}
         `);
    }
     
        displayHomerooms() {
            let homeroomString = '';
            for (let i = 0; i < this.homerooms.length; i++) {
                homeroomString += i + ') ' + this.homerooms[i].name + '\n'; 
            }
            alert(homeroomString);
        }
    
        createHomeroom() {
            let name = prompt ('Enter name for new homeroom. E.g., "Mrs. Smith Homeroom"');
            this.homerooms.push(new Homeroom(name));
        } 
    
        viewHomeroom() {
            let index = prompt('Enter the index of the homeroom you wish to view:');
            if (index > -1 && index < this.homerooms.length) {
                this.selectedHomeroom = this.homerooms[index];
                let description = 'homeroom name: ' + this.selectedHomeroom.name + '\n';
                
                for (let i = 0; i < this.selectedHomeroom.students.length; i++) {
                    description += i + ') ' + this.selectedHomeroom.students[i].name;
                }
    
        let selection = this.showHomeroomMenuOptions(description);
        switch (selection) {
            case '1': 
                this.createStudent();
                break; 
            case '2': 
                this.deleteStudent();
          }
        }
    }

    deleteHomeroom() {
        let index = prompt('Enter the index of the homeroom you wish to delete:');
        if (index > -1 && index < this.homerooms.length) {
            this.homerooms.splice(index,1);
        }
    }

    createStudent() {
        let name = prompt('enter name for new student');
        this.selectedHomeroom.students.push(new Student(name))
    }

    deleteStudent() {
        let index = prompt('Enter the index of the student you want to delete:');
        if (index > -1 && index < this.selectedHomeroom.students.length) {
         this.selectedHomeroom.students.splice(index,1);
        }
    }
}

let menu = new Menu();
menu.start();


    