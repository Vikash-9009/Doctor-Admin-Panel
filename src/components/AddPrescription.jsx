import React from 'react';
import { Link } from 'react-router-dom';

const AddPrescription = ({ setAddPrescription }) => {
    return (
        <div className='animate__animated animate__fadeIn animate__faster'>
            <div className='flex justify-end items-center p-1'>
                <div className='font-medium mb-5 space-x-2'>
                    <Link to='/dashboard' className='md:text-lg hover:text-red-600 duration-200'>Dashboard</Link>
                    <i className="fa-solid fa-chevron-right"></i>

                    <span className='md:text-lg hover:text-red-600 duration-200 cursor-pointer' onClick={() => setAddPrescription(false)}>Prescription</span>
                    <i className="fa-solid fa-chevron-right"></i>

                    <span className='md:text-lg text-rose-600'>Add Prescription</span>
                </div>
            </div>

            <div className='py-6 px-8 w-full bg-white rounded-lg'>
                <span className='text-xl md:text-2xl font-bold text-[#006a60]'>Add Prescription</span>

                <form className='my-3 mt-5 grid grid-cols-1 md:grid-cols-2 gap-6'>

                    <div>
                        <label htmlFor='patient' className='md:text-lg font-medium text-left'>
                            Select Patient <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='patient'>
                                <i class="fa-solid fa-user-doctor md:text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <select id='patient' className="px-4 w-full md:text-lg border-none focus:outline-none rounded-lg cursor-pointer bg-white">
                                <option value="" className='text-gray-400' disabled selected>-Select-</option>
                                <option value="Mr Patient">Mr Patient</option>
                                <option value="Mr Patient">Mr Patient</option>
                                <option value="Mr Patient">Mr Patient</option>
                                <option value="Mr Patient">Mr Patient</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor='date' className='md:text-lg font-medium text-left'>
                            Prescription Date <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='date'><i class="fa-regular fa-calendar-days md:text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='date'
                                className="px-4 w-full md:text-lg border-none focus:outline-none rounded-lg bg-white"
                                type="date" placeholder='Prescription Date *'
                            />
                        </div>
                    </div>

                    <div className='col-span-full'>
                        <button
                            className='rounded py-2 px-4 text-lg md:text-xl font-medium flex gap-2 items-center text-white bg-[#006a60] hover:bg-rose-600  duration-300'
                        >
                            <i className="fa-regular fa-newspaper"></i>
                            Case Study
                        </button>
                    </div>

                    <div>
                        <label htmlFor='weight' className='md:text-lg font-medium text-left'>
                            Weight (kg) <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='weight'>
                                <i class="fa-solid fa-weight-scale md:text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='weight'
                                className="px-4 w-full md:text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Weight (kg)'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='height' className='md:text-lg font-medium text-left'>
                            Height (feet) <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='height'>
                                <i class="fa-solid fa-ruler-vertical md:text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='height'
                                className="px-4 w-full md:text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Height (feet) '
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='BP' className='md:text-lg font-medium text-left'>
                            Blood Pressure <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <label htmlFor='BP'>
                                <i class="fa-solid fa-droplet md:text-lg text-[#006a60] bg-[#f2f7f7] px-4 py-3 rounded-s-lg"></i>
                            </label>
                            <input id='BP'
                                className="px-4 w-full md:text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Blood Pressure '
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
                                type="text" placeholder='Diabetic '
                            />
                        </div>
                    </div>

                    <div className='col-span-full'>
                        <label htmlFor='chiefComplaint' className='md:text-lg font-medium text-left'>
                            Chief Complaint <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <textarea id='chiefComplaint' rows={3}
                                className="p-4 w-full md:text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Chief Complaint'
                            />
                        </div>
                    </div>

                    <div className='col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-1'>

                        <div className='mb-5 lg:mb-0'>
                            <label htmlFor='medicineName' className='md:text-lg font-medium text-left p-4 bg-[#006a60] text-white rounded-lg inline-block mb-3 lg:mb-5 w-full'>
                                Medicine Name
                            </label>

                            <input id='medicineName'
                                className="w-full border border-gray-300 rounded-lg p-4 md:text-lg focus:border-[#006a60] focus:outline-none transition duration-150 ease-in-out"
                                type="text" placeholder='Medicine Name'
                            />
                        </div>

                        <div className='mb-5 lg:mb-0'>
                            <label htmlFor='medicineType' className='md:text-lg font-medium text-left p-4 bg-[#006a60] text-white rounded-lg inline-block mb-3 lg:mb-5 w-full'>
                                Medicine Type
                            </label>

                            <input id='medicineType'
                                className="w-full border border-gray-300 rounded-lg p-4 md:text-lg focus:border-[#006a60] focus:outline-none transition duration-150 ease-in-out"
                                type="text" placeholder='Medicine Type'
                            />
                        </div>

                        <div>
                            <label htmlFor='instruction' className='md:text-lg font-medium text-left p-4 bg-[#006a60] text-white rounded-lg inline-block mb-3 lg:mb-5 w-full'>
                                Instruction
                            </label>

                            <input id='instruction'
                                className="w-full border border-gray-300 rounded-lg p-4 md:text-lg focus:border-[#006a60] focus:outline-none transition duration-150 ease-in-out"
                                type="text" placeholder='Instruction'
                            />
                        </div>

                        <div>
                            <label htmlFor='days' className='md:text-lg font-medium text-left p-4 bg-[#006a60] text-white rounded-lg inline-block mb-3 lg:mb-5 w-full'>
                                Days
                            </label>

                            <input id='days'
                                className="w-full border border-gray-300 rounded-lg p-4 md:text-lg focus:border-[#006a60] focus:outline-none transition duration-150 ease-in-out"
                                type="text" placeholder='Days'
                            />
                        </div>

                    </div>

                    <div className='col-span-full'>
                        <div className='p-4 bg-[#006a60] md:text-lg text-white font-medium rounded-lg'>
                            Add / Remove
                        </div>
                        <div className='p-2.5 mt-5 flex items-center justify-center gap-2 rounded-lg border border-gray-300'>
                            <button className='text-[#006a60] px-3 py-2 rounded bg-[#f2f7f7] hover:bg-[#006a60] hover:text-white duration-200'>
                                <i className="fa-solid fa-plus"></i>
                            </button>
                            <button className='text-[#006a60] px-3 py-2 rounded bg-[#f2f7f7] hover:bg-[#006a60] hover:text-white duration-200'>
                                <i className="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>

                    <div className='col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-1'>

                        <div className='mb-5 lg:mb-0'>
                            <label htmlFor='diagnosis' className='md:text-lg text-left p-4 bg-[#f2f7f7] rounded-lg inline-block mb-3 lg:mb-5 w-full'>
                                Diagnosis
                            </label>

                            <input id='diagnosis'
                                className="w-full border border-gray-300 rounded-lg p-4 md:text-lg focus:border-[#006a60] focus:outline-none transition duration-150 ease-in-out"
                                type="text" placeholder='Diagnosis'
                            />
                        </div>

                        <div className='mb-5 lg:mb-0'>
                            <label htmlFor='instruction2' className='md:text-lg text-left p-4 bg-[#f2f7f7] rounded-lg inline-block mb-3 lg:mb-5 w-full'>
                                Instruction
                            </label>

                            <input id='instruction2'
                                className="w-full border border-gray-300 rounded-lg p-4 md:text-lg focus:border-[#006a60] focus:outline-none transition duration-150 ease-in-out"
                                type="text" placeholder='Instruction'
                            />
                        </div>

                        <div className='md:col-span-full lg:col-span-1'>
                            <div className='p-4 bg-[#f2f7f7] md:text-lg text-center rounded-lg'>
                                Add / Remove
                            </div>
                            <div className='p-2.5 mt-5 flex items-center justify-center gap-2 rounded-lg border border-gray-300'>
                                <button className='text-[#006a60] px-3 py-2 rounded bg-[#f2f7f7] hover:bg-[#006a60] hover:text-white duration-200'>
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                                <button className='text-[#006a60] px-3 py-2 rounded bg-[#f2f7f7] hover:bg-[#006a60] hover:text-white duration-200'>
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className='col-span-full'>
                        <label htmlFor='note' className='md:text-lg font-medium text-left'>
                            Note <span className='text-red-600'>*</span>
                        </label>

                        <div
                            className='mt-1 flex items-center border border-gray-300 rounded-lg focus-within:border-[#006a60] duration-200'
                        >
                            <textarea id='note' rows={3}
                                className="p-4 w-full md:text-lg border-none focus:outline-none rounded-lg"
                                type="text" placeholder='Note'
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
                            onClick={() => setAddPrescription(false)}
                        >
                            Cancel
                        </button>
                    </div>

                </form>
            </div >
        </div >
    );
};

export default AddPrescription;
