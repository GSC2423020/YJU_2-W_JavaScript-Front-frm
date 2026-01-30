class Student { constructor() { this.x = 2;} }
std1 = new Student();
std2 = new Student();
print = console.log;

print(std1.__proto__ === Student.prototype);
print(Student.prototype);