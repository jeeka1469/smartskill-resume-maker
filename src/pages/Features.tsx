
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useResumeAnalysis } from '@/hooks/useResumeAnalysis';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, FileText, LayoutTemplate, Loader2, Wand, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Features = () => {
  const [resumeContent, setResumeContent] = useState('');
  const { analyzeResume, isAnalyzing, result, error } = useResumeAnalysis();
  const { toast } = useToast();

  const handleSkillExtraction = async () => {
    if (!resumeContent.trim()) {
      toast({
        title: "Empty Content",
        description: "Please enter your resume content to extract skills.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      await analyzeResume(resumeContent, 'extract-skills');
      toast({
        title: "Skills Extracted",
        description: "Your skills have been successfully extracted and categorized.",
      });
    } catch (err) {
      toast({
        title: "Extraction Failed",
        description: error || "Failed to extract skills. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleATSAnalysis = async () => {
    if (!resumeContent.trim()) {
      toast({
        title: "Empty Content",
        description: "Please enter your resume content to analyze for ATS compatibility.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      await analyzeResume(resumeContent, 'analyze-ats');
      toast({
        title: "Analysis Complete",
        description: "Your resume has been analyzed for ATS compatibility.",
      });
    } catch (err) {
      toast({
        title: "Analysis Failed",
        description: error || "Failed to analyze resume. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            Smart Features
          </span>
          <h1 className="text-4xl font-bold tracking-tight mb-4">AI-Powered Resume Tools</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Use our advanced AI features to optimize your resume, extract your skills, and increase your chances of getting past ATS filters.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wand className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Skill Extraction</CardTitle>
                <CardDescription>
                  Automatically identify and categorize skills from your resume
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Identifies technical skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Categorizes soft skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Suggests missing skills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>ATS Optimization</CardTitle>
                <CardDescription>
                  Ensure your resume passes through applicant tracking systems
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Resume format compatibility check</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Keyword optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Content structure suggestions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <LayoutTemplate className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Professional Templates</CardTitle>
                <CardDescription>
                  Choose from our library of ATS-friendly resume designs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Multiple design options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">ATS-optimized layouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Professional formatting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Feature Tools */}
          <div className="mt-8">
            <Tabs defaultValue="skill-extraction">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="skill-extraction">Skill Extraction</TabsTrigger>
                <TabsTrigger value="ats-analysis">ATS Analysis</TabsTrigger>
              </TabsList>
              
              {/* Skill Extraction Tab */}
              <TabsContent value="skill-extraction" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Extract Skills from Your Resume</CardTitle>
                    <CardDescription>
                      Paste your resume content below to automatically extract and categorize your skills.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Paste your resume content here..."
                      className="min-h-[200px]"
                      value={resumeContent}
                      onChange={(e) => setResumeContent(e.target.value)}
                    />
                    
                    {result && result.technicalSkills && (
                      <div className="mt-6 space-y-4">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Technical Skills</h3>
                          <div className="flex flex-wrap gap-2">
                            {result.technicalSkills.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="text-sm py-1">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Soft Skills</h3>
                          <div className="flex flex-wrap gap-2">
                            {result.softSkills?.map((skill, index) => (
                              <Badge key={index} variant="outline" className="text-sm py-1">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={handleSkillExtraction} 
                      disabled={isAnalyzing || !resumeContent.trim()}
                      className="w-full sm:w-auto"
                    >
                      {isAnalyzing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {isAnalyzing ? 'Extracting Skills...' : 'Extract Skills'}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* ATS Analysis Tab */}
              <TabsContent value="ats-analysis" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Analyze Your Resume for ATS Compatibility</CardTitle>
                    <CardDescription>
                      Paste your resume content below to check how well it would perform with Applicant Tracking Systems.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Paste your resume content here..."
                      className="min-h-[200px]"
                      value={resumeContent}
                      onChange={(e) => setResumeContent(e.target.value)}
                    />
                    
                    {result && result.score !== undefined && (
                      <div className="mt-6 space-y-4">
                        <div>
                          <h3 className="text-lg font-medium mb-2">ATS Compatibility Score</h3>
                          <div className="flex items-center gap-2">
                            <div className="bg-primary/10 text-primary rounded-full px-3 py-1 font-semibold text-lg">
                              {result.score}/100
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {result.score >= 80 ? 'Excellent' : result.score >= 60 ? 'Good' : 'Needs Improvement'}
                            </span>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Improvement Suggestions</h3>
                          <ul className="space-y-2">
                            {result.suggestions?.map((suggestion, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <FileText className="h-4 w-4 text-primary mt-1" />
                                <span className="text-sm">{suggestion}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={handleATSAnalysis} 
                      disabled={isAnalyzing || !resumeContent.trim()}
                      className="w-full sm:w-auto"
                    >
                      {isAnalyzing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {isAnalyzing ? 'Analyzing Resume...' : 'Analyze Resume'}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Features;
