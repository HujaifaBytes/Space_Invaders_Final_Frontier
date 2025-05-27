
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';
import { User, LogOut } from 'lucide-react';

const AdminLogin = () => {
  const { isAdminLoggedIn, login, logout, adminData } = useAdmin();
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const success = await login(username, password);
    
    if (success) {
      setIsOpen(false);
      setUsername('');
      setPassword('');
    } else {
      setError('Invalid username or password');
    }
    
    setIsLoading(false);
  };

  const handleLogout = () => {
    logout();
  };

  if (isAdminLoggedIn) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-cyan-400 text-sm">Welcome, {adminData?.name}</span>
        <Button
          onClick={handleLogout}
          variant="outline"
          size="sm"
          className="bg-transparent border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
        >
          <LogOut size={16} />
        </Button>
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
        >
          <User size={16} className="mr-1" />
          Admin
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-900 border-cyan-500/30 text-white">
        <DialogHeader>
          <DialogTitle className="text-cyan-400">Admin Login</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
              required
            />
          </div>
          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminLogin;
