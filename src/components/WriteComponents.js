import React from 'react';

function WriteComponents() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-4">
          Write components
          <br />
          with code and markup
        </h2>
        
        <p className="text-base text-slate-600 dark:text-slate-400 text-center max-w-3xl mx-auto mb-12">
          React components are JavaScript functions. Want to show some content conditionally? Use an{' '}
          <code className="font-mono text-[#E5484D] dark:text-[#FF6B7D]">if</code> statement. 
          Displaying a list? Try array{' '}
          <code className="font-mono text-[#E5484D] dark:text-[#FF6B7D]">map()</code>. 
          Learning React is learning programming.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Editor Section */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            <div className="border-b border-slate-200 dark:border-slate-700 p-4">
              <span className="text-sm text-slate-500 dark:text-slate-400">VideoList.js</span>
            </div>
            <div className="p-4">
              <pre className="text-sm text-slate-800 dark:text-slate-200 overflow-x-auto">
                <code>{`function VideoList({ videos, emptyHeading }) {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'Videos' : 'Video';
    heading = count + ' ' + noun;
  }
  return (
    <section>
      <h2>{heading}</h2>
      {videos.map(video =>
        <Video key={video.id} video={video} />
      )}
    </section>
  );
}`}</code>
              </pre>
            </div>
          </div>

          {/* Preview Section */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                3 Videos
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-start gap-4">
                    <div className="relative w-24 h-16 bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden flex items-center justify-center">
                      <button className="text-white/80 hover:text-white">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900 dark:text-white">
                        {`Video ${num}`}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Video description
                      </p>
                    </div>
                    <button className="text-slate-400 hover:text-pink-500 dark:hover:text-pink-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-base text-slate-600 dark:text-slate-400 text-center max-w-3xl mx-auto mt-12">
          This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete.
        </p>
      </div>
    </section>
  );
}

export default WriteComponents;
