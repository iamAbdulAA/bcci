
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Star
} from "lucide-react";

const FeatureGrid = () => {
  const features = [
    {
      icon: Users,
      title: "Personal Member Portals",
      description: "Custom dashboards with spiritual goals, event RSVPs, ministry logs, and contribution history.",
      badge: "Core Feature",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Cluster & Cell System",
      description: "Organize members by Country > State > City > Cluster > Cell with GPS auto-assignment.",
      badge: "Smart Location",
      color: "from-green-500 to-green-600"
    },
    {
      icon: BookOpen,
      title: "Digital Discipleship Flow",
      description: "Interactive learning paths for new believers, leadership development, and evangelism training.",
      badge: "Growth Focused",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Play,
      title: "Live & On-Demand Worship",
      description: "Stream services, access replay vault, and enjoy regional worship contributions globally.",
      badge: "24/7 Access",
      color: "from-red-500 to-red-600"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track attendance, engagement, growth metrics, and leadership performance across regions.",
      badge: "Data Driven",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Award,
      title: "Spiritual CV & Recognition",
      description: "Record involvement, roles, testimonies, and training for leadership nominations.",
      badge: "Achievement",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: MessageSquare,
      title: "Integrated Messaging",
      description: "In-app communication for clusters, prayer requests, and custom event alerts.",
      badge: "Connected",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Star,
      title: "Gamification System",
      description: "Earn points for devotionals, events, and evangelism. Unlock badges and mentorship opportunities.",
      badge: "Engaging",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
            Platform Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Expanded Functional Modules
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive tools designed to foster spiritual growth, community building, 
            and leadership development across our global network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs font-medium">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Enhancements Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Technical Enhancements
            </h3>
            <p className="text-lg text-slate-600">
              Built on modern technology stack for scalability and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">React Native</h4>
              <p className="text-slate-600">Unified iOS/Android apps for seamless mobile experience</p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">GraphQL API</h4>
              <p className="text-slate-600">Efficient real-time data updates and synchronization</p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-violet-50">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">AI Integration</h4>
              <p className="text-slate-600">Smart suggestions for devotionals and mentorship matches</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
