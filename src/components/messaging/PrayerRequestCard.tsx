
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageSquare, Lock } from "lucide-react";
import { PrayerRequest } from "@/types/messaging";

interface PrayerRequestCardProps {
  request: PrayerRequest;
  onPrayerResponse: (action: string) => void;
}

export const PrayerRequestCard = ({ request, onPrayerResponse }: PrayerRequestCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">{request.requester}</h3>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span>{request.timestamp}</span>
                <Badge variant="outline">{request.category}</Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-slate-400" />
            <span className="text-xs text-slate-500">{request.privacy}</span>
          </div>
        </div>
        <p className="text-slate-700 mb-4">{request.request}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-600">{request.responses} people praying</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => onPrayerResponse("pray")}>
              <Heart className="w-4 h-4 mr-2" />
              Pray
            </Button>
            <Button variant="outline" size="sm" onClick={() => onPrayerResponse("respond")}>
              <MessageSquare className="w-4 h-4 mr-2" />
              Respond
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
