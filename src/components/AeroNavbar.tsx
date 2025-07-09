
import { Button } from "@/components/ui/button";
import { Menu, Mail, Phone, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

interface AeroNavbarProps {
  onMenuClick?: () => void;
}

const AeroNavbar = ({ onMenuClick }: AeroNavbarProps) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm border-b">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={onMenuClick} className="mr-3 lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/4149ec7b-aa55-475c-8b40-70402e2e16c3.png" 
            alt="AeroEdison Logo" 
            className="w-[350px] h-[120px] object-contain mr-3"
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center justify-center space-x-6 flex-1">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
        <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <div className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer flex items-center">
            Industries
            <ChevronDown className="ml-1 h-4 w-4" />
          </div>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-64 bg-white border shadow-lg rounded-md z-50">
              <div 
                onClick={() => handleNavigate("/aviation-sector")}
                className="cursor-pointer hover:bg-blue-50 hover:text-blue-600 px-4 py-3 text-sm border-b border-gray-100"
              >
                Aviation Sector
              </div>
              <div 
                onClick={() => handleNavigate("/energy-sector")}
                className="cursor-pointer hover:bg-blue-50 hover:text-blue-600 px-4 py-3 text-sm border-b border-gray-100"
              >
                Energy Sector
              </div>
              <div 
                onClick={() => handleNavigate("/digital-transformation")}
                className="cursor-pointer hover:bg-blue-50 hover:text-blue-600 px-4 py-3 text-sm"
              >
                Cross-Industry Digital Transformation
              </div>
            </div>
          )}
        </div>
        
        <Link to="/commercial-report" className="text-gray-700 hover:text-blue-600 font-medium">Commercial Report</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
      </div>
    </nav>
  );
};

export default AeroNavbar;
