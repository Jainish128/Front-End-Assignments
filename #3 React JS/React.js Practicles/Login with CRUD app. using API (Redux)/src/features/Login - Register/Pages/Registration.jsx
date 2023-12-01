import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insert } from '../../userReducer';
import { useNavigate } from 'react-router-dom';


function Registration() {


    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        gender: "",
        country: "",
    });

    const onChange = (j) => {
        setFormValue({
            ...formValue,
            id: new Date().getTime().toString(),
            [j.target.name]:j.target.value
        })
        console.log(formValue);
    };

    const Validation = () => {
        var result = true;
        if (formValue.name == "") 
        {
            alert('Name is required for Register.');
            result = false;
        }
        if (formValue.email == "") 
        {
            alert('Email is required for Register.');
            result = false;
        }
        if (formValue.mobile == "") 
        {
            alert('Mobile is required for Register.');
            result = false;
        }
        if (formValue.password == "") 
        {
            alert('Password is required for Register.');
            result = false;
        }
        if (formValue.gender == "") 
        {
            alert('Gender is required for Register.');
            result = false;
        }
        if (formValue.country == "") 
        {
            alert('Country is required for Register.');
            result = false;
        }
        return result;
    };

    const dispatch = useDispatch();
    const redirect = useNavigate();

    const onSubmit = (p) => {
        p.preventDefault();

        if (Validation()) 
        {
            dispatch(insert(`http://localhost:3000/user`, formValue));
            alert('Your Registration was Completed.');
            setFormValue({
                ...formValue,
                name: "",
                email: "",
                mobile: "",
                password: "",
                gender: "",
                country: ""
            });
            redirect("/");
        }
    };
    


  return (
    <div className='container-fluid bg-light' style={{ height: '100vh' }}>
        <div className="container pt-4">
            
            <h1 className='text-center border-top border-bottom border-primary border-2 py-2'> Registration Form </h1>

            <form>
                <div className="row mt-4">
                    <div className="col-md-4 col-sm-12">
                        <label className='pb-2'> Name :  </label>
                        <input type="text" className="form-control" placeholder='Enter your name here' name='name' onChange={onChange} value={formValue.name} />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <label className='pb-2'> Email :  </label>
                        <input type="email" className="form-control" placeholder='Enter your email id here' name='email' onChange={onChange} value={formValue.email} />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <label className='pb-2'> Mobile Number :  </label>
                        <input type="number" className="form-control" placeholder='Enter your mobile number here' name='mobile' onChange={onChange} value={formValue.mobile} />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4 col-sm-12">
                        <label className='pb-2'> Password :  </label>
                        <input type="password" className="form-control" placeholder='Enter your password here' name='password' onChange={onChange} value={formValue.password} />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <label className='mb-2'> Gender :  </label> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" name='gender' value="Male" onChange={onChange} /> Male   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" name='gender' value="Female" onChange={onChange} /> Female
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <label className='pb-2'> Country :  </label>
                        <select className='form-control' name='country' onChange={onChange} value={formValue.country}>
                            <option value="" selected disabled> Select your Country </option>
                            <option value="India"> India </option>
                            <option value="Canada"> Canada </option>
                            <option value="US"> US </option>
                            <option value="Switzerland"> Switzerland </option>
                            <option value="Dubai"> Dubai </option>
                        </select>
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <button className='btn btn-primary' onClick={onSubmit}> Register </button>
                </div>
            
       
            </form>

            <p className='text-center pt-5'>
                If You have already Account, please &nbsp;
                <button className='btn btn-sm btn-outline-primary' onClick={() => redirect('/')}> Login </button>
            </p>

        </div>
    </div>
  )
}

export default Registration