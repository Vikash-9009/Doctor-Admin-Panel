import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {

    const [spacing, setSpacing] = useState(300);
    const [flagDropList, setFlagDropList] = useState(false);
    const [activeFlag, setActiveFlag] = useState(0);

    const [easeDropList, setEaseDropList] = useState(false);
    const [activeEase, setActiveEase] = useState(0);

    const [patientDropList, setPatientDropList] = useState(false);
    const [activePatient, setActivePatient] = useState(0);

    const healthEase = [
        {
            lable: 'Health Ease'
        },
        {
            lable: 'Ease 1'
        },
        {
            lable: 'Ease 2'
        },
        {
            lable: 'Ease 3'
        },
    ];

    const patient = [
        {
            lable: 'Mr Patient'
        },
        {
            lable: 'Patient 1'
        },
        {
            lable: 'Patient 2'
        },
        {
            lable: 'Patient 3'
        },
    ];

    const countries = [
        {
            flag: 'EN.png',
            lable: 'EN'
        },
        {
            flag: 'RU.png',
            lable: 'RU'
        },
        {
            flag: 'IN.png',
            lable: 'IN'
        },
    ];

    const sideMenus = [
        {
            icon: 'fa-solid fa-gauge-high',
            label: 'Dashboard',
            link: '/dashboard'
        },
        {
            icon: 'fa-solid fa-laptop-medical',
            label: 'Device',
            link: '/device'
        },
        {
            icon: 'fa-solid fa-user-doctor',
            label: 'Doctor',
            link: '/doctor'
        },
        {
            icon: 'fa-solid fa-bed-pulse',
            label: 'Patient',
            link: '/patient'
        },
        {
            icon: 'fa-solid fa-calendar-days',
            label: 'Doctor Schedule',
            link: '/doctor-Schedule'
        },
        {
            icon: 'fa-regular fa-calendar-check',
            label: 'Patient Appointment',
            link: '/patient-appointment'
        },
        {
            icon: 'fa-solid fa-paste',
            label: 'Patient Case Study',
            link: '/patient-case-studies'
        },
        {
            icon: 'fa-solid fa-file-prescription',
            label: 'Prescription',
            link: '/prescription'
        },
        {
            icon: 'fa-solid fa-arrow-right-from-bracket text-red-600',
            label: 'Logout',
            // link: '/logout'
        },
    ];

    const Dropdown = ({ data, dropList, setActive }) => {
        return (
            dropList &&
            <div className='border border-gray-300 absolute bg-white top-10 rounded-lg right-0 flex flex-col animate__animated animate__fadeIn animate__faster'>
                {data.map((items, index) =>
                    <button
                        onClick={() => setActive(index)}
                        className='px-4 py-2 hover:bg-gray-100 hover:font-semibold duration-200 whitespace-nowrap'
                        key={index}
                    >
                        <label>{items.lable}</label>

                    </button>
                )}
            </div>
        );
    };

    return (
        <div className='bg-[#E9E7EF] min-h-screen'>
            <aside
                className='bg-white h-full fixed top-0 left-0 overflow-hidden'
                style={{
                    width: spacing,
                    transition: '.3s'
                }}
            >
                <div className='py-6 mt-4'>
                    <div className={`flex mb-4 gap-2 items-center ${spacing !== 300 ? 'justify-center' : 'ps-6'}`}>
                        <img src="/images/logo.png" alt="logo" />
                        {spacing === 300 &&
                            <img src="/images/logo-body.png" alt="logo-body" />
                        }
                    </div>
                    <hr />
                    <div className={`flex items-center my-4 gap-4 ${spacing !== 300 ? 'justify-center' : 'ps-6'}`}>
                        <img src="/images/admin.png" alt="admin" className='rounded-full' />
                        {spacing === 300 &&
                            <h1 className='text-lg font-semibold'>Super Admin</h1>
                        }
                    </div>
                    <hr />
                </div>

                <div className='px-6 flex flex-col gap-1'>
                    {sideMenus.map((items, index) => (
                        <Link
                            to={items.link}
                            key={index}
                            className={`flex items-center ${spacing !== 300 && 'justify-center'} p-2 rounded hover:bg-[#006a60] hover:text-white group`}
                            style={{
                                background: (location.pathname === items.link ? '#006a60' : null),
                                color: (location.pathname === items.link ? 'white' : null),
                                transition: '0.3s'
                            }}
                        >
                            <i className={`${items.icon} text-xl ${location.pathname === items.link ? null : 'text-[#006a60]'} group-hover:text-white`}></i>
                            {spacing === 300 &&
                                <label className='text-lg ml-3 cursor-pointer'>{items.label}</label>
                            }
                        </Link>
                    ))}
                </div>

            </aside>

            <section
                className='pb-1'
                style={{
                    marginLeft: spacing,
                    transition: '.3s'
                }}
            >
                <nav className='bg-white p-6 shadow flex justify-between'>
                    <div className='items-center flex gap-5'>
                        <button
                            className='w-10 h-10 rounded hover:text-[#006a60] hover:bg-gray-100 duration-300'
                            onClick={() => setSpacing(spacing === 300 ? 90 : 300)}
                        >
                            <i className="fa-solid fa-bars-staggered text-2xl"></i>
                        </button>
                        <Link to={'#'} className='hover:text-[#006a60] duration-300'>
                            <i className="fa-solid fa-globe me-3 text-xl"></i>
                            Go to Website
                        </Link>
                    </div>

                    <div className='flex flex-row gap-5'>
                        <button className='flex items-center hover:text-[#006a60] duration-200'>
                            <i className="fa-regular fa-comments text-xl me-2"></i>
                            Chat With Us
                        </button>

                        <div className='relative'>
                            <button className='flex items-center hover:text-[#006a60] group duration-200' onClick={() => setEaseDropList(!easeDropList)}>
                                <i className="fa-regular fa-hospital text-xl p-0.5 bg-[#006a60] text-white group-hover:bg-gray-100 group-hover:text-[#006a60] duration-200 rounded-lg me-2"></i>

                                <label>{healthEase[activeEase].lable}</label>

                                <i className={`fa-solid fa-caret-down ms-2 ${easeDropList && 'rotate-180'} duration-200`}></i>

                            </button>
                            <Dropdown data={healthEase} setActive={setActiveEase} dropList={easeDropList} />
                        </div>

                        <div className='relative'>
                            <button className='flex items-center hover:text-[#006a60] duration-200' onClick={() => setPatientDropList(!patientDropList)}>
                                <img src="/images/patient.png" alt="patient" className='rounded-full me-2' />

                                <label>{patient[activePatient].lable}</label>

                                <i className={`fa-solid fa-caret-down ms-2 ${patientDropList && 'rotate-180'} duration-200`}></i>

                            </button>
                            <Dropdown data={patient} setActive={setActivePatient} dropList={patientDropList} />
                        </div>

                        <div className='relative'>
                            <button className='flex items-center hover:text-[#006a60]  duration-200' onClick={() => setFlagDropList(!flagDropList)}>
                                <img
                                    src={`/images/${countries[activeFlag].flag}`}
                                    alt={`${countries[activeFlag].flag}`}
                                    className='rounded me-2 w-[30px]'
                                />

                                <label>{countries[activeFlag].lable}</label>

                                <i className={`fa-solid fa-caret-down ms-2 ${flagDropList && 'rotate-180'} duration-200`}></i>

                            </button>
                            <Dropdown data={countries} setActive={setActiveFlag} dropList={flagDropList} />
                        </div>
                    </div>
                </nav>

                <div className='p-6'>
                    {children}
                </div>

                <footer className='bg-white p-6 mx-6 my-2 rounded-md'>
                    <div className='flex items-center w-fit mx-auto text-gray-600'>
                        <p>
                            Copyright <i className="fa-regular fa-copyright"></i> 2024 abc | All right reserved.
                        </p>
                    </div>

                </footer>
            </section>
        </div>
    );
};

export default Layout;
