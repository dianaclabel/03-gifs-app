import type { GiphyResponse } from "../interfaces/giphy.responses"
import type { Gif } from '../interfaces/gif.interface';
import { giphyApi } from "../api/giphy.api";

export const getGifsByQuery =  async(query:string): Promise <Gif[]> =>{

  if(query.trim().length === 0){
    return []
  }

  const response = await giphyApi<GiphyResponse>('/search',{
    params: {
      q: query, 
      limit: 10,
    }
  })

  // console.log(response.data.data);

  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    // se hace transformacion porque en nuestra interface Gif[] esta como numero
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height),
  }) )
  

  //fetch(`https://api.giphy.com/v1/gifs/search?api_key=RPuuRBeUBg0noyqFU5XWaVBcOtojfKsY&q=${query}&limit=10&lang=es`)
}


