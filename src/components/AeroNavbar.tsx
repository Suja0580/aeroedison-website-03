
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
            src="/lovable-uploads/9db9cc1e-f920-4f2b-9645-75af25c39acf.png" 
            alt="Company Logo" 
            className="h-15 mr-3"
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center justify-center space-x-6 flex-1">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
        <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium p-0 h-auto focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none">
              Industries
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 bg-white border shadow-lg z-50">
            <DropdownMenuItem 
              onClick={() => handleNavigate("/aviation-sector")}
              className="cursor-pointer hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600"
            >
              Aviation Sector
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => handleNavigate("/energy-sector")}
              className="cursor-pointer hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600"
            >
              Energy Sector
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => handleNavigate("/digital-transformation")}
              className="cursor-pointer hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600"
            >
              Cross-Industry Digital Transformation
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Link to="/commercial-report" className="text-gray-700 hover:text-blue-600 font-medium">Commercial Report</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
      </div>
    </nav>
  );
};

export default AeroNavbar;
