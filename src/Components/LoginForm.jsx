import React from 'react';
import { useState } from 'react';
import "./css/Loginup.css";

const account1 = {
  username: "Carlos",
  pin: 1111,
};

const account2 = {
  username: "Steven",
  pin: 2222,
};

const account3 = {
  username: "Jessica",
  pin: 3333,
};

const account4 = {
  username: "Davis",
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];


const LoginForm = () => {
  const[username, setUsername] = useState("");
  const[pin, setPin] = useState("");
  const[error, setError] = useState("");

  const handleSubmit = (event) =>{
    event.preventDefault();
    const matchingaccount = accounts.find(
      (account) => account.username === username && account.pin === Number(pin)
    );
    if(matchingaccount){
      setError("You are succesfully login the page")
    } else{
      setError("Incorrect username or pin")
    }
  };

  const valuehandler = (event) =>{
    setUsername(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='sign-in-form' action="">
        <label>
          Username
          <input type='text' value={username} onChange={valuehandler}/>
        </label>
        <label>
          Password
          <input 
          type='text' 
          value={pin} 
          onChange={(event) => setPin(event.target.value)}/>
        </label>
        <br/>
        <button className='loginbtn' type='submit'>
          Login
        </button>
        <div className='error'>{error && <div>{error}</div>}</div>
      </form>
    </div>
  )
}

export default LoginForm;