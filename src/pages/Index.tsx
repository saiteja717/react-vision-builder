
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';

const Index = () => {
  useEffect(() => {
    document.title = "SEO Keyword Guru - Boost Your Video's SEO Performance";
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      
      {/* Additional sections would go here */}
    </div>
  );
};

export default Index;
