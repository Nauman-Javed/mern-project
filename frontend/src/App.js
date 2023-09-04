import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Login, Register } from "./pages";
import { Header } from "./components";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
