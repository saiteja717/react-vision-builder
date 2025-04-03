
import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';
import FeatureItem from './FeatureItem';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 hero-background overflow-hidden">
      <div className="shine-overlay absolute inset-0"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Boost Your Video's <span className="text-gradient">SEO</span> <br />
            <span className="text-gradient">Performance</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Generate AI-powered SEO keywords, descriptions, and hashtags from your
            videos to maximize visibility and engagement on YouTube.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Link to="/auth">
              <Button 
                variant="primary" 
                size="lg" 
                className="shadow-lg shadow-blue-200"
              >
                Analyze Your Video
              </Button>
            </Link>
            <Button 
              variant="secondary" 
              size="lg"
            >
              Learn More
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center md:space-x-12 space-y-4 md:space-y-0">
            <FeatureItem 
              icon={<Check size={16} />} 
              text="AI-Powered Analysis" 
              delay={300}
            />
            <FeatureItem 
              icon={<Check size={16} />} 
              text="YouTube Integration" 
              delay={400}
            />
            <FeatureItem 
              icon={<Check size={16} />} 
              text="Performance Tracking" 
              delay={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
