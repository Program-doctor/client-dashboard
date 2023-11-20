// Importing the global styles for the application
import "./App.css";

// Importing necessary dependencies from react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Importing components for different pages
import SettingDashBoard from "./pages/settingDashBoard";
import HomeScreen from "./pages/homePage";
import CameraContainer from "./pages/cameraSetting/cameraContainer";
import CameraSettings from "./pages/cameraSetting/cameraSetting";
import UserProfileSetting from "./pages/profileSetting/userProfileSetting";

// Creating a BrowserRouter and defining routes using react-router-dom
const router = createBrowserRouter(
  createRoutesFromElements(
    // Root route for the HomeScreen component
    <Route path="/" element={<HomeScreen />}>
      {/* Nested routes for the SettingDashBoard component */}
      <Route index element={<SettingDashBoard />} />

      {/* Nested routes for the inner setting component */}
      <Route path="setting" element={<CameraContainer />}>
        {/* Default route for the CameraContainer component */}
        <Route index element={<UserProfileSetting />} />

        {/* Route for the CameraSettings component */}
        <Route path="Camera" element={<CameraSettings />} />

        {/* Route for the Price component */}
        <Route path="Price" element={<p>hello price</p>} />
      </Route>
    </Route>
  )
);

// Main App component rendering the RouterProvider with the defined router
function App() {
  return <RouterProvider router={router} />;
}

// Exporting the App component as the default export
export default App;
