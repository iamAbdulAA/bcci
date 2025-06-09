
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Heart, TrendingUp } from "lucide-react";
import { ContributionDialog } from "@/components/ContributionDialog";
import { Button } from "@/components/ui/button";

const contributionSummary = {
  totalThisYear: 2400,
  lastGift: 200,
  lastGiftDate: "Nov 28, 2024",
  frequency: "Monthly"
};

export const GivingTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contribution History</CardTitle>
        <CardDescription>Your giving record and impact</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">${contributionSummary.totalThisYear}</div>
            <p className="text-sm text-slate-600">Total This Year</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <Heart className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">${contributionSummary.lastGift}</div>
            <p className="text-sm text-slate-600">Last Gift</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">{contributionSummary.frequency}</div>
            <p className="text-sm text-slate-600">Giving Pattern</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-slate-600 mb-4">Last contribution: {contributionSummary.lastGiftDate}</p>
          <ContributionDialog>
            <Button>
              <Heart className="w-4 h-4 mr-2" />
              Make a Contribution
            </Button>
          </ContributionDialog>
        </div>
      </CardContent>
    </Card>
  );
};
