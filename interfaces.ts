interface Book 
{
    id:number;
    title:string;
    description:string;
}

const book: Book =
{
    id:1,
    title:"titulo",
    description:"esta es la descripcion que describe el libro"
}

const books: Book[] = [];

function getBook():Book {
    return {id:1,title:'Titulo',description:"esta es la descripcion que describe el libro"}
}

const myBook = getBook()

function createBook(book:Book):Book= {
    return book;   
}







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