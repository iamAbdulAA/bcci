
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Calendar, MessageSquare, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const QuickActions = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePrayerRequest = () => {
    navigate('/integrated-messaging');
  };

  const handleDevotional = () => {
    navigate('/digital-discipleship-flow');
  };

  const handleRSVP = (eventTitle: string) => {
    toast({
      title: "RSVP Confirmed",
      description: `You're now registered for ${eventTitle}`,
    });
  };

  const handleConnectCell = () => {
    navigate('/cluster-cell-system');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="w-5 h-5" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button className="h-20 flex flex-col gap-2" onClick={handlePrayerRequest}>
            <Heart className="w-6 h-6" />
            Submit Prayer Request
          </Button>
          <Button variant="outline" className="h-20 flex flex-col gap-2" onClick={handleDevotional}>
            <BookOpen className="w-6 h-6" />
            Daily Devotional
          </Button>
          <Button variant="outline" className="h-20 flex flex-col gap-2" onClick={() => handleRSVP("upcoming event")}>
            <Calendar className="w-6 h-6" />
            RSVP Event
          </Button>
          <Button variant="outline" className="h-20 flex flex-col gap-2" onClick={handleConnectCell}>
            <MessageSquare className="w-6 h-6" />
            Connect with Cell
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
