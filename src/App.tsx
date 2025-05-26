
import { useEffect, useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          if (alertBox) alertBox.style.display = 'block';
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
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {/* Custom Alert Box */}
        <div
          id="custom-alert"
          style={{
            display: 'none',
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#ffecec',
            border: '1px solid #ff5e5e',
            padding: '15px',
            borderRadius: '10px',
            boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)',
            zIndex: 9999,
            color: '#ff0000',
            fontWeight: 'bold',
          }}
        >
          ⚠️ ALERT: contact.hujaifakhanmdrohid4004@gmail.com
        </div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
