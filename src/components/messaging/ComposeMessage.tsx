
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, Calendar } from "lucide-react";

interface ComposeMessageProps {
  subject: string;
  newMessage: string;
  onSubjectChange: (subject: string) => void;
  onMessageChange: (message: string) => void;
  onSendMessage: () => void;
  onSchedule: () => void;
}

export const ComposeMessage = ({
  subject,
  newMessage,
  onSubjectChange,
  onMessageChange,
  onSendMessage,
  onSchedule
}: ComposeMessageProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Send Message</CardTitle>
        <CardDescription>Send messages to individuals, groups, or make announcements</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">To:</label>
          <select className="w-full px-3 py-2 border rounded-md">
            <option>Select recipient...</option>
            <option>Downtown LA Cluster (156 members)</option>
            <option>Hope Cell Group (23 members)</option>
            <option>Youth Ministry Team (12 members)</option>
            <option>Individual Member</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Subject:</label>
          <input 
            className="w-full px-3 py-2 border rounded-md" 
            placeholder="Message subject"
            value={subject}
            onChange={(e) => onSubjectChange(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Message:</label>
          <textarea 
            className="w-full px-3 py-2 border rounded-md h-32" 
            placeholder="Type your message here..."
            value={newMessage}
            onChange={(e) => onMessageChange(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="urgent" />
          <label htmlFor="urgent" className="text-sm">Mark as urgent</label>
        </div>
        <div className="flex gap-2">
          <Button className="flex-1" onClick={onSendMessage}>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
          <Button variant="outline" onClick={onSchedule}>
            <Calendar className="w-4 h-4 mr-2" />
            Schedule
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
