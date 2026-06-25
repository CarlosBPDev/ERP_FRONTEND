import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, Truck, Settings } from 'lucide-react';

const BottomNav = () => {
  const navItems = [
    { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/inventory', icon: Package, label: 'Inventario' },
    { to: '/orders', icon: ShoppingCart, label: 'Órdenes' },
    { to: '/dispatches', icon: Truck, label: 'Despachos' },
    { to: '/settings', icon: Settings, label: 'Config' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden border-t border-border bg-surface/95 backdrop-blur-md">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center py-2 gap-0.5 text-xs font-medium transition-colors ${
              isActive ? 'text-accent' : 'text-secondary'
            }`
          }
        >
          <item.icon size={20} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
