import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, Truck, Hexagon, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { logout } = useAuth();

  const navItems = [
    { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/inventory', icon: Package, label: 'Inventario' },
    { to: '/orders', icon: ShoppingCart, label: 'Órdenes' },
    { to: '/dispatches', icon: Truck, label: 'Despachos' },
  ];

  return (
    <aside className="w-64 h-screen border-r border-border bg-surface flex flex-col hidden md:flex shrink-0">
      <div className="h-14 flex items-center px-4 border-b border-border">
        <div className="flex items-center gap-2 text-primary font-semibold">
          <Hexagon size={20} className="text-accent" />
          <span>LogisERP</span>
        </div>
      </div>
      
      <div className="flex-1 py-4 px-3 space-y-1">
        <div className="text-xs font-semibold text-secondary px-3 mb-2 uppercase tracking-wider">Logística</div>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-secondary hover:text-primary hover:bg-surfaceHover'
              }`
            }
          >
            <item.icon size={16} />
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t border-border space-y-1">
        <NavLink to="/settings" className={({ isActive }) => `w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-surfaceHover text-primary' : 'text-secondary hover:text-primary hover:bg-surfaceHover'}`}>
          <Settings size={16} />
          Configuración
        </NavLink>
        <button 
          onClick={logout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-danger hover:bg-danger/10 transition-colors"
        >
          <LogOut size={16} />
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
