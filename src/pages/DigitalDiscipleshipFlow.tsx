
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Play, 
  Users, 
  Award,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  User,
  Star,
  MessageSquare,
  Video,
  FileText,
  Calendar
} from "lucide-react";
import Navigation from "@/components/Navigation";

const DigitalDiscipleshipFlow = () => {
  const learningPaths = [
    { 
      title: "New Believer Foundations", 
      progress: 100, 
      modules: 8, 
      completed: 8, 
      level: "Beginner",
      color: "from-green-500 to-green-600"
    },
    { 
      title: "Growing in Faith", 
      progress: 75, 
      modules: 12, 
      completed: 9, 
      level: "Intermediate",
      color: "from-blue-500 to-blue-600"
    },
    { 
      title: "Leadership Development", 
      progress: 40, 
      modules: 15, 
      completed: 6, 
      level: "Advanced",
      color: "from-purple-500 to-purple-600"
    },
    { 
      title: "Evangelism Training", 
      progress: 0, 
      modules: 10, 
      completed: 0, 
      level: "Intermediate",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const currentCourses = [
    {
      title: "Effective Prayer Life",
      instructor: "Pastor Johnson",
      progress: 60,
      nextLesson: "Intercessory Prayer",
      duration: "45 min",
      type: "Video"
    },
    {
      title: "Biblical Leadership Principles",
      instructor: "Elder Smith",
      progress: 25,
      nextLesson: "Servant Leadership",
      duration: "30 min",
      type: "Interactive"
    }
  ];

  const mentorships = [
    {
      name: "Sarah Williams",
      role: "Spiritual Mentor",
      area: "Prayer & Devotions",
      meetings: 8,
      nextMeeting: "Dec 12, 2024"
    },
    {
      name: "Michael Brown", 
      role: "Leadership Coach",
      area: "Ministry Leadership",
      meetings: 3,
      nextMeeting: "Dec 15, 2024"
    }
  ];

  const achievements = [
    { title: "New Believer Complete", date: "Nov 2024", badge: "Foundation" },
    { title: "Prayer Warrior", date: "Oct 2024", badge: "Spiritual" },
    { title: "Scripture Scholar", date: "Sep 2024", badge: "Knowledge" },
    { title: "Faith Mentor", date: "Aug 2024", badge: "Service" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8 mt-20">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Digital Discipleship Flow</h1>
              <p className="text-slate-600">Interactive learning paths for spiritual growth and leadership development</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge className="bg-purple-100 text-purple-700">Growth Focused</Badge>
            <Badge className="bg-blue-100 text-blue-700">Progressive Learning</Badge>
            <Badge className="bg-green-100 text-green-700">Mentorship</Badge>
          </div>
        </div>

        <Tabs defaultValue="paths" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="paths">Learning Paths</TabsTrigger>
            <TabsTrigger value="current">Current Courses</TabsTrigger>
            <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="assessment">Assessment</TabsTrigger>
          </TabsList>

          <TabsContent value="paths" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningPaths.map((path, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{path.title}</CardTitle>
                      <Badge variant="outline">{path.level}</Badge>
                    </div>
                    <CardDescription>
                      {path.completed} of {path.modules} modules completed
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{path.progress}%</span>
                      </div>
                      <Progress value={path.progress} className="h-2" />
                    </div>
                    <Button className={`w-full bg-gradient-to-r ${path.color} text-white hover:opacity-90`}>
                      {path.progress === 0 ? 'Start Learning' : path.progress === 100 ? 'Review Course' : 'Continue Learning'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="current" className="space-y-6">
            <div className="space-y-4">
              {currentCourses.map((course, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                        <p className="text-slate-600 mb-4">Instructor: {course.instructor}</p>
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <Play className="w-4 h-4" />
                            Next: {course.nextLesson}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {course.duration}
                          </span>
                          <Badge variant="outline">{course.type}</Badge>
                        </div>
                      </div>
                      <Button>Continue</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mentorship" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mentorships.map((mentor, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{mentor.name}</CardTitle>
                        <CardDescription>{mentor.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Focus Area:</span>
                        <span className="font-medium">{mentor.area}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Meetings:</span>
                        <span className="font-medium">{mentor.meetings} sessions</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Next Meeting:</span>
                        <span className="font-medium">{mentor.nextMeeting}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                      <Button size="sm" className="flex-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-slate-600 mb-2">{achievement.date}</p>
                    <Badge className="bg-yellow-100 text-yellow-700">{achievement.badge}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assessment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Spiritual Maturity Assessment</CardTitle>
                <CardDescription>Evaluate your current spiritual growth and receive personalized recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">Advanced</div>
                    <p className="text-sm text-slate-600">Bible Knowledge</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">Growing</div>
                    <p className="text-sm text-slate-600">Prayer Life</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">Developing</div>
                    <p className="text-sm text-slate-600">Leadership</p>
                  </div>
                </div>
                <Button className="w-full">
                  <Target className="w-4 h-4 mr-2" />
                  Take New Assessment
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DigitalDiscipleshipFlow;
