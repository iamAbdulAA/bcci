
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MemberDirectory } from "@/components/MemberDirectory";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, Calendar, Heart, Plus, Star } from "lucide-react";

const Community = () => {
  const discussions = [
    {
      title: "Prayer for Healing Service",
      author: "Pastor Johnson",
      replies: 23,
      lastActivity: "2 hours ago",
      category: "Prayer"
    },
    {
      title: "Youth Bible Study Planning",
      author: "Sarah Williams",
      replies: 15,
      lastActivity: "4 hours ago",
      category: "Events"
    },
    {
      title: "Community Outreach Ideas",
      author: "Michael Brown",
      replies: 31,
      lastActivity: "1 day ago",
      category: "Outreach"
    }
  ];

  const testimonies = [
    {
      author: "Emma Davis",
      title: "Healing Through Faith",
      excerpt: "I want to share how prayer and community support helped me through...",
      date: "2 days ago",
      likes: 12
    },
    {
      author: "David Wilson",
      title: "Finding Purpose in Service",
      excerpt: "Volunteering at the community center opened my eyes to...",
      date: "1 week ago",
      likes: 8
    }
  ];

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Community Hub</h1>
        <p className="text-slate-600">Connect, share, and grow together in faith</p>
      </div>

      <Tabs defaultValue="directory" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="directory">Directory</TabsTrigger>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="testimonies">Testimonies</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="directory" className="space-y-6">
          <MemberDirectory />
        </TabsContent>

        <TabsContent value="discussions" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Community Discussions</h2>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Discussion
            </Button>
          </div>
          
          <div className="space-y-4">
            {discussions.map((discussion, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{discussion.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span>by {discussion.author}</span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          {discussion.replies} replies
                        </span>
                        <span>{discussion.lastActivity}</span>
                      </div>
                    </div>
                    <Badge variant="outline">{discussion.category}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="testimonies" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Testimonies</h2>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Share Testimony
            </Button>
          </div>
          
          <div className="space-y-4">
            {testimonies.map((testimony, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{testimony.title}</h3>
                  <p className="text-slate-600 mb-4">{testimony.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span>by {testimony.author}</span>
                      <span>{testimony.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-600">
                      <Heart className="w-4 h-4" />
                      {testimony.likes}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Community Events</h2>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-blue-100 text-blue-700">This Week</Badge>
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Bible Study</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Weekly Bible study focusing on the Gospel of John</p>
                <div className="text-sm text-slate-500">
                  <p>Wednesday, 7:00 PM</p>
                  <p>Community Center</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-100 text-green-700">Next Week</Badge>
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <CardTitle className="text-lg">Community Outreach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Volunteer at the local food bank and homeless shelter</p>
                <div className="text-sm text-slate-500">
                  <p>Saturday, 9:00 AM</p>
                  <p>City Food Bank</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-purple-100 text-purple-700">Monthly</Badge>
                  <Heart className="w-5 h-5 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Prayer Meeting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Monthly gathering for corporate prayer and fellowship</p>
                <div className="text-sm text-slate-500">
                  <p>First Friday, 7:30 PM</p>
                  <p>Main Sanctuary</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Community;
