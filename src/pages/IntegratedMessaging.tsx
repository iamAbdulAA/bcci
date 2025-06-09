
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { ChatList } from "@/components/messaging/ChatList";
import { ChatWindow } from "@/components/messaging/ChatWindow";
import { PrayerRequestCard } from "@/components/messaging/PrayerRequestCard";
import { NotificationCard } from "@/components/messaging/NotificationCard";
import { ComposeMessage } from "@/components/messaging/ComposeMessage";
import { MessagingSettings } from "@/components/messaging/MessagingSettings";
import { Chat, PrayerRequest, Message, EventNotification } from "@/types/messaging";

const IntegratedMessaging = () => {
  const { toast } = useToast();
  const [selectedChat, setSelectedChat] = useState("Downtown LA Cluster");
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [subject, setSubject] = useState("");

  const clusterChats: Chat[] = [
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

  const prayerRequests: PrayerRequest[] = [
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

  const recentMessages: Message[] = [
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

  const eventNotifications: EventNotification[] = [
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

  const handleSchedule = () => {
    toast({ 
      title: "Schedule", 
      description: "Message scheduling feature coming soon!" 
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
              <ChatList 
                chats={clusterChats}
                selectedChat={selectedChat}
                onChatSelect={setSelectedChat}
              />
            </div>
            <div className="lg:col-span-2">
              <ChatWindow
                selectedChat={selectedChat}
                messages={recentMessages}
                message={message}
                onMessageChange={setMessage}
                onSendMessage={handleSendMessage}
                onJoinCall={handleJoinCall}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="prayer" className="space-y-6">
          <div className="space-y-4">
            {prayerRequests.map((request, index) => (
              <PrayerRequestCard
                key={index}
                request={request}
                onPrayerResponse={handlePrayerResponse}
              />
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
              <NotificationCard key={index} notification={notification} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="compose" className="space-y-6">
          <ComposeMessage
            subject={subject}
            newMessage={newMessage}
            onSubjectChange={setSubject}
            onMessageChange={setNewMessage}
            onSendMessage={handleSendNewMessage}
            onSchedule={handleSchedule}
          />
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <MessagingSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IntegratedMessaging;
