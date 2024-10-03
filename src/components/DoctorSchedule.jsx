import React, { useState } from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';

const DoctorSchedule = () => {

    const [eyeToggle, setEyeToggle] = useState({});
    const [active, setActive] = useState(0);

    const totalSchedule = 400;
    const limit = 3;

    const noOfPage = Math.ceil(totalSchedule / limit);

    const doctorSchedule = [
        {
            id: 1,
            doctorName: 'Doctor 1',
            weekday: 'Friday',
            visitingTime: '00:00 - 23:59',
            status: 'Active'
        },
        {
            id: 2,
            doctorName: 'Doctor 2',
            weekday: 'Friday',
            visitingTime: '00:00 - 23:59',
            status: 'Active'
        },
        {
            id: 3,
            doctorName: 'Doctor 3',
            weekday: 'Friday',
            visitingTime: '00:00 - 23:59',
            status: 'Active'
        },
        {
            id: 4,
            doctorName: 'Doctor 4',
            weekday: 'Friday',
            visitingTime: '00:00 - 23:59',
            status: 'Active'
        },
        {
            id: 5,
            doctorName: 'Doctor 5',
            weekday: 'Friday',
            visitingTime: '00:00 - 23:59',
            status: 'Active'
        },
        {
            id: 6,
            doctorName: 'Doctor 6',
            weekday: 'Friday',
            visitingTime: '00:00 - 23:59',
            status: 'Active'
        },
    ];

    return (
        <Layout>
            <div>
                <div className='flex justify-end items-center font-medium mb-5 p-1 gap-2'>
                    <Link to='/dashboard' className='text-lg hover:text-red-600 duration-200' >Dashboard</Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <span className='text-lg text-rose-600'>Doctor Schedule</span>
                </div>

                <table className='w-full  text-[17px]'>
                    <caption className='bg-white p-4 rounded-t-lg text-2xl font-bold text-[#006a60]'>
                        Doctor Schedule
                    </caption>

                    <tbody>
                        <tr className='bg-[#dcdfe9] text-left'>
                            <th className='py-3 ps-4 text-lg'>ID</th>
                            <th className='py-3 text-lg'>Doctor Name</th>
                            <th className='py-3 text-lg'>Weakdays</th>
                            <th className='py-3 text-lg'>Visiting Time</th>
                            <th className='py-3 text-lg'>Status</th>
                            <th className='py-3 text-lg text-center'>Actions</th>
                        </tr>

                        {doctorSchedule.map((items, index) => (
                            <tr key={index} className={`${index % 2 !== 0 ? 'bg-[#dcdfe9]' : 'bg-white'}`}>
                                <td className='py-3 ps-4'>
                                    {items.id}
                                </td>
                                <td className='py-3'>
                                    {items.doctorName}
                                </td>
                                <td className='py-3'>
                                    {items.weekday}
                                </td>
                                <td className='py-3'>
                                    {items.visitingTime}
                                </td>
                                <td className='py-3 text-red-500'>
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
                            <td colSpan={3} align='right' className='p-4 rounded-br-lg'>
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

export default DoctorSchedule;
