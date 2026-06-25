import { Search, Bell, Hexagon } from 'lucide-react';

const Topbar = () => {
  return (
    <header className="h-14 border-b border-border bg-background/80 backdrop-blur-md flex items-center justify-between px-4 md:px-6 sticky top-0 z-40 shrink-0">
      {/* Logo visible solo en móvil */}
      <div className="flex items-center gap-2 md:hidden text-primary font-semibold">
        <Hexagon size={18} className="text-accent" />
        <span className="text-sm">LogisERP</span>
      </div>

      {/* Buscador solo en desktop */}
      <div className="hidden md:flex items-center flex-1">
        <div className="relative w-80">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
          <input
            type="text"
            placeholder="Buscar órdenes, productos..."
            className="w-full bg-surface/50 border border-border text-primary text-sm rounded-md pl-9 pr-3 py-1.5 outline-none focus:border-secondary transition-colors"
          />
        </div>
      </div>

      {/* Acciones derecha */}
      <div className="flex items-center gap-3">
        <button className="relative p-1.5 text-secondary hover:text-primary transition-colors">
          <Bell size={18} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full border border-background"></span>
        </button>
        <div className="h-6 w-px bg-border"></div>
        <button className="flex items-center gap-2 hover:bg-surface px-2 py-1 rounded-md transition-colors">
          <div className="w-6 h-6 bg-accent/20 rounded flex items-center justify-center text-accent text-xs font-semibold border border-accent/20">
            A
          </div>
          <span className="text-sm font-medium text-primary hidden sm:block">Admin</span>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
