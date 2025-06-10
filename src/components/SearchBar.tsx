
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Search Results",
        description: `Searching for "${searchQuery}"...`,
      });
      // Add actual search logic here
      setSearchQuery("");
      setIsOpen(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {!isOpen ? (
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsOpen(true)}
          className="h-8 w-8 sm:h-10 sm:w-10"
        >
          <Search className="h-4 w-4" />
        </Button>
      ) : (
        <form onSubmit={handleSearch} className="flex items-center space-x-1 sm:space-x-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-7 sm:pl-8 w-40 sm:w-64 text-sm h-8 sm:h-10"
              autoFocus
            />
          </div>
          <Button type="button" variant="ghost" size="icon" onClick={clearSearch} className="h-8 w-8 sm:h-10 sm:w-10">
            <X className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </form>
      )}
    </div>
  );
};
