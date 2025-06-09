import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Calendar, 
  Target, 
  Heart, 
  BookOpen, 
  Award, 
  MessageSquare,
  TrendingUp,
  Clock,
  CheckCircle,
  Star,
  Users,
  DollarSign,
  Bell,
  Edit
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { SetGoalDialog } from "@/components/SetGoalDialog";
import { ContributionDialog } from "@/components/ContributionDialog";
import { EditGoalDialog } from "@/components/EditGoalDialog";
import { useSpiritualGoals } from "@/contexts/SpiritualGoalsContext";

const PersonalMemberPortal = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { goals } = useSpiritualGoals();

  const upcomingEvents = [
    { title: "Sunday Worship Service", date: "Dec 8, 2024", time: "10:00 AM", status: "confirmed" },
    { title: "Cell Group Meeting", date: "Dec 10, 2024", time: "7:00 PM", status: "pending" },
    { title: "Youth Conference", date: "Dec 15, 2024", time: "6:00 PM", status: "confirmed" },
    { title: "Leadership Training", date: "Dec 20, 2024", time: "9:00 AM", status: "pending" }
  ];

  const ministryHistory = [
    { role: "Youth Ministry Leader", period: "2023 - Present", achievements: ["Led 15 youth to Christ", "Organized 3 camps"] },
    { role: "Worship Team Member", period: "2022 - 2023", achievements: ["Served 48 services", "Trained 2 new members"] },
    { role: "Cell Group Member", period: "2021 - Present", achievements: ["100% attendance", "Mentored 3 members"] }
  ];

  const contributionSummary = {
    totalThisYear: 2400,
    lastGift: 200,
    lastGiftDate: "Nov 28, 2024",
    frequency: "Monthly"
  };

  const handlePrayerRequest = () => {
    navigate('/integrated-messaging');
  };

  const handleDevotional = () => {
    navigate('/digital-discipleship-flow');
  };

  const handleRSVP = (eventTitle: string) => {
    toast({
      title: "RSVP Confirmed",
      description: `You're now registered for ${eventTitle}`,
    });
  };

  const handleContribution = () => {
    toast({
      title: "Contribution Portal",
      description: "Redirecting to secure giving platform...",
    });
  };

  const handleConnectCell = () => {
    navigate('/cluster-cell-system');
  };

  // Calculate average progress from goals
  const averageProgress = goals.length > 0 
    ? Math.round(goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8 mt-20">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Welcome, John Smith</h1>
              <p className="text-slate-600">Cell Leader • Central City Cluster • Active since 2021</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge className="bg-green-100 text-green-700">Active Member</Badge>
            <Badge className="bg-blue-100 text-blue-700">Leadership Track</Badge>
            <Badge className="bg-purple-100 text-purple-700">Mentor</Badge>
          </div>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="goals">Spiritual Goals</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="ministry">Ministry</TabsTrigger>
            <TabsTrigger value="giving">Giving</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-600" />
                    Goals Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">{averageProgress}%</div>
                  <p className="text-xs text-slate-600">Average completion</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    Events This Month
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">8</div>
                  <p className="text-xs text-slate-600">4 confirmed, 4 pending</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-600" />
                    Ministry Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">23</div>
                  <p className="text-xs text-slate-600">Lives touched</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-600" />
                    Spiritual Level
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600">Level 7</div>
                  <p className="text-xs text-slate-600">Growing Disciple</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button className="h-20 flex flex-col gap-2" onClick={handlePrayerRequest}>
                    <Heart className="w-6 h-6" />
                    Submit Prayer Request
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2" onClick={handleDevotional}>
                    <BookOpen className="w-6 h-6" />
                    Daily Devotional
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2" onClick={() => handleRSVP("upcoming event")}>
                    <Calendar className="w-6 h-6" />
                    RSVP Event
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2" onClick={handleConnectCell}>
                    <MessageSquare className="w-6 h-6" />
                    Connect with Cell
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Spiritual Goals Tab */}
          <TabsContent value="goals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Spiritual Growth Goals</CardTitle>
                <CardDescription>Track your spiritual disciplines and growth milestones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {goals.map((goal) => (
                  <div key={goal.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{goal.title}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-600">{goal.currentValue} / {goal.targetValue}</span>
                        <EditGoalDialog goal={goal}>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </EditGoalDialog>
                      </div>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                    <p className="text-xs text-slate-500">{goal.progress}% complete</p>
                    <p className="text-sm text-slate-600">{goal.description}</p>
                  </div>
                ))}
                <SetGoalDialog>
                  <Button className="w-full mt-4">
                    <Target className="w-4 h-4 mr-2" />
                    Set New Goal
                  </Button>
                </SetGoalDialog>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Manage your event registrations and RSVPs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-slate-600">{event.date} at {event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={event.status === 'confirmed' ? 'default' : 'secondary'}>
                        {event.status}
                      </Badge>
                      {event.status === 'pending' && (
                        <Button size="sm" onClick={() => handleRSVP(event.title)}>RSVP</Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ministry Tab */}
          <TabsContent value="ministry" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ministry Involvement History</CardTitle>
                <CardDescription>Your service record and achievements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {ministryHistory.map((ministry, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{ministry.role}</h4>
                      <Badge variant="outline">{ministry.period}</Badge>
                    </div>
                    <div className="space-y-1">
                      {ministry.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Giving Tab */}
          <TabsContent value="giving" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contribution History</CardTitle>
                <CardDescription>Your giving record and impact</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">${contributionSummary.totalThisYear}</div>
                    <p className="text-sm text-slate-600">Total This Year</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Heart className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">${contributionSummary.lastGift}</div>
                    <p className="text-sm text-slate-600">Last Gift</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">{contributionSummary.frequency}</div>
                    <p className="text-sm text-slate-600">Giving Pattern</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-slate-600 mb-4">Last contribution: {contributionSummary.lastGiftDate}</p>
                  <ContributionDialog>
                    <Button>
                      <Heart className="w-4 h-4 mr-2" />
                      Make a Contribution
                    </Button>
                  </ContributionDialog>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PersonalMemberPortal;
