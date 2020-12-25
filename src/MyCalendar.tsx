import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const MyCalendar: React.FC<any> = () => {
    const [value, onChange] = useState<Date>(new Date());

    return (
        <div>
            <Calendar onChange={() => onChange} value={value} />
        </div>
    );
};
