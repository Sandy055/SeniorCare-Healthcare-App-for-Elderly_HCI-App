import AppointmentPage from "./AppointmentPage";
import MedicineMonitorPage from "./MedicineMonitorPage";
import VitalsManagementPage from "./VitalsManagement";
import FoodIntake from "./components/FoodIntake";
import ProfilePage from "./components/ProfilePage";
import BottomBar from "./components/bottomBar"
import HomePage from "./homePage"
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="font-anton">
    <HomePage/>
    <BottomBar/>      
    </div>,
  },
  {
    path: "/foodintake",
    element:<FoodIntake/>
  },
  {
    path: "/profile",
    element:<ProfilePage/>
  },
  {
    path: "/medicines",
    element:<MedicineMonitorPage/>
  },
  {
    path: "/vitals",
    element:<VitalsManagementPage/>
  },
  {
    path: "/appointments",
    element:<AppointmentPage/>
  }
]);
function App() {
  return (
    <RouterProvider router = {router}/>
  )
}

export default App
