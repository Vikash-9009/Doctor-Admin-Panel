import React, { useState } from 'react';
import Layout from './Layout';

const Dashboard = () => {

    const [duration, setDuration] = useState('Weekly')

    const dashboard = [
        {
            title: 'Department',
            quantity: '8',
            img: 'setting.png',
            bg: 'bg-[#007bff]'
        },
        {
            title: 'Doctor',
            quantity: '14',
            img: 'doctor.png',
            bg: 'bg-[#28a745]'
        },
        {
            title: 'Patient',
            quantity: '10',
            img: 'patient-2.png',
            bg: 'bg-[#007bff]'
        },
        {
            title: 'Patient Appointment',
            quantity: '20',
            img: 'appointment.png',
            bg: 'bg-[#ffc107]'
        },
        {
            title: 'Patient Case Studies',
            quantity: '12',
            img: 'paper.png',
            bg: 'bg-[#ffc107]'
        },
        {
            title: 'Invoice',
            quantity: '5',
            img: 'invoice.png',
            bg: 'bg-[#007bff]'
        },
        {
            title: 'Prescription',
            quantity: '10',
            img: 'pills.png',
            bg: 'bg-[#28a745]'
        },
        {
            title: 'Payment',
            quantity: '8',
            img: 'payment.png',
            bg: 'bg-[#007bff]'
        }
    ];

    return (
        <Layout>
            <div className='animate__animated animate__fadeIn animate__faster'>
                <div className='flex justify-between items-center p-1 mb-2'>
                    <span className='text-2xl md:text-4xl font-bold pb-3'>Dashboard</span>
                    <span className='mb-5 md:text-lg font-medium text-rose-600'>Dashboard</span>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {dashboard.map((items, index) => (
                        <div key={index}
                            className='flex items-center justify-between font-medium h-20 p-2 rounded-md bg-white group'
                        >
                            <div>
                                <div className='md:text-lg'>{items.title}</div>
                                <div className='text-xl md:text-2xl'>{items.quantity}</div>
                            </div>
                            <div className={`${items.bg} rounded-md p-1 w-[55px] h-[55px] flex justify-center items-center`}>
                                <img src={`/images/${items.img}`} alt={items.img} className='group-hover:scale-x-[-1] transition duration-500' />
                            </div>
                        </div>
                    ))}
                </div>

                <div className='grid grid-cols-12 mt-5 gap-4'>

                    <div className='bg-white rounded-lg p-5 col-span-12 lg:col-span-8 flex flex-col items-center justify-center text-xl md:text-2xl'>
                        Monthly Registered Users
                        <img src="/images/bar.png" alt="bar.png" className='h-[350px]' />
                    </div>

                    <div className='bg-white rounded-lg p-5 col-span-12 md:col-span-8 lg:col-span-4 space-y-8'>

                        <div className='flex justify-between'>
                            <span className='text-xl md:text-2xl w-24'>{duration} Earning</span>
                            <span className='border border-gray-300 rounded-lg p-1.5 h-fit'>
                                <button
                                    className={`${duration === 'Weekly' ? 'bg-[#006a60] text-white' : null} rounded-lg p-2 transition duration-300`}
                                    onClick={() => setDuration('Weekly')}
                                >
                                    Weekly
                                </button>
                                <button
                                    className={`${duration === 'Monthly' ? 'bg-[#006a60] text-white' : null} rounded-lg p-2 transition duration-300`}
                                    onClick={() => setDuration('Monthly')}
                                >
                                    Monthly
                                </button>
                            </span>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col gap-2'>
                                <span className=''>This {duration.slice(0, -2)}</span>
                                <span className='text-xl md:text-2xl font-medium'>${duration === 'Weekly' ? '29.5' : '229.655'}</span>
                                <span className='md:text-xl w-56'>
                                    <span className='text-rose-600'>{duration === 'Weekly' ? '-31.08%' : '-81.08% '}</span> From Previous {duration.slice(0, -2)}
                                </span>
                            </div>

                            <div className=''>
                                <img src="/images/earning.png" alt="earning.png" />
                            </div>
                        </div>

                        <div className='flex justify-between px-6'>
                            <div className='text-center flex flex-col items-center gap-3'>
                                <img src="/images/pie-1.png" alt="pie-1.png" className='w-24' />
                                <span className='text-center'>1st 15 days Analytics</span>
                            </div>

                            <div className='relative'>
                                <span className='border-e-2 h-16 top-5 absolute'></span>
                            </div>

                            <div className='text-center flex flex-col items-center gap-3'>
                                <img src="/images/pie-2.png" alt="pie-2.png" className='w-24' />
                                <span className='text-center'>last 15 days Analytics</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Layout>
    );
};

export default Dashboard;
