function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-white dark:bg-[#18191B]">
        <div className="w-full max-w-[1200px] mx-auto px-4 text-center">
          <div className="mb-4">
            <img 
              src="/Logo.png" 
              alt="SKILLMAN-PDP" 
              className="w-[80px] h-[80px] mx-auto"
            />
          </div>
          <h1 className="text-[1.75rem] font-bold text-slate-900 dark:text-white mb-6 text-center">
            Propuesta Técnica – Económica
          </h1>
          <p className="text-[1.125rem] text-slate-100 mb-6 max-w-[720px] mx-auto text-[1rem] text-slate-600 dark:text-slate-400 mb-6">
            Diseño, documentación, implantación y activación de un esquema de protección de datos personales bajo los requisitos de la Ley de protección de datos personales (LOPDP:2021) y el reglamento de la LOPDP:2021 (RLOPDP:2023).
          </p>
          <p className="text-[1rem] text-slate-100 text-[1rem] text-slate-600 dark:text-slate-400 mb-6">
            Fecha: FEBRERO 2025
          </p>
        </div>
      </section>

      {/* Objeto y Alcance */}
      <section className="py-16 bg-slate-50 dark:bg-[#23272F]">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[1.75rem] font-bold text-slate-900 dark:text-white mb-6 text-center">
              Objeto y Alcance del Esquema SKILLMAN-PDP
            </h2>
            <p className="text-[1rem] text-slate-600 dark:text-slate-400 mb-6">
              El objeto y finalidad es acompañar a empresas en el diseño, documentación, implantación y activación de un esquema para administrar protección de datos personales bajo los requisitos de la LOPDP:2021 y su reglamento RLOPDP:2023.
            </p>
            <p className="text-[1rem] text-slate-600 dark:text-slate-400 mb-6">
              Esto se logra bajo un esquema que presenta 2 etapas. La etapa I se divide en tres fases y la etapa II en dos pilares como muestra la siguiente imagen.
            </p>

            {/* Ámbitos de aplicación */}
            <div className="bg-white dark:bg-[#373b44] rounded-lg p-6 shadow-lg mb-8">
              <h3 className="text-[1.25rem] font-semibold mb-4 text-slate-900 dark:text-white">
                Ámbitos de Aplicación
              </h3>
              <p className="text-[1rem] text-slate-600 dark:text-slate-400 mb-4">
                Se identifican todas las actividades de tratamiento que la organización realice en los cuatro ámbitos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                <li>WEB</li>
                <li>Digital</li>
                <li>Puestos de trabajo en oficina</li>
                <li>Trabajo remoto con dispositivos móviles</li>
              </ul>
            </div>

            {/* Alcance */}
            <div className="bg-white dark:bg-[#373b44] rounded-lg p-6 shadow-lg mb-8">
              <h3 className="text-[1.25rem] font-semibold mb-4 text-slate-900 dark:text-white">
                Alcance
              </h3>
              <p className="text-[1rem] text-slate-600 dark:text-slate-400 mb-4">
                Skillman PDP cubre las cinco áreas donde la LOPDP:2021 solicita acciones y medidas:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                <li>Jurídicas (Normativa aplicable por sector económico, contratos y jurisprudencia)</li>
                <li>Técnicas (Tecnología y conocimiento)</li>
                <li>Organizativas (Procedimientos, instructivos y manuales)</li>
                <li>Administrativas (Gestión de la mejora continua)</li>
                <li>Físicas (Mejoras a infraestructura, al estado de la técnica y acciones durante la implantación y puesta en marcha del esquema PDP)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-16 bg-white dark:bg-[#18191B]">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[1.75rem] font-bold text-slate-900 dark:text-white mb-6 text-center">
              Metodología
            </h2>
            
            {/* Definición del punto de partida */}
            <div className="bg-white dark:bg-[#23272F] rounded-lg p-6 shadow-lg mb-8">
              <h3 className="text-[1.25rem] font-semibold mb-4 text-slate-900 dark:text-white">
                1. Definición del punto de partida
              </h3>
              <p className="text-[1rem] mb-3 text-slate-600 dark:text-slate-400">
                Se realiza un ejercicio de levantamiento de información que cubre estas áreas:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                <li>Estrategia + políticas + Entorno organizacional + Plan de continuidad del negocio</li>
                <li>Modelo organizacional</li>
                <li>Modelo administrativo</li>
                <li>Modelo operativo</li>
                <li>Gestión del talento</li>
                <li>Infraestructura física</li>
                <li>Infraestructura digital</li>
              </ul>
            </div>

            {/* Mapa de brechas */}
            <div className="bg-white dark:bg-[#23272F] rounded-lg p-6 shadow-lg mb-8">
              <h3 className="text-[1.25rem] font-semibold mb-4 text-slate-900 dark:text-white">
                2. Mapa de brechas
              </h3>
              <p className="text-[1rem] mb-3 text-slate-600 dark:text-slate-400">
                Con la información recabada se procede a realizar un mapa de las brechas existentes para satisfacer los requisitos de la Ley, su reglamento y la normativa aplicable. Este mapa de brechas se enfoca sobre los siguientes artículos y capítulos de la ley y su reglamento:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                <li>Obligaciones del responsable y encargado de tratamiento: Artículo 47 de la LOPDP:2021 y capítulos VIII y IX del RLOPDP:2023</li>
                <li>Ecosistema PDP: artículo 5 de la LOPDP:2021</li>
                <li>Categoría de los datos: artículo 8 de la LOPDP:2021</li>
                <li>Delegado de protección de datos: artículo 48 de la LOPDP:2021 y capítulo X del RLOPDP:2023</li>
                <li>Transferencia de datos: capítulo V de la LOPDP:2021 y capítulo V del RLOPDP:2021</li>
                <li>Seguridad de los datos: capítulo VI de la LOPDP:2021 y capítulo VI del RLOPDP:2023</li>
                <li>Transferencia internacional de datos: capítulo IX de la LOPDP:2021 y capítulo XII del RLOPDP:2023</li>
              </ul>
            </div>

            {/* Modelo Skillman PDP */}
            <div className="bg-white dark:bg-[#23272F] rounded-lg p-6 shadow-lg">
              <h3 className="text-[1.25rem] font-semibold mb-4 text-slate-900 dark:text-white">
                3. Modelo Skillman PDP
              </h3>
              <p className="text-[1rem] text-slate-600 dark:text-slate-400">
                Es una propuesta que incluye los servicios de delegado de protección de datos (Externo y con pago por evento) y la entrega de toda la documentación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentación y Servicios */}
      <section className="py-16 bg-slate-50 dark:bg-[#23272F]">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[1.75rem] font-bold text-slate-900 dark:text-white mb-6 text-center">
              Documentación y Servicios
            </h2>
            
            {/* Documentación */}
            <div className="bg-white dark:bg-[#373b44] rounded-lg p-6 shadow-lg mb-8">
              <h3 className="text-[1.25rem] font-semibold mb-4 text-slate-900 dark:text-white">
                Documentación Entregable
              </h3>
              <p className="text-[1rem] text-slate-600 dark:text-slate-400 mb-4">
                La documentación se entrega con la estructura de un manual digital y 12 repositorios de documentos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                <li>Ecosistema PDP</li>
                <li>Mapeo de PATD'S</li>
                <li>Modelos de Comunicados PDP</li>
                <li>Modelos de Contratos PDP</li>
                <li>RAT bajo requisitos artículo 38 del RLOPDP:2023</li>
                <li>Insumos para la evaluación de riesgos (nivel de seguridad)</li>
                <li>Evaluación de riesgos y declaración de aplicabilidad</li>
                <li>Políticas, procedimientos y programas PDP</li>
                <li>Rutinas PDP x PATD</li>
                <li>Plan inicial PDP y plan de auditorías-Simulacros</li>
                <li>Ejercicio de derechos</li>
                <li>Tablero de mando (Indicadores + métricas = eficacia y eficiencia)</li>
              </ul>
            </div>

            {/* Otros servicios DPD */}
            <div className="bg-white dark:bg-[#373b44] rounded-lg p-6 shadow-lg mb-8">
              <h3 className="text-[1.25rem] font-semibold mb-4 text-slate-900 dark:text-white">
                Otros servicios DPD
              </h3>
              <p className="text-[1rem] text-slate-600 dark:text-slate-400 mb-4">
                Como DPD externo las organizaciones tienen una ventaja de contratar servicios de equipos multidisciplinarios. Un DPD externo puede revisar documentos de PDP como son las distintas evaluaciones técnicas del riesgo como:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                <li>Business Impact Assessment (BIA) o evaluación de impacto de ciertas actividades críticas sobre la continuidad negocio</li>
                <li>Evaluaciones de riesgo</li>
                <li>Evaluaciones de impacto sobre derechos fundamentales</li>
                <li>Evaluaciones de interés legítimo (LIA)</li>
                <li>Evaluaciones de impacto a la privacidad (PIA)</li>
                <li>Evaluaciones de transferencias internacionales (TIA)</li>
              </ul>
              <p className="text-[1rem] text-slate-600 dark:text-slate-400">
                También como capacitador, revisar resultados o informes de auditorías de segunda parte y todo lo que debe realizar un DPD con la ventaja de propiciar que el cliente tenga control del costo de las actividades del DPD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo PDP */}
      <section className="py-16 bg-white dark:bg-[#18191B]">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <h2 className="text-[1.75rem] font-bold text-slate-900 dark:text-white mb-8 text-center">
            Equipo PDP
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[960px] mx-auto">
            {/* Freddy */}
            <div className="bg-white dark:bg-[#23272F] rounded-lg p-6 shadow-lg mb-8">
              <div className="flex items-start gap-6">
                <img 
                  src="/freddy-photo.jpg" 
                  alt="Freddy A. Villavicencio V." 
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-[1.25rem] font-semibold text-slate-900 dark:text-white mb-2">
                    Freddy A. Villavicencio V.
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    Especialista en sistemas de gestión
                  </p>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>30 años trabajando de manera activa y progresiva en operaciones basadas en sistemas de gestión</li>
                    <li>Autor de Skillman PDP</li>
                    <li>Certificación PDP EXPERT "Fundamentos de la implementación, gestión y gobierno de datos personales"</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Edison */}
            <div className="bg-white dark:bg-[#23272F] rounded-lg p-6 shadow-lg mb-8">
              <div className="flex items-start gap-6">
                <img 
                  src="/edison-photo.jpg" 
                  alt="Edison E. Pérez A. MBA" 
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-[1.25rem] font-semibold text-slate-900 dark:text-white mb-2">
                    Edison E. Pérez A. MBA
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    Especialista en Sistemas de Gestión
                  </p>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>20 años de experiencia en operaciones y logística en empresas de servicios</li>
                    <li>Gestión de Multiproyectos</li>
                    <li>Especialista en sistemas de gestión de seguridad patrimonial, física y de la información</li>
                    <li>Auditor de sistemas de gestión basados en ISO 9001, normas BASC, entre otros</li>
                    <li>Certificación PDP Expert "Fundamentos de la implementación, gestión y gobierno de datos personales"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer con información de contacto */}
      <footer className="py-8 bg-[#23272F] text-white dark:bg-[#23272F] ">
        <div className="w-full max-w-[1200px] mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-6">
            <a href="mailto:freddypdp@fe-pdpygestion.com" className="flex items-center gap-2 hover:text-[#087EA4] transition-colors">
              <span className="text-sm">freddypdp@fe-pdpygestion.com</span>
            </a>
            <a href="mailto:edisonpdp@fe-pdpygestion.com" className="flex items-center gap-2 hover:text-[#087EA4] transition-colors">
              <span className="text-sm">edisonpdp@fe-pdpygestion.com</span>
            </a>
          </div>
          <div className="flex justify-center items-center gap-6 mt-4">
            <span className="text-sm">+593 99 954 7543</span>
            <span className="text-sm">+593 98 209 7501</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;