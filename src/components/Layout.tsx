import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';
import { useAuth } from '../hooks/useAuth';

export const Layout = () => {
  const { isAuthenticated, isAdmin, isUser, user, signOut } = useAuth();

  return (
    <>
      <NavBar 
        isAuthenticated={isAuthenticated}
        isAdmin={isAdmin}
        isUser={isUser}
        userName={user?.username}
        onSignOut={signOut}
      />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};
