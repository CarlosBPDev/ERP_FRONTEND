import { useState } from 'react';
import { Plus, Search, Filter, MoreHorizontal } from 'lucide-react';
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

const Inventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddProduct = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    toast.success('Producto creado correctamente', {
      description: 'El nuevo producto ha sido añadido al catálogo.'
    });
  };

  return (
    <>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-7xl mx-auto space-y-6">
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary">Inventario</h1>
            <p className="text-sm text-secondary mt-1">Gestiona el stock y catálogo de productos.</p>
          </div>
          <button className="btn btn-primary self-start sm:self-auto" onClick={() => setIsModalOpen(true)}>
            <Plus size={16} /> Añadir Producto
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel p-1">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-4 border-b border-border/50">
            <div className="relative w-full sm:w-80">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
              <input type="text" className="input-field pl-9" placeholder="Buscar por SKU, nombre..." />
            </div>
            <div className="flex gap-2">
              <button className="btn btn-secondary"><Filter size={16} /> Filtrar</button>
              <button className="btn btn-secondary">Exportar</button>
            </div>
          </div>

          <div className="table-wrapper border-0 rounded-none bg-transparent">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="w-12 text-center"><input type="checkbox" className="rounded border-border bg-surface" /></th>
                  <th>Producto</th>
                  <th>SKU</th>
                  <th>Categoría</th>
                  <th>Stock</th>
                  <th>Estado</th>
                  <th className="text-right">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <motion.tr whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                  <td className="text-center"><input type="checkbox" className="rounded border-border bg-surface" /></td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-surface border border-border/50 rounded-lg flex items-center justify-center">
                        <span className="text-xs font-semibold">L</span>
                      </div>
                      <span className="font-medium text-primary">Laptop Dell XPS 13</span>
                    </div>
                  </td>
                  <td className="text-secondary font-mono text-xs">SKU-1001</td>
                  <td>Electrónica</td>
                  <td className="font-semibold text-primary">45 und.</td>
                  <td><span className="badge badge-success">Óptimo</span></td>
                  <td className="text-right">
                    <button className="btn-icon"><MoreHorizontal size={16}/></button>
                  </td>
                </motion.tr>
                <motion.tr whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                  <td className="text-center"><input type="checkbox" className="rounded border-border bg-surface" /></td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-surface border border-border/50 rounded-lg flex items-center justify-center">
                        <span className="text-xs font-semibold">M</span>
                      </div>
                      <span className="font-medium text-primary">Monitor LG 27" 4K</span>
                    </div>
                  </td>
                  <td className="text-secondary font-mono text-xs">SKU-1002</td>
                  <td>Electrónica</td>
                  <td className="font-semibold text-primary">8 und.</td>
                  <td><span className="badge badge-warning">Bajo Stock</span></td>
                  <td className="text-right">
                    <button className="btn-icon"><MoreHorizontal size={16}/></button>
                  </td>
                </motion.tr>
              </tbody>
            </table>
          </div>
          
          <div className="flex justify-between items-center p-4 text-sm text-secondary border-t border-border/50">
            <span>Mostrando 2 de 1,248 productos</span>
            <div className="flex gap-2">
              <button className="btn btn-secondary text-xs py-1">Anterior</button>
              <button className="btn btn-secondary text-xs py-1">Siguiente</button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Crear Nuevo Producto">
        <form onSubmit={handleAddProduct} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-primary">Nombre del Producto</label>
              <input type="text" className="input-field" placeholder="Ej. Monitor LG 27''" required />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-primary">SKU</label>
              <input type="text" className="input-field" placeholder="SKU-XXXX" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-primary">Categoría</label>
              <select className="input-field bg-surface text-primary" required>
                <option value="" className="bg-surface">Selecciona una categoría</option>
                <option value="electronica" className="bg-surface">Electrónica</option>
                <option value="muebles" className="bg-surface">Muebles</option>
                <option value="oficina" className="bg-surface">Suministros de Oficina</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-primary">Stock Inicial</label>
              <input type="number" className="input-field" placeholder="0" min="0" required />
            </div>
          </div>
          <div className="pt-4 flex justify-end gap-2 border-t border-border mt-6">
            <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">Cancelar</button>
            <button type="submit" className="btn btn-primary">Guardar Producto</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Inventory;
