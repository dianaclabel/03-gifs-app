import { describe, expect, test } from 'vitest'
import { render, screen } from "@testing-library/react"
import { CustomHeader } from './CustomHeader';

describe('CustomHeader', () => {
  const title = "Game Boy"
  const description = "Este es una descripcion"
  test('Should render  the title correctly', () => {
    render(<CustomHeader title={title} />)
    //screen.debug()
    expect(screen.getByText(title)).toBeDefined();
  })

  test('Should render  the description  when provided', () => {
    render(<CustomHeader title={title} description={description} />)

    expect(screen.getByText(description)).toBeDefined();
    expect(screen.getByRole('paragraph')).toBeDefined();
    expect(screen.getByRole('paragraph').innerHTML).toBe(description);

  })

  test('Should not render description when no provided', () => {
    const { container } = render(<CustomHeader title={title} />);

    const divElement = container.querySelector(".content-center");

    //opcional
    const h1 = divElement?.querySelector('h1');
    expect(h1?.innerHTML).toBe(title)

    const p = divElement?.querySelector('p');
    expect(p).toBeNull();

  })
}

)
