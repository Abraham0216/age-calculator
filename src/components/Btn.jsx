import React, { useContext } from 'react';
import { appContext } from '../App';


const Btn = () => {


    const { calculateAge } = useContext(appContext);


    return (
        <div>
        <div className='mt-8 lg:mt-2 flex justify-center lg:justify-normal lg:px-12 lg:flex-row-reverse items-center'>
            <button onClick={calculateAge} className='w-16 h-16 lg:w-24 lg:h-24 bg-violet-600 hover:bg-gray-900 rounded-full z-10'>
            <svg className='m-auto lg:w-16 lg:h-12' xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>

            </button>
        </div>
        <hr className='relative bottom-8 left-3.5 lg:left-16 lg:bottom-12  bg-gray-100 w-11/12 lg:w-10/12  h-0.5 z-0 '/>
        
        </div>
    );
}

export default Btn;
