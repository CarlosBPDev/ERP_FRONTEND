import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import BottomNav from './BottomNav';

const Layout = () => {
  return (
    <div className="flex h-screen bg-background overflow-hidden text-primary">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full relative overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-20 md:pb-8">
          <Outlet />
        </main>
      </div>
      <BottomNav />
    </div>
  );
};

export default Layout;
