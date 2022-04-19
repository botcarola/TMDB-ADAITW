import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Paginado = ({paginado, valorPaginado, data, evento}) => {

    const theme = createTheme({
        palette:{
            primary:{
                main: "#212121"
            }
        }
    })
  
    return(
        <>
        {!!paginado &&
            <div className="flex justify-center mt-10">
                <ThemeProvider theme={theme}>
                    <Pagination
                    page={valorPaginado}
                    onChange={evento}
                    count={data.total_pages >= 500 ? 500 : data.total_pages}
                    shape="rounded" 
                    color="primary" 
                    defaultPage={valorPaginado} 
                    siblingCount={0}
                    size="small"
                    /> 
                </ThemeProvider>
            </div>
        } 
        </>
    )
}

export default Paginado;