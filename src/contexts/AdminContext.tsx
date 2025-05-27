
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AdminContextType {
  isAdminLoggedIn: boolean;
  adminData: any;
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
    // Check if admin is already logged in (from localStorage)
    const adminSession = localStorage.getItem('admin_session');
    if (adminSession) {
      try {
        const admin = JSON.parse(adminSession);
        setAdminData(admin);
        setIsAdminLoggedIn(true);
      } catch (error) {
        localStorage.removeItem('admin_session');
      }
    }
    setLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase
        .from('admins')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .single();

      if (error || !data) {
        return false;
      }

      setAdminData(data);
      setIsAdminLoggedIn(true);
      localStorage.setItem('admin_session', JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setIsAdminLoggedIn(false);
    setAdminData(null);
    localStorage.removeItem('admin_session');
  };

  return (
    <AdminContext.Provider value={{ isAdminLoggedIn, adminData, login, logout, loading }}>
      {children}
    </AdminContext.Provider>
  );
};
