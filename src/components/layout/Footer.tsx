import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { cn } from '@/utils';

interface FooterProps {
  className?: string;
}

const footerLinks = {
  services: [
    { label: 'Machine Learning', href: '#services' },
    { label: 'Procesamiento de Lenguaje', href: '#services' },
    { label: 'Visión por Computadora', href: '#services' },
    { label: 'Automatización', href: '#services' },
  ],
  company: [
    { label: 'Sobre Nosotros', href: '#about' },
    { label: 'Equipo', href: '#about' },
    { label: 'Carreras', href: '#careers' },
    { label: 'Blog', href: '#blog' },
  ],
  resources: [
    { label: 'Documentación', href: '#docs' },
    { label: 'Casos de Estudio', href: '#case-studies' },
    { label: 'Whitepapers', href: '#whitepapers' },
    { label: 'Soporte', href: '#support' },
  ],
};

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('bg-gray-900 dark:bg-black text-white', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold gradient-text mb-4">
                  AIAgency
                </div>
                <p className="text-gray-300 mb-6 max-w-md">
                  Transformamos ideas en soluciones de inteligencia artificial 
                  que impulsan el crecimiento de tu empresa.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail size={16} className="text-primary-400" />
                    <span className="text-gray-300">contacto@aiagency.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={16} className="text-primary-400" />
                    <span className="text-gray-300">+34 900 123 456</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={16} className="text-primary-400" />
                    <span className="text-gray-300">Madrid, España</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4">Servicios</h3>
                <ul className="space-y-2">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Company */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4">Empresa</h3>
                <ul className="space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Resources */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4">Recursos</h3>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} AIAgency. Todos los derechos reservados.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
