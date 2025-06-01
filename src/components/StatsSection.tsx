
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Globe, Award, Heart, Target } from "lucide-react";

const StatsSection = () => {
  const metrics = [
    {
      icon: Users,
      label: "Active Cells",
      value: "95%",
      description: "Members engaged in active cell groups",
      trend: "+12%",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      label: "Leadership Pipeline",
      value: "250+",
      description: "Leaders in development program",
      trend: "+28%",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      label: "Member Retention",
      value: "92%",
      description: "Annual re-engagement rate",
      trend: "+8%",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Globe,
      label: "Global Expansion",
      value: "25",
      description: "Countries with active clusters",
      trend: "+5",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Award,
      label: "Testimonials Shared",
      value: "89%",
      description: "User-generated devotional content",
      trend: "+15%",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Target,
      label: "Ministry Engagement",
      value: "78%",
      description: "Active participation in ministries",
      trend: "+22%",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-50 text-green-700 border-green-200">
            Success Metrics
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Measuring Spiritual Impact
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Track meaningful progress across our global community with comprehensive 
            analytics and engagement metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${metric.color} shadow-lg`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-green-50 text-green-700 border-green-200 font-semibold">
                  {metric.trend}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {metric.value}
                </h3>
                <h4 className="text-lg font-semibold text-slate-700">
                  {metric.label}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {metric.description}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Trending upward this quarter
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Next Steps Section */}
        <div className="mt-20 text-center">
          <Card className="p-12 border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Ready for the Next Step?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're preparing wireframes for member portals, cell leader dashboards, 
              and central admin panels. Plus mobile app flow design coming soon.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Q1 2024</div>
                <div className="text-blue-100">Wireframe Development</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Q2 2024</div>
                <div className="text-blue-100">Pilot Launch</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Q3 2024</div>
                <div className="text-blue-100">Global Rollout</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
