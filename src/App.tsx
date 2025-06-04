
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import PersonalMemberPortal from "./pages/PersonalMemberPortal";
import ClusterCellSystem from "./pages/ClusterCellSystem";
import DigitalDiscipleshipFlow from "./pages/DigitalDiscipleshipFlow";
import LiveOnDemandWorship from "./pages/LiveOnDemandWorship";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import SpiritualCVRecognition from "./pages/SpiritualCVRecognition";
import IntegratedMessaging from "./pages/IntegratedMessaging";
import GamificationSystem from "./pages/GamificationSystem";
import AppointCellLeader from "./pages/AppointCellLeader";
import GPSConfiguration from "./pages/GPSConfiguration";
import ClusterManagement from "./pages/ClusterManagement";
import CellManagement from "./pages/CellManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/personal-member-portal" element={<PersonalMemberPortal />} />
          <Route path="/cluster-cell-system" element={<ClusterCellSystem />} />
          <Route path="/digital-discipleship-flow" element={<DigitalDiscipleshipFlow />} />
          <Route path="/live-on-demand-worship" element={<LiveOnDemandWorship />} />
          <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} />
          <Route path="/spiritual-cv-recognition" element={<SpiritualCVRecognition />} />
          <Route path="/integrated-messaging" element={<IntegratedMessaging />} />
          <Route path="/gamification-system" element={<GamificationSystem />} />
          <Route path="/appoint-cell-leader" element={<AppointCellLeader />} />
          <Route path="/gps-configuration" element={<GPSConfiguration />} />
          <Route path="/cluster-management" element={<ClusterManagement />} />
          <Route path="/cell-management" element={<CellManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
