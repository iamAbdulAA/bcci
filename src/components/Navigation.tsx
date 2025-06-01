
import { Button } from "@/components/ui/button";
import { Menu, X, Users, Heart, BookOpen, Calendar } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">BCCI Platform</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Features
            </a>
            <a href="#platform" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Platform
            </a>
            <a href="#community" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Community
            </a>
            <a href="#support" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Support
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-600 hover:text-blue-600">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800">
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
              <a href="#features" className="text-slate-600 hover:text-blue-600 font-medium">
                Features
              </a>
              <a href="#platform" className="text-slate-600 hover:text-blue-600 font-medium">
                Platform
              </a>
              <a href="#community" className="text-slate-600 hover:text-blue-600 font-medium">
                Community
              </a>
              <a href="#support" className="text-slate-600 hover:text-blue-600 font-medium">
                Support
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200">
                <Button variant="ghost" className="justify-start">
                  Sign In
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-700">
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
