import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Download, 
  Calendar, 
  Globe,
  Users,
  Clock,
  Heart,
  Star,
  Volume2,
  Subtitles,
  Wifi,
  Search
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LiveOnDemandWorship = () => {
  const { toast } = useToast();

  const handleJoinService = (serviceName: string) => {
    toast({
      title: "Joining Service",
      description: `Connecting to ${serviceName}...`,
    });
  };

  const handleWatchService = (serviceName: string) => {
    toast({
      title: "Starting Playback",
      description: `Loading ${serviceName}...`,
    });
  };

  const liveServices = [
    {
      title: "Sunday Morning Worship",
      church: "Grace Community Church",
      time: "10:00 AM PST",
      viewers: 1240,
      language: "English",
      status: "live"
    },
    {
      title: "Evening Prayer Service",
      church: "Faith Baptist Church",
      time: "7:00 PM EST",
      viewers: 580,
      language: "Spanish",
      status: "starting-soon"
    }
  ];

  const replayLibrary = [
    {
      title: "Breakthrough Sunday Service",
      church: "Mountain View Church",
      date: "Dec 1, 2024",
      duration: "1h 45m",
      views: 15420,
      rating: 4.9,
      languages: ["English", "Spanish", "Portuguese"]
    },
    {
      title: "Youth Conference 2024",
      church: "New Life Center",
      date: "Nov 28, 2024",
      duration: "2h 30m",
      views: 8760,
      rating: 4.8,
      languages: ["English", "French"]
    },
    {
      title: "Christmas Celebration",
      church: "Trinity Fellowship",
      date: "Nov 25, 2024",
      duration: "1h 20m",
      views: 22100,
      rating: 4.9,
      languages: ["English", "Korean", "Mandarin"]
    }
  ];

  const regions = [
    { name: "North America", churches: 45, services: 120, flag: "🇺🇸" },
    { name: "Europe", churches: 38, services: 95, flag: "🇪🇺" },
    { name: "Asia Pacific", churches: 52, services: 140, flag: "🌏" },
    { name: "Latin America", churches: 41, services: 110, flag: "🌎" },
    { name: "Africa", churches: 29, services: 75, flag: "🌍" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-pink-50 p-6">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
            <Play className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Live & On-Demand Worship</h1>
            <p className="text-slate-600">Global worship experience with 24/7 access to services and content</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge className="bg-red-100 text-red-700">24/7 Access</Badge>
          <Badge className="bg-blue-100 text-blue-700">HD Streaming</Badge>
          <Badge className="bg-green-100 text-green-700">Multi-Language</Badge>
        </div>
      </div>

      <Tabs defaultValue="live" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="live">Live Services</TabsTrigger>
          <TabsTrigger value="library">Replay Library</TabsTrigger>
          <TabsTrigger value="regional">Regional Content</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="space-y-6">
          <div className="space-y-4">
            {liveServices.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="w-1/3 bg-gradient-to-br from-slate-800 to-slate-900 relative">
                      <div className="aspect-video flex items-center justify-center">
                        <Play className="w-16 h-16 text-white opacity-80" />
                      </div>
                      {service.status === "live" && (
                        <Badge className="absolute top-3 left-3 bg-red-600 text-white">
                          🔴 LIVE
                        </Badge>
                      )}
                      {service.status === "starting-soon" && (
                        <Badge className="absolute top-3 left-3 bg-orange-600 text-white">
                          Starting Soon
                        </Badge>
                      )}
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                          <p className="text-slate-600 mb-2">{service.church}</p>
                          <div className="flex items-center gap-4 text-sm text-slate-500">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {service.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {service.viewers} watching
                            </span>
                            <span className="flex items-center gap-1">
                              <Globe className="w-4 h-4" />
                              {service.language}
                            </span>
                          </div>
                        </div>
                        <Button 
                          size="lg" 
                          className="bg-red-600 hover:bg-red-700"
                          onClick={() => handleJoinService(service.title)}
                        >
                          <Play className="w-5 h-5 mr-2" />
                          {service.status === "live" ? "Join Live" : "Notify Me"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="library" className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                className="w-full pl-10 pr-4 py-2 border rounded-lg" 
                placeholder="Search worship services, sermons, conferences..." 
              />
            </div>
            <Button variant="outline">
              Filter
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {replayLibrary.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative rounded-t-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-80" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                    {service.duration}
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.church} • {service.date}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {service.views.toLocaleString()} views
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      {service.rating}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {service.languages.map((lang, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1" onClick={() => handleWatchService(service.title)}>
                      <Play className="w-4 h-4 mr-2" />
                      Watch
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => toast({ title: "Download", description: "Downloading service..." })}>
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="regional" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{region.flag}</span>
                    <div>
                      <CardTitle>{region.name}</CardTitle>
                      <CardDescription>{region.churches} churches</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{region.churches}</div>
                      <p className="text-xs text-slate-600">Churches</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{region.services}</div>
                      <p className="text-xs text-slate-600">Services</p>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Globe className="w-4 h-4 mr-2" />
                    Explore Content
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Streaming Quality</CardTitle>
                <CardDescription>Configure video and audio settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Video Quality</label>
                  <select className="w-full px-3 py-2 border rounded-md">
                    <option>Auto (Recommended)</option>
                    <option>1080p HD</option>
                    <option>720p</option>
                    <option>480p</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Audio Quality</label>
                  <select className="w-full px-3 py-2 border rounded-md">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Language & Accessibility</CardTitle>
                <CardDescription>Customize language and subtitle preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Language</label>
                  <select className="w-full px-3 py-2 border rounded-md">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>Portuguese</option>
                    <option>French</option>
                    <option>Korean</option>
                    <option>Mandarin</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Auto-enable subtitles</span>
                  <input type="checkbox" className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Offline downloads</span>
                  <input type="checkbox" className="rounded" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LiveOnDemandWorship;
