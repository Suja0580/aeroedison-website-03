
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Bell, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface AppNavbarProps {
  onMenuClick?: () => void;
}

const AppNavbar = ({ onMenuClick }: AppNavbarProps) => {
  const [notificationCount] = useState(2);

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={onMenuClick} className="mr-2 lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center">
          <img src="/placeholder.svg" alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-lg font-bold">Paw-fect Health Hub</h1>
        </div>
      </div>

      <div className="hidden md:flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Health Checks</NavigationMenuTrigger>
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
                      <a href="/health-checks/new" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Schedule</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Schedule a new health check for your pet
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/health-checks/history" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">History</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          View past health checks and their results
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/health-checks/report" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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
              <NavigationMenuTrigger>Feeding</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] md:grid-cols-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/feeding" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Schedule</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Create and manage feeding schedules
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/feeding/history" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">History</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          View feeding history and track nutrition
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className="col-span-2">
                    <NavigationMenuLink asChild>
                      <a href="/feeding/recommendations" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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
              <NavigationMenuTrigger>Vet Appointments</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/vet" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Schedule</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Schedule new vet appointments
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/vet/upcoming" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Upcoming</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          View and manage upcoming appointments
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/vet/history" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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

      <div className="flex items-center">
        <Button variant="outline" size="icon" className="relative mr-2">
          <Bell className="h-4 w-4" />
          {notificationCount > 0 && (
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-pet-orange text-[10px] text-white">
              {notificationCount}
            </span>
          )}
        </Button>
        <div className="w-8 h-8 rounded-full bg-pet-blue text-white flex items-center justify-center">
          <span className="text-xs font-medium">JD</span>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
