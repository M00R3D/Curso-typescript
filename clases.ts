class Employee {
    id:number;
    name:string;
    dept:string;

    constructor(id:number,name:string,dept:string)
    {
        this.id=id;
        this.name=name;
        this.dept=dept;
        this.showInfo();
    }
    showInfo() void{
        console.log('${this.name} ${this.dept}');
        
    }
}

const emp = new Employee(1,"Job","Programacion");
emp.