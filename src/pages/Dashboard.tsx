
import React, { useEffect, useRef } from 'react';
import NavBar from '@/components/NavBar';
import { Upload, Search, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "@/hooks/use-toast";

const Dashboard = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = "Dashboard - SEO Keyword Guru";
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleAnalyzeVideoClick = () => {
    // Trigger file input click
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Here you would typically upload the file to a server
      // For now, we'll just show a success message
      toast({
        title: "Video selected",
        description: `${file.name} has been selected for analysis.`,
      });
      console.log('Selected file:', file);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-6">Welcome to your Dashboard</h1>
        <p className="text-xl text-gray-600 mb-8">
          You've successfully signed in to your account.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="text-gray-700 mb-4">
            From here, you can analyze videos, view your keyword performance, and manage your SEO strategy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div 
              className="bg-blue-50 p-5 rounded-lg border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors"
              onClick={handleAnalyzeVideoClick}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">Analyze Video</h3>
                <Upload className="text-blue-500" size={20} />
              </div>
              <p className="text-sm text-gray-600">Upload or paste your video URL to generate SEO recommendations.</p>
              
              {/* Hidden file input */}
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="video/*"
                onChange={handleFileChange}
              />
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">Keyword Research</h3>
                <Search className="text-blue-500" size={20} />
              </div>
              <p className="text-sm text-gray-600">Discover trending keywords and phrases for your content.</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">Performance Tracking</h3>
                <BarChart className="text-blue-500" size={20} />
              </div>
              <p className="text-sm text-gray-600">Monitor how your optimized videos are performing over time.</p>
            </div>
          </div>
          
          <div className="mt-8">
            <Button 
              variant="outline" 
              className="text-blue-600 border-blue-600 hover:bg-blue-50"
              onClick={handleAnalyzeVideoClick}
            >
              <Upload className="mr-2" size={16} />
              Upload a video for analysis
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
