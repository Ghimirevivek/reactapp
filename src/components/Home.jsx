import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  MdOutlineDashboard,
  MdOutlineAssessment,
  MdOutlineLibraryAdd,
} from 'react-icons/md';
import { GrStatusInfo } from 'react-icons/gr';
import { CgMenu } from 'react-icons/cg';
import Assessment from './Assessment';

const Home = () => {
  // State to manage the mobile menu visibility
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className='flex flex-row  justify-between bg-white w-screen h-auto '>
      {/* Desktop and tablets */}
      <div className=' sm:flex sm:flex-col sm:flex-2 p-4 hidden'>
        {/* Dashboard Link */}
        <NavLink
          to={'/'}
          className='flex flex-col items-center justify-center hover:bg-blue-200 rounded-md border-[2px] border-transparent hover:border-[2px] hover:border-blue-400 p-4 hover:text-blue-500'
        >
          <MdOutlineDashboard className='m-2' />
          Dashboard
        </NavLink>

        {/* Assessment Link */}
        <NavLink
          to={'assesment'}
          className='flex flex-col items-center justify-center hover:bg-blue-200 rounded-md border-[2px] border-transparent hover:border-[2px] hover:border-blue-400 p-4 hover:text-blue-500'
        >
          <MdOutlineAssessment className='m-2' />
          Assesment
        </NavLink>

        {/* My Library Link */}
        <NavLink
          to={'/'}
          className='flex flex-col items-center justify-center hover:bg-blue-200 rounded-md border-[2px] border-transparent hover:border-[2px] hover:border-blue-400 p-4 hover:text-blue-500'
        >
          <MdOutlineLibraryAdd className='m-2' />
          My Library
        </NavLink>
        <div className='w-auto my-1 border-b-[3px] border-dotted border-gray-300'></div>

        {/* Admin status Link */}
        <NavLink
          to={'/'}
          className='flex flex-col items-center justify-center hover:bg-blue-200 rounded-md border-[2px] border-transparent hover:border-[2px] hover:border-blue-400 p-4 hover:text-blue-500'
        >
          <div className='text-orange-600 text-[10px] bg-orange-200 rounded-full px-4 py-1'>
            Admin
          </div>
          <GrStatusInfo className='m-2' />
          Status
        </NavLink>
      </div>

      {/* Mobile Menu Icon */}
      <div
        className='sm:hidden absolute top-9 left-4 -px-8 w-[30px] h-[30px] bg-slate-200 rounded-full flex items-center justify-center'
        onClick={() => setIsMenu(!isMenu)}
      >
        <CgMenu className='text-[#1C4980]' />
      </div>

      {/* Mobile Menu */}
      {isMenu && (
        <>
          <div className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-20 left-2 h-auto'>
            <NavLink
              to={'/'}
              className='flex flex-col items-center justify-center hover:bg-blue-200 rounded-md border-[2px] border-transparent hover:border-[2px] hover:border-blue-400 p-4 hover:text-blue-500'
            >
              Dashboard
            </NavLink>
            <NavLink
              to={'assesment'}
              className='flex flex-col items-center justify-center hover:bg-blue-200 rounded-md border-[2px] border-transparent hover:border-[2px] hover:border-blue-400 p-4 hover:text-blue-500'
            >
              Assesment
            </NavLink>
            <NavLink
              to={'/'}
              className='flex flex-col items-center justify-center hover:bg-blue-200 rounded-md border-[2px] border-transparent hover:border-[2px] hover:border-blue-400 p-4 hover:text-blue-500'
            >
              My Library
            </NavLink>
            <div className='w-auto my-1 border-b-[3px] border-dotted border-gray-300'></div>
            <NavLink
              to={'/'}
              className='flex flex-col items-center justify-center hover:bg-blue-200 rounded-md border-[2px] border-transparent hover:border-[2px] hover:border-blue-400 p-4 hover:text-blue-500'
            >
              <div className='text-orange-600 text-[10px] bg-orange-200 rounded-full px-4 py-1'>
                Admin
              </div>
              Status
            </NavLink>
          </div>
        </>
      )}

      {/* Render the Assessment component */}
      <Assessment />
    </div>
  );
};

export default Home;
