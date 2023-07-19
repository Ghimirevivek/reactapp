import React from 'react';
import { SlBriefcase } from 'react-icons/sl';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { CgCalendarDates } from 'react-icons/cg';
import { AiOutlineLink } from 'react-icons/ai';

const Card = ({ data }) => {
  return (
    // Main card container
    <div className='h-[180px] w-[350px] bg-slate-100 rounded-lg flex flex-col border-[2px] border-dotted border-gray-300'>
      {/* Top section: Icon and options */}
      <div className='flex flex-col justify-between'>
        <div className='w-[30px] h-[30px] bg-slate-300 flex items-center justify-center rounded-md text-[#6548EE] relative top-4 left-4 cursor-pointer'>
          <SlBriefcase />
        </div>
        <div>
          <BiDotsVerticalRounded className='relative -top-3 left-80 cursor-pointer text-xl' />
        </div>

        {/* Assessment name */}
        <div className='m-2 text-[#1C4980] font-semibold w-full'>
          {data.name}
        </div>

        {/* Purpose and Date */}
        <div className='mx-2 text-[#1C4980] text-[12px] font-semibold w-full'>
          {data.purpose}
          <span className='text-gray-400 text-center'> | </span>

          <CgCalendarDates className='text-lg inline' />
          <span className='mx-2 text-gray-400 text-[12px]'>20 Apr 2023</span>
        </div>
      </div>
      <div className='w-[75%] my-2 border-b-[2px] border-dotted border-gray-300 relative left-10'></div>

      {/* Bottom section: Duration, Questions, Share button, and Label */}
      <div className='flex flex-row items-center justify-between'>
        {/* Duration */}
        <div>
          <span className='text-[#1C4980] text-[14px] mx-2 font-semibold'>
            {data.duration.slice(0, 2)}
          </span>
          <span className='block text-[#1C4980] text-[12px] mx-2 font-semibold'>
            Duration
          </span>
        </div>

        {/* Number of Questions */}
        <div>
          <span className='text-[#1C4980] text-[14px] mx-2 font-semibold'>
            00
          </span>
          <span className='block text-[#1C4980] text-[12px] mx-2 font-semibold'>
            Questions
          </span>
        </div>

        {/* Share Button */}
        <div>
          <button className='w-auto h-auto px-3 py-1 rounded-xl border border-gray-800 bg-white text-[#1C4980] text-[14px] mx-2 font-semibold'>
            <AiOutlineLink className='inline text-lg' />
            Share
          </button>
        </div>

        {/* Label with initials */}
        <span className='w-[30px] h-[30px] rounded-full bg-blue-600 text-white flex items-center justify-center font-bold relative right-4'>
          LP
        </span>
      </div>
    </div>
  );
};

export default Card;
