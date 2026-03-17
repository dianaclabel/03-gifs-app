import { mockGifs } from "./mock-data/gifs.mock.data"

export const GifsApp = () => {
  return (
    <>
      {/* header */}
      <div className="content-center">
        <h1>Buscador de Gifts</h1>
        <p>Descubre y comparte el gift perfecto</p>
      </div>

      {/* search */}
      <div className="search-container">
        <input type="text" placeholder="Buscar gifs" />
        <button>Buscar</button>
      </div>

      {/* Busquedas previas */}
      <div className="previous-searches">
        <h2>Busquedad previas</h2>
        <ul className="previous-searches-list">
          <li>Goku</li>
          <li>Saitama</li>
          <li>Elden Ring</li>
        </ul>
      </div>

      {/* Gifs */}
      <div className="gifs-container">
        {
          mockGifs.map(gif => (
            <div key={gif.id} className="gif-card">
              <img src={gif.url} alt={gif.title} />
              <h3>{gif.title}</h3>
              <p>{gif.width}X{gif.height} (1.5mb) </p>

            </div>
          ))
        }
      </div>


    </>
  )
}

