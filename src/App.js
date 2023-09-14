// import EventCalendar from "./components/publicPage";
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import LandingPage from "./pages/Landing";
import Dashboard from "./pages/dashboard";
import Error from "./pages/error";
import WelcomePage from './pages/userMainPage';
import EventCalendar from './components/publicPage';
import SetSlots from './pages/testslot';
import GetSlots from './pages/getslots';

function App() {
  return (
   
    <BrowserRouter>
      
      <Routes>
         <Route path ='/event' element={<Dashboard/>}/>
         <Route path ='/landing' element={<WelcomePage/>}/>
         <Route path ='/' element={<LandingPage/>}/>
         <Route path ='*' element={<Error/>}/>
         <Route path ='/user/:identifier' element={<EventCalendar/>}/>
         <Route path ='/slots' element={<SetSlots/>}/>
         <Route path ='/getslots' element={<GetSlots/>}/>


      </Routes>
    
    
    </BrowserRouter>
    
   
  );
}

export default App;
