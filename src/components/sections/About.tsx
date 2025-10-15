import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Award } from 'lucide-react';
import { cn } from '@/utils';

interface AboutProps {
  className?: string;
}

const stats = [
  { icon: Users, value: '50+', label: 'Clientes Satisfechos' },
  { icon: Target, value: '100+', label: 'Proyectos Exitosos' },
  { icon: Lightbulb, value: '5+', label: 'Años de Experiencia' },
  { icon: Award, value: '15+', label: 'Premios Tecnológicos' },
];

const values = [
  {
    title: 'Innovación',
    description: 'Siempre buscamos las tecnologías más avanzadas para ofrecer soluciones de vanguardia.',
    icon: Lightbulb,
  },
  {
    title: 'Calidad',
    description: 'Nos comprometemos a entregar productos de la más alta calidad y rendimiento.',
    icon: Award,
  },
  {
    title: 'Colaboración',
    description: 'Trabajamos estrechamente con nuestros clientes para entender sus necesidades.',
    icon: Users,
  },
  {
    title: 'Resultados',
    description: 'Nos enfocamos en generar impacto real y medible en el negocio de nuestros clientes.',
    icon: Target,
  },
];

export const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section id="about" className={cn('section-padding', className)}>
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
            Sobre <span className="gradient-text">Nosotros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Somos un equipo de expertos en IA apasionados por transformar ideas en soluciones reales
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Transformando el futuro con Inteligencia Artificial
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                En AIAgency, creemos que la inteligencia artificial tiene el poder de revolucionar 
                la forma en que las empresas operan y crecen. Nuestro equipo de expertos combina 
                años de experiencia en machine learning, procesamiento de lenguaje natural y 
                visión por computadora.
              </p>
              <p>
                Trabajamos con empresas de todos los tamaños, desde startups innovadoras hasta 
                corporaciones establecidas, ayudándolas a implementar soluciones de IA que 
                generan valor real y medible.
              </p>
              <p>
                Nuestra misión es democratizar el acceso a la IA de alta calidad, haciendo que 
                estas tecnologías avanzadas sean accesibles y útiles para cualquier organización.
              </p>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users size={64} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Equipo Multidisciplinario
                </h4>
                <p className="text-gray-600">
                  Científicos de datos, ingenieros de ML y especialistas en IA trabajando juntos
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Nuestros <span className="gradient-text">Valores</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
