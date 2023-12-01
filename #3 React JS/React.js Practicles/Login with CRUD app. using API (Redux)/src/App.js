
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./features/Login - Register/Pages/Login";
import Registration from "./features/Login - Register/Pages/Registration";
import Home from "./features/Login - Register/Pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Index path="/" element={<> <Login/> </>}></Route>
        <Route path="/Register" element={<> <Registration/> </>}></Route>
        <Route path="/Home" element={<> <Home/> </>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
