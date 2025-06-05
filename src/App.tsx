import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
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
import { AuthProvider } from "./contexts/AuthContext";
import Platform from "./pages/Platform";
import Community from "./pages/Community";
import Support from "./pages/Support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/platform" element={
            <AppLayout>
              <Platform />
            </AppLayout>
          } />
          <Route path="/community" element={
            <AppLayout>
              <Community />
            </AppLayout>
          } />
          <Route path="/support" element={
            <AppLayout>
              <Support />
            </AppLayout>
          } />
          <Route path="/" element={
            <AppLayout>
              <Index />
            </AppLayout>
          } />
          <Route path="/personal-member-portal" element={
            <AppLayout>
              <PersonalMemberPortal />
            </AppLayout>
          } />
          <Route path="/cluster-cell-system" element={
            <AppLayout>
              <ClusterCellSystem />
            </AppLayout>
          } />
          <Route path="/digital-discipleship-flow" element={
            <AppLayout>
              <DigitalDiscipleshipFlow />
            </AppLayout>
          } />
          <Route path="/live-on-demand-worship" element={
            <AppLayout>
              <LiveOnDemandWorship />
            </AppLayout>
          } />
          <Route path="/analytics-dashboard" element={
            <AppLayout>
              <AnalyticsDashboard />
            </AppLayout>
          } />
          <Route path="/spiritual-cv-recognition" element={
            <AppLayout>
              <SpiritualCVRecognition />
            </AppLayout>
          } />
          <Route path="/integrated-messaging" element={
            <AppLayout>
              <IntegratedMessaging />
            </AppLayout>
          } />
          <Route path="/gamification-system" element={
            <AppLayout>
              <GamificationSystem />
            </AppLayout>
          } />
          <Route path="/appoint-cell-leader" element={
            <AppLayout>
              <AppointCellLeader />
            </AppLayout>
          } />
          <Route path="/gps-configuration" element={
            <AppLayout>
              <GPSConfiguration />
            </AppLayout>
          } />
          <Route path="/cluster-management" element={
            <AppLayout>
              <ClusterManagement />
            </AppLayout>
          } />
          <Route path="/cell-management" element={
            <AppLayout>
              <CellManagement />
            </AppLayout>
          } />
          <Route path="*" element={
            <AppLayout>
              <NotFound />
            </AppLayout>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
