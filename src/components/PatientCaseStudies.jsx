import React, { useState } from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import AddCaseStudy from './AddCaseStudy';

const PatientCaseStudies = () => {


    const [active, setActive] = useState(0);
    const [eyeToggle, setEyeToggle] = useState({});
    const [show, setShow] = useState(false);
    const [addCase, setAddCase] = useState(false);

    const totalSchedule = 400;
    const limit = 3;

    const noOfPage = Math.ceil(totalSchedule / limit);

    const caseStudies = [
        {
            name: 'Patient 1',
            email: 'patient@ambitiousit.com',
            phone: '(406) 555-0120',
            foodAllergy: 'Yes',
            heartDisease: 'No',
            diabetic: 'Yes',
            status: 'Active'
        },
        {
            name: 'Patient 2',
            email: 'patient@ambitiousit.com',
            phone: '(406) 555-0120',
            foodAllergy: 'Yes',
            heartDisease: 'No',
            diabetic: 'Yes',
            status: 'Active'
        },
        {
            name: 'Patient 3',
            email: 'patient@ambitiousit.com',
            phone: '(406) 555-0120',
            foodAllergy: 'Yes',
            heartDisease: 'No',
            diabetic: 'Yes',
            status: 'Active'
        },
        {
            name: 'Patient 4',
            email: 'patient@ambitiousit.com',
            phone: '(406) 555-0120',
            foodAllergy: 'No',
            heartDisease: 'Yes',
            diabetic: 'No',
            status: 'Active'
        },
        {
            name: 'Patient 5',
            email: 'patient@ambitiousit.com',
            phone: '(406) 555-0120',
            foodAllergy: 'No',
            heartDisease: 'Yes',
            diabetic: 'No',
            status: 'Active'
        },
        {
            name: 'Patient 6',
            email: 'patient@ambitiousit.com',
            phone: '(406) 555-0120',
            foodAllergy: 'No',
            heartDisease: 'Yes',
            diabetic: 'No',
            status: 'Active'
        },
    ];

    return (
        <Layout>
            {addCase ? <AddCaseStudy setAddCase={setAddCase} /> :
                <div className='animate__animated animate__fadeIn animate__faster'>
                    <div className='flex justify-between items-center p-1'>
                        <button
                            className='rounded py-2 px-4 mb-4 text-lg md:text-xl font-medium flex gap-1 items-center text-white bg-[#006a60] hover:bg-rose-600 duration-300'
                            onClick={() => setAddCase(true)}
                        >
                            <i className="fa-solid fa-plus"></i>
                            Add Patient Case Studies
                        </button>

                        <div className='font-medium mb-5 space-x-2'>
                            <Link to='/dashboard' className='md:text-lg hover:text-red-600 duration-200' >Dashboard</Link>
                            <i className="fa-solid fa-chevron-right"></i>
                            <span className='md:text-lg text-rose-600'>Patient Case Studies List</span>
                        </div>
                    </div>

                    <div className='overflow-scroll'>
                        <table className='w-full min-w-[800px] text-[17px]'>
                            <caption className='bg-white p-4 rounded-t-lg '>
                                <div className='flex items-center justify-between'>
                                    <div className='text-xl md:text-2xl font-bold text-[#006a60]'>Patient Case Studies List</div>

                                    <div className='flex gap-3'>
                                        <button
                                            className='border border-gray-300 rounded py-2 px-4 text-lg md:text-xl font-medium flex gap-2 items-center hover:text-white hover:bg-[#006a60] duration-300'
                                        >
                                            <i className="fa-solid fa-cloud-arrow-down"></i>
                                            Export
                                        </button>

                                        <button
                                            className='border border-gray-300 rounded py-2 px-4 text-lg md:text-xl font-medium flex gap-2 items-center hover:text-white hover:bg-[#006a60] duration-300'
                                            onClick={() => setShow(!show)}
                                        >
                                            <i className="fa-solid fa-sliders"></i>
                                            Filter
                                        </button>
                                    </div>
                                </div>

                                {show &&
                                    <div className='py-4'>
                                        <hr />
                                        <div className='px-3 py-4'>
                                            <div className='grid grid-cols-3 gap-10 py-2'>
                                                <div className='flex flex-col'>
                                                    <label className='md:text-lg font-medium text-left pb-2'>Name</label>
                                                    <input
                                                        className="border border-gray-300 rounded-lg p-3 focus:border-[#006a60] focus:outline-none transition duration-150 ease-in-out"
                                                        type="text" placeholder='Your name'
                                                    />
                                                </div>
                                                <div className='flex flex-col'>
                                                    <label className='md:text-lg font-medium text-left pb-2'>Email</label>
                                                    <input
                                                        className="border border-gray-300 rounded-lg p-3 focus:border-[#006a60] focus:outline-none transition duration-150 ease-in-out"
                                                        type="text" placeholder='Your email'
                                                    />
                                                </div>
                                                <div className='flex flex-col'>
                                                    <label className='md:text-lg font-medium text-left pb-2'>Phone</label>
                                                    <input
                                                        className="border border-gray-300 rounded-lg p-3 focus:border-[#006a60] focus:outline-none transition duration-150 ease-in-out"
                                                        type="text" placeholder='Your number'
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                className='rounded py-2 px-4 my-6 text-lg md:text-xl font-medium float-start text-white bg-[#006a60] hover:bg-rose-600 duration-300'
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                }
                            </caption>

                            <tbody>
                                <tr className='bg-[#dcdfe9] text-left'>
                                    <th className='py-3 ps-4 md:text-lg'>Name</th>
                                    <th className='py-3 md:text-lg'>Email</th>
                                    <th className='py-3 md:text-lg'>Phone</th>
                                    <th className='py-3 md:text-lg'>Food Allergy</th>
                                    <th className='py-3 md:text-lg'>Heart Disease</th>
                                    <th className='py-3 md:text-lg'>Diabetic</th>
                                    <th className='py-3 md:text-lg text-center'>Actions</th>
                                </tr>

                                {caseStudies.map((items, index) => (
                                    <tr key={index} className={`${index % 2 !== 0 ? 'bg-[#dcdfe9]' : 'bg-white'}`}>
                                        <td className='py-3 ps-4'>
                                            {items.name}
                                        </td>
                                        <td className='py-3'>
                                            {items.email}
                                        </td>
                                        <td className='py-3'>
                                            {items.phone}
                                        </td>
                                        <td className='py-3'>
                                            {items.foodAllergy}
                                        </td>
                                        <td className='py-3'>
                                            {items.heartDisease}
                                        </td>
                                        <td className='py-3'>
                                            {items.diabetic}
                                        </td>

                                        <td className='py-3 text-center'>
                                            <button
                                                className='text-[#006a60] px-2 py-1 rounded hover:bg-gray-100 duration-200'
                                                onClick={() => setEyeToggle((prev) => ({
                                                    ...prev,
                                                    [index]: !prev[index], // Toggle the specific index
                                                }))}
                                            >
                                                <i className={`${eyeToggle[index] ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'}`}></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>

                            <tfoot>
                                <tr className='bg-white'>
                                    <td colSpan={3} className='p-4 rounded-bl-lg'>Showing 1 to 10 of 14 entries</td>
                                    <td colSpan={4} align='right' className='p-4 rounded-br-lg'>
                                        <div>
                                            <button>
                                                <i className="fa-solid fa-angles-left hover:text-[#006a60] text-sm duration-200"></i>
                                            </button>

                                            {Array(noOfPage).fill(' ').slice(0, 3).map((items, index) => (
                                                <button
                                                    className={`mx-2 px-3 py-1 border rounded ${active === index ? 'bg-[#006a60] text-white' : 'bg-gray-100'}  hover:bg-[#006a60] hover:text-white duration-300`}
                                                    onClick={() => setActive(index)}
                                                    key={index}
                                                >
                                                    {index + 1}
                                                </button>
                                            ))}

                                            <button>
                                                <i className="fa-solid fa-angles-right hover:text-[#006a60] text-sm duration-200"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>
            }
        </Layout>
    );
};

export default PatientCaseStudies;
