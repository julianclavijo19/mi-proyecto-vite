import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, User, Tag } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
    link?: string;
    github?: string;
    date?: string;
    client?: string;
    details?: string;
  } | null;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {project.category === 'Machine Learning' && '🧠'}
                    {project.category === 'Procesamiento de Lenguaje' && '💬'}
                    {project.category === 'Visión por Computadora' && '👁️'}
                    {project.category === 'Automatización' && '⚙️'}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">{project.category}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Project Image */}
                <div className="space-y-4">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl flex items-center justify-center">
                    <div className="text-6xl opacity-50">
                      {project.category === 'Machine Learning' && '🧠'}
                      {project.category === 'Procesamiento de Lenguaje' && '💬'}
                      {project.category === 'Visión por Computadora' && '👁️'}
                      {project.category === 'Automatización' && '⚙️'}
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="space-y-3">
                    {project.date && (
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <Calendar size={16} />
                        <span className="text-sm">{project.date}</span>
                      </div>
                    )}
                    {project.client && (
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <User size={16} />
                        <span className="text-sm">{project.client}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Descripción del Proyecto
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                    {project.details && (
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                        {project.details}
                      </p>
                    )}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Tag size={18} className="mr-2" />
                      Tecnologías Utilizadas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm px-3 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-4">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span>Ver Proyecto</span>
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                      >
                        <Github size={18} />
                        <span>Código</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};



