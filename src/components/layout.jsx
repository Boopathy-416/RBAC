import React,{useState} from "react";
import { Sidebar } from "./dasside";
import { MenuIcon } from 'lucide-react'; // Import the menu icon from lucide-react


export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
    {/* Sidebar */}
    <div
      className={`${
        isSidebarOpen ? 'block' : 'hidden'
      } lg:block fixed inset-0 bg-gray-800 z-10 bg-opacity-50 lg:bg-transparent lg:relative lg:z-10`}
      onClick={toggleSidebar} 
    >
      <Sidebar />
    </div>

    {/* Main Content */}
    <main className="flex-1 min-h-screen pl-0 lg:pl-64">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed  top-4 left-4 z-20 p-3 text-white bg-black-600 rounded-full"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {children}
    </main>
  </div>
  );
}
