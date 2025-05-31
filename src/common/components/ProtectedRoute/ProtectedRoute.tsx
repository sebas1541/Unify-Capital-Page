import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const LEGAL_ACCEPTANCE_KEY = 'userLegalAcceptance';
const ACCEPTANCE_EXPIRY_MS = 60 * 60 * 1000; // 1 hour in milliseconds

interface ProtectedRouteProps {
  children: React.ReactElement;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();
  const storedAcceptance = localStorage.getItem(LEGAL_ACCEPTANCE_KEY);

  if (storedAcceptance) {
    try {
      const acceptanceData = JSON.parse(storedAcceptance);
      const currentTime = Date.now();

      if (
        acceptanceData &&
        acceptanceData.hasAccepted === true &&
        acceptanceData.acceptanceTimestamp &&
        (currentTime - acceptanceData.acceptanceTimestamp < ACCEPTANCE_EXPIRY_MS)
      ) {
        return children; // User has accepted and it's not expired
      }
      // If data is invalid or expired, remove it
      localStorage.removeItem(LEGAL_ACCEPTANCE_KEY);
    } catch (error) {
      // If parsing fails, remove the invalid item
      console.error("Error parsing legal acceptance from localStorage:", error);
      localStorage.removeItem(LEGAL_ACCEPTANCE_KEY);
    }
  }

  // If no valid acceptance, redirect to legal agreement page
  // Pass the original intended location so user can be redirected back after accepting (optional)
  return <Navigate to="/legal-agreement" state={{ from: location }} replace />;
}; 