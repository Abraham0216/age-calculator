import React, { useContext } from 'react';
import { appContext } from '../App';

const Time = () => {

    const { age } = useContext(appContext);


    return (
        <div className='ml-8 mt-7 lg:ml-14 pb-8 '>
            <p className='text-5xl lg:text-8xl font-extrabold italic mb-0.5 text-gray-900'><span className='text-violet-600 mr-2.5'>{ age.years ? age.years : "--" }</span>years</p>
            <p className='text-5xl lg:text-8xl font-extrabold italic mb-0.5 text-gray-900'><span className='text-violet-600 mr-2.5'>{ age.months ? age.months : "--" }</span>months</p>
            <p className='text-5xl lg:text-8xl font-extrabold italic mb-0.5 text-gray-900'><span className='text-violet-600 mr-2.5'>{ age.days ? age.days : "--" }</span>days</p>
        </div>
    );
}

export default Time;
