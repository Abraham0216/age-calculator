import React, { useContext } from 'react';
import { appContext } from '../App';
import CountUp from 'react-countup';
const Time = () => {

    const { age } = useContext(appContext);


    return (
        <div className='ml-8 mt-7 lg:ml-14 pb-8 '>
            <p className='text-5xl lg:text-8xl font-extrabold italic mb-0.5 text-gray-900'><span className='text-violet-600 mr-2.5'>{ age.years  ? <CountUp end={age.years}>age.years</CountUp> : "--" }</span>years</p>
            <p className='text-5xl lg:text-8xl font-extrabold italic mb-0.5 text-gray-900'><span className='text-violet-600 mr-2.5'>{ age.months  ? <CountUp end={age.months}>age.months</CountUp> : "--" }</span>months</p>
            <p className='text-5xl lg:text-8xl font-extrabold italic mb-0.5 text-gray-900'><span className='text-violet-600 mr-2.5'>{ age.days ? <CountUp end={age.days}>age.days</CountUp> : "--" }</span>days</p>
        </div>
    );
}

export default Time;
