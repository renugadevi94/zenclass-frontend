import React, {useContext}  from "react";
import './App.css';
import { Route,Routes } from "react-router-dom";
import DataContext from "./context/DataContext";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Caccount from "./pages/Caccount";
import Verify from "./pages/Verify";
import Zroadmap from "./pages/Zroadmap";
import Ndashboard from "./pages/Ndashboard";
import Rtask from "./pages/Rtask";
import Ncertificate from "./pages/Ncertificate";
import Imock from "./pages/Imock";
import Nleave from "./pages/Nleave";
import Cportfolio from "./pages/Cportfolio";
import Tqueries from "./pages/Tqueries";
import Scapstone from "./pages/Scapstone";
import Swebcode from "./pages/Swebcode";
import Forgot from "./pages/Forgot";
import Reset from "./pages/Reset";



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
          <Route path='/forgot' element={<Forgot />} />
          <Route path='/reset/:id' element={<Reset />} />




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
