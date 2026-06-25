import { User, Shield, Building2, Bell, Key } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const Settings = () => {
  const handleSave = (e) => {
    e.preventDefault();
    toast.success('Configuración guardada', {
      description: 'Los cambios han sido aplicados correctamente al sistema.'
    });
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-4xl mx-auto space-y-6">
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-semibold tracking-tight text-primary">Configuración</h1>
        <p className="text-sm text-secondary mt-1">Administra tu perfil y las preferencias de la empresa.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div variants={itemVariants} className="md:col-span-1 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium bg-surface text-primary border border-border">
            <User size={16} /> Perfil
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-secondary hover:bg-surfaceHover hover:text-primary transition-colors">
            <Building2 size={16} /> Empresa
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-secondary hover:bg-surfaceHover hover:text-primary transition-colors">
            <Shield size={16} /> Seguridad y Roles
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-secondary hover:bg-surfaceHover hover:text-primary transition-colors">
            <Bell size={16} /> Notificaciones
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-3 glass-panel p-6">
          <h2 className="text-lg font-semibold mb-6">Información Personal</h2>
          <form onSubmit={handleSave} className="space-y-6">
            <div className="flex items-center gap-6 pb-6 border-b border-border/50">
              <div className="w-20 h-20 rounded-full bg-surface border border-border flex items-center justify-center text-3xl font-bold text-accent">
                A
              </div>
              <div>
                <button type="button" className="btn btn-secondary text-xs mb-2">Cambiar Avatar</button>
                <p className="text-xs text-secondary">JPG, GIF o PNG. Max size of 800K</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-primary">Nombre Completo</label>
                <input type="text" className="input-field" defaultValue="Admin User" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-primary">Rol</label>
                <input type="text" className="input-field bg-surfaceHover text-secondary cursor-not-allowed" defaultValue="Administrador Global" disabled />
              </div>
              <div className="space-y-1.5 col-span-2">
                <label className="text-sm font-medium text-primary">Correo Electrónico</label>
                <input type="email" className="input-field" defaultValue="admin@empresa.com" />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button type="submit" className="btn btn-primary">Guardar Cambios</button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Settings;
