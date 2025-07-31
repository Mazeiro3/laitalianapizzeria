import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Phone } from 'lucide-react';

const HoursButton: React.FC = () => {
  const [showHours, setShowHours] = useState(false);

  const getCurrentStatus = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = now.getHours();
    
    // Wednesday (3) to Sunday (0), 2 PM to 10 PM
    const isOpenDay = day === 0 || (day >= 3 && day <= 6);
    const isOpenHour = hour >= 14 && hour < 22;
    
    return isOpenDay && isOpenHour;
  };

  const isOpen = getCurrentStatus();

  const scheduleData = [
    { day: 'Lunes', hours: 'Cerrado', closed: true },
    { day: 'Martes', hours: 'Cerrado', closed: true },
    { day: 'Miércoles', hours: '2:00 PM - 10:00 PM', closed: false },
    { day: 'Jueves', hours: '2:00 PM - 10:00 PM', closed: false },
    { day: 'Viernes', hours: '2:00 PM - 10:00 PM', closed: false },
    { day: 'Sábado', hours: '2:00 PM - 10:00 PM', closed: false },
    { day: 'Domingo', hours: '2:00 PM - 10:00 PM', closed: false }
  ];

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowHours(!showHours)}
        className="btn-premium text-white p-3 rounded-2xl premium-shadow-lg flex items-center space-x-2 relative"
      >
        <Clock className="w-5 h-5" />
        
        {/* Status indicator */}
        <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-black ${
          isOpen ? 'bg-green-400' : 'bg-red-400'
        }`} />
      </motion.button>

      <AnimatePresence>
        {showHours && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute top-full right-0 mt-2 w-80 glass-morphism rounded-2xl p-6 premium-shadow-lg border border-white/20 z-50"
            className="absolute top-full right-0 mt-2 w-80 bg-dark-bg/95 backdrop-blur-xl rounded-2xl p-6 premium-shadow-lg border border-white/30 z-50"
          >
            {/* Header */}
            <div className="mb-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-italian-red to-red-800 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-white font-playfair font-bold text-lg">
                  Horarios de Servicio
                </h3>
              </div>
              
              <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
                isOpen 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400' : 'bg-red-400'}`} />
                <span>{isOpen ? 'Abierto ahora' : 'Cerrado'}</span>
              </div>
            </div>

            {/* Schedule */}
            <div className="space-y-2 mb-4">
              {scheduleData.map((item, index) => (
                <div 
                  key={item.day}
                  className={`flex justify-between items-center p-2 rounded-lg transition-colors ${
                    item.closed 
                      ? 'bg-red-500/10 border border-red-500/20' 
                      : 'bg-green-500/10 border border-green-500/20'
                  }`}
                >
                  <span className="text-white font-medium">{item.day}</span>
                  <span className={`text-sm font-medium ${
                    item.closed ? 'text-red-400' : 'text-green-400'
                  }`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="border-t border-white/20 pt-4 space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="w-4 h-4 text-italian-red" />
                <div>
                  <p className="text-sm font-medium">Abasolo 515</p>
                  <p className="text-xs text-white/60">Col. Compositores</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="w-4 h-4 text-italian-green" />
                <div>
                  <p className="text-sm font-medium">341 139 4483</p>
                  <p className="text-xs text-white/60">Pedidos y consultas</p>
                </div>
              </div>
            </div>

            {/* Tip */}
            <div className="mt-4 p-3 bg-italian-red/10 border border-italian-red/30 rounded-xl">
              <p className="text-italian-red text-xs font-medium text-center">
                🍕 ¡Ordena con anticipación para garantizar tu pizza favorita!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HoursButton;