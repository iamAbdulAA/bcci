
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, MessageSquare, Phone, Mail } from "lucide-react";

interface Member {
  id: string;
  name: string;
  role: string;
  cluster: string;
  cell: string;
  status: 'active' | 'away' | 'offline';
  initials: string;
}

export const MemberDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const members: Member[] = [
    { id: '1', name: 'John Smith', role: 'Cell Leader', cluster: 'Central', cell: 'Alpha', status: 'active', initials: 'JS' },
    { id: '2', name: 'Sarah Williams', role: 'Member', cluster: 'North', cell: 'Beta', status: 'active', initials: 'SW' },
    { id: '3', name: 'Michael Brown', role: 'Pastor', cluster: 'Central', cell: 'Gamma', status: 'away', initials: 'MB' },
    { id: '4', name: 'Emma Davis', role: 'Youth Leader', cluster: 'South', cell: 'Delta', status: 'offline', initials: 'ED' },
    { id: '5', name: 'David Wilson', role: 'Member', cluster: 'East', cell: 'Epsilon', status: 'active', initials: 'DW' }
  ];

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.cluster.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: Member['status']) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-slate-400';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Member Directory</CardTitle>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-4 max-h-96 overflow-y-auto">
        {filteredMembers.map((member) => (
          <div key={member.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar>
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white ${getStatusColor(member.status)}`} />
              </div>
              <div>
                <div className="font-medium">{member.name}</div>
                <div className="text-sm text-slate-600">{member.role}</div>
                <div className="flex gap-2 mt-1">
                  <Badge variant="outline" className="text-xs">{member.cluster}</Badge>
                  <Badge variant="outline" className="text-xs">{member.cell}</Badge>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MessageSquare className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
