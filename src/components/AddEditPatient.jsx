import React from 'react';
import { Link } from 'react-router-dom';

const AddEditPatient = ({ addEdit, setAddEdit }) => {
    return (
        <div className=''>
            <div className='flex justify-end items-center p-1'>
                <div className='font-medium mb-5 space-x-2'>
                    <Link to='/dashboard' className='text-lg hover:text-red-600 duration-200'>Dashboard</Link>
                    <i className="fa-solid fa-chevron-right"></i>

                    <Link to='/patient' className='text-lg hover:text-red-600 duration-200'>Patient</Link>
                    <i className="fa-solid fa-chevron-right"></i>

                    <span className='text-lg text-rose-600'>{addEdit} Patient</span>
                </div>
            </div>

            <div className='py-4 px-6 w-full bg-white rounded-lg'>
                <span className='text-2xl font-bold'>{addEdit} Patient</span>
            </div>
        </div>
    );
};

export default AddEditPatient;
