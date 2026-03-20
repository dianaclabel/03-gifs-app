import axios from "axios"
import type { GiphyResponse } from "../interfaces/giphy.responses"

export const getGifsByQuery =  async(query:string): Promise <Gif[]> =>{
  const response = await axios.get<GiphyResponse>('https://api.giphy.com/v1/gifs/search',{
    params: {
      q: query, 
      limit: 10,
      lang: "es", 
      api_key: 'RPuuRBeUBg0noyqFU5XWaVBcOtojfKsY'
    }
  })

  console.log(response.data.data);

  // return response.data.data.map((gift) => {
  //   id: gift.id,
  //   title: gift.title,
  //   url:  gift.images.original.url
  // })
  

  //fetch(`https://api.giphy.com/v1/gifs/search?api_key=RPuuRBeUBg0noyqFU5XWaVBcOtojfKsY&q=${query}&limit=10&lang=es`)
}


