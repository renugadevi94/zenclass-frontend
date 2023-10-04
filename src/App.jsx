import React, {useContext}  from "react"
import './App.css'

import { Route,Routes } from "react-router-dom"
import Login from "./main/login.jsx"
import Signup from "./main/Signup"
import Confirmation from "./main/Confirmation";
import Dashboard from "./main/Dashboard";
import DataContext from "./context/DataContext.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Roadmap from "./main/Roadmap.jsx";
import Task from "./main/Task.jsx";
import Certificate from "./main/Certificate.jsx";
import Mock from "./main/Mock.jsx";
import Leave from "./main/Leave.jsx";
import Portfolio from "./main/Portfolio.jsx";
import Queries from "./main/Queries.jsx";
import Capstone from "./main/Capstone.jsx";
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
