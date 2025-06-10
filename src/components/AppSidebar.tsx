import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
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
import { SearchBar } from "./SearchBar";
import { NotificationBell } from "./NotificationBell";

const navigationItems = [
  { title: "Personal Portal", url: "/personal-member-portal", icon: User },
  { title: "Cluster & Cell System", url: "/cluster-cell-system", icon: Users },
  { title: "Digital Transformation", url: "/digital-transformation-flow", icon: BookOpen },
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

const settingsItems = [
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-blue-100 text-blue-700 font-medium" : "hover:bg-slate-50";

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      {/* Header with controls */}
      <div className="flex items-center justify-between p-2 border-b">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <SearchBar />
            <NotificationBell />
          </div>
        )}
        <SidebarTrigger />
      </div>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={isCollapsed ? item.title : undefined}>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
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
                  <SidebarMenuButton asChild tooltip={isCollapsed ? item.title : undefined}>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={isCollapsed ? item.title : undefined}>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
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
