import React, { useState } from 'react';
import Card from './Card';
import { FiPlus } from 'react-icons/fi';
import Modal from './Modal';
import Header from './Header';

const Assessment = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // State to store the data for the new assessment (name, purpose, description, duration)
  const [data, setData] = useState({
    name: '',
    purpose: '',
    description: '',
    duration: '00:00:00',
  });

  // State to store an array of assessments (initially contains one assessment)
  const [arr, setArr] = useState([
    {
      name: 'Math Assessment',
      purpose: 'Job',
      description: '',
      duration: '00:00:00',
    },
  ]);

  // Function to open the popup/modal when the "New Assessment" button is clicked
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className='flex flex-col justify-between items-start flex-1'>
      {/* Header component */}
      <Header />

      {/* Section title */}
      <div className='p-4 mx-4 text-lg font-semibold text-[#1C4980]'>
        My Assessment
      </div>

      {/* New assessments section */}
      <div className='mx-8 flex w-full h-auto flex-wrap gap-3 sm:gap-6'>
        <div className='w-[350px] h-[180px] bg-slate-200 rounded-lg flex flex-col items-center justify-center border-[2px] border-dotted border-gray-300'>
          <div
            onClick={openPopup}
            className='w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center hover:bg-slate-300 cursor-pointer'
          >
            <FiPlus className='text-blue-500 text-3xl' />
          </div>
          New Assessment
          <p className='mt-2 text-[10px] text-[#1C4980] font-sans tracking-wider text-center'>
            From here you can add questions of multiple types like MCQs,
            subjective (text or paragraph)!
          </p>
        </div>

        {/* Card section */}
        {arr.length > 0 &&
          arr.map((item, index) => <Card key={index} data={item} />)}
      </div>

      {/* Render the modal/popup when isPopupOpen is true */}
      {isPopupOpen && (
        <Modal
          closePopup={closePopup}
          data={data}
          setData={setData}
          arr={arr}
          setArr={setArr}
        />
      )}
    </div>
  );
};

export default Assessment;
