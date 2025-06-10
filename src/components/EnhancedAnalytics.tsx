
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Users, BookOpen, Heart, Star } from "lucide-react";

export const EnhancedAnalytics = () => {
  const metrics = [
    { 
      title: "Community Engagement", 
      value: 85, 
      trend: 12, 
      icon: Users, 
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    { 
      title: "Learning Progress", 
      value: 73, 
      trend: 8, 
      icon: BookOpen, 
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    { 
      title: "Prayer Participation", 
      value: 92, 
      trend: -3, 
      icon: Heart, 
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    { 
      title: "Goal Achievement", 
      value: 68, 
      trend: 15, 
      icon: Star, 
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <div className={`p-2 rounded-lg ${metric.bgColor}`}>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">{metric.value}%</div>
            <Progress value={metric.value} className="mb-2" />
            <div className="flex items-center text-xs">
              {metric.trend > 0 ? (
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
              )}
              <span className={metric.trend > 0 ? "text-green-500" : "text-red-500"}>
                {Math.abs(metric.trend)}%
              </span>
              <span className="text-slate-500 ml-1">vs last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
