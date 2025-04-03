
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard - SEO Keyword Guru";
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

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
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="font-bold text-lg mb-2">Analyze Video</h3>
              <p className="text-sm text-gray-600">Upload or paste your video URL to generate SEO recommendations.</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="font-bold text-lg mb-2">Keyword Research</h3>
              <p className="text-sm text-gray-600">Discover trending keywords and phrases for your content.</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="font-bold text-lg mb-2">Performance Tracking</h3>
              <p className="text-sm text-gray-600">Monitor how your optimized videos are performing over time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
