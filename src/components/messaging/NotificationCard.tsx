
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Bell, MessageSquare } from "lucide-react";
import { EventNotification } from "@/types/messaging";

interface NotificationCardProps {
  notification: EventNotification;
}

export const NotificationCard = ({ notification }: NotificationCardProps) => {
  return (
    <Card className={`border-l-4 ${
      notification.priority === 'high' ? 'border-red-500' :
      notification.priority === 'medium' ? 'border-orange-500' : 'border-blue-500'
    }`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              notification.type === 'event' ? 'bg-blue-100' :
              notification.type === 'reminder' ? 'bg-orange-100' : 'bg-green-100'
            }`}>
              {notification.type === 'event' && <Calendar className="w-4 h-4 text-blue-600" />}
              {notification.type === 'reminder' && <Bell className="w-4 h-4 text-orange-600" />}
              {notification.type === 'announcement' && <MessageSquare className="w-4 h-4 text-green-600" />}
            </div>
            <div>
              <h4 className="font-medium">{notification.title}</h4>
              <p className="text-sm text-slate-600">{notification.message}</p>
            </div>
          </div>
          <span className="text-xs text-slate-500">{notification.time}</span>
        </div>
      </CardContent>
    </Card>
  );
};
