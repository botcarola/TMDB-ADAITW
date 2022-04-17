import Pagination from '@mui/material/Pagination';

const Paginado = ({paginado}) => {

    return(
        <>
        {!!paginado &&
            <div className="flex justify-center mt-10">
                <Pagination count={10} shape="rounded" sx={{ color: 'success.main', }}/> 
            </div>
        } 
        </>
    )
}

export default Paginado;