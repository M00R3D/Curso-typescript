class Name {
    public zone= "LatinoAmerica";
    protected city= "La Paz";
    private country= "M-X-  ";
    constructor(){}

    greet():void {
        console.log("hola mundo");
        
    }
}

class Employee extends Name{
    getEmployeeInfo(): any {
        console.log("Method not implemented.");
    }

    constructor(private readonly id:number,private readonly name:string,private readonly dept:string)
    {
        super()
        this.showInfo();
    }
    showInfo(): void{
        console.log('${this.name} ${this.dept}');
        
    }
}

const emp = new Employee(1,"Job","Programacion");

emp.greet(); 
emp.showInfo();
console.log(emp.getEmployeeInfo()); 
console.log(emp.zone);