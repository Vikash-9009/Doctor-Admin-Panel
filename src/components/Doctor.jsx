import React, { useState } from 'react';
import Layout from './Layout';
import { Link, useLocation } from 'react-router-dom';

const Doctor = () => {


    const [active, setActive] = useState(0);
    const [eyeToggle, setEyeToggle] = useState({});
    const [show, setShow] = useState(false);

    const location = useLocation()

    const totalSchedule = 400;
    const limit = 3;

    const noOfPage = Math.ceil(totalSchedule / limit);

    const doctor = [
        {
            id: 1,
            name: 'Doctor 1',
            email: 'doctor@ambitiousit.com',
            phone: '(406) 555-0120',
            department: 'Outpatient department (OPD)',
            status: 'Active'
        },
        {
            id: 2,
            name: 'Doctor 2',
            email: 'doctor@ambitiousit.com',
            phone: '(406) 555-0120',
            department: 'Outpatient department (OPD)',
            status: 'Active'
        },
        {
            id: 3,
            name: 'Doctor 3',
            email: 'doctor@ambitiousit.com',
            phone: '(406) 555-0120',
            department: 'Outpatient department (OPD)',
            status: 'Active'
        },
        {
            id: 4,
            name: 'Doctor 4',
            email: 'doctor@ambitiousit.com',
            phone: '(406) 555-0120',
            department: 'Outpatient department (OPD)',
            status: 'Active'
        },
        {
            id: 5,
            name: 'Doctor 5',
            email: 'doctor@ambitiousit.com',
            phone: '(406) 555-0120',
            department: 'Outpatient department (OPD)',
            status: 'Active'
        },
        {
            id: 6,
            name: 'Doctor 6',
            email: 'doctor@ambitiousit.com',
            phone: '(406) 555-0120',
            department: 'Outpatient department (OPD)',
            status: 'Active'
        },
    ];

    return (
        <Layout>
            <div>
                <div className='flex justify-between items-center p-1'>
                    <span className='text-4xl font-bold pb-3'>
                        Doctors List
                    </span>
                    <div className='font-medium mb-5 space-x-2'>
                        <Link to='/dashboard' className='text-lg hover:text-red-600 duration-200' >Dashboard</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <span className='text-lg text-rose-600'>Doctors List</span>
                    </div>
                </div>

                <table className='w-full text-[17px]'>
                    <caption className='bg-white p-4 rounded-t-lg '>
                        <div className='flex items-center justify-between'>
                            <div className='text-2xl font-bold text-[#006a60]'>Doctors List</div>

                            <div className='flex gap-3'>
                                <button
                                    className='border border-gray-300 rounded py-2 px-4 text-xl font-medium flex gap-2 items-center hover:text-white hover:bg-[#006a60] duration-300'
                                >
                                    <i className="fa-solid fa-cloud-arrow-down"></i>
                                    Export
                                </button>

                                <button
                                    className='border border-gray-300 rounded py-2 px-4 text-xl font-medium flex gap-2 items-center hover:text-white hover:bg-[#006a60] duration-300'
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
                                            <label className='text-lg font-medium text-left pb-2'>Name</label>
                                            <input
                                                className="border border-gray-300 rounded-lg p-3 focus:border-[#006a60] focus:outline-none transition duration-150 ease-in-out"
                                                type="text" placeholder='Your name'
                                            />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label className='text-lg font-medium text-left pb-2'>Email</label>
                                            <input
                                                className="border border-gray-300 rounded-lg p-3 focus:border-[#006a60] focus:outline-none transition duration-150 ease-in-out"
                                                type="text" placeholder='Your email'
                                            />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label className='text-lg font-medium text-left pb-2'>Phone</label>
                                            <input
                                                className="border border-gray-300 rounded-lg p-3 focus:border-[#006a60] focus:outline-none transition duration-150 ease-in-out"
                                                type="text" placeholder='Your number'
                                            />
                                        </div>
                                    </div>
                                    <button
                                        className='rounded py-2 px-4 my-6 text-xl font-medium float-start text-white bg-[#006a60] hover:bg-rose-600  duration-300'
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        }
                    </caption>

                    <tbody>
                        <tr className='bg-[#dcdfe9] text-left'>
                            <th className='py-3 ps-4 text-lg'>ID</th>
                            <th className='py-3 text-lg'>Name</th>
                            <th className='py-3 text-lg'>Email</th>
                            <th className='py-3 text-lg'>Phone Control</th>
                            <th className='py-3 text-lg'>Department</th>
                            <th className='py-3 text-lg'>Status</th>
                            <th className='py-3 text-lg text-center'>Actions</th>
                        </tr>

                        {doctor.map((items, index) => (
                            <tr key={index} className={`${index % 2 !== 0 ? 'bg-[#dcdfe9]' : 'bg-white'}`}>
                                <td className='py-3 ps-4'>
                                    {items.id}
                                </td>
                                <td className='py-3'>
                                    {items.name}
                                </td>
                                <td className='py-3'>
                                    {items.email}
                                </td>
                                <td className='py-3'>
                                    {items.phone}
                                </td>
                                <td className='py-3'>
                                    {items.department}
                                </td>
                                <td className='py-3 text-rose-500'>
                                    {items.status}
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
                                            className={`mx-2 px-3 py-1 border rounded ${active === index ? 'bg-[#006a60] text-white' : 'bg-gray-100'}  hover:bg-[#006a60] hover:text-white  duration-300`}
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
        </Layout>
    );
};

export default Doctor;
