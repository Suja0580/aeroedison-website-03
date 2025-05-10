
import { useState, useEffect } from "react";
import RecommendationDashboard from "./RecommendationDashboard";
import AppNavbar from "@/components/AppNavbar";
import AppSidebar from "@/components/AppSidebar";
import { useToast } from "@/hooks/use-toast";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();
  
  // Demo toast for user experience
  useEffect(() => {
    const showedWelcome = localStorage.getItem("showed_welcome");
    if (!showedWelcome) {
      setTimeout(() => {
        toast({
          title: "Welcome to Learning Hub!",
          description: "Discover personalized course recommendations just for you.",
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
        <RecommendationDashboard />
      </div>
    </div>
  );
};

export default Index;
