import {Routes, Route} from "react-router-dom"
import Login from "./components/login/Login"

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Listado from "./components/listado/Listado";
import AboutMe from "./components/about/AboutMe";
import DetailMovie from "./components/detail/DetailMovie";
import SearchMovie from "./components/search/SearchMovie";

function App() {

  return (
    <div className="container mt-3">
      <Header/>
      <Routes>
        <Route path='/listado'
          element={<Listado />}/>
        <Route path='/about'
          element={<AboutMe />}/>
        <Route path='/details/:id'
          element={<DetailMovie />}/>
        <Route path='/searchMovie'
          element={<SearchMovie />}/>
        <Route path='/'
          element={<Login />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
