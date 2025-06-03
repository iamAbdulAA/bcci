import { Button } from "@/components/ui/button";
import { Menu, X, Users, Heart, BookOpen, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Navigate to a sign-in page (we'll create this route)
    navigate('/sign-in');
  };

  const handleGetStarted = () => {
    // Navigate to personal member portal as the starting point
    navigate('/personal-member-portal');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    } else {
      toast({
        title: "Section not found",
        description: "This section is coming soon!",
      });
    }
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">BCCI Platform</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('platform')}
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Platform
            </button>
            <button 
              onClick={() => scrollToSection('community')}
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Community
            </button>
            <button 
              onClick={() => scrollToSection('support')}
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Support
            </button>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-600 hover:text-blue-600" onClick={handleSignIn}>
              Sign In
            </Button>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-slate-600 hover:text-blue-600 font-medium text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('platform')}
                className="text-slate-600 hover:text-blue-600 font-medium text-left"
              >
                Platform
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="text-slate-600 hover:text-blue-600 font-medium text-left"
              >
                Community
              </button>
              <button 
                onClick={() => scrollToSection('support')}
                className="text-slate-600 hover:text-blue-600 font-medium text-left"
              >
                Support
              </button>
              <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200">
                <Button variant="ghost" className="justify-start" onClick={handleSignIn}>
                  Sign In
                </Button>
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-indigo-700"
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
