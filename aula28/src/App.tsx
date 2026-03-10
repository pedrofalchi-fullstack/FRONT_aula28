import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Exemplo01 from "./pages/Exemplo01/Exemplo01";

const App = () =>{
  return(
    <>
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="exemplo-01">useState</Link></li>
        </ul>
      </nav>
        <Routes>
          <Route path="exemplo-01" element={ <Exemplo01 /> } />
        </Routes>
        
      </BrowserRouter>
      
    </>
  )
}

export default App;