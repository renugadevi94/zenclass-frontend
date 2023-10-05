import React, {useContext}  from "react"
import './App.css'

import { Route,Routes } from "react-router-dom"
import Login from "./MULTIPLEPAGE/login"
import Signup from "./MULTIPLEPAGE/Signup"
import Confirmation from "./MULTIPLEPAGE/Confirmation";
import Dashboard from "./MULTIPLEPAGE/Dashboard";
import DataContext from "./context/DataContext";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Roadmap from "./MULTIPLEPAGE/Roadmap";
import Task from "./MULTIPLEPAGE/Task";
import Certificate from "./MULTIPLEPAGE/Certificate";
import Mock from "./MULTIPLEPAGE/Mock";
import Leave from "./MULTIPLEPAGE/Leave";
import Portfolio from "./MULTIPLEPAGE/Portfolio";
import Queries from "./MULTIPLEPAGE/Queries";
import Capstone from "./MULTIPLEPAGE/Capstone";
import Webcode from "./MULTIPLEPAGE/Webcode"

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
