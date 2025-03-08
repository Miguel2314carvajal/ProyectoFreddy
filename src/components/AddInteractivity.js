import React from 'react';

function AddInteractivity() {
  return (
    <section className="py-16 bg-[#EBEDF0]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-4">
          Add interactivity
          <br />
          wherever you need it
        </h2>
        
        <p className="text-base text-slate-600 dark:text-slate-400 text-center max-w-3xl mx-auto mb-12">
          React components receive data and return what should appear on the screen. 
          You can pass them new data in response to an interaction, like when the user 
          types into an input. React will then update the screen to match the new data.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Editor Section */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            <div className="border-b border-slate-200 dark:border-slate-700 p-4">
              <span className="text-sm text-slate-500 dark:text-slate-400">SearchableVideoList.js</span>
            </div>
            <div className="p-4">
              <pre className="text-sm text-slate-800 dark:text-slate-200 overflow-x-auto">
                <code>{`import { useState } from 'react';

function SearchableVideoList({ videos }) {
  const [searchText, setSearchText] = useState('');
  const foundVideos = filterVideos(videos, searchText);
  return (
    <>
      <SearchInput
        value={searchText}
        onChange={newText => setSearchText(newText)} />
      <VideoList
        videos={foundVideos}
        emptyHeading={\`No matches for "\${searchText}"\`} />
    </>
  );
}`}</code>
              </pre>
            </div>
          </div>

          {/* Preview Section */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  React Videos
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  example.com/videos.html
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                A brief history of React
              </p>
              <div className="relative mb-6">
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                />
              </div>
              <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-4">
                5 Videos
              </h4>
              <div className="space-y-4">
                {[
                  {
                    title: "React: The Documentary",
                    description: "The origin story of React",
                    thumbnail: "react-documentary.jpg"
                  },
                  {
                    title: "Rethinking Best Practices",
                    description: "Pete Hunt (2013)",
                    thumbnail: "best-practices.jpg"
                  }
                ].map((video, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="relative w-24 h-16 bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden flex items-center justify-center">
                      <button className="text-white/80 hover:text-white">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900 dark:text-white">
                        {video.title}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {video.description}
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
          You don't have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.
        </p>

        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 border border-slate-200 dark:border-slate-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add React to your page
          </a>
        </div>
      </div>
    </section>
  );
}

export default AddInteractivity;
