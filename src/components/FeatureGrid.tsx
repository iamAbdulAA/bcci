import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
import { useState } from "react";
import { Link } from "react-router-dom";

const FeatureGrid = () => {
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const coreFeatures = [
    {
      icon: Users,
      title: "Personal Member Portals",
      description: "Custom dashboards with spiritual goals, event RSVPs, ministry logs, and contribution history.",
      badge: "Core Feature",
      color: "from-blue-500 to-blue-600",
      details: ["Personal spiritual goal tracking", "Ministry involvement history", "Event registration & RSVPs", "Digital contribution records"],
      stats: "10K+ Active Members",
      hasPage: true,
      detailedContent: {
        overview: "Transform how members engage with their faith journey through personalized digital portals that track spiritual growth, ministry involvement, and community participation.",
        features: [
          "Customizable spiritual goal setting and progress tracking",
          "Complete ministry involvement history with achievements",
          "Seamless event registration and RSVP management",
          "Digital giving records with annual statements",
          "Prayer request submission and tracking",
          "Personal devotional reading plans"
        ],
        benefits: [
          "Increased member engagement by 85%",
          "Streamlined administrative processes",
          "Better visibility into spiritual growth patterns",
          "Enhanced community connection and accountability"
        ]
      }
    },
    {
      icon: MapPin,
      title: "Cluster & Cell System",
      description: "Organize members by Country > State > City > Cluster > Cell with GPS auto-assignment.",
      badge: "Smart Location",
      color: "from-green-500 to-green-600",
      details: ["GPS-based auto-assignment", "Hierarchical organization", "Cell leader management", "Geographic analytics"],
      stats: "500+ Clusters Worldwide",
      hasPage: true,
      detailedContent: {
        overview: "Revolutionary geographic organization system that automatically assigns members to appropriate cells based on location while maintaining hierarchical structure for effective leadership.",
        features: [
          "Automated GPS-based member assignment to nearest cells",
          "Five-tier hierarchy: Country > State > City > Cluster > Cell",
          "Dynamic cell leader appointment and management tools",
          "Real-time geographic analytics and heat maps",
          "Cross-cluster communication and coordination",
          "Flexible boundary adjustment tools"
        ],
        benefits: [
          "50% reduction in administrative overhead",
          "Improved local community building",
          "Better resource allocation across regions",
          "Enhanced pastoral care through proximity"
        ]
      }
    },
    {
      icon: BookOpen,
      title: "Digital Discipleship Flow",
      description: "Interactive learning paths for new believers, leadership development, and evangelism training.",
      badge: "Growth Focused",
      color: "from-purple-500 to-purple-600",
      details: ["Progressive learning modules", "Interactive assessments", "Mentorship matching", "Certification tracking"],
      stats: "2K+ Courses Completed",
      detailedContent: {
        overview: "Comprehensive digital discipleship platform that guides believers through structured learning paths from new believer fundamentals to advanced leadership training.",
        features: [
          "Adaptive learning paths based on spiritual maturity",
          "Interactive video lessons with discussion prompts",
          "Built-in assessment tools and progress tracking",
          "AI-powered mentorship matching system",
          "Digital certificates and achievement badges",
          "Peer learning groups and discussion forums"
        ],
        benefits: [
          "Accelerated spiritual growth trajectory",
          "Standardized discipleship curriculum globally",
          "Measurable learning outcomes and progress",
          "Scalable mentorship program management"
        ]
      }
    },
    {
      icon: Play,
      title: "Live & On-Demand Worship",
      description: "Stream services, access replay vault, and enjoy regional worship contributions globally.",
      badge: "24/7 Access",
      color: "from-red-500 to-red-600",
      details: ["HD live streaming", "Global replay library", "Multi-language support", "Offline downloads"],
      stats: "50K+ Hours Streamed",
      detailedContent: {
        overview: "Global worship experience platform providing seamless access to live services and extensive library of worship content from churches worldwide.",
        features: [
          "Ultra-HD live streaming with minimal latency",
          "Comprehensive replay vault with smart search",
          "Multi-language subtitles and audio tracks",
          "Offline download for limited connectivity areas",
          "Interactive worship participation tools",
          "Regional content curation and recommendations"
        ],
        benefits: [
          "Global accessibility regardless of location",
          "Consistent worship experience quality",
          "Cultural exchange through diverse content",
          "Reduced barriers for remote participation"
        ]
      }
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
      stats: "95% Data Accuracy",
      detailedContent: {
        overview: "Powerful analytics platform providing deep insights into church growth, member engagement, and leadership effectiveness through comprehensive data visualization.",
        features: [
          "Real-time attendance monitoring across all locations",
          "Member engagement heat maps and trend analysis",
          "Leadership performance metrics and scorecards",
          "Financial giving patterns and forecasting",
          "Event participation analytics",
          "Custom report generation and scheduling"
        ],
        benefits: [
          "Data-driven decision making for church growth",
          "Early identification of engagement issues",
          "Optimized resource allocation",
          "Improved leadership development strategies"
        ]
      }
    },
    {
      icon: Award,
      title: "Spiritual CV & Recognition",
      description: "Record involvement, roles, testimonies, and training for leadership nominations.",
      badge: "Achievement",
      color: "from-yellow-500 to-yellow-600",
      details: ["Digital achievement records", "Leadership nominations", "Testimony collection", "Skill verification"],
      stats: "1K+ Leaders Recognized",
      detailedContent: {
        overview: "Comprehensive digital portfolio system that documents spiritual journey, achievements, and qualifications for transparent leadership development and recognition.",
        features: [
          "Complete spiritual journey documentation",
          "Digital badges for completed training and milestones",
          "Peer and leadership endorsement system",
          "Testimony and impact story collection",
          "Skills assessment and verification tools",
          "Leadership nomination and recommendation workflow"
        ],
        benefits: [
          "Transparent leadership selection process",
          "Recognition of faithful service and growth",
          "Clear pathways for spiritual advancement",
          "Documented legacy of spiritual impact"
        ]
      }
    },
    {
      icon: MessageSquare,
      title: "Integrated Messaging",
      description: "In-app communication for clusters, prayer requests, and custom event alerts.",
      badge: "Connected",
      color: "from-teal-500 to-teal-600",
      details: ["Cluster-based messaging", "Prayer request system", "Event notifications", "Secure communications"],
      stats: "100K+ Messages Daily",
      detailedContent: {
        overview: "Secure, purpose-built communication platform facilitating meaningful connections within clusters, prayer networks, and ministry teams.",
        features: [
          "Hierarchical messaging based on cluster structure",
          "Dedicated prayer request channels with privacy controls",
          "Smart event notifications and reminders",
          "End-to-end encrypted personal messaging",
          "Broadcast messaging for leadership announcements",
          "Integration with calendar and event systems"
        ],
        benefits: [
          "Strengthened community bonds and support",
          "Efficient information distribution",
          "Enhanced prayer network coordination",
          "Reduced communication barriers"
        ]
      }
    },
    {
      icon: Star,
      title: "Gamification System",
      description: "Earn points for devotionals, events, and evangelism. Unlock badges and mentorship opportunities.",
      badge: "Engaging",
      color: "from-pink-500 to-pink-600",
      details: ["Point-based rewards", "Achievement badges", "Leaderboards", "Mentorship unlocks"],
      stats: "80% Engagement Rate",
      detailedContent: {
        overview: "Innovative engagement system that motivates spiritual growth through meaningful achievements, healthy competition, and milestone recognition.",
        features: [
          "Point system for spiritual activities and service",
          "Achievement badges for various milestones",
          "Community leaderboards with seasonal competitions",
          "Unlockable content and mentorship opportunities",
          "Team challenges for clusters and ministries",
          "Celebration of spiritual milestones and anniversaries"
        ],
        benefits: [
          "Increased motivation for spiritual disciplines",
          "Fun and engaging growth environment",
          "Recognition of consistent faithfulness",
          "Community building through shared achievements"
        ]
      }
    }
  ];

  const getPageRoute = (title: string) => {
    const routes: { [key: string]: string } = {
      "Personal Member Portals": "/personal-member-portal",
      "Cluster & Cell System": "/cluster-cell-system",
      "Digital Discipleship Flow": "/digital-discipleship-flow",
      "Live & On-Demand Worship": "/live-on-demand-worship",
      "Analytics Dashboard": "/analytics-dashboard", 
      "Spiritual CV & Recognition": "/spiritual-cv-recognition",
      "Integrated Messaging": "/integrated-messaging",
      "Gamification System": "/gamification-system"
    };
    return routes[title] || "#";
  };

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
        
        <Link to={getPageRoute(feature.title)}>
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </Link>
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
