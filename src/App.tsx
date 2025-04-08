import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ELicensePage from './pages/ELicensePage';
import FineIssuancePage from './pages/FineIssuancePage';
import FineHistoryPage from './pages/FineHistoryPage';
import UserProfilePage from './pages/UserProfilePage';
export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="e-license" element={<ELicensePage />} />
          <Route path="fine-issuance" element={<FineIssuancePage />} />
          <Route path="fine-history" element={<FineHistoryPage />} />
          <Route path="profile" element={<UserProfilePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>;
}