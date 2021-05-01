import React from 'react';
import { Link } from 'react-router-dom';

export const RecoverPass = () => {
  return (
    <div>
      <div className='text-center'>
        <form className='form-signin'>
          <img className='mb-4' src='' alt='' width='72' height='72' />
          <h1 className='h3 mb-3 font-weight-normal'>Password recover</h1>
          <label htmlFor='inputEmail' className='sr-only'>
            Email address
          </label>
          <input type='email' id='inputEmail' className='form-control' placeholder='Email address' required autoFocus />
          <div className='m-2'></div>
          <button className='btn btn-lg btn-primary btn-block' type='submit'>
            Send Email
          </button>
          <hr />
          <div>
            <Link to={'/auth/sign-in'} href=''>
              {' '}
              Sign in
            </Link>
          </div>
          <p className='mt-5 mb-3 text-muted'>&copy; 2020</p>
        </form>
      </div>
    </div>
  );
};
