
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Globe, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200 px-4 py-2 text-sm font-medium">
            <Globe className="w-4 h-4 mr-2" />
            Global Discipleship Platform
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Building a Digital
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent block lg:inline lg:ml-4">
              Spiritual Ecosystem
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering every member worldwide to engage in discipleship, leadership growth, 
            fellowship, service, and spiritual accountability through our dynamic cluster and cell system.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 px-8 py-4 text-lg font-semibold shadow-lg">
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:bg-slate-50 px-8 py-4 text-lg font-semibold">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-slate-600">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">200+</div>
              <div className="text-slate-600">Global Clusters</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25</div>
              <div className="text-slate-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">99%</div>
              <div className="text-slate-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
