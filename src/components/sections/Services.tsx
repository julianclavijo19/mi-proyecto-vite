import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Eye, Cog, ArrowRight } from 'lucide-react';
import { cn } from '@/utils';

interface ServicesProps {
  className?: string;
}

const services = [
  {
    id: 'ml',
    title: 'Machine Learning',
    description: 'Desarrollamos modelos de ML personalizados para análisis predictivo, clasificación y regresión.',
    icon: Brain,
    features: ['Modelos predictivos', 'Análisis de datos', 'Algoritmos personalizados', 'Optimización continua'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'nlp',
    title: 'Procesamiento de Lenguaje',
    description: 'Soluciones de NLP para análisis de texto, chatbots inteligentes y procesamiento de documentos.',
    icon: Zap,
    features: ['Chatbots avanzados', 'Análisis de sentimientos', 'Traducción automática', 'Extracción de datos'],
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'cv',
    title: 'Visión por Computadora',
    description: 'Implementamos sistemas de visión artificial para reconocimiento de imágenes y análisis visual.',
    icon: Eye,
    features: ['Reconocimiento de imágenes', 'Detección de objetos', 'Análisis facial', 'Inspección automática'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'automation',
    title: 'Automatización Inteligente',
    description: 'Automatizamos procesos empresariales con IA para mejorar la eficiencia y reducir costos.',
    icon: Cog,
    features: ['RPA con IA', 'Workflows inteligentes', 'Automatización de documentos', 'Optimización de procesos'],
    color: 'from-orange-500 to-orange-600'
  }
];

export const Services: React.FC<ServicesProps> = ({ className }) => {
  return (
    <section id="services" className={cn('section-padding bg-gray-50', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones completas de IA adaptadas a las necesidades específicas de tu empresa
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="card h-full flex flex-col">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 group-hover:shadow-lg transition-all duration-300`}
                >
                  <span>Saber más</span>
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nuestro equipo de expertos puede desarrollar una solución de IA específica 
              para tu industria y necesidades particulares.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3"
            >
              Consulta Gratuita
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
