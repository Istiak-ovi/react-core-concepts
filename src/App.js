import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
// import { useState } from 'react';

function App() {
  const nayoks = ["Anwar","Zafar","Alomgir","Salman","Bappi","Shuvo"];
  const products = [
    {name : 'Photoshop', price : '90.99$'},
    {name : 'Adobe' , price : '60.09$'},
    {name : 'PDf Reader' , price :'6.08$'},
    {name : 'Premier Design' , price :'9.08$'}
  ]
//  const nayokNames = nayoks.map(nayok => nayok)
//  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok =><li>{nayok}</li>)
          }
         
        </ul>
          {
            products.map(pd =><Product product={pd}></Product>)
          }
        {/* <Product product = {products[0]} ></Product>
        <Product product = {products[1]} ></Product>
        <Product product = {products[2]} ></Product> */}
        </header>
    </div>
  );
}
function Counter(){
  const [count , setCount] = useState(11);
  const handleIncrease = () => {
    // const newCount = count + 1;
    setCount(count + 1);
  }
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onMouseMove={() => setCount(count-1)}>Decrease</button>
      <button onClick={() => setCount(count+1)} >Increase</button>
    </div>
  )
}
function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius : '5px',
    backgroundColor : 'lightgray',
    height : '200px',
    width : '200px',
    float : 'left'
  } 
  const {name,price} = props.product;
  console.log(name , price);
    return(
    <div style = {productStyle}>
      <h3>{name} </h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  return (
    <div style ={{border:'2px solid gold',width:'400px', margin:'10px'}}>
      <h3>My name : {props.name}</h3>
      <p>My Profession : {props.job} </p>
    </div>
  )
}


export default App;
