
import { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import AppNavbar from "@/components/AppNavbar";
import AppSidebar from "@/components/AppSidebar";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <AppNavbar onMenuClick={() => setSidebarOpen(true)} />
      <AppSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="lg:ml-64">
        <Dashboard />
      </div>
    </div>
  );
};

export default Index;
