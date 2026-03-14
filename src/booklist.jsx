export default function BookList ({book}){
    return (
        <div className="student">
            <ol> Id : {book.id} </ol>
            <ol> Name : {book.Name} </ol>
            <ol> Price : {book.Price} </ol>
            <ol> Brand : {book.Brand} </ol>
            
        </div>
    )
}