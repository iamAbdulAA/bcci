
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const upcomingEvents = [
  { title: "Sunday Worship Service", date: "Dec 8, 2024", time: "10:00 AM", status: "confirmed" },
  { title: "Cell Group Meeting", date: "Dec 10, 2024", time: "7:00 PM", status: "pending" },
  { title: "Youth Conference", date: "Dec 15, 2024", time: "6:00 PM", status: "confirmed" },
  { title: "Leadership Training", date: "Dec 20, 2024", time: "9:00 AM", status: "pending" }
];

export const EventsTab = () => {
  const { toast } = useToast();

  const handleRSVP = (eventTitle: string) => {
    toast({
      title: "RSVP Confirmed",
      description: `You're now registered for ${eventTitle}`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
        <CardDescription>Manage your event registrations and RSVPs</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium">{event.title}</h4>
                <p className="text-sm text-slate-600">{event.date} at {event.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={event.status === 'confirmed' ? 'default' : 'secondary'}>
                {event.status}
              </Badge>
              {event.status === 'pending' && (
                <Button size="sm" onClick={() => handleRSVP(event.title)}>RSVP</Button>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
