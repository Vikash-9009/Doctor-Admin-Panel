import React from 'react';
import { Link } from 'react-router-dom';

const AddEditPatient = ({ addEdit, setAddEdit }) => {
    return (
        <div className=''>
            <div className='flex justify-end items-center p-1'>
                <div className='font-medium mb-5 space-x-2'>
                    <Link to='/dashboard' className='text-lg hover:text-red-600 duration-200'>Dashboard</Link>
                    <i className="fa-solid fa-chevron-right"></i>

                    <span className='text-lg hover:text-red-600 duration-200 cursor-pointer' onClick={() => setAddEdit('')}>Patient</span>
                    <i className="fa-solid fa-chevron-right"></i>

                    <span className='text-lg text-rose-600'>{addEdit} Patient</span>
                </div>
            </div>

            <div className='py-6 px-8 w-full bg-white rounded-lg'>
                <span className='text-2xl font-bold text-[#006a60]'>{addEdit} Patient</span>

                <form className='my-3 mt-5 grid grid-cols-2 gap-6'>
                    <div>
                        <label htmlFor='name' className='text-lg font-medium text-left'>
                            Name <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='name'>
                                <i class="fa-solid fa-user-nurse text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='name'
                                className="px-4 w-full text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Your name'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='email' className='text-lg font-medium text-left'>
                            Email <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='email'>
                                <i class="fa-regular fa-envelope text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='email'
                                className="px-4 w-full text-lg border-none focus:outline-none rounded-lg"
                                type="email" placeholder='Your email'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='password' className='text-lg font-medium text-left'>
                            Password <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='password'>
                                <i class="fa-solid fa-key text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='password'
                                className="px-4 w-full text-lg border-none focus:outline-none rounded-lg"
                                type="password" placeholder='***********'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='phone' className='text-lg font-medium text-left'>
                            Phone <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='phone'>
                                <i class="fa-solid fa-phone-volume text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='phone'
                                className="px-4 w-full text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Your phone'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='gender' className='text-lg font-medium text-left'>
                            Gender <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='gender'>
                                <i class="fa-solid fa-restroom text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <select id='gender' className="px-4 w-full text-lg border-none focus:outline-none rounded-lg cursor-pointer">
                                <option value="" className='text-gray-400' disabled selected>-Select-</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor='bloodGroup' className='text-lg font-medium text-left'>
                            Blood Group <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='bloodGroup'>
                                <i class="fa-solid fa-heart-pulse text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <select id='bloodGroup' className="px-4 w-full text-lg border-none focus:outline-none rounded-lg cursor-pointer">
                                <option value="" className='text-gray-400' disabled selected>-Select-</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor='photo' className='text-lg font-medium text-left'>
                            Photo <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center justify-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200 h-[88px] relative'
                        >
                            <div className='flex flex-col items-center text-gray-500'>
                                <i class="fa-solid fa-cloud-arrow-up"></i>
                                <span className="">Choose a file to upload now</span>
                            </div>

                            <input id='photo' type="file" className="h-[88px] w-full cursor-pointer absolute opacity-0" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='address' className='text-lg font-medium text-left'>
                            Address <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <textarea id='address'
                                className="p-4 w-full text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Address'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='dob' className='text-lg font-medium text-left'>
                            Date of birth <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='dob'><i class="fa-regular fa-calendar-days text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='dob'
                                className="px-4 w-full text-lg border-none focus:outline-none rounded-lg"
                                type="date" placeholder='Your phone'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='status' className='text-lg font-medium text-left'>
                            Status <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='status'>
                                <i class="fa-regular fa-circle-check text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <select id='status' className="px-4 w-full text-lg border-none focus:outline-none rounded-lg cursor-pointer">
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex gap-4 py-3'>
                        <button
                            className='rounded py-2 px-4 text-xl font-medium text-white bg-[#006a60] hover:bg-rose-600  duration-300'
                        >
                            Submit
                        </button>
                        <button
                            className='rounded py-2 px-4 text-xl font-medium border hover:text-white  hover:bg-[#006a60] duration-300'
                            onClick={() => setAddEdit('')}
                        >
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddEditPatient;
