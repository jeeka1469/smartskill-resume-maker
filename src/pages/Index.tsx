
import React from 'react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import ResumeBuilder from '@/components/ResumeBuilder';
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Clock, Star } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <section className="py-10 md:py-16">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <div className="animate-slide-up">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              ATS-Optimized Resume Builder
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Build a <span className="text-primary">skill-focused</span> resume that gets noticed
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Create professional resumes optimized for Applicant Tracking Systems that highlight your skills and competencies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button size="lg" className="smooth-transition">
                Start Building Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="smooth-transition">
                See Templates
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
            <div className="animate-slide-up" style={{ '--item-index': 0 } as React.CSSProperties}>
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">ATS Optimized</h3>
              </div>
              <p className="text-muted-foreground">
                Tailored for Applicant Tracking Systems with optimized formatting and keyword suggestions.
              </p>
            </div>
            
            <div className="animate-slide-up" style={{ '--item-index': 1 } as React.CSSProperties}>
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Skill Focused</h3>
              </div>
              <p className="text-muted-foreground">
                Emphasize your skills and competencies instead of just chronological work history.
              </p>
            </div>
            
            <div className="animate-slide-up" style={{ '--item-index': 2 } as React.CSSProperties}>
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Quick & Easy</h3>
              </div>
              <p className="text-muted-foreground">
                Create a professional resume in minutes with our intuitive builder interface.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <span className="inline-block bg-background text-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
              Resume Builder
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Create your professional resume in minutes
            </h2>
            <p className="text-lg text-muted-foreground">
              Our intuitive builder guides you through each section, providing real-time feedback and optimization suggestions.
            </p>
          </div>
          
          <ResumeBuilder />
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12 animate-fade-in">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              Why Choose SmartSkill
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Stand out from the competition
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              SmartSkill's resume builder is designed to emphasize your skills and get you past the ATS filters into the hands of hiring managers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm animate-slide-up" style={{ '--item-index': 0 } as React.CSSProperties}>
              <div className="flex items-center mb-4">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">Skill-Based Approach</h3>
              </div>
              <p className="text-muted-foreground">
                Focus on your skills and competencies rather than just job history, perfect for career changers and fresh graduates.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm animate-slide-up" style={{ '--item-index': 1 } as React.CSSProperties}>
              <div className="flex items-center mb-4">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">ATS Keyword Optimization</h3>
              </div>
              <p className="text-muted-foreground">
                Get suggestions for industry-specific keywords based on job descriptions to increase your match rate.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm animate-slide-up" style={{ '--item-index': 2 } as React.CSSProperties}>
              <div className="flex items-center mb-4">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">Modern Templates</h3>
              </div>
              <p className="text-muted-foreground">
                Choose from professionally designed templates that are both visually appealing and ATS-friendly.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm animate-slide-up" style={{ '--item-index': 3 } as React.CSSProperties}>
              <div className="flex items-center mb-4">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">Real-Time Feedback</h3>
              </div>
              <p className="text-muted-foreground">
                Get instant suggestions to improve your resume's content, formatting, and overall effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <div className="animate-fade-in">
            <Star className="h-12 w-12 mx-auto mb-6 text-primary-foreground/90" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to elevate your job search?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
              Create a skill-focused, ATS-optimized resume that showcases your true potential.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="smooth-transition bg-white text-primary hover:bg-white/90"
            >
              Build Your Resume Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
