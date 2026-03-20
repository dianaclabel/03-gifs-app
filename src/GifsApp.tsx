import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock.data"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";



export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

  const handleTermClicked = (term: string) => {
    console.log({ term })
  }

  const handleSearch = async (query: string) => {
    //validar que el query no este vacío
    query = query.toLocaleLowerCase().trim();

    if (query.trim() === "") return;

    // 3. **Evitar búsquedas duplicadas ** verificando
    if (previousTerms.includes(query)) return;

    //Actualizar previousTerms **agregando el nuevo termino al inicio y limitandi a 8 elementos**
    setPreviousTerms([query, ...previousTerms].slice(0, 7))

    //Ejecutamos la funcion getGifsByQuery
    await getGifsByQuery(query)

  }


  return (
    <>
      {/* header */}
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto" />

      {/* search */}

      <SearchBar
        placeholder="Buscador de Gifs"
        // handleSearch = {(query:string) => handleSearch(query)}
        onQuery={handleSearch}

      />

      {/* Busquedas previas */}
      {/* <PreviousSearches searches={previousTerms} onLabelcliked={(term: string)=>handleTermClicked(term)} /> */}
      <PreviousSearches searches={previousTerms} onLabelcliked={handleTermClicked} />


      {/* Gifs */}

      <GifList gifs={mockGifs} />


    </>
  )
}

