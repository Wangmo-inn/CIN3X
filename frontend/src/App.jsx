import './css/App.css'
import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import {Routes,Route} from "react-router-dom"
import {MovieProvider} from "./contexts/MovieContext"
import NavBar from "./componenets/NavBar"

//component starts with cap letter
//react- uses jsx - mix od js and html
//<> //this is fragment
function App() {
  
  return (
    <MovieProvider>
    <NavBar />
    <main className="main-content">
      <Routes>
  <Route path="/" element={<Home />} />           
  <Route path="/home" element={<Home />} />       
  <Route path="/favorites" element={<Favorites />} />
</Routes>

    </main>
  </MovieProvider>
  );
}

export default App;
