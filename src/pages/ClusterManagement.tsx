
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  ArrowLeft,
  Settings,
  Users,
  BarChart3,
  Plus
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const ClusterManagement = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCreateCluster = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Cluster Created",
      description: "New cluster has been successfully created.",
    });
  };

  const handleBoundarySettings = () => {
    toast({
      title: "Boundary Settings",
      description: "Opening geographic boundary configuration...",
    });
  };

  const clusters = [
    { name: "Downtown LA", cells: 8, members: 156, leader: "Pastor Smith", status: "Active" },
    { name: "Beverly Hills", cells: 6, members: 142, leader: "Pastor Johnson", status: "Active" },
    { name: "Hollywood", cells: 7, members: 168, leader: "Pastor Brown", status: "Active" },
    { name: "Santa Monica", cells: 5, members: 98, leader: "Pastor Davis", status: "Growing" }
  ];

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
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Cluster Management</h1>
              <p className="text-slate-600">Create and manage geographic clusters</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Cluster</CardTitle>
                <CardDescription>Define a new geographic cluster for cell organization</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateCluster} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Cluster Name</label>
                      <input className="w-full px-3 py-2 border rounded-md" placeholder="Enter cluster name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Region</label>
                      <select className="w-full px-3 py-2 border rounded-md" required>
                        <option value="">Select region</option>
                        <option value="la-west">LA West</option>
                        <option value="la-central">LA Central</option>
                        <option value="la-east">LA East</option>
                        <option value="la-south">LA South</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Cluster Leader</label>
                      <select className="w-full px-3 py-2 border rounded-md" required>
                        <option value="">Select leader</option>
                        <option value="pastor-williams">Pastor Williams</option>
                        <option value="pastor-martinez">Pastor Martinez</option>
                        <option value="pastor-anderson">Pastor Anderson</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Target Capacity</label>
                      <input type="number" className="w-full px-3 py-2 border rounded-md" placeholder="150" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Geographic Boundaries</label>
                    <textarea 
                      className="w-full px-3 py-2 border rounded-md" 
                      rows={3}
                      placeholder="Define the geographic boundaries (zip codes, neighborhoods, landmarks)"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Cluster
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Existing Clusters</CardTitle>
                <CardDescription>Manage current cluster configurations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {clusters.map((cluster, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-white">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{cluster.name}</h4>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span>{cluster.cells} cells</span>
                          <span>{cluster.members} members</span>
                          <span>Leader: {cluster.leader}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={cluster.status === 'Active' ? 'default' : 'secondary'}>
                        {cluster.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4 mr-2" />
                        Manage
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Cluster management tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full" onClick={handleBoundarySettings}>
                  <Settings className="w-4 h-4 mr-2" />
                  Boundary Settings
                </Button>
                <Button variant="outline" className="w-full" onClick={() => navigate('/analytics-dashboard')}>
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Performance Reports
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cluster Statistics</CardTitle>
                <CardDescription>Current cluster metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Total Clusters</span>
                    <Badge variant="outline">4</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Total Cells</span>
                    <Badge className="bg-green-100 text-green-700">26</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Total Members</span>
                    <Badge className="bg-blue-100 text-blue-700">564</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Avg Growth Rate</span>
                    <Badge className="bg-purple-100 text-purple-700">+8.5%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Updates</CardTitle>
                <CardDescription>Latest cluster changes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Downtown LA added 2 new cells</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Santa Monica cluster created</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Hollywood boundaries updated</span>
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

export default ClusterManagement;
