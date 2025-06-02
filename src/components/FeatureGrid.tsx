
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  MapPin, 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  Award,
  BarChart3,
  Heart,
  Play,
  Globe,
  Bell,
  Star,
  Target,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const FeatureGrid = () => {
  const coreFeatures = [
    {
      icon: Users,
      title: "Personal Member Portals",
      description: "Custom dashboards with spiritual goals, event RSVPs, ministry logs, and contribution history.",
      badge: "Core Feature",
      color: "from-blue-500 to-blue-600",
      details: ["Personal spiritual goal tracking", "Ministry involvement history", "Event registration & RSVPs", "Digital contribution records"],
      stats: "10K+ Active Members"
    },
    {
      icon: MapPin,
      title: "Cluster & Cell System",
      description: "Organize members by Country > State > City > Cluster > Cell with GPS auto-assignment.",
      badge: "Smart Location",
      color: "from-green-500 to-green-600",
      details: ["GPS-based auto-assignment", "Hierarchical organization", "Cell leader management", "Geographic analytics"],
      stats: "500+ Clusters Worldwide"
    },
    {
      icon: BookOpen,
      title: "Digital Discipleship Flow",
      description: "Interactive learning paths for new believers, leadership development, and evangelism training.",
      badge: "Growth Focused",
      color: "from-purple-500 to-purple-600",
      details: ["Progressive learning modules", "Interactive assessments", "Mentorship matching", "Certification tracking"],
      stats: "2K+ Courses Completed"
    },
    {
      icon: Play,
      title: "Live & On-Demand Worship",
      description: "Stream services, access replay vault, and enjoy regional worship contributions globally.",
      badge: "24/7 Access",
      color: "from-red-500 to-red-600",
      details: ["HD live streaming", "Global replay library", "Multi-language support", "Offline downloads"],
      stats: "50K+ Hours Streamed"
    }
  ];

  const advancedFeatures = [
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track attendance, engagement, growth metrics, and leadership performance across regions.",
      badge: "Data Driven",
      color: "from-orange-500 to-orange-600",
      details: ["Real-time attendance tracking", "Engagement heat maps", "Growth trend analysis", "Performance metrics"],
      stats: "95% Data Accuracy"
    },
    {
      icon: Award,
      title: "Spiritual CV & Recognition",
      description: "Record involvement, roles, testimonies, and training for leadership nominations.",
      badge: "Achievement",
      color: "from-yellow-500 to-yellow-600",
      details: ["Digital achievement records", "Leadership nominations", "Testimony collection", "Skill verification"],
      stats: "1K+ Leaders Recognized"
    },
    {
      icon: MessageSquare,
      title: "Integrated Messaging",
      description: "In-app communication for clusters, prayer requests, and custom event alerts.",
      badge: "Connected",
      color: "from-teal-500 to-teal-600",
      details: ["Cluster-based messaging", "Prayer request system", "Event notifications", "Secure communications"],
      stats: "100K+ Messages Daily"
    },
    {
      icon: Star,
      title: "Gamification System",
      description: "Earn points for devotionals, events, and evangelism. Unlock badges and mentorship opportunities.",
      badge: "Engaging",
      color: "from-pink-500 to-pink-600",
      details: ["Point-based rewards", "Achievement badges", "Leaderboards", "Mentorship unlocks"],
      stats: "80% Engagement Rate"
    }
  ];

  const FeatureCard = ({ feature, index }: { feature: any, index: number }) => (
    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-gradient-to-br from-white to-slate-50/80 overflow-hidden relative">
      <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      <CardHeader className="pb-4 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <feature.icon className="w-7 h-7 text-white" />
          </div>
          <Badge variant="secondary" className="text-xs font-medium bg-white/80 backdrop-blur-sm">
            {feature.badge}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
          {feature.title}
        </CardTitle>
        <div className="text-sm font-semibold text-blue-600 mb-2">
          {feature.stats}
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <CardDescription className="text-slate-600 leading-relaxed mb-4">
          {feature.description}
        </CardDescription>
        
        <div className="space-y-2 mb-4">
          {feature.details.map((detail: string, idx: number) => (
            <div key={idx} className="flex items-center text-sm text-slate-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              {detail}
            </div>
          ))}
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 text-sm font-medium">
            Platform Features
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-8 leading-tight">
            Expanded Functional
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Modules</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive tools designed to foster spiritual growth, community building, 
            and leadership development across our global network of believers.
          </p>
        </div>

        <Tabs defaultValue="core" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-slate-100/80 backdrop-blur-sm">
            <TabsTrigger value="core" className="text-lg py-3 data-[state=active]:bg-white data-[state=active]:shadow-md">
              Core Features
            </TabsTrigger>
            <TabsTrigger value="advanced" className="text-lg py-3 data-[state=active]:bg-white data-[state=active]:shadow-md">
              Advanced Tools
            </TabsTrigger>
          </TabsList>

          <TabsContent value="core" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {coreFeatures.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {advancedFeatures.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Technical Infrastructure Highlight */}
        <div className="mt-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">
                Built on Modern Technology
              </h3>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Enterprise-grade infrastructure ensuring scalability, security, and seamless user experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-3">React Native</h4>
                <p className="text-blue-100 leading-relaxed">Unified iOS/Android apps for seamless mobile experience across all devices</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-3">GraphQL API</h4>
                <p className="text-blue-100 leading-relaxed">Efficient real-time data updates and synchronization for instant connectivity</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-3">AI Integration</h4>
                <p className="text-blue-100 leading-relaxed">Smart suggestions for devotionals, mentorship matches, and personalized growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
