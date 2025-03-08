import React, { useState } from 'react';

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  // Precios originales y con incremento del 20%
  const prices = {
    startup: {
      monthly: 1800, // Precio con 20% de incremento
      annual: 1500   // Precio original
    },
    professional: {
      monthly: 10440, // Precio con 20% de incremento
      annual: 8700    // Precio original
    },
    enterprise: {
      monthly: 360,  // Precio con 20% de incremento
      annual: 300    // Precio original
    }
  };

  return (
    <div className="bg-white dark:bg-[#18191B] min-h-screen">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-center">
            Propuesta Económica
          </h1>
          <p className="mt-5 text-xl text-gray-500 dark:text-gray-400 sm:text-center">
            Elija el plan que mejor se adapte a sus necesidades
          </p>
        </div>

        {/* Toggle Mensual/Anual */}
        <div className="mt-12 flex justify-center">
          <div className="relative self-center rounded-lg bg-gray-100 dark:bg-[#23272F] p-0.5">
            <button
              onClick={() => setIsAnnual(false)}
              className={`relative w-1/2 rounded-md py-2 text-sm font-semibold whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8 ${
                !isAnnual 
                  ? 'bg-white dark:bg-[#343A46] text-gray-900 dark:text-white shadow'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              MENSUAL
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative w-1/2 rounded-md py-2 text-sm font-semibold whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8 ${
                isAnnual 
                  ? 'bg-white dark:bg-[#343A46] text-gray-900 dark:text-white shadow'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              ANUAL (AHORRO 20%)
            </button>
          </div>
        </div>

        {/* Tarjetas de Precios */}
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0">
          {/* Punto de partida */}
          <div id="punto-partida" className="divide-y divide-gray-200 dark:divide-gray-700 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#23272F] shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-pink-500/50 dark:hover:border-pink-500/50 cursor-pointer">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Punto de partida y mapa de brechas</h2>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Evaluación inicial y diagnóstico</p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">US$ {isAnnual ? prices.startup.annual.toLocaleString() : prices.startup.monthly.toLocaleString()},00</span>
              </p>
              <button className="mt-8 block w-full rounded-md bg-slate-50 dark:bg-[#343A46] px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#404756] transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]">
                EMPEZAR
              </button>
            </div>
            <div className="px-6 pt-6 pb-8">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Incluye:</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Mapa de brechas</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-500 dark:text-gray-400">4 eventos DPD fase I</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2 eventos DPD fase II</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2 eventos DPD fase III</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Modelo Skillman PDP */}
          <div id="modelo-skillman" className="divide-y divide-gray-200 dark:divide-gray-700 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#23272F] shadow-xl relative transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-pink-500/50 dark:hover:border-pink-500/50 cursor-pointer">
            <div className="absolute -top-5 left-0 right-0 flex justify-center">
              <span className="inline-flex rounded-full bg-gradient-to-r from-pink-600 to-yellow-500 px-4 py-1 text-sm font-semibold text-white">
                Más Popular
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Modelo Skillman PDP</h2>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Solución completa de desarrollo</p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">US$ {isAnnual ? prices.professional.annual.toLocaleString() : prices.professional.monthly.toLocaleString()},00</span>
              </p>
              <button className="mt-8 block w-full rounded-md bg-gradient-to-r from-pink-600 to-yellow-500 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]">
                EMPEZAR
              </button>
            </div>
            <div className="px-6 pt-6 pb-8">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Incluye:</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Mapa de brechas</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-500 dark:text-gray-400">4 eventos DPD fase I</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2 eventos DPD fase II</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2 eventos DPD fase III</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Servicio DPD externo */}
          <div id="servicio-dpd" className="divide-y divide-gray-200 dark:divide-gray-700 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#23272F] shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-pink-500/50 dark:hover:border-pink-500/50 cursor-pointer">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Servicio DPD externo</h2>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">120 minutos por evento</p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">US$ {isAnnual ? prices.enterprise.annual.toLocaleString() : prices.enterprise.monthly.toLocaleString()},00</span>
                <span className="text-base font-medium text-gray-500 dark:text-gray-400">/evento</span>
              </p>
              <button className="mt-8 block w-full rounded-md bg-slate-50 dark:bg-[#343A46] px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#404756] transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]">
                EMPEZAR
              </button>
            </div>
            <div className="px-6 pt-6 pb-8">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Incluye:</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Mapa de brechas</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-500 dark:text-gray-400">4 eventos DPD fase I</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2 eventos DPD fase II</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2 eventos DPD fase III</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nota adicional sobre el modelo Skillman-PDP */}
        <div className="mt-10 text-center">
          <p className="text-base text-gray-500 dark:text-gray-400">
            Los valores mostrados no incluyen el VALOR DE IVA
          </p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Al contratar todos los servicios juntos obtiene un 20% de descuento sobre el precio total
          </p>
          <div className="mt-6 p-4 bg-gray-50 dark:bg-[#343A46] rounded-lg">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Nota: El modelo Skillman-PDP con DPD externo (Pago por evento), incluye:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>• Mapa de brechas</li>
              <li>• 4 eventos de DPD externo en la fase I</li>
              <li>• 2 eventos de DPD externo en la fase II</li>
              <li>• 2 eventos de DPD externo en la fase III</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
