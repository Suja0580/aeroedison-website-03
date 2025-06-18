
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AeroEdisonHome from "./pages/AeroEdisonHome";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import HealthCheckSchedule from "./pages/HealthCheckSchedule";
import FeedingSchedule from "./pages/FeedingSchedule";
import VetAppointment from "./pages/VetAppointment";
import NotFound from "./pages/NotFound";
import PetRegistration from "./pages/PetRegistration";
import Wireframe from "./pages/Wireframe";
import RecommendationDashboard from "./pages/RecommendationDashboard";
import SystemArchitecture from "./pages/SystemArchitecture";
import Industries from "./pages/Industries";
import AviationSector from "./pages/AviationSector";
import EnergySector from "./pages/EnergySector";
import DigitalTransformation from "./pages/DigitalTransformation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AeroEdisonHome />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/aviation-sector" element={<AviationSector />} />
          <Route path="/energy-sector" element={<EnergySector />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/health-checks" element={<HealthCheckSchedule />} />
          <Route path="/feeding" element={<FeedingSchedule />} />
          <Route path="/vet" element={<VetAppointment />} />
          <Route path="/register-pet" element={<PetRegistration />} />
          <Route path="/wireframe" element={<Wireframe />} />
          <Route path="/recommendations" element={<RecommendationDashboard />} />
          <Route path="/system-architecture" element={<SystemArchitecture />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
