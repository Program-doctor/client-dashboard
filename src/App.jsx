import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./page/landing-pages/home"
import Onboarding from './components/shared-components/Onboarding-screen/onboarding';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="onboarding" element={<Onboarding />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
