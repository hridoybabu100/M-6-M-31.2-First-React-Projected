
import './App.css'
import ToDo from './todo';
// import system connected
// 1. import
// 2. Name 
// 3. from
// 4. ''

function App() {
  

  const time = 50;

  return (
    <>
      <h1>React Core Concept</h1>
      {/* //  <h1>This is React Newspeed</h1>
      //  <Person></Person>
      //  <Student name="Hridoy Akanda" dep="Math"></Student>
      //  <Student name="Jecika Jeci" dep="physics"></Student>
      //  <Student name="Monika shill" dep="Higher math"></Student>
      // <Devoloper name="Rayhan" tech="Phthon"></Devoloper>
      // <Devoloper name="Yeasin ahmed" tech="JavaScript"></Devoloper>
      // <Details name="Hridoy Akanda" age="22" ocupation="student"></Details>
      // <Details name="Esrat Muslim Esha" age="16" ocupation="student"></Details>
      // <Details name="Hridita Akanda" age="5" ocupation="student"></Details> */}

      {/* // Todo function */}

      <ToDo task="Learn react" isDone={true} time={time}></ToDo>
      <ToDo task="Learn java" isDone={false}></ToDo>
      <ToDo task="Take a shawer" isDone={true}></ToDo>

      
    
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

export default App
