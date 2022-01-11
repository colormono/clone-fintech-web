import { Fragment, useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, SunIcon, MoonIcon, DesktopComputerIcon } from '@heroicons/react/outline';

export const ToggleMode = () => {
  const { theme, setTheme } = useTheme();

  return (
    theme !== undefined && (
      // <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      //   <option value="dark">Dark</option>
      //   <option value="light">Light</option>
      //   <option value="system">System</option>
      // </select>

      <Menu as="div" className="relative">
        <Menu.Button className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <SunIcon className="w-5 h-5 dark:hidden" aria-hidden="true" />
          <MoonIcon className="w-5 h-5 hidden dark:inline-block" aria-hidden="true" />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-32 mt-2 origin-top-right bg-white dark:bg-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setTheme('light')}
                    className={`${
                      active || theme === 'light' ? 'bg-neutral-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <SunIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    Light
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setTheme('dark')}
                    className={`${
                      active || theme === 'dark' ? 'bg-neutral-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <MoonIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    Dark
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setTheme('system')}
                    className={`${
                      active || theme === 'system' ? 'bg-neutral-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <DesktopComputerIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    System
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    )
  );
};

export default ToggleMode;
