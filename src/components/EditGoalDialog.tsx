
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Edit, Trash2 } from "lucide-react";
import { SpiritualGoal, useSpiritualGoals } from "@/contexts/SpiritualGoalsContext";
import { useToast } from "@/hooks/use-toast";

interface EditGoalDialogProps {
  goal: SpiritualGoal;
  children: React.ReactNode;
}

export function EditGoalDialog({ goal, children }: EditGoalDialogProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: goal.title,
    description: goal.description,
    targetValue: goal.targetValue,
    currentValue: goal.currentValue
  });
  const { updateGoal, deleteGoal } = useSpiritualGoals();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Calculate progress based on current vs target
    const current = parseInt(formData.currentValue.match(/\d+/)?.[0] || '0');
    const target = parseInt(formData.targetValue.match(/\d+/)?.[0] || '1');
    const progress = Math.min(Math.round((current / target) * 100), 100);

    updateGoal(goal.id, {
      ...formData,
      progress
    });

    toast({
      title: "Goal Updated",
      description: "Your spiritual goal has been updated successfully.",
    });
    setOpen(false);
  };

  const handleDelete = () => {
    deleteGoal(goal.id);
    toast({
      title: "Goal Deleted",
      description: "Your spiritual goal has been deleted.",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Spiritual Goal</DialogTitle>
          <DialogDescription>
            Update your spiritual growth goal details.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Goal Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="currentValue">Current Progress</Label>
              <Input
                id="currentValue"
                placeholder="e.g., 25 days"
                value={formData.currentValue}
                onChange={(e) => setFormData(prev => ({ ...prev, currentValue: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetValue">Target</Label>
              <Input
                id="targetValue"
                placeholder="e.g., 30 days"
                value={formData.targetValue}
                onChange={(e) => setFormData(prev => ({ ...prev, targetValue: e.target.value }))}
                required
              />
            </div>
          </div>
          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="destructive"
              onClick={handleDelete}
              className="flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Delete Goal
            </Button>
            <div className="flex gap-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                <Edit className="w-4 h-4 mr-2" />
                Update Goal
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
