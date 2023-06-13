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

  

  const birthDateString = moment({ day: days, month: months - 1, year: years }).format('DD-MM-YYYY');
  console.log(birthDateString);

  
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

    if (birthDate.days > 31) {
      console.log('El día no es válido');
      errors.days = 'Must be a valid day';
      isValid = false
      
    }
    
    if (birthDate.months > 12) {
      console.log('El mes no es válido');
      errors.months = 'Must be a valid month';
      isValid = false
      
    }

    if (birthDate.years < 1000) {
      console.log('El año no es válido');
      errors.years = 'Must be a valid year';
      isValid = false
      
    } else if(birthDate.years > new Date().getFullYear()) {
      console.log('El año no es válido');
      errors.years = 'Must be past';
      isValid = false
      
    }

    
    if (!moment(birthDateString, 'DD-MM-YYYY', true).isValid()) {

      
      
      /* if (!birthDateString.year()) {
        console.log('El año no es válido');
      } */


      /* console.log('Fecha de nacimiento inválida');
      errors.dateDays = 'Must be a valid';
      errors.dateMonths = 'Must be a valid'; */
      isValid = false
    } else {
      errors.date = ""
    }
  }
  

  // Validación de fecha de nacimiento antes de la fecha actual
  if (currentDate.isBefore(birthDateString)) {
    console.log('Fecha de nacimiento debe ser anterior a la fecha actual');
    errors.date = 'Must be in the past';
    isValid = false
  } else {
    errors.date = ""
  }

  

  // Validación de fecha de nacimiento
  


  if (isValid) {

    setErrors({days: "", months: "", years: ""})
    setAge({ days: daysDiff, months: monthsDiff, years: yearsDiff });

  } else {
    setAge({ days: null, months: null, years: null })
  }

  /* if (Object.keys(errors).length > 0) {
    
    
  } else {
    setErrors({days: "", months: "", years: ""})
  } */
  
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
