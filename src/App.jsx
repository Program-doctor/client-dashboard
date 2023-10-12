import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./page/landing-pages/home"
import Onboarding from './components/shared-components/Onboarding-screen/onboarding';
import WelcomeScreen from './components/shared-components/welcome screen/welcome';
import Camera from './components/shared-components/welcome screen/camera';
import Camera2 from './components/shared-components/welcome screen/camera2';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="welcome" element={<WelcomeScreen />} />
          <Route path="camera" element={<Camera />} />
          <Route path="camera2" element={<Camera2 />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
