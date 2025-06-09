
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Menu } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    // Show layout without sidebar for non-signed-in users
    return (
      <div className="min-h-screen flex flex-col w-full">
        <main className="flex-1">
          {children}
        </main>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 flex items-center border-b bg-white/90 backdrop-blur-md sticky top-0 z-40">
            <SidebarTrigger className="ml-4">
              <Menu className="h-4 w-4" />
            </SidebarTrigger>
          </header>
          <main className="flex-1 pt-4">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
