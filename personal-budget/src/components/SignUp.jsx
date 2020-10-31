import React from 'react';
import { Link } from 'react-router-dom';

export const SignUp = (props) => {
  return (
    <div className='text-center'>
      <form className='form-signin'>
        <img className='mb-4' src='' alt='' width='72' height='72' />
        <h1 className='h3 mb-3 font-weight-normal'>Create an Account</h1>
        <label htmlFor='inputName' className='sr-only'></label>
        <input type='text' id='inputName' className='form-control mb-2' placeholder='Name' required autoFocus />
        <label htmlFor='inputEmail' className='sr-only'></label>
        <input
          type='email'
          id='inputEmail'
          className='form-control mb-2'
          placeholder='Email address'
          required
          autoFocus
        />
        <label htmlFor='inputPassword' className='sr-only mb-2'></label>
        <input type='password' id='inputPassword' className='form-control' placeholder='Password' required />
        <label htmlFor='inputPassword' className='sr-only'></label>
        <input type='password' id='inputPassword' className='form-control' placeholder='Confirm Password' required />
        <div className='checkbox mb-3'></div>
        <button className='btn btn-lg btn-primary btn-block' type='submit'>
          Create an Account
        </button>
        <hr />
        <Link to={'/auth/sign-in'} href=''>
          {' '}
          Sign In
        </Link>
        <p className='mt-3 mb-3 text-muted'>&copy; 2020</p>
      </form>
    </div>
  );
};
