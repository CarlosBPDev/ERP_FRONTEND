import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Hexagon } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm glass-panel p-8 relative z-10"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-surface border border-border rounded-xl flex items-center justify-center mb-4">
            <Hexagon size={24} className="text-primary" />
          </div>
          <h1 className="text-2xl font-semibold mb-2">LogisERP</h1>
          <p className="text-secondary text-sm text-center">Ingresa a tu cuenta corporativa para continuar</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">Correo Electrónico</label>
            <input 
              type="email" 
              className="input-field" 
              placeholder="admin@empresa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-secondary">Contraseña</label>
              <span className="text-xs text-accent cursor-pointer hover:underline">¿Olvidaste tu contraseña?</span>
            </div>
            <input 
              type="password" 
              className="input-field" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full mt-6">
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-secondary/60">
          <p>Para probar: admin@empresa.com / admin</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
