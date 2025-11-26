import React, { useState } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';

// Layout Components
import Sidebar from './componenta/Slider';
import Header from './componenta/Header';

// Auth Pages
import LoginPage from './Pages/Login'; // Assuming LoginPage is in Pages/Login.jsx

// Main Application Pages
import Dashboard from './Pages/Dashboard';
import UserList from './Pages/Users/UserList';
import UserForm from './Pages/Users/UserForm';
import RolesAndPermissions from './Pages/Users/RolesAndPermissions';
import DocumentList from './Pages/Documents/DocumentList';
import DocumentForm from './Pages/Documents/DocumentForm';

import ReportsList from './Pages/Reports/ReportsList';
import UserPermissionsReport from './Pages/Reports/UserPermissionsReport';
import DailyTracking from './Pages/Tracking/DailyTracking';
import WeeklyTracking from './Pages/Tracking/WeeklyTracking';
import TrackingDetails from './Pages/Tracking/TrackingDetails';
import TrackingReports from './pages/Tracking/TrackingReports';
import TrackingDashboard from './pages/Tracking/TrackingDashboard';
import Settings from './Pages/Settings';
import SupportRequests from './Pages/SupportRequests';
import SupportRequestDetails from './Pages/SupportRequestDetails';
import AddSupportRequest from './Pages/AddSupportRequest';
import NotFound from './Pages/NotFound';
import DraftDocuments from './pages/Documents/DraftDocuments';
import AdvancedDocumentSearch from './pages/AdvancedDocumentSearch';
import NewAdvancedSearch from './pages/NewAdvancedSearch';
import DocumentDetails from './pages/Documents/DocumentDetails';
import ReportsDashboard from './Pages/Reports/ReportsDashboard';


// This component represents the main layout for authenticated users.
// It includes the Sidebar, Header, and the main content area.
const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);

  return (
    <div className="h-screen w-full " dir="rtl">
      <Header />

      <div className="flex h-[calc(100vh-5rem)] ">
        <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main
          className={`flex-1 overflow-y-auto bg-gray-50/50 transition-all duration-300 ${
            sidebarOpen ? "mr-72" : "mr-16"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

// A wrapper component to protect routes that require authentication.
function RequireAuth({ children }) {
  // Using a static token for now as in the original code.
  // Replace with actual authentication logic.
  const token = 1;
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* Authenticated Routes */}
      <Route
        path="/"
        element={
          <RequireAuth>
            <MainLayout />
          </RequireAuth>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />

        {/* User Management */}
        <Route path="admin/users" element={<UserList />} />
        <Route path="admin/users/add" element={<UserForm />} />
        <Route path="admin/users/edit/:id" element={<UserForm />} />
        <Route path="admin/roles" element={<RolesAndPermissions />} />

        {/* Documents */}
        <Route path="admin/documents" element={<DocumentList />} />
        <Route path="admin/documents/add" element={<DocumentForm />} />
        <Route path="admin/documents/edit/:id" element={<DocumentForm />} />
        <Route path="admin/documents/drafts" element={<DraftDocuments />} />
        <Route path="admin/documents/:id" element={<DocumentDetails />} />
        <Route path="admin/advanced-search" element={<AdvancedDocumentSearch />} />
        <Route path="admin/advanced-search/new" element={<NewAdvancedSearch />} />


        {/* Reports */}
        <Route path="admin/reports" element={<ReportsList />} />
        <Route path="admin/reports/dashboard" element={<ReportsDashboard />} />
        <Route path="reports/user-permissions" element={<UserPermissionsReport />} />

        {/* Tracking */}
        <Route path="admin/tracking/daily" element={<DailyTracking />} />
        <Route path="admin/tracking/weekly" element={<WeeklyTracking />} />
        <Route path="admin/tracking/details/:id" element={<TrackingDetails />} />
        <Route path="admin/tracking/reports" element={<TrackingReports />} />
        <Route path="admin/tracking/dashboard" element={<TrackingDashboard />} />

        {/* Settings */}
        <Route path="settings" element={<Settings />} />

        {/* Support */}
        <Route path="support" element={<SupportRequests />} />
        <Route path="support/add" element={<AddSupportRequest />} />
        <Route path="support/:id" element={<SupportRequestDetails />} />

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

