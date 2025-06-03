
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ReactNode } from "react";

interface InteractiveButtonProps {
  children: ReactNode;
  onClick?: () => void;
  toastTitle?: string;
  toastDescription?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  disabled?: boolean;
}

export const InteractiveButton = ({ 
  children, 
  onClick, 
  toastTitle, 
  toastDescription, 
  variant = "default",
  size = "default",
  className = "",
  disabled = false
}: InteractiveButtonProps) => {
  const { toast } = useToast();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (toastTitle) {
      toast({
        title: toastTitle,
        description: toastDescription || "Action completed successfully!",
      });
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default InteractiveButton;
