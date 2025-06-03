
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Award, 
  Star, 
  User, 
  BookOpen,
  Users,
  Heart,
  Crown,
  CheckCircle,
  TrendingUp,
  Calendar,
  MessageSquare,
  Target,
  Trophy
} from "lucide-react";
import Navigation from "@/components/Navigation";

const SpiritualCVRecognition = () => {
  const achievements = [
    { 
      title: "Faithful Servant", 
      category: "Service", 
      date: "Nov 2024", 
      description: "Consistent ministry involvement for 2+ years",
      level: "Gold",
      points: 500
    },
    { 
      title: "Soul Winner", 
      category: "Evangelism", 
      date: "Oct 2024", 
      description: "Led 10+ people to Christ",
      level: "Platinum",
      points: 750
    },
    { 
      title: "Prayer Warrior", 
      category: "Spiritual", 
      date: "Sep 2024", 
      description: "Completed 100-day prayer challenge",
      level: "Silver",
      points: 300
    },
    { 
      title: "Scripture Scholar", 
      category: "Knowledge", 
      date: "Aug 2024", 
      description: "Memorized 50+ Bible verses",
      level: "Gold",
      points: 400
    }
  ];

  const ministryRoles = [
    {
      title: "Youth Ministry Leader",
      organization: "Grace Community Church",
      period: "2023 - Present",
      responsibilities: [
        "Lead weekly youth meetings (50+ attendees)",
        "Organize quarterly youth conferences",
        "Mentor 12 young adults",
        "Coordinate community outreach programs"
      ],
      endorsements: 8,
      impact: "Led 15 youth to Christ, 3 now in ministry training"
    },
    {
      title: "Worship Team Member",
      organization: "Central Baptist Church",
      period: "2022 - 2023",
      responsibilities: [
        "Serve as lead guitarist",
        "Participate in weekly rehearsals",
        "Minister in 48 worship services",
        "Train new team members"
      ],
      endorsements: 5,
      impact: "Helped establish contemporary worship style"
    }
  ];

  const testimonies = [
    {
      title: "Miraculous Healing Through Prayer",
      date: "Nov 15, 2024",
      category: "Prayer & Healing",
      excerpt: "Witnessed divine healing of chronic illness through persistent prayer...",
      views: 234,
      likes: 45
    },
    {
      title: "Leading a Coworker to Christ",
      date: "Oct 22, 2024",
      category: "Evangelism",
      excerpt: "Shared faith with colleague over lunch conversations spanning 6 months...",
      views: 189,
      likes: 62
    },
    {
      title: "Overcoming Financial Struggles",
      date: "Sep 8, 2024",
      category: "Faith & Provision",
      excerpt: "God's faithfulness during unemployment season and unexpected provision...",
      views: 156,
      likes: 38
    }
  ];

  const skillAssessments = [
    { skill: "Bible Knowledge", level: "Advanced", progress: 85 },
    { skill: "Leadership", level: "Intermediate", progress: 70 },
    { skill: "Public Speaking", level: "Advanced", progress: 90 },
    { skill: "Counseling", level: "Beginner", progress: 35 },
    { skill: "Evangelism", level: "Advanced", progress: 88 },
    { skill: "Teaching", level: "Intermediate", progress: 65 }
  ];

  const nominations = [
    {
      position: "Cell Group Leader",
      nominator: "Pastor Johnson",
      date: "Dec 1, 2024",
      status: "Pending Review",
      requirements: ["Leadership Training Complete", "2+ Years Ministry", "Pastoral Endorsement"]
    },
    {
      position: "Youth Pastor Assistant",
      nominator: "Youth Pastor Davis",
      date: "Nov 28, 2024",
      status: "Under Consideration",
      requirements: ["Youth Ministry Experience", "Biblical Studies", "References"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-amber-50">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8 mt-20">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Spiritual CV & Recognition</h1>
              <p className="text-slate-600">Document your spiritual journey and ministry achievements</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge className="bg-yellow-100 text-yellow-700">Achievement</Badge>
            <Badge className="bg-blue-100 text-blue-700">Recognition</Badge>
            <Badge className="bg-green-100 text-green-700">Growth Tracking</Badge>
          </div>
        </div>

        <Tabs defaultValue="achievements" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="ministry">Ministry Roles</TabsTrigger>
            <TabsTrigger value="testimonies">Testimonies</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="nominations">Nominations</TabsTrigger>
            <TabsTrigger value="cv">My CV</TabsTrigger>
          </TabsList>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      achievement.level === 'Platinum' ? 'bg-gradient-to-r from-purple-400 to-purple-500' :
                      achievement.level === 'Gold' ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                      'bg-gradient-to-r from-gray-400 to-gray-500'
                    }`}>
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{achievement.title}</h3>
                    <Badge className="mb-3">{achievement.category}</Badge>
                    <p className="text-sm text-slate-600 mb-3">{achievement.description}</p>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>{achievement.date}</span>
                      <span>{achievement.points} pts</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recognition Summary</CardTitle>
                <CardDescription>Your spiritual growth and service recognition</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <Trophy className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">12</div>
                    <p className="text-sm text-slate-600">Total Badges</p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-yellow-600">1,950</div>
                    <p className="text-sm text-slate-600">Total Points</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">Level 8</div>
                    <p className="text-sm text-slate-600">Spiritual Level</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <Crown className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">3</div>
                    <p className="text-sm text-slate-600">Leadership Roles</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ministry" className="space-y-6">
            <div className="space-y-6">
              {ministryRoles.map((role, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{role.title}</CardTitle>
                        <CardDescription className="text-lg">{role.organization}</CardDescription>
                        <Badge variant="outline" className="mt-2">{role.period}</Badge>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm text-slate-600">
                          <Users className="w-4 h-4" />
                          {role.endorsements} endorsements
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {role.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-1">Ministry Impact:</h4>
                      <p className="text-sm text-blue-700">{role.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="testimonies" className="space-y-6">
            <div className="space-y-4">
              {testimonies.map((testimony, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{testimony.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                          <span>{testimony.date}</span>
                          <Badge variant="outline">{testimony.category}</Badge>
                        </div>
                        <p className="text-slate-700 mb-4">{testimony.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {testimony.views} views
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {testimony.likes} likes
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Read Full Story
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button className="w-full">
              <MessageSquare className="w-4 h-4 mr-2" />
              Share New Testimony
            </Button>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillAssessments.map((skill, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">{skill.skill}</h3>
                      <Badge variant="outline">{skill.level}</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Proficiency</span>
                        <span className="font-medium">{skill.progress}%</span>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Skill Development</CardTitle>
                <CardDescription>Continue growing in ministry competencies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Take Assessment
                  </Button>
                  <Button variant="outline">
                    <Target className="w-4 h-4 mr-2" />
                    Set Goals
                  </Button>
                  <Button variant="outline">
                    <Users className="w-4 h-4 mr-2" />
                    Find Mentor
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nominations" className="space-y-6">
            <div className="space-y-4">
              {nominations.map((nomination, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{nomination.position}</h3>
                        <p className="text-slate-600 mb-2">Nominated by: {nomination.nominator}</p>
                        <p className="text-sm text-slate-500">Date: {nomination.date}</p>
                      </div>
                      <Badge variant={nomination.status === 'Pending Review' ? 'default' : 'secondary'}>
                        {nomination.status}
                      </Badge>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Requirements:</h4>
                      <div className="space-y-1">
                        {nomination.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {req}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cv" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Digital Spiritual CV</CardTitle>
                <CardDescription>Comprehensive record of your spiritual journey and ministry</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">John Smith - Spiritual Profile</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Spiritual Level:</strong> Level 8 (Growing Disciple)
                    </div>
                    <div>
                      <strong>Years in Ministry:</strong> 3 years
                    </div>
                    <div>
                      <strong>Current Role:</strong> Youth Ministry Leader
                    </div>
                    <div>
                      <strong>Total Achievements:</strong> 12 badges, 1,950 points
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Ministry Experience</h4>
                    <div className="space-y-2 text-sm">
                      <div className="border-l-2 border-blue-500 pl-3">
                        <div className="font-medium">Youth Ministry Leader</div>
                        <div className="text-slate-600">2023 - Present</div>
                      </div>
                      <div className="border-l-2 border-green-500 pl-3">
                        <div className="font-medium">Worship Team Member</div>
                        <div className="text-slate-600">2022 - 2023</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-purple-500" />
                        Soul Winner (Platinum)
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-yellow-500" />
                        Faithful Servant (Gold)
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-gray-500" />
                        Prayer Warrior (Silver)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button>
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline">
                    <Share className="w-4 h-4 mr-2" />
                    Share CV
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SpiritualCVRecognition;
