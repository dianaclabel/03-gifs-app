import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";



describe("useCounter", () => {

  // let result;

  // beforeEach(() => {
  //   const { result: hookValue } = renderHook(() => useCounter());
  //   result = hookValue;
  // })

  test('should initialize with default value of 10', () => {
    //Los hooks solo pueden ser llamados  dentro un functional componente o bien otro hook,
    // por eso es imposible llamar a  un hook como el ejemplo de abajo .
    //const { counter } = useCounter();

    // rerender | result | unmount  estos son los valores del que se  obtiene del renderHook.
    // result -> es el resultado del customHook

    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
  })

  test('should initialize with 20', () => {
    const initialValue = 20;
    const { result } = renderHook(() => useCounter(initialValue));

    expect(result.current.counter).toBe(20);
  })

  test('should increment counter when handleAdd is called', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleAdd();
      // result.current.handleAdd();
      //si llmas 2 veces no se agrega doble solo 1 vez y esto es por como esta definido tu handleAdd()
      //const handleAdd = () => {setCounter(counter + 1)} si es siempre va a trabajar con 
      // el valor inicial del componente y no el actualizado, para ello usa prev     
      // result.current.handleAdd();
    })

    expect(result.current.counter).toBe(11)

  });

  test('should decrement counter when handleSubtrac is called', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSubtrac();
    })

    expect(result.current.counter).toBe(9);
  })

  test('should reset counter when handleReset is called', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      // en este hanldeSubtrac si una prev
      result.current.handleSubtrac();
      result.current.handleSubtrac();
      result.current.handleSubtrac();
      result.current.handleSubtrac();
      result.current.handleSubtrac();
    })

    expect(result.current.counter).toBe(5);

    act(() => {
      result.current.handleReset();
    })

    expect(result.current.counter).toBe(10);
  })
})

