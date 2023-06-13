import React, { createContext, useState } from 'react';
import Calculator from './components/calculator';
import moment from 'moment';

export const appContext = createContext(null)

function App() {

  

  
  const [birthDate, setBirthDate] = useState({ days: "", months: "", years: "" });
  const [age, setAge] = useState({ days: 0, months: 0, years: 0 });
  const [errors, setErrors] = useState({ days: '', months: '', years: '' });
  
  
  

    


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
  
    setBirthDate((prevState) => ({
      ...prevState,
      [name]: parseInt(value, 10)
      
    }));
    console.log(typeof(value));
  };


  

const calculateAge = () => {
  const { days, months, years } = birthDate;

  // Cálculo de la fecha de nacimiento y la fecha actual

  
  const birthDateMoment = moment({ day: days, month: months - 1, year: years });
  const currentDate = moment();

  

  // Obtener la diferencia de edad en años, meses y días

  const ageDuration = moment.duration(currentDate.diff(birthDateMoment));

  const yearsDiff = ageDuration.years();
  const monthsDiff = ageDuration.months();
  const daysDiff = ageDuration.days();

  

  // Validacion si esta vacio


  let isValid = true

  if (!days) {
    console.log('Por favor, complete todos los campos');
    errors.days = 'This field is require';
    isValid = false
  } else {
    errors.days = ""
  }

  if (!months) {
    console.log('Por favor, complete todos los campos');
    errors.months = 'This field is require';
    isValid = false
  } else {
    errors.months = ""
  }

  if (!years) {
    console.log('Por favor, complete todos los campos');
    errors.years = 'This field is require';
    isValid = false
  } else {
    errors.years = ""
  }

  if ( years && months && days) {

    if (days > 31) {
      console.log('El día no es válido');
      errors.days = 'Must be a valid day';
      isValid = false
      
    }
    
    if (months > 12) {
      console.log('El mes no es válido');
      errors.months = 'Must be a valid month';
      isValid = false
      
    }

    if (years < 1000) {
      console.log('El año no es válido');
      errors.years = 'Must be a valid year';
      isValid = false
      
    } else if(years > new Date().getFullYear()) {
      console.log('El año no es válido');
      errors.years = 'Must be past';
      isValid = false
      
    }

    
    if (!moment(birthDateMoment, 'DD-MM-YYYY', true).isValid()) {
      isValid = false
    } else {
      errors.date = ""
    }
  }
  


  

  if (isValid) {

    setErrors({days: "", months: "", years: ""})
    setAge({ days: daysDiff, months: monthsDiff, years: yearsDiff });

  } else {
    setAge({ days: null, months: null, years: null })
  }

  
  
};
  

  return (
    <appContext.Provider value={{birthDate, handleInputChange, setAge, age, calculateAge, errors}}>

    <div className="App bg-gray-100 min-h-screen  flex flex-col">

      <Calculator/>
      
    </div>
    </appContext.Provider>
  );
}

export default App;
