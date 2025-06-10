
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { SearchBar } from "./SearchBar";
import { NotificationBell } from "./NotificationBell";
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
        <main className="flex-1 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 sm:h-16 flex items-center justify-between border-b bg-white/90 backdrop-blur-md sticky top-0 z-40 px-3 sm:px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="lg:hidden">
                <Menu className="h-4 w-4" />
              </SidebarTrigger>
              <div className="hidden sm:block">
                <SidebarTrigger className="hidden lg:flex">
                  <Menu className="h-4 w-4" />
                </SidebarTrigger>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden sm:block">
                <SearchBar />
              </div>
              <NotificationBell />
            </div>
          </header>
          <main className="flex-1 pt-2 sm:pt-4 px-3 sm:px-4 lg:px-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
