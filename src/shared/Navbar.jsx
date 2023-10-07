import React from 'react';
import ActiveLink from '../utilities/ActiveLink';

const Navbar = () => {
  const navData = (
    <>
      <li>
        <ActiveLink to='/'>
          <a>Work</a>
        </ActiveLink>
      </li>

      <li>
        <ActiveLink to='/'>
          <a>Solutions</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to='/services'>
          <a>Services</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to='/'>
          {' '}
          <a>Tech for Hire</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to='/'>
          <a>About Us</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to='/'>
          <a>Blog</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to='/'>
          <a className='bg-lime-500 px-2 md:px-4 lg:px-5 py-1 md:py-2 lg:py-3  rounded-full'>
            Request a quote
          </a>
        </ActiveLink>
      </li>
    </>
  );
  return (
    <div>
      <div className='navbar flex justify-between bg-base-100'>
        <div className='navbar-start'>
          <a href='/' className='btn btn-ghost normal-case text-2xl text-red-500'>Strong Support 24</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navData}</ul>
        </div>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            {navData}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
