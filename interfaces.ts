interface Book 
{
    id:number;
    title:string;
    description:string;
    coAuthor?:string;
    isLoan: (id: number)=> void
}

const book: Book =
{
    id: 1,
    title: "titulo",
    description: "esta es la descripcion que describe el libro",
    isLoan: function (id: number): void {
        throw new Error("Function not implemented.");
    }
}

const books: Book[] = [];
const anotherBook = getBook();
books.push(anotherBook);
books.push(anotherBook);
books.push(anotherBook);
books.push(anotherBook);
console.log(books);


function getBook(): Book {
    return {
        id: 1,
        title: 'Titulo',
        description: "esta es la descripcion que describe el libro",
        isLoan: function (id: number): void {
            throw new Error("Function not implemented.");
        }
    };
}

const myBook = getBook()
function createBook(book:Book):Book {
    return book;   
}
console.log(myBook.title);

const newBook: Book = {
    id: 2,
    title: "Nuevo Libro",
    description: "Descripción del nuevo libro",
    isLoan: function (id: number): void {
        console.log(`Libro con ID ${id} ha sido prestado.`);
    }
};

const createdBook = createBook(newBook);
console.log(createdBook.title); 
createdBook.isLoan(createdBook.id);



//EXTENDES E IMPLEMENTS


interface Person
{
    id:number;
    name:string;
}

interface Employee extends Person
{
    area:string;
}

interface User extends Person
{
    money:number;
}

interface Animal{
    name: string;
    getDogs()=>void;
    getCats()=>void;
}





class Zoo implements Animal{
    name="mooh  "
    getDogs():void{

    }
    getCats():void{
        
    }
}