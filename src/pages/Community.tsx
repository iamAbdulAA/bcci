
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Heart, 
  MessageCircle, 
  Calendar, 
  Star,
  MapPin,
  Clock,
  UserPlus,
  Zap,
  Trophy
} from "lucide-react";

const Community = () => {
  const communityStats = [
    { label: "Active Members", value: "2,847", icon: Users, color: "text-blue-600" },
    { label: "Cell Groups", value: "156", icon: Heart, color: "text-green-600" },
    { label: "Monthly Events", value: "89", icon: Calendar, color: "text-purple-600" },
    { label: "Prayer Requests", value: "234", icon: MessageCircle, color: "text-red-600" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Cell Group Leader",
      content: "The BCCI platform has transformed how we connect and grow together. Our cell group engagement has increased by 300%!",
      avatar: "/placeholder.svg",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Youth Pastor",
      content: "The digital discipleship tools have made it so much easier to track spiritual growth and mentor our young people.",
      avatar: "/placeholder.svg",
      rating: 5
    },
    {
      name: "Rebecca Williams",
      role: "Community Member",
      content: "I love how I can set spiritual goals and see my progress. It's like having a personal spiritual trainer!",
      avatar: "/placeholder.svg",
      rating: 5
    }
  ];

  const upcomingEvents = [
    {
      title: "Sunday Service",
      date: "Dec 8, 2024",
      time: "10:00 AM",
      location: "Main Sanctuary",
      attendees: 450,
      type: "Worship"
    },
    {
      title: "Youth Cell Group Meeting",
      date: "Dec 10, 2024",
      time: "7:00 PM",
      location: "Community Hall B",
      attendees: 28,
      type: "Cell Group"
    },
    {
      title: "Prayer & Fasting Week",
      date: "Dec 15-21, 2024",
      time: "All Day",
      location: "Various Locations",
      attendees: 120,
      type: "Special Event"
    },
    {
      title: "Christmas Outreach",
      date: "Dec 24, 2024",
      time: "2:00 PM",
      location: "Downtown Plaza",
      attendees: 89,
      type: "Outreach"
    }
  ];

  const cellGroups = [
    { name: "Young Professionals", leader: "David Kim", members: 18, meetDay: "Wednesday" },
    { name: "Families United", leader: "Lisa Garcia", members: 24, meetDay: "Saturday" },
    { name: "College Connect", leader: "James Wilson", members: 15, meetDay: "Friday" },
    { name: "Senior Saints", leader: "Mary Thompson", members: 12, meetDay: "Tuesday" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
            BCCI Community
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
            Growing Together in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-700 block">
              Faith & Fellowship
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of believers connecting, growing, and serving together 
            through our vibrant community platform.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Community Voices
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Upcoming Events</h2>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg text-slate-800">{event.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {event.type}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-slate-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                        <Clock className="w-4 h-4 ml-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cell Groups */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Active Cell Groups</h2>
            <div className="space-y-4">
              {cellGroups.map((group, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg text-slate-800">{group.name}</h3>
                      <Button size="sm" variant="outline">
                        <UserPlus className="w-4 h-4 mr-1" />
                        Join
                      </Button>
                    </div>
                    <div className="space-y-1 text-slate-600">
                      <div className="flex items-center justify-between">
                        <span>Leader: {group.leader}</span>
                        <span>{group.members} members</span>
                      </div>
                      <div>Meets: {group.meetDay}s</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-green-600 to-blue-700 text-white text-center">
          <CardContent className="py-12">
            <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Connect with believers, grow in your faith, and make a lasting impact 
              in your spiritual journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-800 hover:bg-slate-100">
                <UserPlus className="w-5 h-5 mr-2" />
                Join a Cell Group
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800">
                <Zap className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Community;
