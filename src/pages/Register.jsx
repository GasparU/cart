import React from 'react'
import { useForm } from 'react-hook-form';
import useAuthentication from '../hooks/useAuthentication';
import defaultRegisterValues from './../utils/defaultRegisterValues';
import './style/register.css'

const Register = () => {
    const { register, handleSubmit, reset } = useForm();

    const { createNewUser } = useAuthentication()

    const submit = (data) => {
        createNewUser(data)
        reset(defaultRegisterValues)
    }

    return (
        <form onSubmit={handleSubmit(submit)} className='register'>
            <h1>Create a new User</h1>
            <div>
                <label htmlFor='text'>First Name</label>
                <input {...register("firstName")} type="text" id='firstName' />
            </div>
            <div>
                <label htmlFor='text'>Last Name</label>
                <input {...register("lastName")} type="text" id='LastName' />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input {...register("email")} type="email" id='email' />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input {...register("password")} type="password" id='Password' />
            </div>
            <div>
                <label htmlFor='phone'>Phone</label>
                <input {...register("phone")} type="tel" id='Phone' />
            </div>
            <button>Register</button>
        </form>
    )
}

export default Register