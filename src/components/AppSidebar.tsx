
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { 
  Home,
  CalendarCheck,
  Clock,
  Dog,
  Plus,
  X
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppSidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  
  const menuItems = [
    { name: "Dashboard", path: "/", icon: <Home className="h-5 w-5" /> },
    { name: "Health Checks", path: "/health-checks", icon: <CalendarCheck className="h-5 w-5" /> },
    { name: "Feeding Schedule", path: "/feeding", icon: <Clock className="h-5 w-5" /> },
    { name: "Vet Appointments", path: "/vet", icon: <Dog className="h-5 w-5" /> },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <div className={cn(
        "fixed top-0 left-0 bottom-0 z-40 w-64 bg-white border-r transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between p-4 h-16 border-b">
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="font-bold">Paw-fect Health</span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <ScrollArea className="h-[calc(100vh-64px)]">
          <div className="p-4">
            <Button className="w-full" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add New Pet
            </Button>
            
            <Separator className="my-4" />
            
            <div className="space-y-1">
              <p className="text-xs font-semibold text-muted-foreground mb-2 pl-4">MENU</p>
              {menuItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <div 
                    className={cn(
                      "menu-item",
                      location.pathname === item.path ? "active" : ""
                    )}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>

            <Separator className="my-4" />
            
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2 pl-4">YOUR PETS</p>
              <div className="space-y-1">
                <Link to="/pet/1">
                  <div className="menu-item">
                    <div className="w-7 h-7 rounded-full bg-pet-soft-blue flex items-center justify-center">
                      <Dog className="h-4 w-4 text-pet-blue" />
                    </div>
                    <span>Buddy</span>
                  </div>
                </Link>
                <Link to="/pet/2">
                  <div className="menu-item">
                    <div className="w-7 h-7 rounded-full bg-pet-soft-purple flex items-center justify-center">
                      <Dog className="h-4 w-4 text-purple-500" />
                    </div>
                    <span>Whiskers</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default AppSidebar;
