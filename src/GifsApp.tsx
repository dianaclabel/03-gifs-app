import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock.data"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar";



export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

  const handleTermClicked = (term: string) => {
    console.log({ term })
  }

  const handleSearch = (query: string) => {
    console.log({ query });

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

