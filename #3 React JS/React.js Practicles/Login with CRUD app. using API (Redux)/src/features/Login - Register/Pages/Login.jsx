import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Login() {


    const [formValue, setFormValue] = useState({
        email: "", 
        password: ""
    });

    const onChange = (j) => {
        setFormValue({
            ...formValue, 
            [j.target.name]:j.target.value
        })
        console.log(formValue);
    };

    const Validation = () => {
        var result = true;
        if (formValue.email == "") 
        {
            alert('Email id is required for Login.');
            result = false;
        }
        if (formValue.password == "") 
        {
            alert('Password is required for Login.');
            result = false;
        }
        return result;
    };

    const redirect = useNavigate();

    const onSubmit = async(p) => {
        p.preventDefault();

        if (Validation()) 
        {
            const res = await axios.get(`http://localhost:3000/user?email=${formValue.email}`);

            if (res.data.length > 0) 
            {
                if (res.data[0].password == formValue.password) 
                {
                    localStorage.setItem('id', res.data[0].id);
                    localStorage.setItem('name', res.data[0].name);
                    localStorage.setItem('email', res.data[0].email);
                    localStorage.setItem('password', res.data[0].password);

                    alert('Login Successfully.');
                    redirect('/Home');
                }   
                else
                {
                    alert('Password is Incorrect !');
                    return false;
                }
            }
            else
            {
                alert('Email ID is Incorrect !');
                return false;
            }
        }

    };




  return (

    <div className='container-fluid bg-light' style={{ height: '100vh' }}>
        <div className="container pt-4">
            
            <h1 className='text-center border-top border-bottom border-warning border-2 py-2'> Login </h1>

            <form>
                <div className="row mt-4">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 col-sm-12">
                        <label className='pb-2'> Email :  </label>
                        <input type="email" className="form-control" placeholder='Enter your email id here' name='email' onChange={onChange} value={formValue.name} />
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 col-sm-12">
                        <label className='pb-2'> Password :  </label>
                        <input type="password" className="form-control" placeholder='Enter your password here' name='password' onChange={onChange} value={formValue.password} />
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div className="mt-5 text-center">
                    <button className='btn btn-warning' onClick={onSubmit}> Login </button>
                </div>
            
       
            </form>

            <p className='text-center pt-5'>
                If You have not Account, please &nbsp;
                <button className='btn btn-sm btn-outline-primary' onClick={() => redirect('/Register')}> Register </button>
            </p>

        </div>

        
    </div>
  )
}

export default Login