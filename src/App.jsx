import React, {useContext}  from "react"
import './App.css'

import { Route,Routes } from "react-router-dom"
import Login from "./main/login"
import Signup from "./main/Signup"
import Confirmation from "./main/Confirmation";
import Dashboard from "./main/Dashboard";
import DataContext from "./context/DataContext";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Roadmap from "./main/Roadmap";
import Task from "./main/Task";
import Certificate from "./main/Certificate";
import Mock from "./main/Mock";
import Leave from "./main/Leave";
import Portfolio from "./main/Portfolio";
import Queries from "./main/Queries";
import Capstone from "./main/Capstone";
import Webcode from "./main/Webcode"

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
          <Route path='/' element={<Login />} />
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
