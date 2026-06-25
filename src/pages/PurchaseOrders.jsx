import { useState } from 'react';
import { Plus, Search, Filter, MoreHorizontal, CheckCircle2, Clock, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import Modal from '../components/Modal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const PurchaseOrders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrders, setSelectedOrders] = useState([]);

  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedOrders(['ORD-995', 'ORD-994', 'ORD-993']);
    } else {
      setSelectedOrders([]);
    }
  };

  const handleApproveSelected = () => {
    if (selectedOrders.length === 0) return;
    toast.success(`${selectedOrders.length} órdenes aprobadas en lote`, {
      description: 'Las órdenes han pasado a estado de procesamiento.'
    });
    setSelectedOrders([]);
  };

  const handleCreateOrder = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    toast.success('Orden de Compra generada', {
      description: 'El proveedor ha sido notificado.'
    });
  };

  return (
    <>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-7xl mx-auto space-y-6">
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary">Órdenes de Compra</h1>
            <p className="text-sm text-secondary mt-1">Registro, aprobación y seguimiento financiero.</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {selectedOrders.length > 0 && (
              <button 
                onClick={handleApproveSelected}
                className="btn btn-secondary text-success border-success/20 hover:bg-success/10 text-xs sm:text-sm"
              >
                <CheckCircle2 size={14} /> Aprobar {selectedOrders.length}
              </button>
            )}
            <button className="btn btn-primary text-xs sm:text-sm" onClick={() => setIsModalOpen(true)}>
              <Plus size={14} /> Nueva Orden
            </button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel p-1">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-4 border-b border-border/50">
            <div className="relative w-full sm:w-80">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
              <input type="text" className="input-field pl-9" placeholder="Buscar por proveedor, N° orden..." />
            </div>
            <div className="flex gap-2">
              <button className="btn btn-secondary"><Filter size={16} /> Filtrar</button>
            </div>
          </div>

          <div className="table-wrapper border-0 rounded-none bg-transparent">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="w-12 text-center">
                    <input 
                      type="checkbox" 
                      className="rounded border-border bg-surface" 
                      onChange={toggleSelectAll}
                      checked={selectedOrders.length === 3}
                    />
                  </th>
                  <th>N° Orden</th>
                  <th>Proveedor</th>
                  <th>Fecha Emisión</th>
                  <th>Monto Total</th>
                  <th>Estado</th>
                  <th className="text-right">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <motion.tr whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                  <td className="text-center">
                    <input 
                      type="checkbox" 
                      className="rounded border-border bg-surface" 
                      checked={selectedOrders.includes('ORD-995')}
                      onChange={(e) => {
                        if(e.target.checked) setSelectedOrders([...selectedOrders, 'ORD-995']);
                        else setSelectedOrders(selectedOrders.filter(id => id !== 'ORD-995'));
                      }}
                    />
                  </td>
                  <td className="font-semibold text-primary">ORD-995</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-surface border border-border rounded flex items-center justify-center text-xs font-bold">D</div>
                      <span className="text-primary font-medium">Dell Technologies</span>
                    </div>
                  </td>
                  <td className="text-secondary">18/06/2026</td>
                  <td className="font-semibold text-primary">$12,500.00</td>
                  <td><span className="badge badge-warning"><Clock size={12} className="mr-1"/> Pendiente</span></td>
                  <td className="text-right">
                    <button className="btn-icon"><MoreHorizontal size={16}/></button>
                  </td>
                </motion.tr>
                <motion.tr whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                  <td className="text-center">
                    <input 
                      type="checkbox" 
                      className="rounded border-border bg-surface" 
                      checked={selectedOrders.includes('ORD-994')}
                      onChange={(e) => {
                        if(e.target.checked) setSelectedOrders([...selectedOrders, 'ORD-994']);
                        else setSelectedOrders(selectedOrders.filter(id => id !== 'ORD-994'));
                      }}
                    />
                  </td>
                  <td className="font-semibold text-primary">ORD-994</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-surface border border-border rounded flex items-center justify-center text-xs font-bold">L</div>
                      <span className="text-primary font-medium">Logitech Inc.</span>
                    </div>
                  </td>
                  <td className="text-secondary">15/06/2026</td>
                  <td className="font-semibold text-primary">$3,200.00</td>
                  <td><span className="badge badge-success"><CheckCircle2 size={12} className="mr-1"/> Aprobada</span></td>
                  <td className="text-right">
                    <button className="btn-icon"><MoreHorizontal size={16}/></button>
                  </td>
                </motion.tr>
                <motion.tr whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                  <td className="text-center">
                    <input 
                      type="checkbox" 
                      className="rounded border-border bg-surface" 
                      checked={selectedOrders.includes('ORD-993')}
                      onChange={(e) => {
                        if(e.target.checked) setSelectedOrders([...selectedOrders, 'ORD-993']);
                        else setSelectedOrders(selectedOrders.filter(id => id !== 'ORD-993'));
                      }}
                    />
                  </td>
                  <td className="font-semibold text-primary">ORD-993</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-surface border border-border rounded flex items-center justify-center text-xs font-bold">S</div>
                      <span className="text-primary font-medium">Samsung Electronics</span>
                    </div>
                  </td>
                  <td className="text-secondary">10/06/2026</td>
                  <td className="font-semibold text-primary">$8,900.00</td>
                  <td><span className="badge badge-danger"><XCircle size={12} className="mr-1"/> Rechazada</span></td>
                  <td className="text-right">
                    <button className="btn-icon"><MoreHorizontal size={16}/></button>
                  </td>
                </motion.tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Crear Orden de Compra">
        <form onSubmit={handleCreateOrder} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-primary">Proveedor</label>
            <select className="input-field bg-surface text-primary" required>
              <option value="" className="bg-surface">Selecciona un proveedor</option>
              <option value="dell" className="bg-surface">Dell Technologies</option>
              <option value="logitech" className="bg-surface">Logitech Inc.</option>
              <option value="samsung" className="bg-surface">Samsung Electronics</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-primary">Detalle de Productos</label>
            <textarea className="input-field min-h-[100px] resize-none" placeholder="Ej. 10x Monitores LG 27''..." required></textarea>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-primary">Monto Total Estimado ($)</label>
            <input type="number" className="input-field" placeholder="0.00" min="0" step="0.01" required />
          </div>
          <div className="pt-4 flex justify-end gap-2 border-t border-border mt-6">
            <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">Cancelar</button>
            <button type="submit" className="btn btn-primary">Emitir Orden</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default PurchaseOrders;
