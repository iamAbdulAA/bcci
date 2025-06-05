
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock,
  Search,
  Book,
  Video,
  Download,
  ChevronRight,
  CheckCircle
} from "lucide-react";

const Support = () => {
  const faqs = [
    {
      question: "How do I join a cell group?",
      answer: "Navigate to the Community page and browse available cell groups. Click 'Join' on any group that interests you, and the cell leader will be notified."
    },
    {
      question: "How can I track my spiritual goals?",
      answer: "Use the Personal Member Portal to set and track your spiritual goals. You can create custom goals, set deadlines, and monitor your progress over time."
    },
    {
      question: "How do I make a contribution?",
      answer: "In your Personal Portal, click 'Make a Contribution' to log your spiritual activities, volunteer work, donations, or any other meaningful contributions to the community."
    },
    {
      question: "Can I access the platform on my mobile device?",
      answer: "Yes! The BCCI platform is fully responsive and works seamlessly on all devices - desktop, tablet, and mobile."
    },
    {
      question: "How do I reset my password?",
      answer: "On the sign-in page, click 'Forgot Password' and follow the instructions sent to your email to reset your password securely."
    },
    {
      question: "How can I become a cell group leader?",
      answer: "Contact your cluster leader or church administration through the messaging system. Leadership training and appointment processes are handled through the management tools."
    }
  ];

  const resources = [
    {
      title: "Getting Started Guide",
      description: "Complete walkthrough for new users",
      icon: Book,
      type: "PDF Guide"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video instructions",
      icon: Video,
      type: "Video Series"
    },
    {
      title: "Mobile App Guide",
      description: "How to use the platform on mobile",
      icon: Download,
      type: "Quick Reference"
    }
  ];

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      availability: "24/7 Available",
      action: "Start Chat"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical team",
      icon: Phone,
      availability: "Mon-Fri 9AM-6PM",
      action: "Call Now"
    },
    {
      title: "Email Support",
      description: "Send us detailed questions or feedback",
      icon: Mail,
      availability: "Response within 24hrs",
      action: "Send Email"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">
            BCCI Support Center
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
            We're Here to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-700 block">
              Help You Succeed
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get the support you need to make the most of your spiritual journey. 
            Our comprehensive help center has everything you need to get started and stay engaged.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
            <Input
              placeholder="Search for help articles, guides, or tutorials..."
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportChannels.map((channel, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{channel.title}</CardTitle>
                <CardDescription>{channel.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center space-x-2 text-sm text-slate-600 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{channel.availability}</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800">
                  {channel.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader className="cursor-pointer hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0 border-t">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Helpful Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 text-orange-700 rounded-lg flex items-center justify-center mb-4">
                    <resource.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{resource.type}</Badge>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-2">Still Need Help?</CardTitle>
            <CardDescription className="text-lg">
              Send us a message and we'll get back to you as soon as possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What can we help you with?" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Please describe your question or issue in detail..."
                  rows={5}
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-slate-800 to-slate-900 text-white">
            <CardContent className="py-8">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-2xl font-bold mb-2">Support Center Tips</h3>
              <p className="text-slate-300 mb-4">
                For the fastest support, try searching our FAQ section first. 
                Most questions can be answered instantly!
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800">
                <HelpCircle className="w-4 h-4 mr-2" />
                Browse All Help Articles
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;
