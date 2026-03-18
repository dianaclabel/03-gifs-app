import { useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string,
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
  //Se usa useState dentro de este componente porque este sera un estado
  // que solo le importa a searhbar
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onQuery(query)
    //esto me permite limpiar el setQuery, cuando se ejecute se borrara lo escrito en el input
    setQuery("")
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="search-container">
      <h1>{query}</h1>
      <input type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
