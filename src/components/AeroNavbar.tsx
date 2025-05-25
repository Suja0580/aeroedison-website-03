
import { Button } from "@/components/ui/button";
import { Plane, Menu, Mail, Phone } from "lucide-react";
import { useState } from "react";

interface AeroNavbarProps {
  onMenuClick?: () => void;
}

const AeroNavbar = ({ onMenuClick }: AeroNavbarProps) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm border-b">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={onMenuClick} className="mr-3 lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-10 h-10 rounded-lg flex items-center justify-center text-white mr-3">
            <Plane className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">AeroEdison</h1>
            <p className="text-xs text-gray-600">Consulting</p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
        <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
        <a href="#reports" className="text-gray-700 hover:text-blue-600 font-medium">Reports</a>
        <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
        <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="hidden sm:flex">
          <Mail className="h-4 w-4 mr-2" />
          Contact Us
        </Button>
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default AeroNavbar;
