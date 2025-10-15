import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/utils';

interface TestimonialsProps {
  className?: string;
}

const testimonials = [
  {
    id: '1',
    name: 'María González',
    company: 'TechCorp',
    position: 'CTO',
    content: 'AIAgency transformó completamente nuestra operación. Su sistema de predicción de demanda nos ayudó a reducir costos en un 30% y mejorar la satisfacción del cliente.',
    avatar: '/api/placeholder/64/64',
    rating: 5
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    company: 'InnovateLab',
    position: 'CEO',
    content: 'El chatbot que desarrollaron para nosotros ha revolucionado nuestro servicio al cliente. Los tiempos de respuesta se redujeron de horas a minutos.',
    avatar: '/api/placeholder/64/64',
    rating: 5
  },
  {
    id: '3',
    name: 'Ana Martínez',
    company: 'DataFlow',
    position: 'Directora de Datos',
    content: 'Su expertise en machine learning nos permitió automatizar procesos que antes tomaban días. La precisión de sus modelos es impresionante.',
    avatar: '/api/placeholder/64/64',
    rating: 5
  },
  {
    id: '4',
    name: 'David López',
    company: 'FutureTech',
    position: 'Fundador',
    content: 'Trabajar con AIAgency fue una experiencia excepcional. Entendieron nuestras necesidades desde el primer día y entregaron una solución que superó nuestras expectativas.',
    avatar: '/api/placeholder/64/64',
    rating: 5
  },
  {
    id: '5',
    name: 'Laura Sánchez',
    company: 'SmartBiz',
    position: 'Directora de Operaciones',
    content: 'La implementación de su sistema de visión por computadora mejoró significativamente nuestra calidad de producción. Altamente recomendados.',
    avatar: '/api/placeholder/64/64',
    rating: 5
  },
  {
    id: '6',
    name: 'Roberto Jiménez',
    company: 'NextGen',
    position: 'VP de Tecnología',
    content: 'Su enfoque metodológico y atención al detalle nos ayudó a implementar IA de manera efectiva. El ROI fue evidente desde el primer mes.',
    avatar: '/api/placeholder/64/64',
    rating: 5
  }
];

export const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  return (
    <section id="testimonials" className={cn('section-padding', className)}>
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
            Lo que dicen nuestros <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="card h-full relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <Quote size={16} className="text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-primary-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Satisfacción del Cliente</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">Soporte Disponible</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
