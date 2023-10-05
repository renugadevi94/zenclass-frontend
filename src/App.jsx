import React, {useContext}  from "react"
import './App.css'

import { Route,Routes } from "react-router-dom"

//import Signup from "./multiple/Signup"

import DataContext from "./context/DataContext";







// import Webcode from "./multiple/Webcode"
// import Capstone from "./Multiple/Capstone";


import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./multiple/Home";
import Caccount from "./multiple/Caccount";
import Verify from "./multiple/Verify";
import Zroadmap from "./multiple/Zroadmap";
import Ndashboard from "./multiple/Ndashboard";
import Rtask from "./multiple/Rtask";
import Ncertificate from "./multiple/Ncertificate";
import Imock from "./multiple/Imock";
import Nleave from "./multiple/Nleave";
import Cportfolio from "./multiple/Cportfolio";
import Tqueries from "./multiple/Tqueries";
import Scapstone from "./multiple/Scapstone";
import Swebcode from "./multiple/Swebcode";




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
          <Route path='/signup' element={<Caccount />} />
          <Route path='/confirm/:id' element={<Verify />} />




          </>
}
{
          loggedUser && !loggedUser.isMentor &&
          <>
            <Route path='/' element={<Zroadmap />} />
            <Route path='/class' element={<Zroadmap />} />
            <Route path='/dashboard' element={<Ndashboard />} />
            <Route path='/task' element={<Rtask />} />
            <Route path='/certificate' element={<Ncertificate />} />
            <Route path='/mock' element={<Imock />} />
            <Route path='/leave' element={<Nleave />} />
            <Route path='/portfolio' element={<Cportfolio />} />
            <Route path='/queries' element={<Tqueries />} />
            <Route path='/capstone' element={<Scapstone />} />
            <Route path='/webcode' element={<Swebcode />} />


  </>
}

  
  </Routes>   
  </div> 
  )
}

export default App
