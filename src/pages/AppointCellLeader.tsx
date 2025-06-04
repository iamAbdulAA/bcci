
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  UserPlus, 
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const AppointCellLeader = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Cell Leader Appointed",
      description: "New cell leader has been successfully appointed.",
    });
    navigate('/cluster-cell-system');
  };

  const candidates = [
    { name: "David Wilson", experience: "3 years", currentRole: "Assistant Leader", phone: "+1 (555) 234-5678", email: "david@church.org", location: "Beverly Hills" },
    { name: "Lisa Chen", experience: "2 years", currentRole: "Small Group Coordinator", phone: "+1 (555) 345-6789", email: "lisa@church.org", location: "Hollywood" },
    { name: "Robert Taylor", experience: "4 years", currentRole: "Youth Leader", phone: "+1 (555) 456-7890", email: "robert@church.org", location: "Santa Monica" }
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
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Appoint Cell Leader</h1>
              <p className="text-slate-600">Select and appoint a new cell leader from qualified candidates</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Cell Information</CardTitle>
              <CardDescription>Configure the cell details for the new leader</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Cell Name</label>
                  <input className="w-full px-3 py-2 border rounded-md" placeholder="Enter cell name" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <select className="w-full px-3 py-2 border rounded-md" required>
                    <option value="">Select location</option>
                    <option value="downtown-la">Downtown LA</option>
                    <option value="beverly-hills">Beverly Hills</option>
                    <option value="hollywood">Hollywood</option>
                    <option value="santa-monica">Santa Monica</option>
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
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Select Cell Leader</CardTitle>
              <CardDescription>Choose from qualified candidates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {candidates.map((candidate, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-slate-50 cursor-pointer">
                  <label className="flex items-center gap-4 cursor-pointer">
                    <input type="radio" name="leader" value={candidate.name} className="w-4 h-4" required />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{candidate.name}</h4>
                        <Badge variant="outline">{candidate.currentRole}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {candidate.experience} experience
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {candidate.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {candidate.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {candidate.email}
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Leadership Guidelines</CardTitle>
              <CardDescription>Instructions and expectations for the new cell leader</CardDescription>
            </CardHeader>
            <CardContent>
              <textarea 
                className="w-full px-3 py-2 border rounded-md" 
                rows={4}
                placeholder="Enter specific guidelines, expectations, and instructions for the new cell leader..."
              />
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button type="submit" className="flex-1">
              <UserPlus className="w-4 h-4 mr-2" />
              Appoint Cell Leader
            </Button>
            <Button type="button" variant="outline" onClick={() => navigate('/cluster-cell-system')}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointCellLeader;
