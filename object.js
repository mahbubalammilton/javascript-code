// create object
/*
var student1 = {
    name: "Mahbub",
    age: 22,
    cgpa: 3.53,
    language: ["bangla", "english", "arabian"]
}

document.write(student1.name + "<br/>");
document.write(student1.age);


//adding a constractor

function student(name, age, cgpa, language) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.language = language;
    //create function in constractor
    this.display=function(){
        document.write(this.name)
            document.write(this.age)
                document.write(this.cgpa)
                    document.write(this.language)

    }

}
var student1 = new student("Mahbub", 22, 3.53, ["bangla", "english", "arabian"]);
var student2 = new student("Masum", 23, 3.53, ["bangla", "english", "arabian"]);
var student3 = new student("Nuhan", 10, 3.53, ["bangla", "english", "arabian"]);

document.write("student1 = " + student1.name + "<br/>");
document.write(student1.age + "<br/>");
document.write(student1.cgpa + "<br/>");
document.write(student1.language + "<br/>");

//student2

document.write("student2= " + student2.name + "<br/>");
document.write(student2.age + "<br/>");
document.write(student2.cgpa + "<br/>");
document.write(student2.language + "<br/>");
//student3

document.write("student3 = " + student3.name + "<br/>");
document.write(student3.age + "<br/>");
document.write(student3.cgpa + "<br/>");
document.write(student3.language);

*/
//////
function student(name, age, cgpa, language) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.language = language;
    //create function in constractor
    this.display = function() {
        document.write(this.name + "<br/>");
        document.write(this.age + "<br/>");
        document.write(this.cgpa + "<br/>");
        document.write(this.language + "<br/>");

    }

}
var student1 = new student("Mahbub", 22, 3.53, ["bangla", "english", "arabian"]);
var student2 = new student("Masum", 23, 3.53, ["bangla", "english", "arabian"]);
var student3 = new student("Nuhan", 10, 3.53, ["bangla", "english", "arabian"]);


student1.display();
student2.display();
student3.display();