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
            label: 'Health Ease'
        },
        {
            label: 'Ease 1'
        },
        {
            label: 'Ease 2'
        },
        {
            label: 'Ease 3'
        },
    ];

    const patient = [
        {
            label: 'Mr Patient'
        },
        {
            label: 'Patient 1'
        },
        {
            label: 'Patient 2'
        },
        {
            label: 'Patient 3'
        },
    ];

    const countries = [
        {
            flag: 'EN.png',
            label: 'EN'
        },
        {
            flag: 'RU.png',
            label: 'RU'
        },
        {
            flag: 'IN.png',
            label: 'IN'
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
                        <label>{items.label}</label>

                    </button>
                )}
            </div>
        );
    };

    return (
        <div className='bg-[#E9E7EF] min-h-screen'>
            <aside
                className={`bg-white h-full fixed top-0 ${spacing === 300 ? '-left-[300px] lg:w-[300px]' : 'left-0 lg:w-[90px]'} lg:left-0 w-[260px] overflow-hidden flex flex-col z-10 duration-500`}
            >

                <div className='py-4 md:py-6 mt-4'>
                    <div className='lg:hidden relative'>
                        <button
                            className="px-1.5 py-1 flex justify-center items-center cursor-pointer bg-slate-200 hover:text-rose-600 duration-200 rounded-sm absolute -top-5 right-0 me-3"
                            onClick={() => setSpacing(300)}
                        >
                            <i className="fa-solid fa-x"></i>
                        </button>
                    </div>

                    <div className={`flex mb-2 md:mb-4 gap-2 items-center ps-6 ${spacing !== 300 ? 'lg:justify-center lg:ps-0' : 'lg:ps-6 lg:justify-start'}`}>
                        <img src="/images/logo.png" alt="logo" />
                        <img src="/images/logo-body.png" alt="logo-body" className={`${spacing === 90 ? 'lg:hidden' : null}`} />
                    </div>

                    <hr />

                    <div className={`flex items-center my-2 md:my-4 gap-4 ps-6 ${spacing !== 300 ? 'lg:justify-center lg:ps-0' : 'lg:ps-6'}`}>
                        <img src="/images/admin.png" alt="admin" className='rounded-full' />
                        <h1 className={`md:text-lg font-semibold ${spacing === 300 ? 'lg:block' : 'lg:hidden'}`}>Super Admin</h1>
                    </div>

                    <hr />
                </div>

                <div className='px-4 md:px-6 flex flex-col gap-1'>
                    {sideMenus.map((items, index) => (
                        <Link
                            to={items.link}
                            key={index}
                            className={`flex items-center ${spacing !== 300 && 'lg:justify-center'} p-2 rounded hover:bg-[#006a60] hover:text-white group`}
                            style={{
                                background: (location.pathname === items.link ? '#006a60' : null),
                                color: (location.pathname === items.link ? 'white' : null),
                                transition: '0.3s'
                            }}
                        >
                            <i className={`${items.icon} text-lg md:text-xl ${location.pathname === items.link ? null : 'text-[#006a60]'} group-hover:text-white duration-300`}></i>
                            <label className={`md:text-lg ml-3 cursor-pointer ${spacing === 300 ? 'lg:block' : 'lg:hidden'}`}>{items.label}</label>
                        </Link>
                    ))}
                </div>

                <button className={`mt-auto mx-6 mb-4 flex items-center ${spacing !== 300 && 'lg:justify-center'} p-2 rounded hover:bg-red-600 hover:text-white group duration-300`}>
                    <i className={`fa-solid fa-arrow-right-from-bracket text-red-600 text-lg md:text-xl  group-hover:text-white`}></i>
                    <label className={`md:text-lg ml-3 cursor-pointer  ${spacing === 300 ? 'lg:block' : 'lg:hidden'}`}>Logout</label>
                </button>

            </aside>

            <section className={`pb-1 ${spacing === 300 ? 'lg:ms-[300px]' : 'lg:ms-[90px]'} duration-500`} >
                <nav className='bg-white p-4 md:p-6 shadow flex justify-between'>
                    <div className='items-center flex gap-5'>
                        <button
                            className='w-10 h-10 rounded hover:text-[#006a60] hover:bg-gray-100 duration-300'
                            onClick={() => setSpacing(spacing === 300 ? 90 : 300)}
                        >
                            <i className="fa-solid fa-bars-staggered text-xl md:text-2xl"></i>
                        </button>
                        <Link to={'#'} className='hover:text-[#006a60] duration-300 flex items-center'>
                            <i className="fa-solid fa-globe me-3 text-lg md:text-xl"></i>
                            <span className='hidden md:block'>Go to Website</span>
                        </Link>
                    </div>

                    <div className='flex flex-row gap-5 items-center'>
                        <button className='flex items-center hover:text-[#006a60] duration-200'>
                            <i className="fa-regular fa-comments text-lg md:text-xl me-2"></i>
                            <span className='hidden md:block'>Chat With Us</span>
                        </button>

                        <div className='relative'>
                            <button className='flex items-center hover:text-[#006a60] group duration-200' onClick={() => setEaseDropList(!easeDropList)}>
                                <i className="fa-regular fa-hospital text-lg md:text-xl p-0.5 bg-[#006a60] text-white group-hover:bg-gray-100 group-hover:text-[#006a60] duration-200 rounded-lg me-2"></i>

                                <label className='hidden md:block'>{healthEase[activeEase].label}</label>

                                <i className={`fa-solid fa-caret-down ms-2 ${easeDropList && 'rotate-180'} duration-200`}></i>

                            </button>
                            <Dropdown data={healthEase} setActive={setActiveEase} dropList={easeDropList} />
                        </div>

                        <div className='relative'>
                            <button className='flex items-center hover:text-[#006a60] duration-200' onClick={() => setPatientDropList(!patientDropList)}>
                                <img src="/images/patient.png" alt="patient" className='rounded-full me-2' />

                                <label className='hidden md:block'>{patient[activePatient].label}</label>

                                <i className={`fa-solid fa-caret-down ms-2 ${patientDropList && 'rotate-180'} duration-200`}></i>

                            </button>
                            <Dropdown data={patient} setActive={setActivePatient} dropList={patientDropList} />
                        </div>

                        <div className='relative'>
                            <button className='flex items-center hover:text-[#006a60] duration-200' onClick={() => setFlagDropList(!flagDropList)}>
                                <img
                                    src={`/images/${countries[activeFlag].flag}`}
                                    alt={`${countries[activeFlag].flag}`}
                                    className='rounded me-2 w-[30px] hidden md:block'
                                />

                                <label>{countries[activeFlag].label}</label>

                                <i className={`fa-solid fa-caret-down ms-2 ${flagDropList && 'rotate-180'} duration-200`}></i>

                            </button>

                            <Dropdown data={countries} setActive={setActiveFlag} dropList={flagDropList} />
                        </div>
                    </div>
                </nav>

                <div className='p-4 md:p-6'>
                    {children}
                </div>

                <footer className='bg-white p-6 mx-4 md:mx-6 my-2 rounded-md'>
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
