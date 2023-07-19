import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';

const Modal = ({ closePopup, data, setData, arr, setArr }) => {
  // Function to handle changes in the assessment name input
  const handleNameChange = (e) => {
    const value = e.target.value;
    setData({ ...data, name: value });
  };

  // Function to handle changes in the purpose select input
  const handlePurposeChange = (e) => {
    const value = e.target.value;
    setData({ ...data, purpose: value });
  };

  // Function to handle changes in the duration input
  const handleDurationChange = (e) => {
    const value = e.target.value;
    setData({ ...data, duration: value });
  };

  // Function to handle changes in the description select input
  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setData({ ...data, description: value });
  };

  // Function to handle form submission when the "Save" button is clicked
  const handleSubmit = () => {
    if (data.name === '') {
      alert('Assessment cannot be empty!');
    } else if (data.purpose === '') {
      alert('Purpose cannot be empty!');
    } else {
      // Add the current assessment data to the array of assessments
      setArr([...arr, data]);

      // Reset the data state to initial values
      setData({
        name: '',
        purpose: '',
        description: '',
        duration: '00:00:00',
      });

      // Close the popup/modal
      closePopup();
    }
  };

  return (
    // Modal/popup container
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex items-center justify-center'>
      <div className='w-[400px] h-auto sm:w-[500px] sm:h-[600px] bg-white rounded-lg p-4'>
        <div className='flex items-center justify-between'>
          <h4 className='text-lg font-semibold mb-2  text-[#1C4980]'>
            Create New Assessment
          </h4>
          <IoCloseSharp
            className='text-2xl border-[2px] border-gray-400 rounded-sm cursor-pointer  text-[#1C4980]'
            onClick={closePopup}
          />
        </div>
        <hr />

        {/* Form to create a new assessment */}
        <div className='my-2 flex flex-col gap-2 items-center justify-center'>
          {/* Assessment Name */}
          <label
            className=' w-full text-[#1C4980] font-semibold '
            htmlFor='name'
          >
            Name of assesment
          </label>
          <input
            type='text'
            placeholder='Type Here'
            id='name'
            value={data.name}
            onChange={handleNameChange}
            className='w-full h-[40px] text-[#1C4980] outline-none border border-gray-300 rounded-lg px-4'
          />

          {/* Purpose of the Test */}
          <label
            className=' w-full text-[#1C4980] font-semibold '
            htmlFor='purpose'
          >
            Purpose of the test is
          </label>
          <select
            onChange={handlePurposeChange}
            className='w-full h-[40px] text-[#1C4980] outline-none border border-gray-300 rounded-lg px-4'
            id='purpose'
          >
            <option value=''>Select</option>
            <option value='Job'>Job</option>
            <option value='Academics'>Academics</option>
            <option value='Freelance'>Freelance</option>
          </select>

          {/* Description */}
          <label
            className=' w-full text-[#1C4980] font-semibold '
            htmlFor='description'
          >
            Description
          </label>
          <select
            onChange={handleDescriptionChange}
            className='w-full h-[40px] text-[#1C4980] outline-none border border-gray-300 rounded-lg px-4'
            id='description'
          >
            <option value=''>Select</option>
            <option value='lorem'>Lorem</option>
            <option value='ipsum'>Ipsum</option>
            <option value='dolor'>Dolor</option>
          </select>

          {/* Skills (disabled textarea) */}
          <label
            className=' w-full text-[#1C4980] font-semibold '
            htmlFor='skills'
          >
            Skills
          </label>
          <textarea
            className='w-full h-[80px] text-[#1C4980] outline-none border border-gray-300 rounded-lg px-4'
            disabled
            // value={'Web development'}
          />
          <input
            type='text'
            placeholder='Type Here'
            id='skills'
            className='w-full h-[40px] text-[#1C4980] outline-none border border-gray-300 rounded-lg px-4'
          />

          {/* Duration of Assessment */}
          <label
            className=' w-full text-[#1C4980] font-semibold '
            htmlFor='duration'
          >
            Duration of assesment
          </label>
          <input
            type='text'
            placeholder='HH:MM:SS'
            id='duration'
            value={data.duration}
            onChange={handleDurationChange}
            className='w-full h-[40px] text-[#1C4980] outline-none border border-gray-300 rounded-lg px-4'
          />

          {/* Save Button */}
          <button
            type='submit'
            className='w-full bg-blue-500 text-white rounded-lg py-2'
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
