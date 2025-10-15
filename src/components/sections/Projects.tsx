import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/utils';
import { ProjectModal } from '@/components/ui/ProjectModal';

interface ProjectsProps {
  className?: string;
}

const projects = [
  {
    id: '1',
    title: 'Sistema de Predicción de Ventas',
    description: 'Modelo de ML que predice las ventas futuras basándose en datos históricos y tendencias del mercado.',
    image: '/api/placeholder/400/300',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
    category: 'Machine Learning',
    link: '#',
    github: '#',
    date: 'Enero 2024',
    client: 'TechCorp',
    details: 'Desarrollamos un sistema completo de predicción de ventas que utiliza algoritmos de machine learning avanzados para analizar patrones históricos y factores externos del mercado. El sistema logró una precisión del 94% en las predicciones trimestrales.'
  },
  {
    id: '2',
    title: 'Chatbot Inteligente para E-commerce',
    description: 'Asistente virtual que ayuda a los clientes con consultas sobre productos y procesamiento de pedidos.',
    image: '/api/placeholder/400/300',
    technologies: ['NLP', 'OpenAI GPT', 'React', 'Node.js'],
    category: 'Procesamiento de Lenguaje',
    link: '#',
    github: '#',
    date: 'Febrero 2024',
    client: 'InnovateLab',
    details: 'Implementamos un chatbot conversacional que puede manejar consultas complejas sobre productos, procesar pedidos y resolver problemas de clientes. El bot redujo el tiempo de respuesta promedio de 2 horas a 2 minutos.'
  },
  {
    id: '3',
    title: 'Sistema de Reconocimiento Facial',
    description: 'Solución de visión por computadora para identificación y verificación de usuarios.',
    image: '/api/placeholder/400/300',
    technologies: ['OpenCV', 'PyTorch', 'Python', 'FastAPI'],
    category: 'Visión por Computadora',
    link: '#',
    github: '#',
    date: 'Marzo 2024',
    client: 'DataFlow',
    details: 'Desarrollamos un sistema de reconocimiento facial con una precisión del 99.2% para identificación de usuarios. El sistema incluye detección de spoofing y funciona en tiempo real con múltiples cámaras simultáneamente.'
  },
  {
    id: '4',
    title: 'Automatización de Procesos Financieros',
    description: 'Sistema RPA que automatiza la revisión y aprobación de documentos financieros.',
    image: '/api/placeholder/400/300',
    technologies: ['RPA', 'Python', 'OCR', 'PostgreSQL'],
    category: 'Automatización',
    link: '#',
    github: '#',
    date: 'Abril 2024',
    client: 'FutureTech',
    details: 'Creamos una solución completa de automatización que procesa documentos financieros, extrae datos relevantes y toma decisiones de aprobación basadas en reglas predefinidas. El sistema procesa 1000+ documentos diarios con 98% de precisión.'
  },
  {
    id: '5',
    title: 'Análisis de Sentimientos en Redes Sociales',
    description: 'Herramienta que analiza el sentimiento de menciones de marca en tiempo real.',
    image: '/api/placeholder/400/300',
    technologies: ['NLP', 'Twitter API', 'Python', 'MongoDB'],
    category: 'Procesamiento de Lenguaje',
    link: '#',
    github: '#',
    date: 'Mayo 2024',
    client: 'SmartBiz',
    details: 'Desarrollamos una plataforma de monitoreo de redes sociales que analiza el sentimiento de menciones de marca en tiempo real. La herramienta procesa más de 10,000 menciones por hora y proporciona insights accionables para el equipo de marketing.'
  },
  {
    id: '6',
    title: 'Sistema de Detección de Anomalías',
    description: 'Modelo de detección de fraudes en transacciones financieras usando aprendizaje no supervisado.',
    image: '/api/placeholder/400/300',
    technologies: ['Python', 'Isolation Forest', 'Pandas', 'Flask'],
    category: 'Machine Learning',
    link: '#',
    github: '#',
    date: 'Junio 2024',
    client: 'NextGen',
    details: 'Implementamos un sistema de detección de anomalías que identifica transacciones fraudulentas en tiempo real. El modelo utiliza técnicas de aprendizaje no supervisado y ha detectado más de 500 casos de fraude con una tasa de falsos positivos del 0.1%.'
  }
];

export const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <section id="projects" className={cn('section-padding bg-gray-50', className)}>
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
            Nuestros <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre algunos de los proyectos más innovadores que hemos desarrollado para nuestros clientes
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="card h-full flex flex-col overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-primary-300 opacity-50">
                      {project.category === 'Machine Learning' && '🧠'}
                      {project.category === 'Procesamiento de Lenguaje' && '💬'}
                      {project.category === 'Visión por Computadora' && '👁️'}
                      {project.category === 'Automatización' && '⚙️'}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full text-gray-700">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <motion.button
                      onClick={() => openModal(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                    >
                      <span>Ver Detalles</span>
                      <ExternalLink size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium flex items-center justify-center transition-colors"
                    >
                      <Github size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Estamos listos para convertir tu idea en una solución de IA innovadora y efectiva.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3"
            >
              Hablar sobre tu Proyecto
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};
