
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Chat } from "@/types/messaging";

interface ChatListProps {
  chats: Chat[];
  selectedChat: string;
  onChatSelect: (chatName: string) => void;
}

export const ChatList = ({ chats, selectedChat, onChatSelect }: ChatListProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Active Chats</CardTitle>
          <Button variant="outline" size="sm">
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 p-3">
        {chats.map((chat, index) => (
          <div 
            key={index} 
            className={`p-3 rounded-lg hover:bg-slate-50 cursor-pointer border ${
              selectedChat === chat.name ? 'bg-slate-100 border-blue-300' : ''
            }`}
            onClick={() => onChatSelect(chat.name)}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  chat.type === 'cluster' ? 'bg-blue-500' :
                  chat.type === 'cell' ? 'bg-green-500' : 'bg-purple-500'
                }`}></div>
                <h4 className="font-medium text-sm">{chat.name}</h4>
              </div>
              {chat.unread > 0 && (
                <Badge className="bg-red-500 text-white text-xs px-2 py-1">
                  {chat.unread}
                </Badge>
              )}
            </div>
            <p className="text-xs text-slate-600 mb-1">{chat.lastMessage}</p>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>{chat.lastSender}</span>
              <span>{chat.timestamp}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
