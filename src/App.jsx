import React, {useContext}  from "react"
import './App.css'

import { Route,Routes } from "react-router-dom"

import Signup from "./multiple/Signup"

import DataContext from "./context/DataContext";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Roadmap from "./multiple/Roadmap";
import Task from "./multiple/Task";

import Mock from "./multiple/Mock";
import Leave from "./multiple/Leave";
import Portfolio from "./multiple/Portfolio";
import Queries from "./multiple/Queries";

import Webcode from "./multiple/Webcode"
import Capstone from "./Multiple/Capstone";
import Certificate from "./Multiple/Certificate";
import Dashboard from "./Multiple/Dashboard";
import Confirmation from "./Multiple/Confirmation";
import Home from "./multiple/Home";

function App() {
  const { loggedUser } = useContext(DataContext);
  return (
   <div>
      {
        loggedUser && !loggedUser.isMentor &&
        <>
          <Header />
          <Navbar />
     </>
}
<Routes>

{
          !loggedUser &&
          <>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/confirm/:id' element={<Confirmation />} />




          </>
}
{
          loggedUser && !loggedUser.isMentor &&
          <>
            <Route path='/' element={<Roadmap />} />
            <Route path='/class' element={<Roadmap />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/task' element={<Task />} />
            <Route path='/certificate' element={<Certificate />} />
            <Route path='/mock' element={<Mock />} />
            <Route path='/leave' element={<Leave />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/queries' element={<Queries />} />
            <Route path='/capstone' element={<Capstone />} />
            <Route path='/webcode' element={<Webcode />} />


  </>
}

  
  </Routes>   
  </div> 
  )
}

export default App
