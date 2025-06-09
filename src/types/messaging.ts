
export interface Chat {
  name: string;
  lastMessage: string;
  lastSender: string;
  timestamp: string;
  unread: number;
  members: number;
  type: "cluster" | "cell" | "ministry";
}

export interface PrayerRequest {
  id: number;
  requester: string;
  request: string;
  timestamp: string;
  responses: number;
  privacy: string;
  category: string;
}

export interface Message {
  sender: string;
  message: string;
  timestamp: string;
  group: string;
  isOwn: boolean;
}

export interface EventNotification {
  title: string;
  message: string;
  time: string;
  type: "event" | "reminder" | "announcement";
  priority: "high" | "medium" | "low";
}
