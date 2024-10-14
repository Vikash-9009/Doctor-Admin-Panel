import React from 'react';
import 'animate.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Device from './components/Device';
import Doctor from './components/Doctor';
import Patient from './components/Patient';
import DoctorSchedule from './components/DoctorSchedule';
import PatientAppointment from './components/PatientAppointment';
import PatientCaseStudies from './components/PatientCaseStudies';
import Prescription from './components/Prescription';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/device' element={<Device />} />
                <Route path='/doctor' element={<Doctor />} />
                <Route path='/patient' element={<Patient />} />
                <Route path='/doctor-Schedule' element={<DoctorSchedule />} />
                <Route path='/patient-appointment' element={<PatientAppointment />} />
                <Route path='/patient-case-studies' element={<PatientCaseStudies />} />
                <Route path='/prescription' element={<Prescription />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;
