
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
    navigate('/digital-transformation-flow');
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
      <CardHeader className="pb-3 sm:pb-6">
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          <Button 
            className="h-16 sm:h-20 flex flex-col gap-1 sm:gap-2 hover:scale-105 transition-transform text-xs sm:text-sm p-2" 
            onClick={handlePrayerRequest}
          >
            <Heart className="w-4 h-4 sm:w-6 sm:h-6" />
            <span className="text-center leading-tight">Submit Prayer Request</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-16 sm:h-20 flex flex-col gap-1 sm:gap-2 hover:scale-105 transition-transform text-xs sm:text-sm p-2" 
            onClick={handleDevotional}
          >
            <BookOpen className="w-4 h-4 sm:w-6 sm:h-6" />
            <span className="text-center leading-tight">Daily Devotional</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-16 sm:h-20 flex flex-col gap-1 sm:gap-2 hover:scale-105 transition-transform text-xs sm:text-sm p-2" 
            onClick={() => handleRSVP("upcoming event")}
          >
            <Calendar className="w-4 h-4 sm:w-6 sm:h-6" />
            <span className="text-center leading-tight">RSVP Event</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-16 sm:h-20 flex flex-col gap-1 sm:gap-2 hover:scale-105 transition-transform text-xs sm:text-sm p-2" 
            onClick={handleConnectCell}
          >
            <MessageSquare className="w-4 h-4 sm:w-6 sm:h-6" />
            <span className="text-center leading-tight">Connect with Cell</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
