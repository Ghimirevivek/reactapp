import React from 'react';
import { BiMobile } from 'react-icons/bi';
import { MdOutlineAssessment, MdOutlinePeopleAlt } from 'react-icons/md';
import { ImEarth } from 'react-icons/im';
import { FiLink2 } from 'react-icons/fi';

const Header = () => {
  return (
    // Main header container
    <div className='w-[88vw] p-3'>
      {/* Header section */}
      <div className='w-full h-auto rounded-sm flex items-center justify-start p-3 sm:mx-0 mx-8'>
        {/* Main title */}
        <h3 className='text-2xl font-semibold text-[#1C4980] p-2'>
          Assessment
        </h3>
        <span className='h-[40px] w-[1px] bg-gray-300 mx-1'></span>

        {/* Subtitle for "My Assessments" */}
        <h5 className='mx-2 text-md font-semibold text-blue-500 p-2  before:absolute before:bg-blue-500 before:p-0.5 before:top-[82px] before:w-[115px] cursor-pointer'>
          My Assessments
        </h5>
        <div className=''>
          {/* Mobile icon */}
          <BiMobile className='inline absolute right-0 top-9 text-xl' />
        </div>
      </div>
      <div className='border-b-[2px] border-dotted border-gray-200 w-full'></div>
      <div className='text-xl my-2 text-[#1C4980] py-2 px-4'>
        Assessment Overview
      </div>

      {/* Desktop and Tablet Layout */}
      <div className='w-[90vw] h-auto p-2 rounded-lg mx-4 lg:flex items-center justify-start hidden'>
        {/* Total Assessment */}
        <div className=' h-[9rem] text-sm font-semibold text-[#1C4980] py-4 px-8 rounded-s-2xl border-[2px] border-dotted border-gray-300'>
          Total Assessment
          <div className=' flex items-center justify-start p-2'>
            <div className='w-[40px] h-[40px] bg-[#EBE8FD] flex items-center justify-center rounded-md cursor-pointer'>
              <MdOutlineAssessment className='inline text-lg  text-[#6548EE]' />
            </div>
            <span className='p-2 font-bold text-lg'>34</span>
          </div>
        </div>

        {/* Candidates */}
        <div className='h-[9rem] text-sm font-semibold text-[#1C4980] py-4 px-8 border-l-transparent border-[2px] border-dotted border-gray-300'>
          Candidates
          <div className=' flex items-center justify-start p-2'>
            <div className='w-[40px] h-[40px] bg-[#EBE8FD] flex items-center justify-center rounded-md cursor-pointer'>
              <MdOutlinePeopleAlt className='inline text-lg  text-[#6548EE]' />
            </div>
            <span className='p-2 font-bold text-md'>
              11,145 <span className='text-[#05C165] text-[12px]'>+89</span>
              <span className='block text-[#1C4980] text-[12px] font-semibold'>
                Total Candidate
              </span>
            </span>
            <span className='h-[30px] w-[0.8px] bg-gray-300'></span>
            <span className='p-2 font-bold text-md'>
              114 <span className='text-[#05C165] text-[12px]'>+89</span>
              <span className='block text-[#1C4980] text-[12px] font-semibold'>
                Who Attempted
              </span>
            </span>
          </div>
        </div>

        {/* Candidate Source */}
        <div className='h-[9rem] text-sm font-semibold text-[#1C4980] py-4 px-8 border-l-transparent border-[2px] border-dotted border-gray-300'>
          Candidate Source
          <div className=' flex items-center justify-start p-2'>
            <div className='w-[40px] h-[40px] bg-[#FCE8EF] flex items-center justify-center rounded-md cursor-pointer'>
              <ImEarth className='inline text-lg  text-[#E9407A]' />
            </div>
            <span className='p-2 font-bold text-md'>
              11,000 <span className='text-[#05C165] text-[12px]'>+89</span>
              <span className='block text-[#1C4980] text-[12px] font-semibold'>
                E-mail
              </span>
            </span>
            <span className='h-[30px] w-[0.8px] bg-gray-300'></span>
            <span className='p-2 font-bold text-md'>
              145 <span className='text-[#05C165] text-[12px]'>+89</span>
              <span className='block text-[#1C4980] text-[12px] font-semibold'>
                Social Share
              </span>
            </span>
            <span className='h-[30px] w-[0.8px] bg-gray-300'></span>
            <span className='p-2 font-bold text-md'>
              145 <span className='text-[#05C165] text-[12px]'>+89</span>
              <span className='block text-[#1C4980] text-[12px] font-semibold'>
                Unique Link
              </span>
            </span>
          </div>
        </div>

        {/* Total Purpose */}
        <div className='h-[9rem] text-sm font-semibold text-[#1C4980] py-4 px-8 border-l-transparent border-[2px] border-dotted border-gray-300 rounded-e-2xl'>
          Total Purpose
          <div className=' flex items-center justify-start p-2'>
            <div className='w-[40px] h-[40px] bg-[#E5F1FC] flex items-center justify-center rounded-md cursor-pointer'>
              <FiLink2 className='inline text-lg  text-[#0073E6]' />
            </div>
            <span className='p-2 font-bold text-lg'>11</span>
          </div>
        </div>
      </div>

      {/* Mobile Layout*/}
      <div className='w-auto h-auto  rounded-lg mx-4 flex items-center justify-start lg:hidden flex-wrap'>
        <div className='flex flex-nowrap items-center justify-center'>
          <div className='w-[10.5rem] h-[7rem] text-sm font-semibold text-[#1C4980] py-4 px-2 rounded-s-2xl border-[2px]  border-gray-300 '>
            Total Assessment
            <div className=' flex items-center justify-start p-2'>
              <div className='w-[40px] h-[40px] bg-[#EBE8FD] flex items-center justify-center rounded-md cursor-pointer'>
                <MdOutlineAssessment className='inline text-lg  text-[#6548EE]' />
              </div>
              <span className='p-2 font-bold text-lg'>34</span>
            </div>
          </div>
          <div className='w-[10.5rem] h-[7rem] text-sm font-semibold text-[#1C4980] py-4 px-2 border-l-transparent border-[2px] border-gray-300 rounded-e-2xl'>
            Total Purpose
            <div className=' flex items-center justify-start p-2'>
              <div className='w-[40px] h-[40px] bg-[#E5F1FC] flex items-center justify-center rounded-md cursor-pointer'>
                <FiLink2 className='inline text-lg  text-[#0073E6]' />
              </div>
              <span className='p-2 font-bold text-lg'>11</span>
            </div>
          </div>
        </div>
        <div className='h-auto text-sm font-semibold text-[#1C4980] py-2 px-5 min-w-[20.9rem] border-[2px] border-gray-300 rounded-2xl'>
          Candidates
          <div className=' flex items-center justify-start p-2'>
            <div className='w-[40px] h-[40px] bg-[#EBE8FD] flex items-center justify-center rounded-md cursor-pointer'>
              <MdOutlinePeopleAlt className='inline text-lg  text-[#6548EE]' />
            </div>
            <span className='p-2 font-bold text-md'>
              11,145 <span className='text-[#05C165] text-[12px]'>+89</span>
              <span className='block text-[#1C4980] text-[12px] font-semibold'>
                Total Candidate
              </span>
            </span>
            <span className='h-[30px] w-[0.8px] bg-gray-300'></span>
            <span className='p-2 font-bold text-md'>
              114 <span className='text-[#05C165] text-[12px]'>+89</span>
              <span className='block text-[#1C4980] text-[12px] font-semibold'>
                Who Attempted
              </span>
            </span>
          </div>
        </div>
        <div className='h-auto text-sm font-semibold text-[#1C4980] py-2 px-3 rounded-2xl min-w-[20.9rem] border-[2px] border-gray-300'>
          Candidate Source
          <div className=' flex items-center justify-start p-2'>
            <div className='w-[40px] h-[40px] bg-[#FCE8EF] flex items-center justify-center rounded-md cursor-pointer'>
              <ImEarth className='inline text-lg  text-[#E9407A]' />
            </div>
            <span className='p-2 font-bold text-md'>
              11,000 <span className='text-[#05C165] text-[12px]'>+89</span>
              <span className='block text-[#1C4980] text-[12px] font-semibold'>
                E-mail
              </span>
            </span>
            <span className='h-[30px] w-[0.8px] bg-gray-300'></span>
            <span className='p-2 font-bold text-md'>
              145 <span className='text-[#05C165] text-[12px]'>+89</span>
              <span className='block text-[#1C4980] text-[12px] font-semibold'>
                Social Share
              </span>
            </span>
            <span className='h-[30px] w-[0.8px] bg-gray-300'></span>
            <span className='p-2 font-bold text-md'>
              145 <span className='text-[#05C165] text-[12px]'>+89</span>
              <span className='block text-[#1C4980] text-[12px] font-semibold'>
                Unique Link
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
