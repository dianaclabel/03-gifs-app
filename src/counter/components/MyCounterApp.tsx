import { useCounter } from "../hooks/useCounter"

//custom hook
export const MyCounterApp = () => {
  // se recomienda primero colocar los useStates y despues los usesEffect.
  const { counter, handleAdd, handleSubtrac, handleReset } = useCounter(5);


  return (
    <div style={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
      <h1> counter : {counter}</h1>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubtrac}>-1</button>
        <button onClick={handleReset}>Reset</button>
      </div>

    </div>
  )

}
