
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { WelcomeHeader } from "@/components/portal/WelcomeHeader";
import { DashboardStats } from "@/components/portal/DashboardStats";
import { QuickActions } from "@/components/portal/QuickActions";
import { SpiritualGoalsTab } from "@/components/portal/SpiritualGoalsTab";
import { EventsTab } from "@/components/portal/EventsTab";
import { MinistryTab } from "@/components/portal/MinistryTab";
import { GivingTab } from "@/components/portal/GivingTab";

const PersonalMemberPortal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8 mt-20">
        <WelcomeHeader />

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="goals">Spiritual Goals</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="ministry">Ministry</TabsTrigger>
            <TabsTrigger value="giving">Giving</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <DashboardStats />
            <QuickActions />
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <SpiritualGoalsTab />
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <EventsTab />
          </TabsContent>

          <TabsContent value="ministry" className="space-y-6">
            <MinistryTab />
          </TabsContent>

          <TabsContent value="giving" className="space-y-6">
            <GivingTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PersonalMemberPortal;
