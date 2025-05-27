// src/contexts/AdminContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AdminContextType {
  isAdminLoggedIn: boolean;
  adminData: any; // Consider defining a more specific type for adminData based on your 'admins' table
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminData, setAdminData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const adminSession = localStorage.getItem('admin_session');
    if (adminSession) {
      try {
        const admin = JSON.parse(adminSession);
        setAdminData(admin);
        setIsAdminLoggedIn(true);
      } catch (error) {
        console.error("Error parsing admin session from localStorage:", error);
        localStorage.removeItem('admin_session');
      }
    }
    setLoading(false);
  }, []);

  const login = async (username_input: string, password_input: string): Promise<boolean> => {
    const username = username_input.trim(); // Trim whitespace from username input
    const password = password_input; // Password is kept as is for exact matching

    console.log(`Attempting login for username: "${username}" with password: "${password}"`);

    try {
      const { data, error } = await supabase
        .from('admins')
        .select('*')
        .eq('username', username)
        .eq('password', password); // Temporarily removed .single() for detailed debugging

      // Log the raw response from Supabase
      console.log('Supabase login query response:', { data, error });

      if (error) {
        console.error('Supabase error during login query:', error.message, error.details, error.hint);
        return false;
      }

      if (!data || data.length === 0) {
        console.log('No admin found with the provided credentials.');
        return false;
      }

      if (data.length > 1) {
        console.warn('Multiple admins found with the same credentials. This should not happen if usernames are unique. Using the first match.');
        // You might want to return false here for security if duplicates are not expected.
        // For now, we'll proceed with the first match to see if login can succeed.
      }

      const adminUser = data[0]; // Get the first matching user

      setAdminData(adminUser);
      setIsAdminLoggedIn(true);
      localStorage.setItem('admin_session', JSON.stringify(adminUser));
      console.log('Login successful for:', adminUser.username);
      return true;

    } catch (catchError: any) {
      console.error('Login function caught an unexpected error:', catchError.message, catchError);
      return false;
    }
  };

  const logout = () => {
    setIsAdminLoggedIn(false);
    setAdminData(null);
    localStorage.removeItem('admin_session');
    console.log('Admin logged out.');
  };

  return (
    <AdminContext.Provider value={{ isAdminLoggedIn, adminData, login, logout, loading }}>
      {children}
    </AdminContext.Provider>
  );
};