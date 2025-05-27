import { useEffect, useState } from 'react';
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
  const [rightClickCount, setRightClickCount] = useState(0);

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault(); // block default right-click
      setRightClickCount((prev) => {
        const newCount = prev + 1;

        // Show alert if right-clicked more than once
        if (newCount >= 2) {
          const alertBox = document.getElementById('custom-alert');
          if (alertBox) {
            alertBox.style.display = 'block';
            
            // Auto-hide after 3 seconds and reset counter
            setTimeout(() => {
              alertBox.style.display = 'none';
              setRightClickCount(0); // Reset counter so alert can show again
            }, 3000);
          }
        }

        return newCount;
      });
    };

    // Disable F12, Ctrl+Shift+I, Ctrl+U, and other developer tools shortcuts
    const handleKeyDown = (e) => {
      // Disable F12
      if (e.keyCode === 123) {
        e.preventDefault();
        return false;
      }
      // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
        e.preventDefault();
        return false;
      }
      // Disable Ctrl+U
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AdminProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          
          {/* Custom Alert Box */}
          <div
            id="custom-alert"
            style={{
              display: 'none',
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

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AdminProvider>
    </QueryClientProvider>
  );
};

export default App;
