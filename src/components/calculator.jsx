import React from 'react';
import Btn from './Btn';
import Form from './Form';
import Time from './Time';


const Calculator = () => {
    return (
        <div className=' bg-white w-11/12  shadow-sm py-4 mt-16 mb-24 mx-auto rounded-2xl rounded-br-[90px] lg:w-7/12'>
            <Form/>
            <Btn/>
            <Time/>
            
        </div>
    );
}

export default Calculator;
