interface Person{
    id: number;
    name: string;
}

class DataCollection{
    private items:dataType[]=[];

    addItem(newItem:dataType):void{
        this.items.push(newItem);
    }
    getItems():void{
        console.log("lista de items "+JSON.stringify(this.items));
    }
    getNames():string[]{
        return this.items.map((item)=>item.name);
    }
    getItemById(id:number):dataType | undefined{
        return this.items.find((item:dataType)=>item.id===id);
    }
}

const personCollection = new DataCollection();
const newData={
    id:1,
    name:'Job Moore'
}


////hasta aqui todo normal, hemos creado una  Interfaz Person
//tambien una Clase People:
// Esta clase es responsable de gestionar una colección de objetos Person.
// Contiene una propiedad privada items, que es un array de personas.


//Métodos para recibir los parametros de la clase y visualizarlos como en  getItems getNames getItemById o modificarlos como en addItem



//para poder crear una clase que tenga literalmente lo mismo pero nos sirva para almacenar productos en vez de personas podriamos utilizar un data type


interface Product{
    id: number;
    name: string;
    price: number;
}

type dataType = Person | Product;

const productCollection= new DataCollection();
const newData2={
    id:2,
    name:'beer'
}
