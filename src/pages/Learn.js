import { useState, useEffect } from 'react';

function Learn() {
  // Estado para controlar qué secciones están expandidas
  const [expandedSections, setExpandedSections] = useState({
    quickStart: true,
    installation: false,
    setup: false,
    describingUI: false,
    addingInteractivity: false,
    managingState: false,
    escapeHatches: false
  });

  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('overview');
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          rootMargin: '-20% 0px -35% 0px',
          threshold: 0.2
        }
      );

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));

      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getLinkClassName = (sectionId) => {
    const baseClasses = "block py-2.5 px-6 text-base transition-colors duration-200 ease-in-out rounded-md";
    const activeClasses = "bg-sky-50 text-sky-600 font-medium dark:bg-sky-900/30 dark:text-sky-400";
    const inactiveClasses = "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:bg-slate-800/60";
    
    return `${baseClasses} ${activeSection === sectionId ? activeClasses : inactiveClasses}`;
  };

  // Función para alternar la expansión de una sección
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <>
      <div className="flex min-h-screen bg-white dark:bg-[#23272F]">
        {/* Sidebar izquierdo */}
        <aside className="w-[320px] border-r border-slate-200 dark:border-slate-700 fixed h-screen overflow-y-auto">
          <div className="py-10 px-6">
            <div className="mb-10">
              <h3 className="font-semibold text-sm tracking-wide text-slate-900 dark:text-white mb-5 uppercase">
                Get Started
              </h3>
              <nav className="flex flex-col gap-2">
                {/* Quick Start Section */}
                <button
                  onClick={() => toggleSection('quickStart')}
                  className={`flex items-center justify-between w-full text-base py-2 px-4 rounded-lg ${
                    expandedSections.quickStart 
                      ? 'bg-sky-50 dark:bg-slate-800 text-sky-600 dark:text-sky-400' 
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>Quick Start</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform ${expandedSections.quickStart ? '' : '-rotate-90'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSections.quickStart && (
                  <div className="ml-4 border-l border-slate-200 dark:border-slate-700">
                    <a href="#tutorial" className="block text-[15px] text-slate-700 dark:text-slate-300 py-2 px-4 hover:text-slate-900 dark:hover:text-slate-200">
                      Tutorial: Tic-Tac-Toe
                    </a>
                    <a href="#thinking" className="block text-[15px] text-slate-700 dark:text-slate-300 py-2 px-4 hover:text-slate-900 dark:hover:text-slate-200">
                      Thinking in React
                    </a>
                  </div>
                )}

                {/* Installation Section */}
                <button
                  onClick={() => toggleSection('installation')}
                  className="flex items-center justify-between w-full text-base text-slate-700 dark:text-slate-300 py-2 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <span>Installation</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Setup Section */}
                <button
                  onClick={() => toggleSection('setup')}
                  className="flex items-center justify-between w-full text-base text-slate-700 dark:text-slate-300 py-2 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <span>Setup</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            </div>

            <div className="mb-10">
              <h3 className="font-semibold text-sm tracking-wide text-slate-900 dark:text-white mb-5 uppercase">
                Learn React
              </h3>
              <nav className="flex flex-col gap-2">
                {/* Describing the UI */}
                <button
                  onClick={() => toggleSection('describingUI')}
                  className="flex items-center justify-between w-full text-base text-slate-700 dark:text-slate-300 py-2 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <span>Describing the UI</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Adding Interactivity */}
                <button
                  onClick={() => toggleSection('addingInteractivity')}
                  className="flex items-center justify-between w-full text-base text-slate-700 dark:text-slate-300 py-2 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <span>Adding Interactivity</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Managing State */}
                <button
                  onClick={() => toggleSection('managingState')}
                  className="flex items-center justify-between w-full text-base text-slate-700 dark:text-slate-300 py-2 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <span>Managing State</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Escape Hatches */}
                <button
                  onClick={() => toggleSection('escapeHatches')}
                  className="flex items-center justify-between w-full text-base text-slate-700 dark:text-slate-300 py-2 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <span>Escape Hatches</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </aside>

        {/* Contenido principal */}
        <main className="ml-[320px] mr-[320px] flex-1 min-h-screen">
          <div className="max-w-[800px] mx-auto">
            <div className="py-12">
              <div className="mb-4">
                <a href="/learn" className="text-[#149ECA] hover:underline text-sm font-semibold">
                  LEARN REACT
                </a>
              </div>

              <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-8">
                Quick Start
              </h1>

              <p className="text-xl text-slate-700 dark:text-slate-300 mb-12">
                Welcome to the React documentation! This page will give you an introduction to 80% of the React concepts that you will use on a daily basis.
              </p>

              {/* Sección "You will learn" */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  You will learn
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                  <li>How to create and nest components</li>
                  <li>How to add markup and styles</li>
                  <li>How to display data</li>
                  <li>How to render conditions and lists</li>
                  <li>How to respond to events and update the screen</li>
                  <li>How to share data between components</li>
                </ul>
              </div>

              {/* Sección de Creating and nesting components con ID para el anclaje */}
              <section id="creating-and-nesting-components" className="mb-16">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Creating and nesting components
                </h2>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  React components are JavaScript functions that return markup:
                </p>

                {/* Primer bloque de código */}
                <div className="bg-white dark:bg-slate-950 rounded-lg overflow-hidden mb-6">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="language-jsx">
                      {`function MyButton() {
                        return (
                          <button>I'm a button</button>
                        );
                      }`}
                    </code>
                  </pre>
                </div>

                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  Now that you've declared <code className="text-[#CA3132] dark:text-[#FF6B7D] font-mono bg-slate-50 dark:bg-slate-800/60 p-1 rounded">MyButton</code>, you can nest it into another component:
                </p>

                {/* Segundo bloque de código */}
                <div className="bg-white dark:bg-slate-950 rounded-lg overflow-hidden mb-6">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="language-jsx">
                      {`export default function MyApp() {
                        return (
                          <div>
                            <h1>Welcome to my app</h1>
                            <MyButton />
                          </div>
                        );
                      }`}
                    </code>
                  </pre>
                </div>

                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  Notice that <code className="text-[#CA3132] dark:text-[#FF6B7D] font-mono bg-slate-50 dark:bg-slate-800/60 p-1 rounded">{'<MyButton />'}</code> starts with a capital letter. That's how you know it's a React component. React component names must always start with a capital letter, while HTML tags must be lowercase.
                </p>

                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  Have a look at the result:
                </p>

                {/* Tercer bloque de código con resultado */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white dark:bg-slate-950 rounded-lg overflow-hidden">
                    <div className="border-b border-slate-200 dark:border-slate-700 p-4 flex items-center justify-between">
                      <span className="text-sm text-slate-700 dark:text-slate-300">App.js</span>
                      <div className="flex gap-2">
                        <button className="text-sm text-slate-500">Download</button>
                        <button className="text-sm text-slate-500">Reset</button>
                        <button className="text-sm text-slate-500">Fork</button>
                      </div>
                    </div>
                    <pre className="p-4 text-sm overflow-x-auto">
                      <code className="language-jsx">
                        {`function MyButton() {
                          return (
                            <button>
                              I'm a button
                            </button>
                          );
                        }

                        export default function MyApp() {
                          return (
                            <div>
                              <h1>Welcome to my app</h1>
                              <MyButton />
                            </div>
                          );
                        }`}
                      </code>
                    </pre>
                  </div>
                  <div className="bg-white dark:bg-slate-950 rounded-lg p-4">
                    <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                      <h1 className="text-xl mb-4">Welcome to my app</h1>
                      <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded">I'm a button</button>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-slate-700 dark:text-slate-300">
                  The <code className="text-[#CA3132] dark:text-[#FF6B7D] font-mono bg-slate-50 dark:bg-slate-800/60 p-1 rounded">export default</code> keywords specify the main component in the file. If you're not familiar with some piece of JavaScript syntax, <a href="https://developer.mozilla.org/en-US/docs/web/javascript" className="text-[#149ECA] hover:underline">MDN</a> and <a href="https://javascript.info" className="text-[#149ECA] hover:underline">javascript.info</a> have great references.
                </p>
              </section>

              {/* Writing markup with JSX section */}
              <section id="writing-markup-with-jsx" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Writing markup with JSX
                </h2>
                
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  The markup syntax you've seen above is called JSX. It's optional, but most React projects use JSX for its convenience. All of the{' '}
                  <a href="#" className="text-[#149ECA] hover:underline">tools we recommend for local development</a>
                  {' '}support JSX out of the box.
                </p>

                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  JSX is stricter than HTML. You have to close tags like{' '}
                  <code className="text-[#CA3132] dark:text-[#FF6B7D] font-mono bg-slate-50 dark:bg-slate-800/60 p-1 rounded">{`<br />`}</code>
                  . Your component also can't return multiple JSX tags. You have to wrap them into a shared parent, like a{' '}
                  <code className="text-[#CA3132] dark:text-[#FF6B7D] font-mono bg-slate-50 dark:bg-slate-800/60 p-1 rounded">{`<div>...</div>`}</code>
                  {' '}or an empty{' '}
                  <code className="text-[#CA3132] dark:text-[#FF6B7D] font-mono bg-slate-50 dark:bg-slate-800/60 p-1 rounded">{`<>...</>`}</code>
                  {' '}wrapper:
                </p>

                {/* Bloque de código */}
                <div className="bg-white dark:bg-slate-950 rounded-lg overflow-hidden mb-6">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="language-jsx">
                      {`function AboutPage() {
                        return (
                          <>
                            <h1>About</h1>
                            <p>Hello there.<br />How do you do?</p>
                          </>
                        );
                      }`}
                    </code>
                  </pre>
                </div>

                <p className="text-lg text-slate-700 dark:text-slate-300">
                  If you have a lot of HTML to port to JSX, you can use an{' '}
                  <a href="https://transform.tools/html-to-jsx" className="text-[#149ECA] hover:underline">online converter</a>.
                </p>
              </section>

              {/* Adding styles section */}
              <section id="adding-styles" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Adding styles
                </h2>
                
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  In React, you specify a CSS class with{' '}
                  <code className="text-[#CA3132] dark:text-[#FF6B7D] font-mono bg-slate-50 dark:bg-slate-800/60 p-1 rounded">className</code>
                  . It works the same way as the HTML{' '}
                  <code className="text-[#CA3132] dark:text-[#FF6B7D] font-mono bg-slate-50 dark:bg-slate-800/60 p-1 rounded">class</code>
                  {' '}attribute:
                </p>

                {/* Primer ejemplo de código */}
                <div className="bg-white dark:bg-slate-950 rounded-lg overflow-hidden mb-6">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="language-jsx text-[#CA3132] dark:text-[#FF6B7D]">
                      {'<img className="avatar" />'}
                    </code>
                  </pre>
                </div>

                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  Then you write the CSS rules for it in a separate CSS file:
                </p>

                {/* Segundo ejemplo de código */}
                <div className="bg-white dark:bg-slate-950 rounded-lg overflow-hidden mb-6">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="language-css">
                      {`/* In your CSS */
.avatar {
  border-radius: 50%;
}`}
                    </code>
                  </pre>
                </div>

                <p className="text-lg text-slate-700 dark:text-slate-300">
                  React does not prescribe how you add CSS files. In the simplest case, you'll add a{' '}
                  <code className="text-[#CA3132] dark:text-[#FF6B7D] font-mono bg-slate-50 dark:bg-slate-800/60 p-1 rounded">&lt;link&gt;</code>
                  {' '}tag to your HTML. If you use a build tool or a framework, consult its documentation to learn how to add a CSS file to your project.
                </p>
              </section>
            </div>
          </div>
        </main>

        {/* Sidebar derecho - ON THIS PAGE con tamaños más grandes */}
        <div className="hidden xl:block w-72 flex-none fixed right-0 top-[3.5rem] bottom-0 overflow-y-auto border-l border-slate-200 dark:border-slate-800 py-8 px-6">
          <h3 className="text-slate-900 dark:text-slate-200 font-semibold text-lg mb-6 px-6">
            ON THIS PAGE
          </h3>
          <nav className="flex flex-col space-y-1">
            <a href="#overview" 
               className={getLinkClassName('overview')}
               onClick={(e) => {
                 e.preventDefault();
                 window.scrollTo({ top: 0, behavior: 'smooth' });
               }}>
              Overview
            </a>
            <a href="#creating-and-nesting-components" 
               className={getLinkClassName('creating-and-nesting-components')}
               onClick={(e) => {
                 e.preventDefault();
                 document.getElementById('creating-and-nesting-components')?.scrollIntoView({ behavior: 'smooth' });
               }}>
              Creating and nesting components
            </a>
            <a href="#writing-markup-with-jsx" 
               className={getLinkClassName('writing-markup-with-jsx')}
               onClick={(e) => {
                 e.preventDefault();
                 document.getElementById('writing-markup-with-jsx')?.scrollIntoView({ behavior: 'smooth' });
               }}>
              Writing markup with JSX
            </a>
            <a href="#adding-styles" 
               className={getLinkClassName('adding-styles')}
               onClick={(e) => {
                 e.preventDefault();
                 document.getElementById('adding-styles')?.scrollIntoView({ behavior: 'smooth' });
               }}>
              Adding styles
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Learn;
