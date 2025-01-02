import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const MainLayout = () => {
  return (
    <>
      <NavBar />
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
};
