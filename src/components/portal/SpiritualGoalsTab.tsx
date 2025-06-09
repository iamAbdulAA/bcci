
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Target, Edit } from "lucide-react";
import { useSpiritualGoals } from "@/contexts/SpiritualGoalsContext";
import { SetGoalDialog } from "@/components/SetGoalDialog";
import { EditGoalDialog } from "@/components/EditGoalDialog";

export const SpiritualGoalsTab = () => {
  const { goals } = useSpiritualGoals();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Spiritual Growth Goals</CardTitle>
        <CardDescription>Track your spiritual disciplines and growth milestones</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.map((goal) => (
          <div key={goal.id} className="space-y-2">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">{goal.title}</h4>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">{goal.currentValue} / {goal.targetValue}</span>
                <EditGoalDialog goal={goal}>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                </EditGoalDialog>
              </div>
            </div>
            <Progress value={goal.progress} className="h-2" />
            <p className="text-xs text-slate-500">{goal.progress}% complete</p>
            <p className="text-sm text-slate-600">{goal.description}</p>
          </div>
        ))}
        <SetGoalDialog>
          <Button className="w-full mt-4">
            <Target className="w-4 h-4 mr-2" />
            Set New Goal
          </Button>
        </SetGoalDialog>
      </CardContent>
    </Card>
  );
};
