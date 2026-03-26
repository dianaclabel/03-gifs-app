import { useState } from "react";

//custom hook -> useCounter
//Un Custom Hook es básicamente tu propia herramienta personalizada en React. Te permite extraer 
// la lógica de un componente para que puedas reutilizarla en otros, manteniendo el código limpio y organizado.
export const useCounter = (initialValue: number = 10) => {

  const [counter, setCounter] = useState(initialValue);


  const handleAdd = () => {
    setCounter(counter + 1);
  }

  const handleSubtrac = () => {
    setCounter(prevState => prevState - 1);
  }

  const handleReset = () => {
    setCounter(initialValue)
  }


  return {
    //values
    counter,

    //Methods
    handleAdd,
    handleSubtrac,
    handleReset,
  }
}
