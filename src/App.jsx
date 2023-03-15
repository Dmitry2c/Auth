import { HomePage } from "./components/home/HomePage";
import { Routes, Route } from "react-router-dom";
import { Auth } from "./components/auth/Auth";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="login" element={<Auth />}></Route>
        <Route path="register" element={<Auth />}></Route>
        <Route path="changePassword" element={<Auth />}></Route>
      </Routes>
    </>
  );
}
export default App;
