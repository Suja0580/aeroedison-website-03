
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AeroEdisonHome from "./pages/AeroEdisonHome";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import CommercialReport from "./pages/CommercialReport";
import PaymentPage from "./pages/PaymentPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import NotFound from "./pages/NotFound";
import Industries from "./pages/Industries";
import AviationSector from "./pages/AviationSector";
import EnergySector from "./pages/EnergySector";
import DigitalTransformation from "./pages/DigitalTransformation";
import RecommendationDashboard from "./pages/RecommendationDashboard";
import SystemArchitecture from "./pages/SystemArchitecture";
import Wireframe from "./pages/Wireframe";

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
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/commercial-report" element={<CommercialReport />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/aviation-sector" element={<AviationSector />} />
          <Route path="/energy-sector" element={<EnergySector />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/recommendations" element={<RecommendationDashboard />} />
          <Route path="/system-architecture" element={<SystemArchitecture />} />
          <Route path="/wireframe" element={<Wireframe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
