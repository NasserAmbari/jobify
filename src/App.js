import { Layout, LayoutDashboard, ProtectedRoute } from "./components";
import {
  Home,
  VacancyDetail,
  Vacancy,
  Login,
  Dashboard,
  CreateJob,
  NotFound,
} from "./pages";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashboardProvider } from "./context/dashboard";
import { GlobalProvider } from "./context/global";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCheckSquare,
  faCoffee,
  faMap,
  faPhone,
  faLocationDot,
  faClock,
  faQuoteLeft,
  faCircle,
  faMoneyBillWave,
  faSearch,
  faXmark,
  faBars,
  faTrash,
  faRotate,
  faList,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Register from "./pages/Register";
import UpdateJob from "./pages/UpdateJob";
import Profile from "./pages/Profile";

library.add(
  faCheckSquare,
  faCoffee,
  faMap,
  faPhone,
  faLocationDot,
  faClock,
  faQuoteLeft,
  faCircle,
  faMoneyBillWave,
  faSearch,
  faXmark,
  faBars,
  faTrash,
  faRotate,
  faList,
  faPlus,
  faUser
);

function App() {
  return (
    <main>
      <Router>
        <GlobalProvider>
          <div>
            <Routes>
              <Route path="/" element={<Layout children={<Home />} />} />
              <Route
                path="/job-vacancy/:id"
                element={<Layout children={<VacancyDetail />} />}
              />
              <Route
                path="/find-jobs"
                element={<Layout children={<Vacancy />} />}
              />
              <Route path="/login" element={<Layout children={<Login />} />} />
              <Route
                path="/register"
                element={<Layout children={<Register />} />}
              />

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardProvider>
                      <LayoutDashboard>
                        <Dashboard />
                      </LayoutDashboard>
                    </DashboardProvider>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/dashboard/create-a-job"
                element={
                  <ProtectedRoute>
                    <DashboardProvider>
                      <LayoutDashboard>
                        <CreateJob />
                      </LayoutDashboard>
                    </DashboardProvider>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/dashboard/update-a-job/:id"
                element={
                  <ProtectedRoute>
                    <DashboardProvider>
                      <LayoutDashboard>
                        <UpdateJob />
                      </LayoutDashboard>
                    </DashboardProvider>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/dashboard/profile/"
                element={
                  <ProtectedRoute>
                    <DashboardProvider>
                      <LayoutDashboard>
                        <Profile />
                      </LayoutDashboard>
                    </DashboardProvider>
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </GlobalProvider>
      </Router>
    </main>
  );
}

export default App;
