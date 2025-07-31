import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertCircle } from 'lucide-react';
import { isBusinessOpen, getBusinessHours } from '../utils/businessHours';

interface BusinessHoursCheckProps {
  children: React.ReactNode;
}

const BusinessHoursCheck: React.FC<BusinessHoursCheckProps> = ({ children }) => {
  const isOpen = isBusinessOpen();

  if (!isOpen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-bg via-gray-900 to-dark-bg flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full"
        >
          <div className="glass-morphism rounded-3xl p-8 premium-shadow-lg border border-white/10 text-center">
            <div className="w-20 h-20 bg-italian-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-italian-red" />
            </div>
            
            <h2 className="text-3xl font-playfair font-bold text-white mb-4">
              Estamos Cerrados
            </h2>
            
            <div className="mb-6">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <AlertCircle className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Horario de Servicio</span>
              </div>
              <p className="text-xl text-white font-medium">
                {getBusinessHours()}
              </p>
            </div>
            
            <p className="text-white/70 leading-relaxed mb-6">
              Regresa durante nuestro horario de atención para realizar tu pedido. 
              ¡Te esperamos con las mejores pizzas artesanales!
            </p>
            
            <div className="glass-morphism rounded-2xl p-4 border border-italian-green/30 bg-italian-green/10">
              <p className="text-italian-green text-sm font-medium">
                🍟 Tip: Al pedir tu pizza acompáñala con nuestras papas a la francesa
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
};

export default BusinessHoursCheck;