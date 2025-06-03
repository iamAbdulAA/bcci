
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  Trophy, 
  Users, 
  Target,
  TrendingUp,
  Gift,
  Crown,
  Zap,
  Heart,
  BookOpen,
  Calendar,
  Award,
  Medal,
  Sparkles,
  User
} from "lucide-react";
import Navigation from "@/components/Navigation";

const GamificationSystem = () => {
  const currentLevel = {
    level: 8,
    title: "Growing Disciple",
    currentXP: 2750,
    nextLevelXP: 3500,
    progress: 78
  };

  const achievements = [
    { title: "Prayer Warrior", description: "Completed 30-day prayer challenge", points: 500, rarity: "Epic", unlocked: true },
    { title: "Scripture Scholar", description: "Memorized 25 Bible verses", points: 300, rarity: "Rare", unlocked: true },
    { title: "Soul Winner", description: "Led 5 people to Christ", points: 750, rarity: "Legendary", unlocked: true },
    { title: "Faithful Servant", description: "Consistent ministry involvement", points: 400, rarity: "Rare", unlocked: true },
    { title: "Community Builder", description: "Invited 10 new members", points: 600, rarity: "Epic", unlocked: false },
    { title: "Worship Leader", description: "Lead worship 20 times", points: 350, rarity: "Rare", unlocked: false }
  ];

  const leaderboards = [
    { rank: 1, name: "Sarah Johnson", points: 4250, level: 12, streak: 45, badge: "Soul Winner" },
    { rank: 2, name: "Michael Chen", points: 3890, level: 11, streak: 38, badge: "Prayer Warrior" },
    { rank: 3, name: "You (John Smith)", points: 2750, level: 8, streak: 22, badge: "Faithful Servant" },
    { rank: 4, name: "Emily Davis", points: 2340, level: 7, streak: 19, badge: "Scripture Scholar" },
    { rank: 5, name: "David Wilson", points: 2100, level: 7, streak: 15, badge: "Community Builder" }
  ];

  const challenges = [
    {
      title: "30-Day Devotional",
      description: "Complete daily devotions for 30 consecutive days",
      progress: 22,
      total: 30,
      reward: "500 XP + Prayer Badge",
      difficulty: "Medium",
      timeLeft: "8 days"
    },
    {
      title: "Evangelism Challenge",
      description: "Share your testimony with 3 people this month",
      progress: 1,
      total: 3,
      reward: "750 XP + Soul Winner Badge",
      difficulty: "Hard",
      timeLeft: "12 days"
    },
    {
      title: "Community Service",
      description: "Participate in 5 ministry activities",
      progress: 3,
      total: 5,
      reward: "400 XP + Servant Badge",
      difficulty: "Easy",
      timeLeft: "20 days"
    }
  ];

  const weeklyGoals = [
    { activity: "Prayer Time", target: 7, completed: 5, points: 50 },
    { activity: "Bible Reading", target: 5, completed: 3, points: 40 },
    { activity: "Church Attendance", target: 2, completed: 1, points: 100 },
    { activity: "Cell Group", target: 1, completed: 1, points: 75 },
    { activity: "Ministry Service", target: 2, completed: 0, points: 80 }
  ];

  const rewards = [
    { title: "Coffee with Pastor", cost: 500, description: "Personal meeting with church leadership", available: true },
    { title: "Priority Event Seating", cost: 300, description: "VIP seating at special events", available: true },
    { title: "Ministry Leadership Track", cost: 1000, description: "Fast-track to leadership training", available: false },
    { title: "Mentorship Program", cost: 750, description: "One-on-one spiritual mentoring", available: true },
    { title: "Worship Team Audition", cost: 600, description: "Opportunity to join worship ministry", available: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-purple-50">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8 mt-20">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Gamification System</h1>
              <p className="text-slate-600">Engage in your spiritual journey through achievements and challenges</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge className="bg-pink-100 text-pink-700">Engaging</Badge>
            <Badge className="bg-blue-100 text-blue-700">Motivating</Badge>
            <Badge className="bg-green-100 text-green-700">Community</Badge>
          </div>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="teams">Teams</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl">Level {currentLevel.level}</div>
                      <div className="text-sm text-slate-600">{currentLevel.title}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Experience Points</span>
                      <span>{currentLevel.currentXP} / {currentLevel.nextLevelXP} XP</span>
                    </div>
                    <Progress value={currentLevel.progress} className="h-3" />
                    <p className="text-xs text-slate-600">
                      {currentLevel.nextLevelXP - currentLevel.currentXP} XP needed for next level
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <Trophy className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                      <div className="text-lg font-bold text-blue-600">12</div>
                      <p className="text-xs text-slate-600">Achievements</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <Zap className="w-6 h-6 text-green-600 mx-auto mb-1" />
                      <div className="text-lg font-bold text-green-600">22</div>
                      <p className="text-xs text-slate-600">Day Streak</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weekly Goals</CardTitle>
                  <CardDescription>Complete activities to earn XP</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {weeklyGoals.map((goal, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{goal.activity}</span>
                        <span className="font-medium">{goal.completed}/{goal.target}</span>
                      </div>
                      <Progress value={(goal.completed / goal.target) * 100} className="h-2" />
                      <div className="flex justify-between text-xs text-slate-600">
                        <span>{goal.points} XP each</span>
                        <span>{goal.completed * goal.points} / {goal.target * goal.points} XP</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-600" />
                    Total Points
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600">2,750</div>
                  <p className="text-xs text-slate-600">Lifetime earnings</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    Leaderboard Rank
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">#3</div>
                  <p className="text-xs text-slate-600">In your cluster</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Target className="w-4 h-4 text-purple-600" />
                    Active Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">3</div>
                  <p className="text-xs text-slate-600">In progress</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-6">
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{challenge.title}</h3>
                          <Badge variant={challenge.difficulty === 'Easy' ? 'default' : 
                                         challenge.difficulty === 'Medium' ? 'secondary' : 'destructive'}>
                            {challenge.difficulty}
                          </Badge>
                        </div>
                        <p className="text-slate-600 mb-3">{challenge.description}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{challenge.progress} / {challenge.total}</span>
                          </div>
                          <Progress value={(challenge.progress / challenge.total) * 100} className="h-2" />
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-sm font-medium text-green-600 mb-1">{challenge.reward}</div>
                        <div className="text-xs text-slate-500">{challenge.timeLeft} left</div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Target className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className={`text-center transition-all ${
                  achievement.unlocked ? 'hover:shadow-lg' : 'opacity-60 grayscale'
                }`}>
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      achievement.unlocked ? 
                        achievement.rarity === 'Legendary' ? 'bg-gradient-to-r from-purple-400 to-purple-500' :
                        achievement.rarity === 'Epic' ? 'bg-gradient-to-r from-orange-400 to-orange-500' :
                        'bg-gradient-to-r from-blue-400 to-blue-500'
                      : 'bg-gray-300'
                    }`}>
                      {achievement.unlocked ? (
                        <Award className="w-8 h-8 text-white" />
                      ) : (
                        <Medal className="w-8 h-8 text-gray-500" />
                      )}
                    </div>
                    <h3 className="font-semibold mb-2">{achievement.title}</h3>
                    <Badge className={`mb-3 ${
                      achievement.rarity === 'Legendary' ? 'bg-purple-100 text-purple-700' :
                      achievement.rarity === 'Epic' ? 'bg-orange-100 text-orange-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {achievement.rarity}
                    </Badge>
                    <p className="text-sm text-slate-600 mb-3">{achievement.description}</p>
                    <div className="text-lg font-bold text-yellow-600">
                      {achievement.unlocked ? `+${achievement.points} XP` : `${achievement.points} XP`}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Cluster Leaderboard</CardTitle>
                <CardDescription>Top performers in your cluster this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {leaderboards.map((player, index) => (
                  <div key={index} className={`flex items-center justify-between p-4 rounded-lg ${
                    player.name.includes('You') ? 'bg-blue-50 border-2 border-blue-200' : 'bg-slate-50'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        player.rank === 1 ? 'bg-yellow-500 text-white' :
                        player.rank === 2 ? 'bg-gray-400 text-white' :
                        player.rank === 3 ? 'bg-orange-500 text-white' :
                        'bg-slate-300 text-slate-700'
                      }`}>
                        {player.rank}
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{player.name}</h4>
                        <div className="flex items-center gap-3 text-sm text-slate-600">
                          <span>Level {player.level}</span>
                          <Badge variant="outline">{player.badge}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-blue-600">{player.points.toLocaleString()} XP</div>
                      <div className="text-sm text-slate-600">{player.streak} day streak</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rewards" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rewards.map((reward, index) => (
                <Card key={index} className={`${!reward.available ? 'opacity-60' : 'hover:shadow-md'} transition-all`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{reward.title}</h3>
                        <p className="text-slate-600 mb-3">{reward.description}</p>
                        <div className="flex items-center gap-2">
                          <div className="text-yellow-600 font-bold">{reward.cost} XP</div>
                          {!reward.available && <Badge variant="destructive">Insufficient XP</Badge>}
                        </div>
                      </div>
                      <Gift className={`w-8 h-8 ${reward.available ? 'text-purple-500' : 'text-gray-400'}`} />
                    </div>
                    <Button 
                      className="w-full" 
                      disabled={!reward.available}
                      variant={reward.available ? "default" : "outline"}
                    >
                      {reward.available ? "Redeem" : "Need More XP"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="teams" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Challenges</CardTitle>
                <CardDescription>Compete with other cell groups and clusters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">December Challenge: Acts of Service</h3>
                  <p className="text-slate-600 mb-4">Complete community service projects as a team</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">Hope Cell</div>
                      <p className="text-sm text-slate-600">Your Team</p>
                      <div className="text-lg font-semibold">1,240 pts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">Faith Cell</div>
                      <p className="text-sm text-slate-600">2nd Place</p>
                      <div className="text-lg font-semibold">1,180 pts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">Grace Cell</div>
                      <p className="text-sm text-slate-600">3rd Place</p>
                      <div className="text-lg font-semibold">980 pts</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Team Activities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Food Drive Participation</h5>
                      <Progress value={75} className="mb-2" />
                      <p className="text-sm text-slate-600">15/20 members participated</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Community Clean-up</h5>
                      <Progress value={90} className="mb-2" />
                      <p className="text-sm text-slate-600">18/20 members participated</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GamificationSystem;
