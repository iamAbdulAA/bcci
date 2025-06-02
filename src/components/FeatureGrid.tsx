
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  MapPin, 
  BookOpen, 
  Calendar, 
  Settings, 
  Award,
  Activity,
  Star,
  GridIcon,
  FileText,
  Cog
} from "lucide-react";

const FeatureGrid = () => {
  const coreModules = [
    {
      icon: Users,
      title: "Personal Member Portals",
      description: "Comprehensive dashboards with spiritual goals tracking, event RSVP management, ministry involvement logs, and detailed contribution history.",
      features: ["Custom Spiritual Dashboards", "Event Management", "Ministry Logs", "Contribution Tracking"],
      badge: "Core Feature",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Intelligent Cluster & Cell System",
      description: "Advanced hierarchical organization by Country > State > City > Cluster > Cell with GPS-based auto-assignment and smart location matching.",
      features: ["GPS Auto-Assignment", "Hierarchical Structure", "Location Intelligence", "Cell Management"],
      badge: "Smart Location",
      color: "from-green-500 to-green-600"
    },
    {
      icon: BookOpen,
      title: "Digital Discipleship Flow",
      description: "Comprehensive learning paths including new believer foundations, leadership development tracks, and evangelism training modules.",
      features: ["Learning Pathways", "Progress Tracking", "Mentorship Matching", "Certification System"],
      badge: "Growth Focused",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Calendar,
      title: "Worship & Event Management",
      description: "Live streaming capabilities, on-demand service access, replay vault, and regional worship contribution sharing across the global network.",
      features: ["Live Streaming", "Service Replay", "Global Worship", "Event Scheduling"],
      badge: "24/7 Access",
      color: "from-red-500 to-red-600"
    }
  ];

  const analyticsModules = [
    {
      icon: Activity,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive tracking of attendance patterns, engagement metrics, spiritual growth indicators, and leadership performance across all regions.",
      features: ["Attendance Analytics", "Engagement Metrics", "Growth Tracking", "Performance Insights"],
      badge: "Data Driven",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Award,
      title: "Spiritual CV & Recognition",
      description: "Detailed portfolio system for recording ministry involvement, leadership roles, personal testimonies, and training achievements for leadership nominations.",
      features: ["Ministry Portfolio", "Achievement Records", "Leadership Tracking", "Nomination System"],
      badge: "Achievement",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const communicationModules = [
    {
      icon: Settings,
      title: "Integrated Communication Hub",
      description: "Seamless in-app messaging for cluster coordination, prayer request management, custom event notifications, and emergency alerts.",
      features: ["Cluster Messaging", "Prayer Requests", "Event Alerts", "Emergency Notifications"],
      badge: "Connected",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Star,
      title: "Gamification & Engagement",
      description: "Point-based system for devotional completion, event participation, and evangelism activities. Unlock badges and mentorship opportunities.",
      features: ["Point System", "Badge Collection", "Leaderboards", "Mentorship Unlock"],
      badge: "Engaging",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const ModuleCard = ({ module, index }) => (
    <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-4 rounded-2xl bg-gradient-to-r ${module.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
            <module.icon className="w-7 h-7 text-white" />
          </div>
          <Badge variant="secondary" className="text-xs font-medium bg-white/80 backdrop-blur-sm">
            {module.badge}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-2">
          {module.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-slate-600 leading-relaxed text-sm">
          {module.description}
        </CardDescription>
        
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-slate-700">Key Features:</h4>
          <div className="grid grid-cols-1 gap-1">
            {module.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-xs text-slate-600">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        <Button 
          variant="outline" 
          size="sm" 
          className="w-full mt-4 border-slate-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-300 transition-all duration-300"
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200 px-6 py-2 text-sm font-medium">
            <GridIcon className="w-4 h-4 mr-2" />
            Expanded Functional Modules
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-8 leading-tight">
            Comprehensive Platform
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent block lg:inline lg:ml-4">
              Features
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our platform provides a complete ecosystem of tools designed to foster spiritual growth, 
            community building, and leadership development across our global network.
          </p>
        </div>

        <Tabs defaultValue="core" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/80 backdrop-blur-sm shadow-lg">
            <TabsTrigger value="core" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white">
              Core Modules
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-green-600 data-[state=active]:text-white">
              Analytics & Growth
            </TabsTrigger>
            <TabsTrigger value="communication" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">
              Communication & Engagement
            </TabsTrigger>
          </TabsList>

          <TabsContent value="core" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {coreModules.map((module, index) => (
                <ModuleCard key={index} module={module} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analyticsModules.map((module, index) => (
                <ModuleCard key={index} module={module} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="communication" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {communicationModules.map((module, index) => (
                <ModuleCard key={index} module={module} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Technical Infrastructure Highlight */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-6">
              Built on Modern Technology
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our platform leverages cutting-edge technology to ensure scalability, reliability, and exceptional user experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-10 border-0 shadow-xl bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Cog className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-4">React Native Apps</h4>
              <p className="text-slate-600 leading-relaxed">Unified iOS and Android applications providing seamless mobile experience with offline capabilities</p>
            </Card>

            <Card className="text-center p-10 border-0 shadow-xl bg-gradient-to-br from-green-50 via-green-50 to-emerald-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Activity className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-4">GraphQL API</h4>
              <p className="text-slate-600 leading-relaxed">Efficient real-time data updates, intelligent caching, and optimized synchronization across devices</p>
            </Card>

            <Card className="text-center p-10 border-0 shadow-xl bg-gradient-to-br from-purple-50 via-purple-50 to-violet-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-4">AI Integration</h4>
              <p className="text-slate-600 leading-relaxed">Smart devotional suggestions, intelligent mentorship matching, and personalized spiritual growth recommendations</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
