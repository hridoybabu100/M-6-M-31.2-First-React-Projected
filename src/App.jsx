
import './App.css'
// import ToDo from './todo';
import Book from './book';
import Actors from './actor';
import Shopping from './shoping';
// import system connected
// 1. import
// 2. Name 
// 3. from
// 4. ''

function App() {
  
  //  const Actress = ["Shakib Khan", "Umar sanny", "Bappraz", "Zerin"]
  // const time = 50;

  // const books = [
  //   {id : 1, name : 'Bangla', price : 200},
  //   {id : 2, name : 'English', price : 300},
  //   {id : 3, name : 'Physics', price : 700},
  //   {id : 4, name : 'Higher', price : 1000},
  // ]


  // const shoppings = [
  //   { item : 1, Name : "Chair",  Price : 500, Brand : "Panguine Brand",},
  //   { item : 2, Name : "Table",  Price : 700, Brand : "Digital Brand",},
  //   { item : 3, Name : "Funniture",  Price : 200, Brand : "New Brand",},
  //   { item : 4, Name : "Almary",  Price : 2000, Brand : "Jarnalist Brand",},
  //   { item : 5, Name : "Palon Khat",  Price : 7000, Brand : "Chaines Brand",},
  // ]
  const books = [
    { id : 1, Name : "Bangla",  Price : 500, Brand : "Panguine Brand",},
    { id : 2, Name : "English",  Price : 700, Brand : "Digital Brand",},
    { id : 3, Name : "Math",  Price : 200, Brand : "New Brand",},
    { id : 4, Name : "Physies",  Price : 2000, Brand : "Jarnalist Brand",},
    { id : 5, Name : "Biology",  Price : 7000, Brand : "Chaines Brand",},
  ]

  return (
    <>
     
      <h1>Book Collection</h1>

      <Book book={books}></Book>
      
      {/* <Shopping shop={shoppings} ></Shopping> */}

      {/* {
        Actress.map(actor => <Actors actor={actor}></Actors>)
      } */}

      {/* {
        books.map(book => <Book key={book.id} book={book}></Book>)
      } */}
        {/* <h1>This is React Newspeed</h1>
        <Person></Person>
        <Student name="Hridoy Akanda" dep="Math"></Student>
        <Student name="Jecika Jeci" dep="physics"></Student>
        <Student name="Monika shill" dep="Higher math"></Student>
       <Devoloper name="Rayhan" tech="Phthon"></Devoloper>
       <Devoloper name="Yeasin ahmed" tech="JavaScript"></Devoloper>
       <Details name="Hridoy Akanda" age="22" ocupation="student"></Details>
       <Details name="Esrat Muslim Esha" age="16" ocupation="student"></Details>
       <Details name="Hridita Akanda" age="5" ocupation="student"></Details>

      

     <ToDo task="Learn react" isDone={true} time={time}></ToDo>
      <ToDo task="Learn java" isDone={false}></ToDo>
      <ToDo task="Take a shawer" isDone={true}></ToDo> */}

      
    
    </>
  )
}

//  Component Declare

function Person () {  // Normal Funtion er motoi bt Funtion er name er first leter Boro Hater hbe.
  // Eikhne ami variable a created korte pari.
  const age = 22 ;
  const name = "Hridoy Akanda"

  // Style 
  const style = {
    color: "red",
    
  }
  return ( // eikhne Return Korte hbe. Akadik jinis return korte hbe <> </> dite hbe. Funtion ta korar jonne upore call korte hbe.

    <div>
      <p style={style}>I am {name} Basic Learnin In React {age}</p>
    </div>

  );
};


function Devoloper (corn){
  return(
    <div style={{
      color: "yellow",
      margin : "10px",
      padding: "10px",
      border: "4px solid purple",
      borderRadius: "10px"
    }}>
      <p>Devoloper : {corn.name}</p>
      <p>Technology : {corn.tech}</p>
    </div>
  )
}

function List () {
  return(
    <div>
      <h1>This is Liist items</h1>
      <ul>
        <li>Furniture</li>
        <li>Chair</li>
        <li>Tbale</li>
      </ul>
    </div>
  );
};

function Student (props){
  // console.log(props);
  
  return(
   <div className='student'>
     <p>Name :{props.name}</p>
    <p>Dept : {props.dep}</p>
   </div>
  )
};

// const {name, age, ocupation} = { name : "Hridoy Akanda", age : 22, ocupation : "student"}

function Details ({name, age, ocupation}){
  return(
    <div className='student'>
      <p>Name :{name} </p>
      <p>age : {age}</p>
      <p>ocupation : {ocupation} </p>
    </div>
  )
}

export default App;
