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

  setAge({ days: daysDiff, months: monthsDiff, years: yearsDiff });
  // Validacion si esta vacio
  if (!days) {
    console.log('Por favor, complete todos los campos');
    errors.days = 'This field is require';
    return;
  } else {
    errors.days = ""
  }

  if (!months) {
    console.log('Por favor, complete todos los campos');
    errors.months = 'This field is require';
    return;
  } else {
    errors.months = ""
  }

  if (!years) {
    console.log('Por favor, complete todos los campos');
    errors.years = 'This field is require';
    return;
  } else {
    errors.years = ""
  }

  

  // Validación de fecha de nacimiento
  if (!moment(birthDateString, 'DD-MM-YYYY', true).isValid()) {
    console.log('Fecha de nacimiento inválida');
    errors.date = 'Must be a valid';
    return;
  } else {
    errors.date = ""
  }

  // Validación de fecha de nacimiento antes de la fecha actual
  if (currentDate.isBefore(birthDateString)) {
    console.log('Fecha de nacimiento debe ser anterior a la fecha actual');
    errors.date = 'Must be in the past';
    return;
  } else {
    errors.date = ""
  }

  if (Object.keys(errors).length > 0) {
    return;
  } else {
    setErrors({days: "", months: "", years: ""})
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
