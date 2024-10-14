import React from 'react';
import { Link } from 'react-router-dom';

const AddCaseStudy = ({ setAddCase }) => {
    return (
        <div className='animate__animated animate__fadeIn animate__faster'>
            <div className='flex justify-end items-center p-1'>
                <div className='font-medium mb-5 space-x-2'>
                    <Link to='/dashboard' className='md:text-lg hover:text-red-600 duration-200'>Dashboard</Link>
                    <i className="fa-solid fa-chevron-right"></i>

                    <span className='md:text-lg hover:text-red-600 duration-200 cursor-pointer' onClick={() => setAddCase(false)}>Patient Case Study</span>
                    <i className="fa-solid fa-chevron-right"></i>

                    <span className='md:text-lg text-rose-600'>Add Patient Case Study</span>
                </div>
            </div>

            <div className='py-6 px-8 w-full bg-white rounded-lg'>
                <span className='text-xl md:text-2xl font-bold text-[#006a60]'>Add Patient Case Study</span>

                <form className='my-3 mt-5 grid grid-cols-1 md:grid-cols-2 gap-6'>

                    <div className='col-span-full'>
                        <label htmlFor='patient' className='md:text-lg font-medium text-left'>
                            Select Patient <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='patient'>
                                <i class="fa-solid fa-user-doctor md:text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <select id='patient' className="px-4 w-full md:text-lg border-none focus:outline-none rounded-lg cursor-pointer">
                                <option value="" className='text-gray-400' disabled selected>-Select-</option>
                                <option value="Mr Patient">Mr Patient</option>
                                <option value="Mr Patient">Mr Patient</option>
                                <option value="Mr Patient">Mr Patient</option>
                                <option value="Mr Patient">Mr Patient</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor='allergy' className='md:text-lg font-medium text-left'>
                            Food Allergy <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='allergy'>
                                <i class="fa-solid fa-cookie-bite md:text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='allergy'
                                className="px-4 w-full md:text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Food Allergy'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='heartDisease' className='md:text-lg font-medium text-left'>
                            Heart Disease <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='heartDisease'>
                                <i class="fa-solid fa-heart-crack md:text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='heartDisease'
                                className="px-4 w-full md:text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Heart Disease'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='HBP' className='md:text-lg font-medium text-left'>
                            High Blood Pressure <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='HBP'>
                                <i class="fa-solid fa-droplet md:text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='HBP'
                                className="px-4 w-full md:text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='High Blood Pressure'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='diabetic' className='md:text-lg font-medium text-left'>
                            Diabetic <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='diabetic'>
                                <i class="fa-solid fa-crutch md:text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='diabetic'
                                className="px-4 w-full md:text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Diabetic'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='surgery' className='md:text-lg font-medium text-left'>
                            Surgery <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='surgery'>
                                <i class="fa-solid fa-utensils md:text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='surgery'
                                className="px-4 w-full md:text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Surgery'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='accident' className='md:text-lg font-medium text-left'>
                            Accident <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='accident'>
                                <i class="fa-solid fa-person-falling-burst md:text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='accident'
                                className="px-4 w-full md:text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Accident'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='others' className='md:text-lg font-medium text-left'>
                            Others <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='others'>
                                <i class="fa-solid fa-stethoscope md:text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='others'
                                className="px-4 w-full md:text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Others'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='history' className='md:text-lg font-medium text-left'>
                            Family Medical History <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='history'>
                                <i class="fa-solid fa-clock-rotate-left md:text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='history'
                                className="px-4 w-full md:text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Family Medical History'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='medication' className='md:text-lg font-medium text-left'>
                            Current Medication <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='medication'>
                                <i class="fa-solid fa-pills md:text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='medication'
                                className="px-4 w-full md:text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Current Medication'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='pregnancy' className='md:text-lg font-medium text-left'>
                            Pregnancy <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='pregnancy'>
                                <i class="fa-solid fa-person-pregnant md:text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='pregnancy'
                                className="px-4 w-full md:text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Pregnancy'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='feeding' className='md:text-lg font-medium text-left'>
                            Breast Feeding <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='feeding'>
                                <i class="fa-solid fa-person-breastfeeding md:text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='feeding'
                                className="px-4 w-full md:text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Breast Feeding'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='insurance' className='md:text-lg font-medium text-left'>
                            Health Insurance <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='insurance'>
                                <i class="fa-solid fa-hand-holding-heart md:text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='insurance'
                                className="px-4 w-full md:text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Health Insurance'
                            />
                        </div>
                    </div>

                    <div className='flex gap-4 py-3'>
                        <button
                            className='rounded py-2 px-4 text-lg md:text-xl font-medium text-white bg-[#006a60] hover:bg-rose-600  duration-300'
                        >
                            Submit
                        </button>
                        <button
                            className='rounded py-2 px-4 text-lg md:text-xl font-medium border hover:text-white  hover:bg-[#006a60] duration-300'
                            onClick={() => setAddCase(false)}
                        >
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddCaseStudy;
