
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modal from "./components/Modal/index"


function App() {

  return (
    <div className="App w-screen h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Modal />} />
            <Route path="/Modal" element={<Modal  />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App


