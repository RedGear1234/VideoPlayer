import { BrowserRouter, Routes, Route } from "react-router-dom"
import Videos from "./Components/Videos";
import Navbar from './Components/Navbar'
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* private components start */}
         <Route path="/" element={<Videos/>}/>
        {/* private components end */}
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App
