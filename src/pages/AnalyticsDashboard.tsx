
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  Calendar,
  MapPin,
  Clock,
  Target,
  Download,
  Filter,
  RefreshCw,
  Eye,
  Heart,
  UserPlus
} from "lucide-react";
import Navigation from "@/components/Navigation";

const AnalyticsDashboard = () => {
  const keyMetrics = [
    { title: "Total Members", value: "15,420", change: "+8.5%", trend: "up", icon: Users, color: "blue" },
    { title: "Weekly Attendance", value: "12,840", change: "+12.3%", trend: "up", icon: Calendar, color: "green" },
    { title: "Online Engagement", value: "89.2%", change: "+3.1%", trend: "up", icon: Eye, color: "purple" },
    { title: "New Converts", value: "234", change: "+15.7%", trend: "up", icon: Heart, color: "red" },
    { title: "Active Leaders", value: "1,240", change: "+5.2%", trend: "up", icon: UserPlus, color: "orange" },
    { title: "Prayer Requests", value: "456", change: "-2.8%", trend: "down", icon: Target, color: "teal" }
  ];

  const attendanceData = [
    { month: "Jan", physical: 8500, online: 3200, total: 11700 },
    { month: "Feb", physical: 8800, online: 3400, total: 12200 },
    { month: "Mar", physical: 9200, online: 3600, total: 12800 },
    { month: "Apr", physical: 9100, online: 3800, total: 12900 },
    { month: "May", physical: 9400, online: 4000, total: 13400 },
    { month: "Jun", physical: 9600, online: 4200, total: 13800 }
  ];

  const regionalPerformance = [
    { region: "North America", members: 5420, growth: 8.5, attendance: 92.1, leaders: 456 },
    { region: "Europe", members: 3240, growth: 12.3, attendance: 88.7, leaders: 298 },
    { region: "Asia Pacific", members: 4130, growth: 15.2, attendance: 91.4, leaders: 347 },
    { region: "Latin America", members: 2630, growth: 10.8, attendance: 89.3, leaders: 139 }
  ];

  const engagementMetrics = [
    { activity: "Sunday Service", participation: 92.1, trend: "+2.3%" },
    { activity: "Cell Groups", participation: 78.4, trend: "+5.1%" },
    { activity: "Prayer Meetings", participation: 65.7, trend: "+1.8%" },
    { activity: "Online Devotionals", participation: 71.2, trend: "+8.9%" },
    { activity: "Youth Events", participation: 84.3, trend: "+6.2%" },
    { activity: "Ministry Training", participation: 56.8, trend: "+3.4%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8 mt-20">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-800">Analytics Dashboard</h1>
                <p className="text-slate-600">Comprehensive insights into church growth and engagement</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge className="bg-orange-100 text-orange-700">Data Driven</Badge>
            <Badge className="bg-blue-100 text-blue-700">Real-time</Badge>
            <Badge className="bg-green-100 text-green-700">Comprehensive</Badge>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="regional">Regional</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-slate-600">{metric.title}</CardTitle>
                      <div className={`w-8 h-8 bg-${metric.color}-100 rounded-lg flex items-center justify-center`}>
                        <metric.icon className={`w-4 h-4 text-${metric.color}-600`} />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-2xl font-bold text-slate-800">{metric.value}</div>
                        <div className={`flex items-center gap-1 text-sm ${
                          metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          <TrendingUp className={`w-4 h-4 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                          {metric.change}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Growth Trend</CardTitle>
                  <CardDescription>Member growth over the past 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end justify-between gap-2">
                    {attendanceData.map((data, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-md relative" 
                             style={{ height: `${(data.total / 14000) * 200}px` }}>
                          <div className="absolute top-0 left-0 right-0 bg-green-500 rounded-t-md"
                               style={{ height: `${(data.online / data.total) * 100}%` }}>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-slate-600">{data.month}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded"></div>
                      <span className="text-xs text-slate-600">Physical</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded"></div>
                      <span className="text-xs text-slate-600">Online</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Regions</CardTitle>
                  <CardDescription>Regional growth and engagement metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {regionalPerformance.slice(0, 4).map((region, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{region.region}</h4>
                        <p className="text-sm text-slate-600">{region.members.toLocaleString()} members</p>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 font-medium">+{region.growth}%</div>
                        <div className="text-xs text-slate-600">{region.attendance}% attendance</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Attendance Trends</CardTitle>
                    <CardDescription>Physical vs Online attendance over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-end justify-between gap-4">
                      {attendanceData.map((data, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                          <div className="w-full space-y-1">
                            <div className="w-full bg-blue-500 rounded-md" 
                                 style={{ height: `${(data.physical / 10000) * 200}px` }}>
                            </div>
                            <div className="w-full bg-green-500 rounded-md" 
                                 style={{ height: `${(data.online / 5000) * 100}px` }}>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs font-medium text-slate-800">{data.total.toLocaleString()}</div>
                            <div className="text-xs text-slate-600">{data.month}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Attendance Summary</CardTitle>
                  <CardDescription>Current month statistics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">12,840</div>
                    <p className="text-sm text-slate-600">Total Attendance</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Physical</span>
                      <span className="text-sm font-medium">9,600 (75%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Online</span>
                      <span className="text-sm font-medium">3,240 (25%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Growth Rate</span>
                      <span className="text-sm font-medium text-green-600">+12.3%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="engagement" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {engagementMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">{metric.activity}</h3>
                      <Badge variant="outline" className="text-green-600">{metric.trend}</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Participation Rate</span>
                        <span className="font-medium">{metric.participation}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                          style={{ width: `${metric.participation}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="regional" className="space-y-6">
            <div className="space-y-4">
              {regionalPerformance.map((region, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">{region.region}</h3>
                      <Badge className="bg-green-100 text-green-700">+{region.growth}% growth</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-xl font-bold text-blue-600">{region.members.toLocaleString()}</div>
                        <p className="text-xs text-slate-600">Total Members</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-xl font-bold text-green-600">{region.attendance}%</div>
                        <p className="text-xs text-slate-600">Attendance Rate</p>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-xl font-bold text-purple-600">{region.leaders}</div>
                        <p className="text-xs text-slate-600">Active Leaders</p>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded-lg">
                        <div className="text-xl font-bold text-orange-600">+{region.growth}%</div>
                        <p className="text-xs text-slate-600">Monthly Growth</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Reports</CardTitle>
                  <CardDescription>Automated weekly summaries</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download This Week
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Report
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monthly Analytics</CardTitle>
                  <CardDescription>Comprehensive monthly insights</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download November
                  </Button>
                  <Button variant="outline" className="w-full">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Custom Report
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Leadership Dashboard</CardTitle>
                  <CardDescription>Executive summary reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Executive Summary
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Target className="w-4 h-4 mr-2" />
                    Goal Tracking
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
