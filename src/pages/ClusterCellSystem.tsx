
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Users, 
  Globe, 
  Building, 
  Home,
  Crown,
  Navigation as NavigationIcon,
  BarChart3,
  Settings,
  UserPlus,
  Phone,
  Mail,
  Calendar,
  Target,
  TrendingUp
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { HierarchyManagementDialog } from "@/components/HierarchyManagementDialog";
import { useState } from "react";

const ClusterCellSystem = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [managementDialog, setManagementDialog] = useState<{
    open: boolean;
    level: string;
    name: string;
    data: any;
  }>({
    open: false,
    level: "",
    name: "",
    data: {}
  });

  const handleManage = (level: string, name: string, data: any) => {
    if (level === "Cluster" && name === "Downtown LA") {
      navigate('/cluster-management');
    } else {
      setManagementDialog({
        open: true,
        level,
        name,
        data
      });
    }
  };

  const handleCall = (leaderName: string, phone: string) => {
    toast({
      title: `Calling ${leaderName}`,
      description: `Initiating call to ${phone}...`,
    });
  };

  const handleMessage = (leaderName: string) => {
    navigate('/integrated-messaging');
  };

  const handleAppointNewLeader = () => {
    navigate('/appoint-cell-leader');
  };

  const handleRunAutoAssignment = () => {
    navigate('/gps-configuration');
  };

  const handleConfigureRules = () => {
    navigate('/gps-configuration');
  };

  const handleCreateCluster = () => {
    navigate('/cluster-management');
  };

  const handleBoundarySettings = () => {
    navigate('/cluster-management');
  };

  const handlePerformanceReports = () => {
    navigate('/analytics-dashboard');
  };

  const handleCreateCell = () => {
    navigate('/cell-management');
  };

  const handleAssignMembers = () => {
    navigate('/cell-management');
  };

  const handleScheduleMeetings = () => {
    navigate('/cell-management');
  };

  const handleSaveConfiguration = () => {
    toast({
      title: "Configuration Saved",
      description: "System settings have been updated successfully.",
    });
  };

  const hierarchyData = [
    { level: "Country", name: "United States", members: "15,420", clusters: "45", icon: Globe, color: "from-blue-500 to-blue-600" },
    { level: "State", name: "California", members: "3,240", clusters: "12", icon: Building, color: "from-green-500 to-green-600" },
    { level: "City", name: "Los Angeles", members: "890", clusters: "4", icon: MapPin, color: "from-purple-500 to-purple-600" },
    { level: "Cluster", name: "Downtown LA", members: "156", cells: "8", icon: Users, color: "from-orange-500 to-orange-600" },
    { level: "Cell", name: "Hope Cell", members: "23", leader: "John Smith", icon: Home, color: "from-red-500 to-red-600" }
  ];

  const cellLeaders = [
    { name: "John Smith", cell: "Hope Cell", members: 23, location: "Downtown LA", phone: "+1 (555) 123-4567", email: "john@church.org" },
    { name: "Sarah Johnson", cell: "Faith Cell", members: 19, location: "Beverly Hills", phone: "+1 (555) 234-5678", email: "sarah@church.org" },
    { name: "Michael Brown", cell: "Grace Cell", members: 21, location: "Hollywood", phone: "+1 (555) 345-6789", email: "michael@church.org" },
    { name: "Emily Davis", cell: "Love Cell", members: 18, location: "Santa Monica", phone: "+1 (555) 456-7890", email: "emily@church.org" }
  ];

  const gpsAssignments = [
    { name: "Maria Garcia", address: "123 Main St, Los Angeles", assignedCell: "Hope Cell", distance: "0.8 miles", status: "Auto-assigned" },
    { name: "David Wilson", address: "456 Oak Ave, Beverly Hills", assignedCell: "Faith Cell", distance: "1.2 miles", status: "Manual Override" },
    { name: "Lisa Chen", address: "789 Pine Rd, Hollywood", assignedCell: "Grace Cell", distance: "0.5 miles", status: "Auto-assigned" },
    { name: "Robert Taylor", address: "321 Elm St, Santa Monica", assignedCell: "Love Cell", distance: "0.9 miles", status: "Pending Review" }
  ];

  const analytics = {
    totalMembers: 15420,
    totalClusters: 45,
    averageCellSize: 21,
    growthRate: 8.5,
    activeLeaders: 234,
    coverage: 95.2
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 mt-16 sm:mt-20">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 break-words">Cluster & Cell System</h1>
              <p className="text-sm sm:text-base text-slate-600 mt-1">Geographic organization and GPS-based member assignment</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-green-100 text-green-700 text-xs sm:text-sm">Smart Location</Badge>
            <Badge className="bg-blue-100 text-blue-700 text-xs sm:text-sm">Auto-Assignment</Badge>
            <Badge className="bg-purple-100 text-purple-700 text-xs sm:text-sm">Hierarchical</Badge>
          </div>
        </div>

        <Tabs defaultValue="hierarchy" className="w-full">
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5 mb-6 sm:mb-8 h-auto">
            <TabsTrigger value="hierarchy" className="text-xs sm:text-sm px-2 sm:px-3 py-2">Hierarchy</TabsTrigger>
            <TabsTrigger value="leaders" className="text-xs sm:text-sm px-2 sm:px-3 py-2">Leaders</TabsTrigger>
            <TabsTrigger value="gps" className="text-xs sm:text-sm px-2 sm:px-3 py-2">GPS</TabsTrigger>
            <TabsTrigger value="analytics" className="text-xs sm:text-sm px-2 sm:px-3 py-2 hidden sm:block">Analytics</TabsTrigger>
            <TabsTrigger value="management" className="text-xs sm:text-sm px-2 sm:px-3 py-2 hidden sm:block">Management</TabsTrigger>
          </TabsList>

          {/* Hierarchy Tab */}
          <TabsContent value="hierarchy" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl">Geographic Hierarchy Structure</CardTitle>
                <CardDescription className="text-sm">Five-tier organization from Country to Cell level</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {hierarchyData.map((level, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg bg-white shadow-sm">
                      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${level.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <level.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                            <h4 className="font-semibold text-sm sm:text-base">{level.level}</h4>
                            <Badge variant="outline" className="text-xs self-start sm:self-auto">{level.name}</Badge>
                          </div>
                          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-slate-600">
                            <span>{level.members} members</span>
                            {level.clusters && <span>{level.clusters} clusters</span>}
                            {level.cells && <span>{level.cells} cells</span>}
                            {level.leader && <span className="hidden sm:inline">Leader: {level.leader}</span>}
                          </div>
                          {level.leader && (
                            <span className="block sm:hidden text-xs text-slate-600 mt-1">Leader: {level.leader}</span>
                          )}
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleManage(level.level, level.name, {
                          members: level.members,
                          clusters: level.clusters,
                          cells: level.cells,
                          leader: level.leader
                        })}
                        className="w-full sm:w-auto text-xs sm:text-sm"
                      >
                        <Settings className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Manage
                      </Button>
                    </div>
                    {index < hierarchyData.length - 1 && (
                      <div className="flex justify-center my-2">
                        <div className="w-0.5 h-4 sm:h-6 bg-slate-300"></div>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cell Leaders Tab */}
          <TabsContent value="leaders" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl">Cell Leaders Directory</CardTitle>
                <CardDescription className="text-sm">Manage and connect with cell leaders across the region</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {cellLeaders.map((leader, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg bg-white shadow-sm">
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm sm:text-base">{leader.name}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 break-words">{leader.cell} • {leader.location}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {leader.members} members
                          </span>
                          <span className="flex items-center gap-1 break-all">
                            <Phone className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{leader.phone}</span>
                          </span>
                          <span className="flex items-center gap-1 break-all">
                            <Mail className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{leader.email}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <Button variant="outline" size="sm" onClick={() => handleCall(leader.name, leader.phone)} className="flex-1 sm:flex-none text-xs sm:text-sm">
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Call
                      </Button>
                      <Button size="sm" onClick={() => handleMessage(leader.name)} className="flex-1 sm:flex-none text-xs sm:text-sm">
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Message
                      </Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full text-sm sm:text-base py-3 sm:py-2" onClick={handleAppointNewLeader}>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Appoint New Cell Leader
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* GPS Assignment Tab */}
          <TabsContent value="gps" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl">GPS-Based Member Assignment</CardTitle>
                <CardDescription className="text-sm">Automatic cell assignment based on member location</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {gpsAssignments.map((assignment, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg bg-white shadow-sm">
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <NavigationIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm sm:text-base">{assignment.name}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 break-words">{assignment.address}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1">
                          <span className="text-xs text-slate-500">→ {assignment.assignedCell}</span>
                          <Badge variant="outline" className="text-xs self-start sm:self-auto">{assignment.distance}</Badge>
                        </div>
                      </div>
                    </div>
                    <Badge variant={assignment.status === 'Auto-assigned' ? 'default' : 
                                   assignment.status === 'Manual Override' ? 'secondary' : 'destructive'}
                           className="self-start sm:self-auto text-xs">
                      {assignment.status}
                    </Badge>
                  </div>
                ))}
                <div className="flex flex-col sm:flex-row gap-2 pt-4">
                  <Button className="flex-1 text-sm sm:text-base py-3 sm:py-2" onClick={handleRunAutoAssignment}>
                    <NavigationIcon className="w-4 h-4 mr-2" />
                    Run Auto-Assignment
                  </Button>
                  <Button variant="outline" className="flex-1 text-sm sm:text-base py-3 sm:py-2" onClick={handleConfigureRules}>
                    <Settings className="w-4 h-4 mr-2" />
                    Configure Rules
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
              <Card>
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="text-xs sm:text-sm font-medium flex items-center gap-2">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    <span className="truncate">Total Members</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg sm:text-2xl font-bold text-blue-600">{analytics.totalMembers.toLocaleString()}</div>
                  <p className="text-xs text-slate-600">Across all clusters</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="text-xs sm:text-sm font-medium flex items-center gap-2">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    <span className="truncate">Active Clusters</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg sm:text-2xl font-bold text-green-600">{analytics.totalClusters}</div>
                  <p className="text-xs text-slate-600">Geographic regions</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="text-xs sm:text-sm font-medium flex items-center gap-2">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                    <span className="truncate">Growth Rate</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg sm:text-2xl font-bold text-purple-600">{analytics.growthRate}%</div>
                  <p className="text-xs text-slate-600">Monthly growth</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="text-xs sm:text-sm font-medium flex items-center gap-2">
                    <Home className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                    <span className="truncate">Avg Cell Size</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg sm:text-2xl font-bold text-orange-600">{analytics.averageCellSize}</div>
                  <p className="text-xs text-slate-600">Members per cell</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="text-xs sm:text-sm font-medium flex items-center gap-2">
                    <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                    <span className="truncate">Active Leaders</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg sm:text-2xl font-bold text-red-600">{analytics.activeLeaders}</div>
                  <p className="text-xs text-slate-600">Cell & cluster leaders</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="text-xs sm:text-sm font-medium flex items-center gap-2">
                    <Target className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                    <span className="truncate">Coverage</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg sm:text-2xl font-bold text-yellow-600">{analytics.coverage}%</div>
                  <p className="text-xs text-slate-600">Geographic coverage</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl">Regional Performance</CardTitle>
                <CardDescription className="text-sm">Growth metrics by geographic region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-sm sm:text-base">California</span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-right sm:text-left">
                      <span className="text-xs sm:text-sm text-slate-600">3,240 members</span>
                      <Badge className="bg-green-100 text-green-700 text-xs">+12% growth</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-sm sm:text-base">Texas</span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-right sm:text-left">
                      <span className="text-xs sm:text-sm text-slate-600">2,890 members</span>
                      <Badge className="bg-green-100 text-green-700 text-xs">+8% growth</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium text-sm sm:text-base">New York</span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-right sm:text-left">
                      <span className="text-xs sm:text-sm text-slate-600">2,560 members</span>
                      <Badge className="bg-green-100 text-green-700 text-xs">+15% growth</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Management Tab */}
          <TabsContent value="management" className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg sm:text-xl">Cluster Management</CardTitle>
                  <CardDescription className="text-sm">Create and manage geographic clusters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <Button className="w-full text-sm sm:text-base py-3 sm:py-2" onClick={handleCreateCluster}>
                    <MapPin className="w-4 h-4 mr-2" />
                    Create New Cluster
                  </Button>
                  <Button variant="outline" className="w-full text-sm sm:text-base py-3 sm:py-2" onClick={handleBoundarySettings}>
                    <Settings className="w-4 h-4 mr-2" />
                    Boundary Settings
                  </Button>
                  <Button variant="outline" className="w-full text-sm sm:text-base py-3 sm:py-2" onClick={handlePerformanceReports}>
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Performance Reports
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg sm:text-xl">Cell Administration</CardTitle>
                  <CardDescription className="text-sm">Manage individual cell groups</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <Button className="w-full text-sm sm:text-base py-3 sm:py-2" onClick={handleCreateCell}>
                    <Home className="w-4 h-4 mr-2" />
                    Create New Cell
                  </Button>
                  <Button variant="outline" className="w-full text-sm sm:text-base py-3 sm:py-2" onClick={handleAssignMembers}>
                    <UserPlus className="w-4 h-4 mr-2" />
                    Assign Members
                  </Button>
                  <Button variant="outline" className="w-full text-sm sm:text-base py-3 sm:py-2" onClick={handleScheduleMeetings}>
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Meetings
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl">System Configuration</CardTitle>
                <CardDescription className="text-sm">Configure GPS assignment rules and system settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Maximum Distance (miles)</label>
                    <input className="w-full px-3 py-2 border rounded-md text-sm" defaultValue="2.5" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Auto-Assignment</label>
                    <select className="w-full px-3 py-2 border rounded-md text-sm">
                      <option>Enabled</option>
                      <option>Manual Review</option>
                      <option>Disabled</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Cell Capacity Limit</label>
                    <input className="w-full px-3 py-2 border rounded-md text-sm" defaultValue="25" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Notification Settings</label>
                    <select className="w-full px-3 py-2 border rounded-md text-sm">
                      <option>Real-time</option>
                      <option>Daily Summary</option>
                      <option>Weekly Report</option>
                    </select>
                  </div>
                </div>
                <Button className="w-full mt-4 text-sm sm:text-base py-3 sm:py-2" onClick={handleSaveConfiguration}>
                  <Settings className="w-4 h-4 mr-2" />
                  Save Configuration
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <HierarchyManagementDialog
          open={managementDialog.open}
          onOpenChange={(open) => setManagementDialog(prev => ({ ...prev, open }))}
          level={managementDialog.level}
          name={managementDialog.name}
          data={managementDialog.data}
        />
      </div>
    </div>
  );
};

export default ClusterCellSystem;
