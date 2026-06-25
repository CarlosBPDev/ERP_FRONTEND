import { Search, Bell, User } from 'lucide-react';

const Topbar = () => {
  return (
    <header className="h-14 border-b border-border bg-background/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="flex items-center flex-1">
        <div className="relative w-96 hidden sm:block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
          <input 
            type="text" 
            placeholder="Buscar órdenes, productos..." 
            className="w-full bg-surface/50 border border-border text-primary text-sm rounded-md pl-9 pr-3 py-1.5 outline-none focus:border-secondary transition-colors"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-1.5 text-secondary hover:text-primary transition-colors">
          <Bell size={18} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full border border-background"></span>
        </button>
        <div className="h-6 w-px bg-border"></div>
        <button className="flex items-center gap-2 hover:bg-surface px-2 py-1 rounded-md transition-colors">
          <div className="w-6 h-6 bg-accent/20 rounded flex items-center justify-center text-accent text-xs font-semibold border border-accent/20">
            A
          </div>
          <span className="text-sm font-medium text-primary hidden sm:block">Admin User</span>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
