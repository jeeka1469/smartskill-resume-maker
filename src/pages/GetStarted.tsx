
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText, Info, LayoutTemplate, Wand, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const GetStarted = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            Getting Started
          </span>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Create Your Perfect Resume in Minutes</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow these simple steps to build an ATS-optimized resume that showcases your skills and gets you noticed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-primary/10 p-8 rounded-full">
                <FileText className="h-16 w-16 text-primary" />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-3">1. Enter Your Information</h2>
              <p className="text-muted-foreground mb-4">
                Start by filling out your personal details, work experience, education, and skills in our user-friendly form. Our guided process makes it easy to add all relevant information.
              </p>
              <Button asChild>
                <Link to="/dashboard">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-primary/10 p-8 rounded-full">
                <LayoutTemplate className="h-16 w-16 text-primary" />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-right">
              <h2 className="text-2xl font-semibold mb-3">2. Choose a Template</h2>
              <p className="text-muted-foreground mb-4">
                Select from our professionally designed templates that are optimized for ATS systems. Each template is crafted to highlight your skills and experience in the best possible way.
              </p>
              <Button asChild variant="outline">
                <Link to="/templates">
                  Browse Templates
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-primary/10 p-8 rounded-full">
                <Wand className="h-16 w-16 text-primary" />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-3">3. Use AI-Powered Features</h2>
              <p className="text-muted-foreground mb-4">
                Leverage our AI tools to automatically extract and categorize your skills from existing content, and analyze your resume for ATS compatibility to ensure it passes through applicant tracking systems.
              </p>
              <Button asChild variant="outline">
                <Link to="/features">
                  Explore Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-primary/10 p-8 rounded-full">
                <Zap className="h-16 w-16 text-primary" />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-right">
              <h2 className="text-2xl font-semibold mb-3">4. Download & Apply</h2>
              <p className="text-muted-foreground mb-4">
                Preview your finished resume, make any final adjustments, and download it in PDF format. Your resume is now ready to help you stand out from the competition!
              </p>
              <Button asChild>
                <Link to="/dashboard">
                  Create Your Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>What makes SmartSkill different?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our focus on skills-based resumes and AI-powered ATS optimization gives you a competitive edge in the job market by highlighting your competencies rather than just work history.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How does the ATS analysis work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our AI analyzes your resume against industry standards and common ATS filters. It then provides actionable suggestions to improve formatting, keywords, and content structure.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I make multiple versions of my resume?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Yes! Pro users can create unlimited resume versions tailored to different job applications, allowing you to customize each resume for specific positions.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How secure is my data?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We take data security seriously. Your information is encrypted and stored securely. We never share your data with third parties without your explicit consent.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetStarted;
