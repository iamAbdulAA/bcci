
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  User,
  Users,
  BookOpen,
  Play,
  BarChart3,
  Eye,
  MessageSquare,
  Trophy,
  UserPlus,
  MapPin,
  Settings,
  Menu,
  X
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Personal Portal", url: "/personal-member-portal", icon: User },
  { title: "Cluster & Cell System", url: "/cluster-cell-system", icon: Users },
  { title: "Digital Discipleship", url: "/digital-discipleship-flow", icon: BookOpen },
  { title: "Live Worship", url: "/live-on-demand-worship", icon: Play },
  { title: "Analytics", url: "/analytics-dashboard", icon: BarChart3 },
  { title: "CV Recognition", url: "/spiritual-cv-recognition", icon: Eye },
  { title: "Messaging", url: "/integrated-messaging", icon: MessageSquare },
  { title: "Gamification", url: "/gamification-system", icon: Trophy },
];

const managementItems = [
  { title: "Appoint Cell Leader", url: "/appoint-cell-leader", icon: UserPlus },
  { title: "GPS Configuration", url: "/gps-configuration", icon: MapPin },
  { title: "Cluster Management", url: "/cluster-management", icon: Settings },
  { title: "Cell Management", url: "/cell-management", icon: Settings },
];

export function AppSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-blue-100 text-blue-700 font-medium" : "hover:bg-slate-50";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible>
      <SidebarTrigger className="m-2 self-end" />
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
