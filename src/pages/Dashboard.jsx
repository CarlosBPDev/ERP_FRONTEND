import { TrendingUp, Package, ShoppingCart, Truck } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Lun', ingresos: 4000, despachos: 2400 },
  { name: 'Mar', ingresos: 3000, despachos: 1398 },
  { name: 'Mie', ingresos: 2000, despachos: 9800 },
  { name: 'Jue', ingresos: 2780, despachos: 3908 },
  { name: 'Vie', ingresos: 1890, despachos: 4800 },
  { name: 'Sab', ingresos: 2390, despachos: 3800 },
  { name: 'Dom', ingresos: 3490, despachos: 4300 },
];

const stockData = [
  { name: 'Electrónica', stock: 450 },
  { name: 'Muebles', stock: 320 },
  { name: 'Oficina', stock: 210 },
  { name: 'Limpieza', stock: 150 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const Dashboard = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-7xl mx-auto space-y-6">
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-semibold tracking-tight">Panel de Control</h1>
        <p className="text-sm text-secondary mt-1">Resumen operativo y métricas clave.</p>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Ingresos Totales', value: '$45,231.89', change: '+20.1%', icon: TrendingUp, color: 'text-success' },
          { title: 'Stock Crítico', value: '12 Items', change: '-4', icon: Package, color: 'text-warning' },
          { title: 'Órdenes Pendientes', value: '34', change: '+12%', icon: ShoppingCart, color: 'text-accent' },
          { title: 'Despachos Hoy', value: '128', change: '+5%', icon: Truck, color: 'text-primary' },
        ].map((kpi, i) => (
          <div key={i} className="glass-panel p-5 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
              <p className="text-sm font-medium text-secondary">{kpi.title}</p>
              <kpi.icon size={16} className={kpi.color} />
            </div>
            <h3 className="text-2xl font-bold">{kpi.value}</h3>
            <p className="text-xs text-secondary mt-1">
              <span className={kpi.change.startsWith('+') ? 'text-success' : 'text-danger'}>{kpi.change}</span> respecto al mes anterior
            </p>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="glass-panel p-6 lg:col-span-2">
          <h3 className="text-base font-semibold mb-6">Flujo Operativo (Ingresos vs Despachos)</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorDespachos" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#262626" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#a1a1aa', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#a1a1aa', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111111', border: '1px solid #262626', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="ingresos" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorIngresos)" />
                <Area type="monotone" dataKey="despachos" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorDespachos)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel p-6">
          <h3 className="text-base font-semibold mb-6">Distribución de Stock</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stockData} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#262626" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#a1a1aa', fontSize: 12}} width={80} />
                <Tooltip 
                  cursor={{fill: '#1a1a1a'}}
                  contentStyle={{ backgroundColor: '#111111', border: '1px solid #262626', borderRadius: '8px' }}
                />
                <Bar dataKey="stock" fill="#ffffff" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
