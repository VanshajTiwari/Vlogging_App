"use client";
import { useRef } from "react";
import { RiChatVoiceLine } from "react-icons/ri";
export default function ChatSideBar(){
    const divRef=useRef<HTMLDivElement>(null);
    function handleCLick(){
      divRef.current?.classList.toggle("translate-x-[80%]");
    }
    return(
        
        <div className="fixed inset-0 overflow-hidden" role="dialog">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 fixed top-12" aria-hidden="true">
              <div ref={divRef} className="transition-all duration-500 fixed top-12 inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
              <button className="relative top-12" onClick={handleCLick}><span className="bg-red-600 rounded-full text-white relative top-[10px] left-[-20px] ">2</span><RiChatVoiceLine className="bg-[#E17E26] text-[40px] p-2 rounded-l-md"/></button>
                   
                <div className="w-screen max-w-md">
                  <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Team</h2>
                        <div className="ml-3 h-7 flex items-center">
                          <button type="button" onClick={handleCLick} className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500">
                            <span className="sr-only">Close panel</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-gray-200">
                      <div className="px-6">
                        <nav className="-mb-px flex space-x-6">
                          <a href="#" className="border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">All</a>
        
                          <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">Online</a>
        
                          <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">Offline</a>
                        </nav>
                      </div>
                    </div>
                    <ul role="list" className="flex-1 divide-y divide-gray-200 overflow-y-auto">
                      <li>
                        <div className="relative group py-6 px-5 flex items-center">
                          <a href="#" className="-m-1 flex-1 block p-1">
                            <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                            <div className="flex-1 flex items-center min-w-0 relative">

                              <div className="ml-4 truncate">
                                <p className="text-sm font-medium text-gray-900 truncate">Leslie Alexander</p>
                                <p className="text-sm text-gray-500 truncate">@lesliealexander</p>
                              </div>
                            </div>
                          </a>
                          <div className="ml-2 flex-shrink-0 relative inline-block text-left">
                            <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-0-button" aria-expanded="false" aria-haspopup="true">
                              <span className="sr-only">Open options menu</span>
 
                            </button>

                               
                            <div className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-0-button" tabIndex={-1}>
                              <div className="py-1" role="none">
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="options-menu-0-item-0">View profile</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="options-menu-0-item-1">Send message</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
        
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
}