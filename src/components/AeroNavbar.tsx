
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, Mail, Phone, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface AeroNavbarProps {
  onMenuClick?: () => void;
}

const AeroNavbar = ({ onMenuClick }: AeroNavbarProps) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm border-b">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={onMenuClick} className="mr-3 lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/39b06832-79e7-438a-8c2b-ddc99578b7be.png" 
            alt="Company Logo" 
            className="h-12 mr-3"
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
        <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium p-0 h-auto">
              Industries
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 bg-white border shadow-lg z-50">
            <DropdownMenuItem 
              onClick={() => handleNavigate("/aviation-sector")}
              className="cursor-pointer hover:bg-blue-50 hover:text-blue-600"
            >
              Aviation Sector
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => handleNavigate("/energy-sector")}
              className="cursor-pointer hover:bg-blue-50 hover:text-blue-600"
            >
              Energy Sector
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => handleNavigate("/digital-transformation")}
              className="cursor-pointer hover:bg-blue-50 hover:text-blue-600"
            >
              Cross-Industry Digital Transformation
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="hidden sm:flex" onClick={() => handleNavigate("/contact")}>
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
