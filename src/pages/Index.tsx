
import { useState } from "react";
import Dashboard from "./Dashboard";
import AppNavbar from "@/components/AppNavbar";
import AppSidebar from "@/components/AppSidebar";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();
  
  // Demo toast for user experience
  useEffect(() => {
    const showedWelcome = localStorage.getItem("showed_welcome");
    if (!showedWelcome) {
      setTimeout(() => {
        toast({
          title: "Welcome to Paw-fect Health Hub!",
          description: "Keep track of your pets' health and wellbeing all in one place.",
          duration: 5000,
        });
        localStorage.setItem("showed_welcome", "true");
      }, 1000);
    }
  }, [toast]);
  
  return (
    <div className="min-h-screen bg-background">
      <AppNavbar onMenuClick={() => setSidebarOpen(true)} />
      <AppSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="lg:ml-72">
        <Dashboard />
      </div>
    </div>
  );
};

export default Index;
