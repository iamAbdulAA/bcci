
import { Bell, CheckCircle, Calendar, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";

interface Notification {
  id: string;
  type: 'prayer' | 'event' | 'community' | 'achievement';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export const NotificationBell = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'prayer',
      title: 'Prayer Request',
      message: 'Sarah Williams requested prayer for healing',
      time: '5 min ago',
      read: false
    },
    {
      id: '2',
      type: 'event',
      title: 'Upcoming Event',
      message: 'Bible Study tonight at 7 PM',
      time: '2 hours ago',
      read: false
    },
    {
      id: '3',
      type: 'achievement',
      title: 'Goal Completed',
      message: 'You completed your daily prayer goal!',
      time: '1 day ago',
      read: true
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'prayer': return <Heart className="h-4 w-4 text-red-500" />;
      case 'event': return <Calendar className="h-4 w-4 text-blue-500" />;
      case 'community': return <Users className="h-4 w-4 text-green-500" />;
      case 'achievement': return <CheckCircle className="h-4 w-4 text-yellow-500" />;
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative ml-2">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 max-h-64 overflow-y-auto">
            {notifications.map((notification) => (
              <div 
                key={notification.id}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  notification.read ? 'bg-slate-50' : 'bg-blue-50 border-blue-200'
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex items-start gap-3">
                  {getIcon(notification.type)}
                  <div className="flex-1">
                    <div className="font-medium text-sm">{notification.title}</div>
                    <div className="text-sm text-slate-600">{notification.message}</div>
                    <div className="text-xs text-slate-400 mt-1">{notification.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
};
