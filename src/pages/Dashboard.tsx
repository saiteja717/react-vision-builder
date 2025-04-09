
import React, { useEffect, useRef, useState } from 'react';
import NavBar from '@/components/NavBar';
import { Upload, Search, BarChart, Link as LinkIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "@/hooks/use-toast";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Dashboard = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState<'main' | 'research' | 'performance'>('main');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    document.title = "Dashboard - SEO Keyword Guru";
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleAnalyzeVideoClick = () => {
    // Toggle URL input or trigger file input click
    if (showUrlInput) {
      // Hide URL input
      setShowUrlInput(false);
    } else {
      // Show URL input option first
      setShowUrlInput(true);
    }
  };

  const handleFileUploadClick = () => {
    // Trigger file input click
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Hide URL input if it was shown
      setShowUrlInput(false);
      
      // Here you would typically upload the file to a server
      // For now, we'll just show a success message
      toast({
        title: "Video selected",
        description: `${file.name} has been selected for analysis.`,
      });
      console.log('Selected file:', file);
    }
  };

  const handleUrlSubmit = () => {
    if (videoUrl.trim()) {
      toast({
        title: "URL submitted",
        description: `Your video URL has been submitted for analysis.`,
      });
      console.log('Submitted URL:', videoUrl);
      // Reset URL input
      setVideoUrl('');
      setShowUrlInput(false);
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid URL",
        variant: "destructive",
      });
    }
  };

  const renderMainDashboard = () => (
    <>
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
        <div 
          className="bg-blue-50 p-5 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors cursor-pointer"
          onClick={() => setActiveTab('research')}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg">Keyword Research</h3>
            <Search className="text-blue-500" size={20} />
          </div>
          <p className="text-sm text-gray-600">Discover trending keywords and phrases for your content.</p>
        </div>
        <div 
          className="bg-blue-50 p-5 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors cursor-pointer"
          onClick={() => setActiveTab('performance')}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg">Performance Tracking</h3>
            <BarChart className="text-blue-500" size={20} />
          </div>
          <p className="text-sm text-gray-600">Monitor how your optimized videos are performing over time.</p>
        </div>
      </div>
      
      {showUrlInput && (
        <div className="mt-8 p-4 border border-blue-200 rounded-lg bg-blue-50">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Paste Video URL</h3>
            <button 
              onClick={() => setShowUrlInput(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>
          <div className="flex gap-2 mb-2">
            <Input
              placeholder="Enter YouTube URL here..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleUrlSubmit}>
              Submit
            </Button>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="text-blue-600 border-blue-600 hover:bg-blue-50"
              onClick={handleFileUploadClick}
            >
              <Upload className="mr-2" size={16} />
              Or upload a video file
            </Button>
          </div>
        </div>
      )}
      
      {!showUrlInput && (
        <div className="mt-8">
          <Button 
            variant="outline" 
            className="text-blue-600 border-blue-600 hover:bg-blue-50 mr-4"
            onClick={handleFileUploadClick}
          >
            <Upload className="mr-2" size={16} />
            Upload a video for analysis
          </Button>
          <Button 
            variant="outline" 
            className="text-blue-600 border-blue-600 hover:bg-blue-50"
            onClick={() => setShowUrlInput(true)}
          >
            <LinkIcon className="mr-2" size={16} />
            Paste video URL
          </Button>
        </div>
      )}
    </>
  );

  const renderKeywordResearch = () => (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Keyword Research</h2>
        <Button variant="outline" onClick={() => setActiveTab('main')}>
          Back to Dashboard
        </Button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Search for Keywords</h3>
          <Button size="sm">
            <Search className="mr-2" size={16} />
            Search
          </Button>
        </div>
        <Input placeholder="Enter a topic or keyword..." className="mb-4" />
        <div className="flex gap-2 mb-4">
          <Button variant="outline" size="sm">YouTube</Button>
          <Button variant="outline" size="sm">Google</Button>
          <Button variant="outline" size="sm">TikTok</Button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-medium mb-4">Popular Keywords by Category</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Technology</h4>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between">
                <span>AI tools</span>
                <span className="text-green-600">↑ 12%</span>
              </li>
              <li className="flex justify-between">
                <span>Machine learning tutorial</span>
                <span className="text-green-600">↑ 8%</span>
              </li>
              <li className="flex justify-between">
                <span>React vs Vue</span>
                <span className="text-red-600">↓ 3%</span>
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Entertainment</h4>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between">
                <span>Movie reviews 2025</span>
                <span className="text-green-600">↑ 22%</span>
              </li>
              <li className="flex justify-between">
                <span>Best TV shows</span>
                <span className="text-green-600">↑ 15%</span>
              </li>
              <li className="flex justify-between">
                <span>Celebrity interviews</span>
                <span className="text-red-600">↓ 5%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );

  const renderPerformanceTracking = () => (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Performance Tracking</h2>
        <Button variant="outline" onClick={() => setActiveTab('main')}>
          Back to Dashboard
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="text-sm text-gray-500 mb-1">Total Views</h3>
          <p className="text-2xl font-semibold">12,435</p>
          <span className="text-xs text-green-600">↑ 8.3% from last month</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="text-sm text-gray-500 mb-1">Average Watch Time</h3>
          <p className="text-2xl font-semibold">4:32</p>
          <span className="text-xs text-green-600">↑ 2.1% from last month</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="text-sm text-gray-500 mb-1">Engagement Rate</h3>
          <p className="text-2xl font-semibold">5.7%</p>
          <span className="text-xs text-red-600">↓ 1.2% from last month</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium mb-4">Recent Video Performance</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-2">Video Title</th>
                <th className="pb-2">Views</th>
                <th className="pb-2">Ranking</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">How to Optimize YouTube SEO</td>
                <td className="py-2">2,458</td>
                <td className="py-2 text-green-600">#3</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Top 10 SEO Mistakes</td>
                <td className="py-2">1,832</td>
                <td className="py-2 text-green-600">#7</td>
              </tr>
              <tr>
                <td className="py-2">Keyword Research Tutorial</td>
                <td className="py-2">954</td>
                <td className="py-2 text-yellow-600">#15</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium mb-4">Top Performing Keywords</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>youtube seo tips</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">85%</span>
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>keyword research tool</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">72%</span>
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>video seo optimization</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">64%</span>
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '64%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-6">Welcome to your Dashboard</h1>
        <p className="text-xl text-gray-600 mb-8">
          You've successfully signed in to your account.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {activeTab === 'main' && renderMainDashboard()}
          {activeTab === 'research' && renderKeywordResearch()}
          {activeTab === 'performance' && renderPerformanceTracking()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
