import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/HomePage/Home";
import AddPage from "./pages/AddPage/AddPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
           <Route  index element = {<Home/>}/>
          
          </Route>
          <Route path="/add" element={<AddPage/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
