
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const ministryHistory = [
  { role: "Youth Ministry Leader", period: "2023 - Present", achievements: ["Led 15 youth to Christ", "Organized 3 camps"] },
  { role: "Worship Team Member", period: "2022 - 2023", achievements: ["Served 48 services", "Trained 2 new members"] },
  { role: "Cell Group Member", period: "2021 - Present", achievements: ["100% attendance", "Mentored 3 members"] }
];

export const MinistryTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ministry Involvement History</CardTitle>
        <CardDescription>Your service record and achievements</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {ministryHistory.map((ministry, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium">{ministry.role}</h4>
              <Badge variant="outline">{ministry.period}</Badge>
            </div>
            <div className="space-y-1">
              {ministry.achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
