import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {

  const redirect = useNavigate();

  var username = localStorage.getItem('name');
  // console.log(username);

  var logout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');

    redirect('/');
  }


  return (
    <div className='container mt-5 pt-5 text-center'>
        <h1 className='mb-5'> Hello, {username}, </h1>
        <h2> Welcome to Home Page. </h2>

        <button className='btn btn-danger mt-5 px-5' onClick={logout}> Logout </button>
    </div>
  )
}

export default Home