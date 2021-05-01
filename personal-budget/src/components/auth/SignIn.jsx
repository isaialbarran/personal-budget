import React from 'react';
import './signIn.css';
import { Link } from 'react-router-dom';

export const SignIn = () => {
  return (
    <div className='text-center'>
      <form className='form-signin'>
        <img className='mb-4' src='' alt='' width='72' height='72' />
        <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
        <label htmlFor='inputEmail' className='sr-only'>
          Email address
        </label>
        <input
          type='email'
          id='inputEmail'
          className='form-control mb-2'
          placeholder='Email address'
          required
          autoFocus
        />
        <label htmlFor='inputPassword' className='sr-only'>
          Password
        </label>
        <input type='password' id='inputPassword' className='form-control' placeholder='Password' required />
        <div className='m-2'>
          <Link className='mb-4' to={'/auth/recover'} href=''>
            {' '}
            Recover password
          </Link>
        </div>
        <button className='btn btn-lg btn-primary btn-block' type='submit'>
          Sign in
        </button>
        <hr />
        <div>
          <p>Doesn't have an account?</p>
        </div>
        <Link to={'/auth/sign-up'} href=''>
          {' '}
          Sign up
        </Link>
        <p className='mt-5 mb-3 text-muted'>&copy; 2020</p>
      </form>
    </div>
  );
};
