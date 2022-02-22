import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Aboutpage } from "./routes/Aboutpage";
import { Dashboard } from "./routes/Dashboard";
import { Homepage } from "./routes/Homepage";
import { NotFound } from "./routes/NotFound";
import { Userpage } from "./routes/Userpage";
import { UsersPage } from "./routes/UsersPage";

export default function App() {
  return (
    <BrowserRouter>
    
      <Navbar/>
      <Routes> WAW
        <Route path='/' element={<Homepage/>} />
        <Route path='/about' element={<Aboutpage/>}/>
        <Route path='/users' element={<UsersPage/>}/>
        <Route path='/users/:id' element={<Userpage/>}/>
        <Route path='/user' element={<Navigate to='/users'/>}/>
        <Route path='/dashboard/*' element={<Dashboard/>}/>
          <Route path='/welcome' element={<p>hola</p>} />
          <Route path='/goodbye' element={<p>bye</p>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
