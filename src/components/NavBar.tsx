import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

interface NavBarProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  isUser: boolean;
  userName?: string;
  onSignOut: () => void;
}

export const NavBar = ({ 
  isAuthenticated, 
  isAdmin, 
  isUser, 
  userName, 
  onSignOut 
}: NavBarProps) => {
  return (
    <nav className="flex justify-content-between align-items-center p-3 bg-primary">
      <div className="flex align-items-center gap-4">
        <Link to="/" className="no-underline text-white">Home</Link>
        {(isUser || isAdmin) && (
          <Link to="/new-character" className="no-underline text-white">
            Add Character
          </Link>
        )}
      </div>
      <div className="flex align-items-center gap-3">
        {isAuthenticated ? (
          <>
            <span className="text-white">Welcome, {userName}</span>
            <Button label="Sign Out" onClick={onSignOut} />
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
