import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";

const App = () => {

  return(
    <>
    <BrowserRouter>
    <h2>Hola:D</h2>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Home />} />
              <Route path="/movie/:id/:info" element={<Home />} />

              <Route path="/movies/trending/page/:pagina" element={<Home />} />
              <Route path="/movies/popular/page/:pagina" element={<Home />} />
              <Route path="/movies/top_rated/page/:pagina" element={<Home />} />
              <Route path="/movies/upcoming/page/:pagina" element={<Home />} />
              <Route path="/movies/now_playing/page/:pagina" element={<Home />} />           

              <Route path="/tv" element={<Home />} />
              <Route path="/tv/:id/:info" element={<Home />} />  

              <Route path="/tv/trending/page/:pagina" element={<Home/>} />
              <Route path="/tv/popular/page/:pagina" element={<Home/>} />
              <Route path="/tv/top_rated/page/:pagina" element={<Home />} />
              <Route path="/tv/on_the_air/page/:pagina" element={<Home />} />

              <Route path="/*" element={<Home />} />
            </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
