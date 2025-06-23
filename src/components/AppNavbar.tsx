import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Bell, Menu, Settings, Search, Plus, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

interface AppNavbarProps {
  onMenuClick?: () => void;
}

const AppNavbar = ({ onMenuClick }: AppNavbarProps) => {
  const [notificationCount] = useState(2);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="flex items-center justify-between p-3 border-b bg-white shadow-sm">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={onMenuClick} className="mr-3 lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center mr-6">
          <img 
            src="/lovable-uploads/9db9cc1e-f920-4f2b-9645-75af25c39acf.png" 
            alt="AeroEdison Logo" 
            className="h-8 mr-2"
          />
          <h1 className="text-lg font-display font-semibold hidden sm:block">AeroEdison</h1>
        </div>
        
        <div className="hidden md:flex relative w-64">
          <Input 
            placeholder="Search..."
            className="pl-9 bg-gray-50 border-none focus:ring-1"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      <div className="hidden md:flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-blue-50 hover:text-blue-600">
                Aviation
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-600/20 to-blue-600/50 p-6 no-underline outline-none focus:shadow-md"
                        href="/aviation-sector"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Aviation Solutions
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Advanced aviation technology and engineering solutions.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/aviation-sector" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Aircraft Systems</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Advanced aircraft system solutions
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/aviation-sector" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Maintenance</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Aircraft maintenance and support services
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/aviation-sector" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Consulting</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Expert aviation consulting services
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-green-50 hover:text-green-600">
                Energy
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] md:grid-cols-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/energy-sector" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Renewable Energy</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Sustainable energy solutions and consulting
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/energy-sector" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Grid Solutions</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Smart grid technology and optimization
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className="col-span-2">
                    <NavigationMenuLink asChild>
                      <a href="/energy-sector" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Energy Storage</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Advanced energy storage systems and battery technology solutions
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-purple-50 hover:text-purple-700">
                Digital Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/digital-transformation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Digital Transformation</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Cross-industry digital transformation solutions
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/digital-transformation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">AI & Analytics</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Advanced AI and data analytics solutions
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/digital-transformation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Cloud Services</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Cloud infrastructure and migration services
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" className="rounded-full bg-gray-50" onClick={toggleTheme}>
          {theme === 'light' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        <Button variant="outline" size="icon" className="rounded-full bg-gray-50 relative">
          <Bell className="h-4 w-4" />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] text-white">
              {notificationCount}
            </span>
          )}
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="rounded-full p-0">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback className="bg-blue-600 text-white">AE</AvatarFallback>
              </Avatar>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-2" align="end">
            <div className="grid gap-1">
              <Button variant="ghost" className="justify-start" size="sm">Profile</Button>
              <Button variant="ghost" className="justify-start" size="sm">Settings</Button>
              <Button variant="ghost" className="justify-start" size="sm">Help</Button>
              <Separator className="my-1" />
              <Button variant="ghost" className="justify-start text-red-500 hover:text-red-500 hover:bg-red-50" size="sm">Logout</Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default AppNavbar;
