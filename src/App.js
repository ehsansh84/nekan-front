import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard" ;
import Report from "./components/Report";
import Register from "./components/Register";
import Login from "./pages/login/Login";

const App= ()=> {
    return(
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path="/dashboard/report" element={<Report />} />
            <Route path="/dashboard/register" element={<Register />} />
        </Routes>
    )
}
export default App;