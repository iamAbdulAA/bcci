
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Phone, Video, MoreHorizontal, Send, Paperclip } from "lucide-react";
import { Message } from "@/types/messaging";

interface ChatWindowProps {
  selectedChat: string;
  messages: Message[];
  message: string;
  onMessageChange: (message: string) => void;
  onSendMessage: () => void;
  onJoinCall: (type: string) => void;
}

export const ChatWindow = ({ 
  selectedChat, 
  messages, 
  message, 
  onMessageChange, 
  onSendMessage, 
  onJoinCall 
}: ChatWindowProps) => {
  return (
    <Card className="h-96">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg">{selectedChat}</CardTitle>
              <CardDescription>156 members • 12 online</CardDescription>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => onJoinCall("Audio")}>
              <Phone className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => onJoinCall("Video")}>
              <Video className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs p-3 rounded-lg ${
                msg.isOwn 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-slate-100 text-slate-800'
              }`}>
                {!msg.isOwn && <p className="text-xs font-medium mb-1">{msg.sender}</p>}
                <p className="text-sm">{msg.message}</p>
                <p className={`text-xs mt-1 ${msg.isOwn ? 'text-blue-100' : 'text-slate-500'}`}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 border-t pt-4">
          <Button variant="outline" size="sm">
            <Paperclip className="w-4 h-4" />
          </Button>
          <input 
            className="flex-1 px-3 py-2 border rounded-lg" 
            placeholder="Type your message..."
            value={message}
            onChange={(e) => onMessageChange(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onSendMessage()}
          />
          <Button size="sm" onClick={onSendMessage}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
