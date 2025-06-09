
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Settings, 
  Users, 
  BarChart3, 
  MessageSquare, 
  UserPlus, 
  Edit,
  Save,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface HierarchyManagementDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  level: string;
  name: string;
  data: {
    members?: string;
    clusters?: string;
    cells?: string;
    leader?: string;
  };
}

export function HierarchyManagementDialog({ 
  open, 
  onOpenChange, 
  level, 
  name, 
  data 
}: HierarchyManagementDialogProps) {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: `${level} settings have been updated successfully.`,
    });
  };

  const handleSendMessage = () => {
    navigate('/integrated-messaging');
    onOpenChange(false);
  };

  const handleAppointLeader = () => {
    navigate('/appoint-cell-leader');
    onOpenChange(false);
  };

  const renderOverviewTab = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue={name} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <select className="w-full px-3 py-2 border rounded-md">
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
          </select>
        </div>
      </div>
      
      {level === "Cell" && (
        <div className="space-y-2">
          <Label htmlFor="leader">Cell Leader</Label>
          <div className="flex gap-2">
            <Input id="leader" defaultValue={data.leader} readOnly />
            <Button variant="outline" onClick={handleAppointLeader}>
              <UserPlus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea 
          id="description" 
          placeholder={`Description for ${name} ${level.toLowerCase()}`}
          rows={3}
        />
      </div>

      <Button onClick={handleSaveSettings} className="w-full">
        <Save className="w-4 h-4 mr-2" />
        Save Changes
      </Button>
    </div>
  );

  const renderMembersTab = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Total Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {data.members || "0"}
            </div>
          </CardContent>
        </Card>
        
        {data.clusters && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Clusters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {data.clusters}
              </div>
            </CardContent>
          </Card>
        )}
        
        {data.cells && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Cells</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">
                {data.cells}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="space-y-2">
        <h4 className="font-medium">Recent Members</h4>
        <div className="space-y-2">
          {["John Smith", "Sarah Johnson", "Michael Brown"].map((member, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <span>{member}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleSendMessage}>
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMessagingTab = () => (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Send Message
          </CardTitle>
          <CardDescription>
            Send a message to all members in this {level.toLowerCase()}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Message subject" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              placeholder="Type your message here..."
              rows={4}
            />
          </div>
          <div className="flex gap-2">
            <Button onClick={handleSendMessage} className="flex-1">
              <MessageSquare className="w-4 h-4 mr-2" />
              Send Message
            </Button>
            <Button variant="outline" onClick={handleSendMessage}>
              <MessageSquare className="w-4 h-4 mr-2" />
              Open Messaging
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Manage {level}: {name}
          </DialogTitle>
          <DialogDescription>
            Configure settings and manage this {level.toLowerCase()}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="messaging">Messaging</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-4">
            {renderOverviewTab()}
          </TabsContent>

          <TabsContent value="members" className="mt-4">
            {renderMembersTab()}
          </TabsContent>

          <TabsContent value="messaging" className="mt-4">
            {renderMessagingTab()}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
