import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { useAuth } from '../hooks/useAuth';

export const NavBar = () => {
  const { isAuthenticated, isAdmin, isUser, signOut, user } = useAuth();
  
  return (
    <nav className="flex justify-content-between align-items-center p-3 bg-primary">
      <div className="flex align-items-center gap-4">
        <Link to="/" className="no-underline text-white">HOME</Link>
        {(isUser || isAdmin) && (
          <Link to="/new-character" className="no-underline text-white">
            Add Character
          </Link>
        )}
      </div>
      <div className="flex align-items-center gap-3">
        {isAuthenticated ? (
          <>
            <span className="text-white">Welcome, {user?.username}</span>
            <Button label="Sign Out" onClick={signOut} />
          </>
        ) : (
          <Link to="/login">
            <Button label="Sign In" />
          </Link>
        )}
      </div>
    </nav>
  );
};
