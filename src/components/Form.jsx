import React, { useContext } from 'react';
import { appContext } from '../App';

const Form = () => {

    const { handleInputChange, birthDate, errors } = useContext(appContext);

    

    

    return (
        <div className='flex flex-row justify-center mt-8 px-4 lg:w-4/5 lg:pl-14 '>
        <div className={`flex flex-col lg:mr-8`}>
            <label htmlFor='DD' className={`text-sm lg:text-base ml-2 mb-1 tracking-widest text-gray-500 font-bold ${(errors.date || errors.years || errors.months || errors.days) && 'text-red-600'}`}>DAY</label>
                <input type='number'  name='days'  value={birthDate.days} min={1} max={31} onChange={handleInputChange} onInput={(e) => { if (e.target.value.length > 2) e.target.value = e.target.value.slice(0, 2) }}  className={`w-11/12 lg:w-full   h-14 lg:h-20  mx-2   p-3 font-bold text-xl border hover:border-violet-600 ${(errors.date || errors.years || errors.months || errors.days) && 'border-red-600'} lg:text-3xl rounded-lg outline-none  border-gray-300`} placeholder="DD" id="DD" />
                {errors.days && <p className=" font-light italic ml-2 mt-1 text-red-600">{errors.days}</p>}
                {errors.date && <p className=" font-light italic ml-2 mt-1 text-red-600">{`${errors.date} day`}</p>}

        </div>
        <div className={`flex flex-col lg:mr-8`}>
            <label htmlFor='MM' className={`text-sm lg:text-base ml-2 mb-1 tracking-widest text-gray-500 font-bold ${(errors.date || errors.years || errors.months || errors.days) && 'text-red-600'}`}>MONTH</label>
                <input type='number'  name='months'  value={birthDate.months} min={1} max={12} onChange={handleInputChange} onInput={(e) => { if (e.target.value.length > 2) e.target.value = e.target.value.slice(0, 2) }}  className={`w-11/12 lg:w-full  h-14 lg:h-20  mx-2   p-3 font-bold text-xl border hover:border-violet-600 ${(errors.date || errors.years || errors.months || errors.days) && 'border-red-600'} lg:text-3xl rounded-lg outline-none  border-gray-300`} placeholder="MM" id="MM"/>
                {errors.months && <p className=" font-light italic ml-2 mt-1 text-red-600">{errors.months}</p>}
                {errors.date && <p className=" font-light italic ml-2 mt-1 text-red-600">{`${errors.date} month `}</p>}

            </div>
        <div className={`flex flex-col lg:mr-8`}>
            <label htmlFor='YY' className={`text-sm lg:text-base ml-2 mb-1 tracking-widest text-gray-500 font-bold ${(errors.date || errors.years || errors.months || errors.days) && 'text-red-600'}`}>YEAR</label>
                <input type='number'  name='years'  value={birthDate.years} min={1} max={3000} onChange={handleInputChange} onInput={(e) => { if (e.target.value.length > 4) e.target.value = e.target.value.slice(0, 4) }}  className={`w-11/12 lg:w-full   h-14 lg:h-20  mx-2   p-3 font-bold text-xl border hover:border-violet-600 ${(errors.date || errors.years || errors.months || errors.days) && 'border-red-600'} lg:text-3xl rounded-lg outline-none  border-gray-300`} placeholder="YYYY" id="YY"/>
                {errors.years && <p className=" font-light italic ml-2 mt-1 text-red-600">{errors.years}</p>}
                {errors.date && <p className=" font-light italic ml-2 mt-1 text-red-600">{`${errors.date} date`}</p>}

            </div>
        
        </div>
    );
}

export default Form;

