import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchModal({ isOpen, setIsOpen }) {
  const [query, setQuery] = useState('');

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
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/75 dark:bg-slate-900/75 transition-opacity" />
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
          <Dialog.Panel className="mx-auto max-w-2xl transform divide-y divide-gray-100 dark:divide-slate-800 overflow-hidden rounded-xl bg-white dark:bg-slate-900 shadow-2xl ring-1 ring-black/5 transition-all">
            <div className="relative">
              <MagnifyingGlassIcon
                className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400 dark:text-slate-500"
                aria-hidden="true"
              />
              <input
                type="text"
                className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:ring-0 sm:text-sm"
                placeholder="Search docs..."
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 py-14 px-6 text-center text-sm text-gray-400 dark:text-slate-500">
              <kbd className="h-5 w-5 rounded border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold text-gray-500 dark:text-slate-400 flex items-center justify-center">
                ⌘
              </kbd>
              <span>to select</span>
              <kbd className="h-5 w-5 rounded border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold text-gray-500 dark:text-slate-400 flex items-center justify-center">
                ↵
              </kbd>
              <span>to go</span>
              <kbd className="h-5 w-5 rounded border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold text-gray-500 dark:text-slate-400 flex items-center justify-center">
                esc
              </kbd>
              <span>to close</span>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
