
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

export const WelcomeHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Welcome, John Smith</h1>
          <p className="text-slate-600">Cell Leader • Central City Cluster • Active since 2021</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Badge className="bg-green-100 text-green-700">Active Member</Badge>
        <Badge className="bg-blue-100 text-blue-700">Leadership Track</Badge>
        <Badge className="bg-purple-100 text-purple-700">Mentor</Badge>
      </div>
    </div>
  );
};
