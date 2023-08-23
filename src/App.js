import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { NotFound } from "./components/NotFound"

export const App = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element = {<Home />}/>
      <Route exact path='/signup' element = {<Signup />}/>
      <Route exact path='/login' element = {<Login />}/>
      <Route exact path='/notfound' element = {<NotFound/>}/>
        </Routes>
        </BrowserRouter>
  )
}
export default App;