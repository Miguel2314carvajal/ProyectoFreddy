import { Fragment, useState } from 'react';
import { Dialog, Combobox, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/outline';

// Definimos todas las rutas y contenido buscable
const searchableContent = [
  // Sección de Precios - Planes principales
  {
    id: 'pricing-1',
    name: 'Punto de partida y mapa de brechas',
    description: 'Evaluación inicial y diagnóstico',
    url: '/pricing#punto-partida',
    category: 'Precios'
  },
  {
    id: 'pricing-2',
    name: 'Modelo Skillman PDP',
    description: 'Solución completa de desarrollo',
    url: '/pricing#modelo-skillman',
    category: 'Precios'
  },
  {
    id: 'pricing-3',
    name: 'Servicio DPD externo',
    description: '120 minutos por evento',
    url: '/pricing#servicio-dpd',
    category: 'Precios'
  },

  // Secciones del contenido principal
  {
    id: 'content-1',
    name: 'Objeto y Alcance del Esquema SKILLMAN-PDP',
    description: 'Descripción detallada del alcance del proyecto',
    url: '/#objeto-alcance',
    category: 'Contenido Principal'
  },
  {
    id: 'content-2',
    name: 'Metodología',
    description: 'Proceso y metodología de implementación',
    url: '/#metodologia',
    category: 'Contenido Principal'
  },
  {
    id: 'content-3',
    name: 'Documentación y Servicios',
    description: 'Documentación y servicios incluidos',
    url: '/home#documentacion',
    category: 'Contenido Principal'
  },
  {
    id: 'content-4',
    name: 'Propuesta Económica',
    description: 'Detalles de precios y planes',
    url: '/home#propuesta-economica',
    category: 'Contenido Principal'
  },

  // Subsecciones específicas
  {
    id: 'sub-1',
    name: 'Mapa de brechas',
    description: 'Análisis detallado de brechas',
    url: '/home#mapa-brechas',
    category: 'Características'
  },
  {
    id: 'sub-2',
    name: 'Eventos DPD',
    description: 'Información sobre eventos DPD',
    url: '/home#eventos-dpd',
    category: 'Características'
  },
  {
    id: 'sub-3',
    name: 'Fases del proyecto',
    description: 'Desglose de las fases I, II y III',
    url: '/home#fases-proyecto',
    category: 'Características'
  },

  // Sección Learn
  {
    id: 'learn-1',
    name: 'Quick Start',
    description: 'Aprende los fundamentos',
    url: '/learn#quick-start',
    category: 'Aprendizaje'
  },
  {
    id: 'learn-2',
    name: 'Adding Styles',
    description: 'Aprende a estilizar componentes',
    url: '/learn#adding-styles',
    category: 'Aprendizaje'
  },
  {
    id: 'learn-3',
    name: 'Installation',
    description: 'Configura tu primer proyecto',
    url: '/learn#installation',
    category: 'Aprendizaje'
  },
  // Sección Community
  {
    id: 'community-1',
    name: 'Community',
    description: 'Únete a la comunidad',
    url: '/community',
    category: 'Comunidad'
  },
  // Sección Blog
  {
    id: 'blog-1',
    name: 'Blog',
    description: 'Últimas noticias y actualizaciones',
    url: '/blog',
    category: 'Blog'
  }
];

export default function SearchModal({ isOpen, setIsOpen }) {
  const [query, setQuery] = useState('');

  const filteredResults = query === ''
    ? []
    : searchableContent.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  const groupedResults = filteredResults.reduce((groups, result) => {
    const category = result.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(result);
    return groups;
  }, {});

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog 
        as="div" 
        className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20" 
        onClose={setIsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            as="div"
            className="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white dark:bg-[#23272F] shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
            onChange={(item) => {
              setIsOpen(false);
              const [path, hash] = item.url.split('#');
              if (hash) {
                window.location.href = item.url;
                setTimeout(() => {
                  const element = document.getElementById(hash);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              } else {
                window.location.href = item.url;
              }
            }}
          >
            <div className="relative">
              <SearchIcon
                className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <Combobox.Input
                className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                placeholder="Buscar..."
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>

            {Object.keys(groupedResults).length > 0 && (
              <Combobox.Options static className="max-h-96 scroll-py-3 overflow-y-auto p-3">
                {Object.entries(groupedResults).map(([category, results]) => (
                  <div key={category}>
                    <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 mt-4">
                      {category}
                    </h3>
                    {results.map((result) => (
                      <Combobox.Option
                        key={result.id}
                        value={result}
                        className={({ active }) =>
                          `cursor-default select-none rounded-xl p-3 ${
                            active ? 'bg-gray-100 dark:bg-[#343A46]' : ''
                          }`
                        }
                      >
                        {({ active }) => (
                          <>
                            <div className="flex items-center">
                              <span className="ml-3 flex-auto truncate">
                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                  {result.name}
                                </span>
                              </span>
                            </div>
                            <p className="ml-3 mt-1 text-sm text-gray-500 dark:text-gray-400">
                              {result.description}
                            </p>
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </div>
                ))}
              </Combobox.Options>
            )}

            {query !== '' && Object.keys(groupedResults).length === 0 && (
              <div className="p-6 text-center text-sm text-gray-500 dark:text-gray-400">
                No se encontraron resultados para "{query}"
              </div>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}