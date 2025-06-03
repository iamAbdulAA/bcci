
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Heart, BookOpen, Calendar, Star, Globe, Award } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/personal-member-portal');
  };

  const handleLearnMore = () => {
    navigate('/digital-discipleship-flow');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      <HeroSection />
      <FeatureGrid />
      <StatsSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Spiritual Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of believers worldwide in building stronger faith communities through our digital discipleship platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
                onClick={handleStartJourney}
              >
                Start Your Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
                onClick={handleLearnMore}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">BCCI Platform</h3>
              <p className="text-slate-400">
                Building digital spiritual ecosystems for global discipleship and fellowship.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/personal-member-portal" className="hover:text-white transition-colors">Member Portals</Link></li>
                <li><Link to="/cluster-cell-system" className="hover:text-white transition-colors">Cell Management</Link></li>
                <li><Link to="/live-on-demand-worship" className="hover:text-white transition-colors">Worship Services</Link></li>
                <li><Link to="/analytics-dashboard" className="hover:text-white transition-colors">Growth Tracking</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/digital-discipleship-flow" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link to="/digital-discipleship-flow" className="hover:text-white transition-colors">Training</Link></li>
                <li><Link to="/integrated-messaging" className="hover:text-white transition-colors">Support</Link></li>
                <li><Link to="/cluster-cell-system" className="hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/cluster-cell-system" className="hover:text-white transition-colors">Global Network</Link></li>
                <li><Link to="/cluster-cell-system" className="hover:text-white transition-colors">Regional Hubs</Link></li>
                <li><Link to="/cluster-cell-system" className="hover:text-white transition-colors">Local Clusters</Link></li>
                <li><Link to="/integrated-messaging" className="hover:text-white transition-colors">Prayer Chains</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 BCCI Global Discipleship Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
