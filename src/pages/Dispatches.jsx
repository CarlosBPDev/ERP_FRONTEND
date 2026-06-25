import { Search, MapPin, Truck, Filter, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const Dispatches = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-7xl mx-auto space-y-6">
      <motion.div variants={itemVariants} className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-primary">Control de Despachos</h1>
          <p className="text-sm text-secondary mt-1">Métricas logísticas de última milla.</p>
        </div>
        <button className="btn btn-primary">
          <Truck size={16} /> Programar Despacho
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="glass-panel p-1">
        <div className="flex justify-between items-center p-4 border-b border-border/50">
          <div className="relative w-80">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
            <input type="text" className="input-field pl-9" placeholder="Buscar por ID, transportista..." />
          </div>
          <div className="flex gap-2">
            <button className="btn btn-secondary"><Filter size={16} /> Filtrar</button>
          </div>
        </div>

        <div className="table-wrapper border-0 rounded-none bg-transparent">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID Despacho</th>
                <th>Destino</th>
                <th>Fecha Estimada</th>
                <th>Transportista</th>
                <th>Progreso</th>
                <th>Estado</th>
                <th className="text-right">Seguimiento</th>
              </tr>
            </thead>
            <tbody>
              <motion.tr whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                <td className="font-semibold text-primary">DSP-4012</td>
                <td>Sucursal Norte</td>
                <td className="text-secondary">Hoy, 15:00 PM</td>
                <td>Logistics Express</td>
                <td className="w-48">
                  <div className="w-full h-1.5 bg-surfaceHover rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{width: '60%'}}></div>
                  </div>
                </td>
                <td><span className="badge badge-info">En Ruta</span></td>
                <td className="text-right">
                  <button className="btn-icon"><MapPin size={16}/></button>
                </td>
              </motion.tr>
              <motion.tr whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                <td className="font-semibold text-primary">DSP-4011</td>
                <td>Cliente Mayorista Alpha</td>
                <td className="text-secondary">Ayer, 18:00 PM</td>
                <td>TransNacional</td>
                <td className="w-48">
                  <div className="w-full h-1.5 bg-surfaceHover rounded-full overflow-hidden">
                    <div className="h-full bg-success rounded-full" style={{width: '100%'}}></div>
                  </div>
                </td>
                <td><span className="badge badge-success">Entregado</span></td>
                <td className="text-right">
                  <button className="btn-icon"><MapPin size={16}/></button>
                </td>
              </motion.tr>
              <motion.tr whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                <td className="font-semibold text-primary">DSP-4010</td>
                <td>Sucursal Sur</td>
                <td className="text-secondary">Mañana, 09:00 AM</td>
                <td>Logistics Express</td>
                <td className="w-48">
                  <div className="w-full h-1.5 bg-surfaceHover rounded-full overflow-hidden">
                    <div className="h-full bg-warning rounded-full" style={{width: '20%'}}></div>
                  </div>
                </td>
                <td><span className="badge badge-warning">Preparando</span></td>
                <td className="text-right">
                  <button className="btn-icon"><MapPin size={16}/></button>
                </td>
              </motion.tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dispatches;
