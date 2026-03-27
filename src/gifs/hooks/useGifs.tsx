import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";
//CUSTOM HOOK
//Se coloca ahi para que cada vez que se renderice el componente no se pierda los datos.
//const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

  //useRefs no causa re-renders
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    //gifsCache["naruto"] => Busca la propiedad naruto en gifsCache
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs)

    gifsCache.current[term] = gifs;

  }

  const handleSearch = async (query: string) => {
    //validar que el query no este vacío
    query = query.toLocaleLowerCase().trim();

    if (query.trim() === "") return;

    // 3. **Evitar búsquedas duplicadas ** verificando
    if (previousTerms.includes(query)) return;

    //Actualizar previousTerms **agregando el nuevo termino al inicio y limitandi a 8 elementos**
    setPreviousTerms([query, ...previousTerms].slice(0, 7))

    //Ejecutamos la funcion getGifsByQuery- llamado a la API
    const gifs = await getGifsByQuery(query);
    setGifs(gifs)

    //gifsCache["goku"] = [ ...los gifs de goku... ];
    gifsCache.current[query] = gifs;
  }

  return { previousTerms, gifs, handleTermClicked, handleSearch }
}
