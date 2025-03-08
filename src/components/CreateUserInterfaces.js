import React from 'react';

function CreateUserInterfaces() {
  return (
    <section className="py-16 bg-[#EBEDF0]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-4">
          Create user interfaces
          <br />
          from components
        </h2>
        
        <p className="text-base text-slate-600 dark:text-slate-400 text-center max-w-3xl mx-auto mb-3">
          React lets you build user interfaces out of individual pieces called components. Create your own React components like{' '}
          <code className="font-mono text-[#E5484D] dark:text-[#FF6B7D]">Thumbnail</code>,{' '}
          <code className="font-mono text-[#E5484D] dark:text-[#FF6B7D]">LikeButton</code>, and{' '}
          <code className="font-mono text-[#E5484D] dark:text-[#FF6B7D]">Video</code>.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 text-center max-w-3xl mx-auto mb-16">
          Then combine them into entire screens, pages, and apps.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Editor Section */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            <div className="border-b border-slate-200 dark:border-slate-700 p-4">
              <span className="text-sm text-slate-500 dark:text-slate-400">Video.js</span>
            </div>
            <div className="p-4">
              <pre className="text-sm text-slate-800 dark:text-slate-200 overflow-x-auto">
                <code>{`function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>

          {/* Preview Section */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative w-full max-w-md bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <button className="absolute inset-0 flex items-center justify-center text-white/80 hover:text-white">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                      My video
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Video description
                    </p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="text-slate-400 hover:text-pink-500 dark:hover:text-pink-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-base text-slate-600 dark:text-slate-400 text-center max-w-3xl mx-auto mt-12">
          Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.
        </p>
      </div>
    </section>
  );
}

export default CreateUserInterfaces;