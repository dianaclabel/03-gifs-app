import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
//import { useCounter } from "../hooks/useCounter";
const handleAddMock = vi.fn();
const handleSubtracMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
  //se va regresar implicitamente un objeto
  useCounter: () => ({
    //tiene que regresar las properties de useCounter
    counter: 40,
    handleAdd: handleAddMock,//el fn es de vitest y nos da info de cuanta veces fue llamada entre otros
    handleReset: handleResetMock,
    handleSubtrac: handleSubtracMock,

  })
}))

describe('MyCounterApp', () => {
  test('should render the component', () => {
    render(<MyCounterApp />);

    screen.debug()

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      `counter: 40`
    );
    expect(screen.getByRole("button", { name: '+1' }).innerHTML).toBeDefined();
    expect(screen.getByRole("button", { name: '-1' }).innerHTML).toBeDefined();
    expect(screen.getByRole("button", { name: 'Reset' }).innerHTML).toBeDefined();
  })

  test('should call handleAdd if button is clicked', () => {
    render(<MyCounterApp />);

    const button = screen.getByRole('button', { name: '+1' });

    fireEvent.click(button)

    expect(handleAddMock).toHaveBeenCalled();
    expect(handleAddMock).toHaveBeenCalledTimes(1);
    expect(handleSubtracMock).not.toHaveBeenCalled();
    expect(handleResetMock).not.toHaveBeenCalled();
  })
})