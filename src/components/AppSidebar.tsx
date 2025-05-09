
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
  Cat,
  Fish,
  Plus,
  X,
  Settings,
  Bell
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockPets } from "../mock/mockData";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PetIconProps {
  type: string;
  color?: string;
  bgColor?: string;
}

const PetIcon = ({ type, color = "text-pet-blue", bgColor = "bg-pet-soft-blue" }: PetIconProps) => {
  switch (type) {
    case "dog":
      return (
        <div className={`w-7 h-7 rounded-full ${bgColor} flex items-center justify-center`}>
          <Dog className={`h-4 w-4 ${color} menu-item-icon`} />
        </div>
      );
    case "cat":
      return (
        <div className={`w-7 h-7 rounded-full bg-pet-soft-purple flex items-center justify-center`}>
          <Cat className="h-4 w-4 text-purple-500 menu-item-icon" />
        </div>
      );
    case "fish":
      return (
        <div className={`w-7 h-7 rounded-full bg-pet-soft-green flex items-center justify-center`}>
          <Fish className="h-4 w-4 text-green-600 menu-item-icon" />
        </div>
      );
    default:
      return (
        <div className={`w-7 h-7 rounded-full ${bgColor} flex items-center justify-center`}>
          <Dog className={`h-4 w-4 ${color} menu-item-icon`} />
        </div>
      );
  }
};

const AppSidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  
  const menuItems = [
    { name: "Dashboard", path: "/", icon: <Home className="h-5 w-5 menu-item-icon" /> },
    { name: "Health Checks", path: "/health-checks", icon: <CalendarCheck className="h-5 w-5 menu-item-icon" /> },
    { name: "Feeding Schedule", path: "/feeding", icon: <Clock className="h-5 w-5 menu-item-icon" /> },
    { name: "Vet Appointments", path: "/vet", icon: <Dog className="h-5 w-5 menu-item-icon" /> },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <div className={cn(
        "fixed top-0 left-0 bottom-0 z-40 w-72 bg-white border-r transition-transform duration-300 ease-in-out lg:translate-x-0 shadow-lg",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between p-4 h-16 border-b">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-pet-blue to-pet-purple w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold mr-2">P</div>
            <span className="font-display font-semibold">Paw-fect Health</span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <ScrollArea className="h-[calc(100vh-64px)]">
          <div className="p-4">
            <div className="bg-pet-soft-blue rounded-lg p-4 mb-4">
              <div className="flex items-center mb-3">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">Pet Parent</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="w-full">
                  <Plus className="mr-1 h-4 w-4" />
                  New Pet
                </Button>
                <Button size="icon" variant="outline">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-1">
              <p className="text-xs font-semibold text-muted-foreground mb-2 pl-4">MAIN MENU</p>
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
                {mockPets.map(pet => (
                  <Link key={pet.id} to={`/pet/${pet.id}`}>
                    <div className={cn(
                      "menu-item",
                      location.pathname === `/pet/${pet.id}` ? "active" : ""
                    )}>
                      <PetIcon type={pet.type} />
                      <span>{pet.name}</span>
                    </div>
                  </Link>
                ))}
                <Button className="w-full mt-2" variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add New Pet
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default AppSidebar;
