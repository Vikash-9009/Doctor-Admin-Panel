import React, { useState } from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';

const Device = () => {


    const [active, setActive] = useState(0);
    const [eyeToggle, setEyeToggle] = useState({});
    const [buttonToggled, setButtonToggled] = useState({});
    const [show, setShow] = useState(false);

    const totalSchedule = 400;
    const limit = 3;

    const noOfPage = Math.ceil(totalSchedule / limit);

    const device = [
        {
            deviceName: 'Device 1',
            warrantyDate: '8/16/22',
            purchaseDate: '10 Dec 2019',
        },
        {
            deviceName: 'Device 2',
            warrantyDate: '8/16/22',
            purchaseDate: '10 Dec 2019',
        },
        {
            deviceName: 'Device 3',
            warrantyDate: '8/16/22',
            purchaseDate: '10 Dec 2019',
        },
        {
            deviceName: 'Device 4',
            warrantyDate: '8/16/22',
            purchaseDate: '10 Dec 2019',
        },
        {
            deviceName: 'Device 5',
            warrantyDate: '8/16/22',
            purchaseDate: '10 Dec 2019',
        },
        {
            deviceName: 'Device 6',
            warrantyDate: '8/16/22',
            purchaseDate: '10 Dec 2019',
        },
    ];

    return (
        <Layout>
            <div>
                <div className='flex justify-end items-center font-medium mb-5 p-1 gap-2'>
                    <Link to='/dashboard' className='text-lg hover:text-red-600 duration-200' >Dashboard</Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <span className='text-lg text-rose-600'>Device</span>
                </div>

                <table className='w-full text-[17px]'>
                    <caption className='bg-white p-4 rounded-t-lg'>
                        <div className='flex items-center justify-between'>
                            <div className='text-2xl font-bold text-[#006a60]'>Device</div>
                            <button
                                className='rounded py-2 px-4 text-xl font-medium flex gap-2 items-center text-white bg-[#006a60] hover:bg-rose-600  duration-300'
                                onClick={() => setShow(!show)}
                            >
                                <i className="fa-solid fa-sliders"></i>
                                Filter
                            </button>
                        </div>
                        {show &&
                            <div className='py-4'>
                                <hr />
                                <div className='px-3 py-4'>
                                    <div className='grid grid-cols-3 gap-10 py-2'>
                                        <div className='flex flex-col'>
                                            <label className='text-lg font-medium text-left pb-2'>Name</label>
                                            <input
                                                className="border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out"
                                                type="text" placeholder='Your name'
                                            />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label className='text-lg font-medium text-left pb-2'>Email</label>
                                            <input
                                                className="border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out"
                                                type="text" placeholder='Your email'
                                            />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label className='text-lg font-medium text-left pb-2'>Phone</label>
                                            <input
                                                className="border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out"
                                                type="text" placeholder='Your number'
                                            />
                                        </div>
                                    </div>
                                    <button
                                        className='rounded py-2 px-4 my-6 text-xl font-medium float-start text-white bg-[#006a60] hover:bg-rose-600 duration-300'
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        }
                    </caption>

                    <tbody>
                        <tr className='bg-[#dcdfe9] text-left'>
                            <th className='py-3 ps-4 text-lg'>Device Name</th>
                            <th className='py-3 text-lg'>Waranty Date</th>
                            <th className='py-3 text-lg'>Purchase Date</th>
                            <th className='py-3 text-lg  text-center'>Device Control</th>
                            <th className='py-3 text-lg text-center'>Actions</th>
                        </tr>

                        {device.map((items, index) => (
                            <tr key={index} className={`${index % 2 !== 0 ? 'bg-[#dcdfe9]' : 'bg-white'}`}>
                                <td className='py-3 ps-4'>
                                    {items.deviceName}
                                </td>
                                <td className='py-3'>
                                    {items.warrantyDate}
                                </td>
                                <td className='py-3'>
                                    {items.purchaseDate}
                                </td>
                                <td className='py-3 text-red-500 flex justify-center'>

                                    <div className="flex gap-3 items-center">
                                        <span className='text-[#006a60]'>Active</span>

                                        <button
                                            className={`relative inline-flex items-center h-5 rounded-full w-12 transition-colors duration-200 bg-rose-200`}
                                            onClick={() => setButtonToggled((prev) => ({
                                                ...prev,
                                                [index]: !prev[index]
                                            }))}
                                        >
                                            <span
                                                className={`transform transition-transform duration-200 ${buttonToggled[index] ? 'translate-x-7 bg-rose-500' : 'translate-x-0 bg-[#006a60]'} inline-block w-5 h-5 rounded-full`}
                                            />
                                        </button>

                                        <span className='text-rose-600'>Deactive</span>
                                    </div>

                                </td>

                                <td className='py-3 text-center'>
                                    <button
                                        className='text-[#006a60] px-2 py-1 rounded hover:bg-gray-100  duration-200'
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
                            <td colSpan={2} className='p-4 rounded-bl-lg'>Showing 1 to 10 of 14 entries</td>
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

export default Device;
