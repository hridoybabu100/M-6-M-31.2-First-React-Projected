// Book Collection Component declaration


// export default function Book ({book}){
//     console.log(book);
    
//     return(
//         <div className="student">
//             <h3>Name : {book.name}</h3>
//             <p> price : {book.price}</p>
//         </div>
//     )
// }

import BookList from './booklist'
export default function Book ({book}){
    return(
        <div >
            <h2>The book collection</h2>
            <p>Total book : {book.lenght} </p>
            {
                book.map(book => <BookList key={book.id} book={book}></BookList>)
            }
        </div>
    )
}