// src/App.tsx

import React, { useEffect, useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminProvider } from "@/contexts/AdminContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // NEW: State to control the visibility of the custom alert
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault(); // block default right-click
      setIsAlertVisible(true); // Show the alert using state

      // Set a timer to hide the alert after 3 seconds
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 3000);
    };

    // Use modern `e.key` instead of deprecated `e.keyCode`
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Disable Ctrl+Shift+I, Ctrl+Shift+J
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) {
        e.preventDefault();
      }
      // Disable Ctrl+U
      if (e.ctrlKey && e.key === 'U') {
        e.preventDefault();
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove listeners when the component unmounts
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty array ensures this runs only once

  return (
    <QueryClientProvider client={queryClient}>
      <AdminProvider>
        <TooltipProvider>
          {/* Moved Toasters to be direct children of a provider */}
          <Toaster />
          <Sonner />

          {/* Conditionally render the Custom Alert Box based on state.
            This is the "React Way".
          */}
          {isAlertVisible && (
            <div
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#fff5f5',
                border: '2px solid #fecaca',
                padding: '20px 30px',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                zIndex: 9999,
                color: '#dc2626',
                fontWeight: '600',
                fontSize: '16px',
                minWidth: '300px',
                textAlign: 'center',
              }}
            >
              ⚠️ ALERT: <br />
              contact.huaifakhanmdrohid4004@gmail.com
            </div>
          )}

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AdminProvider>
    </QueryClientProvider>
  );
};

export default App;