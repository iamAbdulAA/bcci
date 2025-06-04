
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  ArrowLeft,
  Navigation as NavigationIcon,
  MapPin,
  Users,
  Target
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const GPSConfiguration = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Configuration Saved",
      description: "GPS assignment rules have been updated successfully.",
    });
  };

  const handleRunAssignment = () => {
    toast({
      title: "Auto-Assignment Started",
      description: "Processing GPS-based member assignments...",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8 mt-20">
        <div className="mb-8">
          <Button variant="outline" onClick={() => navigate('/cluster-cell-system')} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cluster System
          </Button>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">GPS Assignment Configuration</h1>
              <p className="text-slate-600">Configure automatic member assignment rules based on location</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Assignment Rules</CardTitle>
                <CardDescription>Configure how members are automatically assigned to cells</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Maximum Distance (miles)</label>
                    <input type="number" className="w-full px-3 py-2 border rounded-md" defaultValue="2.5" step="0.1" />
                    <p className="text-xs text-slate-500">Maximum distance from member to cell meeting location</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Cell Capacity Limit</label>
                    <input type="number" className="w-full px-3 py-2 border rounded-md" defaultValue="25" />
                    <p className="text-xs text-slate-500">Maximum members per cell group</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Assignment Mode</label>
                    <select className="w-full px-3 py-2 border rounded-md">
                      <option value="automatic">Fully Automatic</option>
                      <option value="review">Manual Review Required</option>
                      <option value="suggest">Suggest Only</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Priority Factor</label>
                    <select className="w-full px-3 py-2 border rounded-md">
                      <option value="distance">Closest Distance</option>
                      <option value="capacity">Available Capacity</option>
                      <option value="balanced">Balanced Approach</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Configure when and how leaders are notified of assignments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Notification Frequency</label>
                    <select className="w-full px-3 py-2 border rounded-md">
                      <option value="immediate">Immediate</option>
                      <option value="daily">Daily Summary</option>
                      <option value="weekly">Weekly Report</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Notification Method</label>
                    <select className="w-full px-3 py-2 border rounded-md">
                      <option value="both">Email & SMS</option>
                      <option value="email">Email Only</option>
                      <option value="sms">SMS Only</option>
                      <option value="app">App Notification</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" defaultChecked />
                    <span className="text-sm">Notify when new member is assigned</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" defaultChecked />
                    <span className="text-sm">Notify when cell reaches capacity</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm">Notify when assignment fails</span>
                  </label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Boundaries</CardTitle>
                <CardDescription>Define geographic zones and restrictions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Service Area</label>
                  <textarea 
                    className="w-full px-3 py-2 border rounded-md" 
                    rows={3}
                    placeholder="Define the geographic boundaries for cell assignments (e.g., zip codes, neighborhoods, landmarks)"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Exclude Areas</label>
                    <input className="w-full px-3 py-2 border rounded-md" placeholder="Areas to exclude from assignment" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Priority Zones</label>
                    <input className="w-full px-3 py-2 border rounded-md" placeholder="High-priority assignment areas" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Run assignment operations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" onClick={handleRunAssignment}>
                  <NavigationIcon className="w-4 h-4 mr-2" />
                  Run Auto-Assignment
                </Button>
                <Button variant="outline" className="w-full" onClick={handleSave}>
                  <Settings className="w-4 h-4 mr-2" />
                  Save Configuration
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Statistics</CardTitle>
                <CardDescription>Assignment system status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Pending Assignments</span>
                    <Badge variant="outline">12</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Auto-Assigned Today</span>
                    <Badge className="bg-green-100 text-green-700">8</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Manual Review</span>
                    <Badge variant="secondary">4</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Coverage Rate</span>
                    <Badge className="bg-blue-100 text-blue-700">95.2%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest assignment actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Maria Garcia assigned to Hope Cell</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>David Wilson pending review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Lisa Chen assigned to Grace Cell</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPSConfiguration;
