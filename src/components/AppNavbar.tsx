
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
          <div className="bg-gradient-to-r from-pet-blue to-pet-purple w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold mr-2">P</div>
          <h1 className="text-lg font-display font-semibold hidden sm:block">Paw-fect Health Hub</h1>
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
              <NavigationMenuTrigger className="hover:bg-pet-soft-blue hover:text-pet-blue">
                Health Checks
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-pet-blue/20 to-pet-blue/50 p-6 no-underline outline-none focus:shadow-md"
                        href="/health-checks"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Health Checks
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Schedule and track your pet's health checks to keep them healthy and happy.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/health-checks/new" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pet-soft-blue hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Schedule</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Schedule a new health check for your pet
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/health-checks/history" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pet-soft-blue hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">History</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          View past health checks and their results
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/health-checks/report" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pet-soft-blue hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Reports</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Generate health reports for your veterinarian
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-pet-soft-green hover:text-green-600">
                Feeding
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] md:grid-cols-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/feeding" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pet-soft-green hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Schedule</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Create and manage feeding schedules
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/feeding/history" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pet-soft-green hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">History</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          View feeding history and track nutrition
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className="col-span-2">
                    <NavigationMenuLink asChild>
                      <a href="/feeding/recommendations" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pet-soft-green hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Recommendations</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Get personalized food recommendations based on your pet's breed, age, and health conditions
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-pet-soft-purple hover:text-purple-700">
                Vet Appointments
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/vet" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pet-soft-purple hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Schedule</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Schedule new vet appointments
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/vet/upcoming" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pet-soft-purple hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Upcoming</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          View and manage upcoming appointments
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/vet/history" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pet-soft-purple hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">History</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          View past vet appointments and diagnoses
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
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-pet-orange text-[10px] text-white">
              {notificationCount}
            </span>
          )}
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="rounded-full p-0">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback className="bg-pet-blue text-white">JD</AvatarFallback>
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
