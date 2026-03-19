import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string,
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
  //Se usa useState dentro de este componente porque este sera un estado
  // que solo le importa a searhbar
  //useState
  const [query, setQuery] = useState('');

  //UseEffect
  //Se dispara despue de que renderice el componente

  //dependencias[]: Su función principal es decirle a React cuándo debe volver a ejecutarse 
  // el código que escribiste dentro del efecto. Si no lo pusieras, el efecto se ejecutaría en cada renderizado del componente, lo cual suele ser ineficiente o causar bucles infinitos.

  useEffect(() => {
    const timeoutid = setTimeout(() => {
      onQuery(query)
    }, 700)
    //---------
    //onQuery(query);
    //funcion de limpieza se ejecuta cuando el componente deja de existir(desmonta) o hay una actualizacion del componenete (re-render)
    return () => {
      //ejm de cuando un comp deja de existir -> { false && (< SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch}>)}
      // como no se renderiza entonces se ejecuta el return
      // console.log('función de limpieza')
      //-------
      clearTimeout(timeoutid);
    }

  }, [query, onQuery]);//dependencias

  //handles
  const handleSearch = () => {
    //onQuery(query)
    //esto me permite limpiar el setQuery, cuando se ejecute se borrara lo escrito en el input
    // setQuery("")
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
