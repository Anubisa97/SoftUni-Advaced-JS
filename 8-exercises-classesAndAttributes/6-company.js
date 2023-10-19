class Company {
  departmentData = {};
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (!name || !position || !department || !salary || salary < 0) {
      throw new Error("Invalid input!");
    }
    if (!this.departments.hasOwnProperty(department)) {
      this.departments[department] = [];
      this.departmentData[department] = {
        sumSalary: 0,
        avgSalary: 0,
      };
    }
    let employee = { name, salary, position };
    this.departments[department].push(employee);
    this.departmentData[department].sumSalary += salary;
    this.departmentData[department].avgSalary =
      this.departmentData[department].sumSalary /
      this.departments[department].length;
    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let bestDepartment = Object.entries(this.departmentData).sort(
      (a, b) => b[1].avgSalary - a[1].avgSalary
    );
    let buffer = `Best Department is: ${bestDepartment[0][0]}\n`;
    buffer += `Average salary: ${bestDepartment[0][1].avgSalary.toFixed(2)}\n`;
    this.departments[bestDepartment[0][0]]
      .sort((objA, objB) => {
        return objB.salary - objA.salary || objA.name.localeCompare(objB.name);
      })
      .forEach((obj) => {
        return (buffer += `${obj.name} ${obj.salary} ${obj.position}\n`);
      });
    return buffer.trim();
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
