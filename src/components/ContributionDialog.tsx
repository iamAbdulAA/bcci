
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Heart, CreditCard, DollarSign, Calendar } from "lucide-react";

interface ContributionFormData {
  amount: string;
  type: string;
  frequency: string;
  paymentMethod: string;
  dedication?: string;
}

interface ContributionDialogProps {
  children: React.ReactNode;
}

export function ContributionDialog({ children }: ContributionDialogProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const form = useForm<ContributionFormData>();

  const contributionTypes = [
    { value: "tithe", label: "Tithe (10%)" },
    { value: "offering", label: "General Offering" },
    { value: "missions", label: "Missions Fund" },
    { value: "building", label: "Building Fund" },
    { value: "youth", label: "Youth Ministry" },
    { value: "charity", label: "Charity/Outreach" },
    { value: "other", label: "Other" },
  ];

  const frequencies = [
    { value: "once", label: "One-time" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "quarterly", label: "Quarterly" },
    { value: "annually", label: "Annually" },
  ];

  const paymentMethods = [
    { value: "card", label: "Credit/Debit Card" },
    { value: "bank", label: "Bank Transfer" },
    { value: "paypal", label: "PayPal" },
    { value: "cash", label: "Cash/Check" },
  ];

  const onSubmit = (data: ContributionFormData) => {
    console.log("Contribution data:", data);
    toast({
      title: "Contribution Processed!",
      description: `Thank you for your $${data.amount} ${data.type} contribution.`,
    });
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Make a Contribution
          </DialogTitle>
          <DialogDescription>
            Support our ministry with your generous contribution. Every gift makes a difference.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <Input 
                        placeholder="0.00" 
                        className="pl-10" 
                        type="number" 
                        step="0.01" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contribution Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select contribution type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {contributionTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="frequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Frequency</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {frequencies.map((freq) => (
                        <SelectItem key={freq.value} value={freq.value}>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {freq.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Method</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {paymentMethods.map((method) => (
                        <SelectItem key={method.value} value={method.value}>
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4" />
                            {method.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dedication"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dedication (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="In memory of... / In honor of..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Add a special dedication for your contribution
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Secure Transaction:</strong> All contributions are processed securely. 
                You will receive a receipt for tax purposes.
              </p>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                <Heart className="w-4 h-4 mr-2" />
                Contribute
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
