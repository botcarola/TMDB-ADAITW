export const apiKey = "d2db916ed787e45a269779c746706c07"

export const propsMain = [
    {
        url: false,
        rutaTipo: "movie",
        rutaSubtipo:"trending",
        titulo: "Películas que son tendencia",
        id: 1
    },
    {
        url: false,
        rutaTipo: "tv",
        rutaSubtipo:"trending",
        titulo: "Series que son tendencia",
        id: 2
    }
]

export const propsMovies = [
    {
        url: true,
        rutaTipo: "movie",
        rutaSubtipo:"popular",
        titulo: "Películas populares",
        id: 1
    },
    {
        url: true,
        rutaTipo: "movie",
        rutaSubtipo:"top_rated",
        titulo: "Películas con mejores críticas",
        id: 2
    },
    {
        url: true,
        rutaTipo: "movie",
        rutaSubtipo:"upcoming",
        titulo: "Películas a estrenar",
        id: 3
    },
    {
        url: true,
        rutaTipo: "movie",
        rutaSubtipo:"now_playing",
        titulo: "Películas en cines",
        id: 4
    }
]

export const propsSeries = [
    {
        url: true,
        rutaTipo: "tv",
        rutaSubtipo:"popular",
        titulo: "Series populares",
        id: 1
    },
    {
        url: true,
        rutaTipo: "tv",
        rutaSubtipo:"top_rated",
        titulo: "Series con mejores críticas",
        id: 2
    },
    {
        url: true,
        rutaTipo: "tv",
        rutaSubtipo:"on_the_air",
        titulo: "Series al aire",
        id: 3
    }
]

export const recorrerGeneros = (arr) => {

    const recorrerArray = arr.map(curr => {
        return <li className="ml-1 mr-1" key={curr.id}>{curr.name}</li>
    })
    return recorrerArray
}

export const agregarComas = (str) => {
    const aString = String(str)
    const stringAArray = [...aString].reverse()
    stringAArray.splice(3, 0, ",")
    stringAArray.splice(7, 0, ",")  
    return stringAArray.reverse().join("")
}