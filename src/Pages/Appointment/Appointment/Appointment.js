import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppiontmentHeader from '../AppontmentHeader/AppiontmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppiontmentHeader date={date} setDate={setDate}></AppiontmentHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;