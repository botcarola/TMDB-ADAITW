import useFetchDetails from "../hooks/useFetchDetails";

const Videos = ({categoria, id}) => {

    const elemento = useFetchDetails(false, categoria, id, "videos")
    const array = elemento.results
    console.log(array)

    return(
        <div className="flex flex-col mb-10 w-4/5 lg:w-3/5">
            {!!array && array !== "[]" ?
                array.map( curr => 
                    <iframe className="mb-10 h-[18rem] sm:h-[30rem]"
                    key={curr.id}
                    src={`https://www.youtube.com/embed/${curr.key}`}
                    />                        
                )
                :
                <h2 className="text-white">
                    No hay videos para mostrar
                </h2>
            }
        </div>
    )
}

export default Videos;