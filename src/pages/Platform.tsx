
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  BarChart3,
  BookOpen,
  Heart,
  MessageSquare,
  Calendar
} from "lucide-react";

const Platform = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access your spiritual journey from any device, anywhere, anytime.",
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: Cloud,
      title: "Cloud Synchronization",
      description: "Your progress, goals, and contributions are safely stored and synced across all devices.",
      color: "bg-green-100 text-green-700"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security ensures your spiritual journey remains private and protected.",
      color: "bg-purple-100 text-purple-700"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Stay connected with your cell group through instant notifications and updates.",
      color: "bg-yellow-100 text-yellow-700"
    },
    {
      icon: Users,
      title: "Community Integration",
      description: "Seamlessly connect with your cell groups, clusters, and church community.",
      color: "bg-indigo-100 text-indigo-700"
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Track your spiritual growth with detailed analytics and insights.",
      color: "bg-red-100 text-red-700"
    }
  ];

  const modules = [
    {
      title: "Personal Member Portal",
      description: "Your personalized dashboard for spiritual growth tracking",
      icon: User,
      features: ["Goal Setting", "Progress Tracking", "Contribution Logging"]
    },
    {
      title: "Cluster & Cell System",
      description: "Comprehensive management for cell groups and clusters",
      icon: Users,
      features: ["Member Management", "Group Coordination", "Leadership Tools"]
    },
    {
      title: "Digital Discipleship",
      description: "Structured learning paths for spiritual development",
      icon: BookOpen,
      features: ["Interactive Lessons", "Progress Milestones", "Mentorship"]
    },
    {
      title: "Live Worship",
      description: "Connect with live and on-demand worship experiences",
      icon: Heart,
      features: ["Live Streaming", "On-Demand Content", "Interactive Participation"]
    },
    {
      title: "Integrated Messaging",
      description: "Seamless communication within your spiritual community",
      icon: MessageSquare,
      features: ["Group Chat", "Private Messages", "Announcements"]
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive insights into community engagement",
      icon: BarChart3,
      features: ["Growth Metrics", "Engagement Analytics", "Custom Reports"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            BCCI Platform Technology
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
            Built for Modern
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 block">
              Spiritual Communities
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our platform combines cutting-edge technology with spiritual wisdom to create 
            an integrated ecosystem for church communities, cell groups, and individual growth.
          </p>
        </div>

        {/* Core Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Platform Modules */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Integrated Modules
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                      <module.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-4">Technical Excellence</CardTitle>
            <CardDescription className="text-slate-300 text-lg">
              Built with modern technologies for reliability, scalability, and performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2">Frontend</h4>
                <p className="text-slate-300">React, TypeScript, Tailwind CSS</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2">Backend</h4>
                <p className="text-slate-300">Node.js, PostgreSQL, Redis</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2">Infrastructure</h4>
                <p className="text-slate-300">AWS, Docker, Kubernetes</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2">Security</h4>
                <p className="text-slate-300">OAuth 2.0, SSL, GDPR Compliant</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Platform;
