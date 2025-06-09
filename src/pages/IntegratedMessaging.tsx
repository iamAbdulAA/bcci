import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  Users, 
  Heart, 
  Bell,
  Send,
  Search,
  Phone,
  Video,
  MoreHorizontal,
  Lock,
  Calendar,
  Paperclip
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const IntegratedMessaging = () => {
  const { toast } = useToast();
  const [selectedChat, setSelectedChat] = useState("Downtown LA Cluster");
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [subject, setSubject] = useState("");

  const clusterChats = [
    {
      name: "Downtown LA Cluster",
      lastMessage: "Prayer meeting moved to 7 PM tonight",
      lastSender: "Pastor Johnson",
      timestamp: "2 min ago",
      unread: 3,
      members: 156,
      type: "cluster"
    },
    {
      name: "Hope Cell Group",
      lastMessage: "Thanks for the birthday wishes everyone! 🎉",
      lastSender: "Sarah M.",
      timestamp: "15 min ago",
      unread: 0,
      members: 23,
      type: "cell"
    },
    {
      name: "Youth Ministry Team",
      lastMessage: "Event planning document shared",
      lastSender: "Mike B.",
      timestamp: "1 hour ago",
      unread: 5,
      members: 12,
      type: "ministry"
    }
  ];

  const prayerRequests = [
    {
      id: 1,
      requester: "Maria Garcia",
      request: "Please pray for my father's surgery on Friday. He's nervous but trusting God.",
      timestamp: "3 hours ago",
      responses: 12,
      privacy: "Cell Group Only",
      category: "Health"
    },
    {
      id: 2,
      requester: "David Wilson",
      request: "Seeking wisdom for a job decision. Two great opportunities, need God's guidance.",
      timestamp: "1 day ago",
      responses: 8,
      privacy: "Cluster Wide",
      category: "Guidance"
    },
    {
      id: 3,
      requester: "Anonymous",
      request: "Struggling with anxiety. Please pray for peace and strength.",
      timestamp: "2 days ago",
      responses: 15,
      privacy: "Leadership Only",
      category: "Mental Health"
    }
  ];

  const recentMessages = [
    {
      sender: "Pastor Johnson",
      message: "Good morning everyone! Don't forget about tonight's prayer meeting.",
      timestamp: "8:30 AM",
      group: "Downtown LA Cluster",
      isOwn: false
    },
    {
      sender: "You",
      message: "I'll be there! Should I bring anything?",
      timestamp: "8:35 AM", 
      group: "Downtown LA Cluster",
      isOwn: true
    },
    {
      sender: "Sarah Miller",
      message: "Could use prayer for my presentation tomorrow",
      timestamp: "Yesterday",
      group: "Hope Cell Group",
      isOwn: false
    }
  ];

  const eventNotifications = [
    {
      title: "Youth Conference Registration",
      message: "Early bird pricing ends in 48 hours",
      time: "1 hour ago",
      type: "event",
      priority: "high"
    },
    {
      title: "Cell Group Meeting",
      message: "Starting in 30 minutes at the Davis home",
      time: "30 min ago",
      type: "reminder",
      priority: "medium"
    },
    {
      title: "New Member Welcome",
      message: "Please welcome Jessica to our cell group!",
      time: "2 hours ago",
      type: "announcement",
      priority: "low"
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      toast({
        title: "Message Sent",
        description: `Your message has been sent to ${selectedChat}`,
      });
      setMessage("");
    }
  };

  const handleSendNewMessage = () => {
    if (newMessage.trim() && subject.trim()) {
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully",
      });
      setNewMessage("");
      setSubject("");
    }
  };

  const handlePrayerResponse = (action: string) => {
    toast({
      title: action === "pray" ? "Prayer Added" : "Response Sent",
      description: action === "pray" ? "You are now praying for this request" : "Your response has been sent",
    });
  };

  const handleJoinCall = (type: string) => {
    toast({
      title: `${type} Call`,
      description: `Starting ${type.toLowerCase()} call...`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 p-6">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Integrated Messaging</h1>
            <p className="text-slate-600">Connect with your cluster, cell group, and ministry teams</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge className="bg-teal-100 text-teal-700">Connected</Badge>
          <Badge className="bg-blue-100 text-blue-700">Secure</Badge>
          <Badge className="bg-green-100 text-green-700">Real-time</Badge>
        </div>
      </div>

      <Tabs defaultValue="chats" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="chats">Chats</TabsTrigger>
          <TabsTrigger value="prayer">Prayer Requests</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="compose">Compose</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="chats" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Active Chats</CardTitle>
                    <Button variant="outline" size="sm">
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 p-3">
                  {clusterChats.map((chat, index) => (
                    <div 
                      key={index} 
                      className={`p-3 rounded-lg hover:bg-slate-50 cursor-pointer border ${
                        selectedChat === chat.name ? 'bg-slate-100 border-blue-300' : ''
                      }`}
                      onClick={() => setSelectedChat(chat.name)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${
                            chat.type === 'cluster' ? 'bg-blue-500' :
                            chat.type === 'cell' ? 'bg-green-500' : 'bg-purple-500'
                          }`}></div>
                          <h4 className="font-medium text-sm">{chat.name}</h4>
                        </div>
                        {chat.unread > 0 && (
                          <Badge className="bg-red-500 text-white text-xs px-2 py-1">
                            {chat.unread}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mb-1">{chat.lastMessage}</p>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{chat.lastSender}</span>
                        <span>{chat.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="h-96">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{selectedChat}</CardTitle>
                        <CardDescription>156 members • 12 online</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleJoinCall("Audio")}>
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleJoinCall("Video")}>
                        <Video className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
                    {recentMessages.map((msg, index) => (
                      <div key={index} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs p-3 rounded-lg ${
                          msg.isOwn 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-slate-100 text-slate-800'
                        }`}>
                          {!msg.isOwn && <p className="text-xs font-medium mb-1">{msg.sender}</p>}
                          <p className="text-sm">{msg.message}</p>
                          <p className={`text-xs mt-1 ${msg.isOwn ? 'text-blue-100' : 'text-slate-500'}`}>
                            {msg.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 border-t pt-4">
                    <Button variant="outline" size="sm">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <input 
                      className="flex-1 px-3 py-2 border rounded-lg" 
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button size="sm" onClick={handleSendMessage}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="prayer" className="space-y-6">
          <div className="space-y-4">
            {prayerRequests.map((request, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{request.requester}</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <span>{request.timestamp}</span>
                          <Badge variant="outline">{request.category}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-slate-400" />
                      <span className="text-xs text-slate-500">{request.privacy}</span>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-4">{request.request}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">responses people praying</span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => handlePrayerResponse("pray")}>
                        <Heart className="w-4 h-4 mr-2" />
                        Pray
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handlePrayerResponse("respond")}>
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Respond
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button className="w-full" onClick={() => toast({ title: "Prayer Request Form", description: "Opening prayer request form..." })}>
            <Heart className="w-4 h-4 mr-2" />
            Submit Prayer Request
          </Button>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <div className="space-y-4">
            {eventNotifications.map((notification, index) => (
              <Card key={index} className={`border-l-4 ${
                notification.priority === 'high' ? 'border-red-500' :
                notification.priority === 'medium' ? 'border-orange-500' : 'border-blue-500'
              }`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        notification.type === 'event' ? 'bg-blue-100' :
                        notification.type === 'reminder' ? 'bg-orange-100' : 'bg-green-100'
                      }`}>
                        {notification.type === 'event' && <Calendar className="w-4 h-4 text-blue-600" />}
                        {notification.type === 'reminder' && <Bell className="w-4 h-4 text-orange-600" />}
                        {notification.type === 'announcement' && <MessageSquare className="w-4 h-4 text-green-600" />}
                      </div>
                      <div>
                        <h4 className="font-medium">{notification.title}</h4>
                        <p className="text-sm text-slate-600">{notification.message}</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500">{notification.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="compose" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Send Message</CardTitle>
              <CardDescription>Send messages to individuals, groups, or make announcements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">To:</label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option>Select recipient...</option>
                  <option>Downtown LA Cluster (156 members)</option>
                  <option>Hope Cell Group (23 members)</option>
                  <option>Youth Ministry Team (12 members)</option>
                  <option>Individual Member</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject:</label>
                <input 
                  className="w-full px-3 py-2 border rounded-md" 
                  placeholder="Message subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message:</label>
                <textarea 
                  className="w-full px-3 py-2 border rounded-md h-32" 
                  placeholder="Type your message here..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="urgent" />
                <label htmlFor="urgent" className="text-sm">Mark as urgent</label>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1" onClick={handleSendNewMessage}>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline" onClick={() => toast({ title: "Schedule", description: "Message scheduling feature coming soon!" })}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage how you receive messages and alerts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Cluster messages</span>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Cell group messages</span>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Prayer requests</span>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Event reminders</span>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Direct messages</span>
                  <input type="checkbox" defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Control your messaging privacy and security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Who can message you directly:</label>
                  <select className="w-full px-3 py-2 border rounded-md">
                    <option>Anyone in my cluster</option>
                    <option>Only cell group members</option>
                    <option>Only leadership</option>
                    <option>No one</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Read receipts</span>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Online status</span>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Message encryption</span>
                  <input type="checkbox" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IntegratedMessaging;
