import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Users, 
  BookOpen, 
  BarChart3, 
  MessageSquare, 
  Trophy, 
  Heart,
  User,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const Platform = () => {
  return (
    <div className="container py-10">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {/* Spiritual Growth Card */}
        <Card className="bg-white shadow-md rounded-lg overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between p-4">
            <CardTitle className="text-lg font-semibold">Spiritual Growth</CardTitle>
            <Zap className="h-6 w-6 text-yellow-500" />
          </CardHeader>
          <CardContent className="p-4">
            <CardDescription className="text-gray-600">Track your spiritual milestones.</CardDescription>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span>Daily Prayer</span>
                <Badge variant="secondary">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Completed
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Bible Study</span>
                <Badge variant="secondary">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Completed
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Community Service</span>
                <Badge variant="outline">
                  Pending
                </Badge>
              </div>
            </div>
            <Button className="w-full mt-4">
              View Growth <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Community Engagement Card */}
        <Card className="bg-white shadow-md rounded-lg overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between p-4">
            <CardTitle className="text-lg font-semibold">Community Engagement</CardTitle>
            <Users className="h-6 w-6 text-blue-500" />
          </CardHeader>
          <CardContent className="p-4">
            <CardDescription className="text-gray-600">Connect and engage with your community.</CardDescription>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span>Local Church Events</span>
                <span>3</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Volunteer Opportunities</span>
                <span>5</span>
              </div>
            </div>
            <Button className="w-full mt-4">
              Explore <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Learning Resources Card */}
        <Card className="bg-white shadow-md rounded-lg overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between p-4">
            <CardTitle className="text-lg font-semibold">Learning Resources</CardTitle>
            <BookOpen className="h-6 w-6 text-green-500" />
          </CardHeader>
          <CardContent className="p-4">
            <CardDescription className="text-gray-600">Access a wealth of spiritual knowledge.</CardDescription>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span>Available Courses</span>
                <span>25</span>
              </div>
              <div className="flex items-center justify-between">
                <span>E-books</span>
                <span>150</span>
              </div>
            </div>
            <Button className="w-full mt-4">
              Discover <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Analytics Dashboard Card */}
        <Card className="bg-white shadow-md rounded-lg overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between p-4">
            <CardTitle className="text-lg font-semibold">Analytics Dashboard</CardTitle>
            <BarChart3 className="h-6 w-6 text-purple-500" />
          </CardHeader>
          <CardContent className="p-4">
            <CardDescription className="text-gray-600">Track your engagement and growth metrics.</CardDescription>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span>Weekly Active Users</span>
                <span>450</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Average Session Time</span>
                <span>25 mins</span>
              </div>
            </div>
            <Button className="w-full mt-4">
              View Analytics <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Messaging Center Card */}
        <Card className="bg-white shadow-md rounded-lg overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between p-4">
            <CardTitle className="text-lg font-semibold">Messaging Center</CardTitle>
            <MessageSquare className="h-6 w-6 text-orange-500" />
          </CardHeader>
          <CardContent className="p-4">
            <CardDescription className="text-gray-600">Stay connected with instant messaging.</CardDescription>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span>Unread Messages</span>
                <span>12</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Active Conversations</span>
                <span>8</span>
              </div>
            </div>
            <Button className="w-full mt-4">
              Go to Messages <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Gamification System Card */}
        <Card className="bg-white shadow-md rounded-lg overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between p-4">
            <CardTitle className="text-lg font-semibold">Gamification System</CardTitle>
            <Trophy className="h-6 w-6 text-yellow-600" />
          </CardHeader>
          <CardContent className="p-4">
            <CardDescription className="text-gray-600">Earn points and badges for your spiritual activities.</CardDescription>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span>Current Points</span>
                <span>350</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Badges Earned</span>
                <span>5</span>
              </div>
            </div>
            <Button className="w-full mt-4">
              View Achievements <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default Platform;
