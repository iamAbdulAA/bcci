
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  ArrowLeft,
  UserPlus,
  Calendar,
  Users,
  Plus
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const CellManagement = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCreateCell = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Cell Created",
      description: "New cell has been successfully created.",
    });
  };

  const handleAssignMembers = () => {
    toast({
      title: "Member Assignment",
      description: "Opening member assignment interface...",
    });
  };

  const handleScheduleMeetings = () => {
    toast({
      title: "Meeting Scheduler",
      description: "Opening meeting scheduler...",
    });
  };

  const cells = [
    { name: "Hope Cell", leader: "John Smith", members: 23, cluster: "Downtown LA", meetingDay: "Wednesday", status: "Active" },
    { name: "Faith Cell", leader: "Sarah Johnson", members: 19, cluster: "Beverly Hills", meetingDay: "Thursday", status: "Active" },
    { name: "Grace Cell", leader: "Michael Brown", members: 21, cluster: "Hollywood", meetingDay: "Friday", status: "Growing" },
    { name: "Love Cell", leader: "Emily Davis", members: 18, cluster: "Santa Monica", meetingDay: "Tuesday", status: "Active" }
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
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <Home className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Cell Management</h1>
              <p className="text-slate-600">Create and manage individual cell groups</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Cell</CardTitle>
                <CardDescription>Set up a new cell group within a cluster</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateCell} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Cell Name</label>
                      <input className="w-full px-3 py-2 border rounded-md" placeholder="Enter cell name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Cluster</label>
                      <select className="w-full px-3 py-2 border rounded-md" required>
                        <option value="">Select cluster</option>
                        <option value="downtown-la">Downtown LA</option>
                        <option value="beverly-hills">Beverly Hills</option>
                        <option value="hollywood">Hollywood</option>
                        <option value="santa-monica">Santa Monica</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Cell Leader</label>
                      <select className="w-full px-3 py-2 border rounded-md" required>
                        <option value="">Select leader</option>
                        <option value="john-smith">John Smith</option>
                        <option value="sarah-johnson">Sarah Johnson</option>
                        <option value="michael-brown">Michael Brown</option>
                        <option value="emily-davis">Emily Davis</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Meeting Day</label>
                      <select className="w-full px-3 py-2 border rounded-md" required>
                        <option value="">Select day</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Meeting Time</label>
                      <input type="time" className="w-full px-3 py-2 border rounded-md" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Capacity</label>
                      <input type="number" className="w-full px-3 py-2 border rounded-md" placeholder="25" defaultValue="25" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Meeting Location</label>
                    <input className="w-full px-3 py-2 border rounded-md" placeholder="Enter meeting address" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Cell Description</label>
                    <textarea 
                      className="w-full px-3 py-2 border rounded-md" 
                      rows={3}
                      placeholder="Describe the cell's focus, target audience, or special characteristics"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Cell
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Existing Cells</CardTitle>
                <CardDescription>Manage current cell groups</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {cells.map((cell, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-white">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <Home className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{cell.name}</h4>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span>Leader: {cell.leader}</span>
                          <span>{cell.members} members</span>
                          <span>{cell.cluster}</span>
                          <span>{cell.meetingDay}s</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={cell.status === 'Active' ? 'default' : 'secondary'}>
                        {cell.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        Edit
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
                <CardDescription>Cell management tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full" onClick={handleAssignMembers}>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Assign Members
                </Button>
                <Button variant="outline" className="w-full" onClick={handleScheduleMeetings}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Meetings
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cell Statistics</CardTitle>
                <CardDescription>Current cell metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Total Cells</span>
                    <Badge variant="outline">4</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Total Members</span>
                    <Badge className="bg-green-100 text-green-700">81</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Avg Cell Size</span>
                    <Badge className="bg-blue-100 text-blue-700">20</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Growth Rate</span>
                    <Badge className="bg-purple-100 text-purple-700">+12%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Meeting Schedule</CardTitle>
                <CardDescription>This week's meetings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-xs space-y-2">
                  <div className="flex justify-between">
                    <span>Tuesday - Love Cell</span>
                    <span className="text-slate-500">7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wednesday - Hope Cell</span>
                    <span className="text-slate-500">7:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thursday - Faith Cell</span>
                    <span className="text-slate-500">7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday - Grace Cell</span>
                    <span className="text-slate-500">7:30 PM</span>
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

export default CellManagement;
