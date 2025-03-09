
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Download, ArrowRight, FileText, Upload } from 'lucide-react';
import TemplateSelector from './TemplateSelector';
import SkillsSection from './SkillsSection';
import ResumePreview from './ResumePreview';

interface Skill {
  id: string;
  name: string;
  featured: boolean;
}

interface ResumeData {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  skills: Skill[];
  experience: { position: string; company: string; duration: string; description: string }[];
  education: { degree: string; institution: string; year: string }[];
}

const ResumeBuilder: React.FC = () => {
  const [activeTab, setActiveTab] = useState('template');
  const [selectedTemplate, setSelectedTemplate] = useState('minimal');
  
  const [resumeData, setResumeData] = useState<ResumeData>({
    fullName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    skills: [],
    experience: [{ position: '', company: '', duration: '', description: '' }],
    education: [{ degree: '', institution: '', year: '' }]
  });

  const handleAddSkill = (skill: Skill) => {
    // Check if skill already exists
    if (resumeData.skills.some(s => s.name.toLowerCase() === skill.name.toLowerCase())) {
      toast.warning("This skill has already been added");
      return;
    }
    
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, skill]
    });
    
    toast.success("Skill added successfully");
  };

  const handleRemoveSkill = (id: string) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter(skill => skill.id !== id)
    });
  };

  const handleToggleFeatured = (id: string) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.map(skill => 
        skill.id === id ? { ...skill, featured: !skill.featured } : skill
      )
    });
  };

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setResumeData({
      ...resumeData,
      [name]: value
    });
  };

  const handleExperienceChange = (index: number, field: string, value: string) => {
    const updatedExperience = [...resumeData.experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value
    };
    
    setResumeData({
      ...resumeData,
      experience: updatedExperience
    });
  };

  const handleAddExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience, 
        { position: '', company: '', duration: '', description: '' }
      ]
    });
  };

  const handleRemoveExperience = (index: number) => {
    const updatedExperience = [...resumeData.experience];
    updatedExperience.splice(index, 1);
    
    setResumeData({
      ...resumeData,
      experience: updatedExperience
    });
  };

  const handleEducationChange = (index: number, field: string, value: string) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value
    };
    
    setResumeData({
      ...resumeData,
      education: updatedEducation
    });
  };

  const handleAddEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education, 
        { degree: '', institution: '', year: '' }
      ]
    });
  };

  const handleRemoveEducation = (index: number) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation.splice(index, 1);
    
    setResumeData({
      ...resumeData,
      education: updatedEducation
    });
  };

  const handleDownload = () => {
    toast.success("Resume download started");
    // In a real app, this would generate and download a PDF
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <div>
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="template" className="text-sm">Template</TabsTrigger>
            <TabsTrigger value="personal" className="text-sm">Personal</TabsTrigger>
            <TabsTrigger value="skills" className="text-sm">Skills</TabsTrigger>
            <TabsTrigger value="experience" className="text-sm">Experience</TabsTrigger>
          </TabsList>
          
          <TabsContent value="template" className="animate-fade-in mt-0">
            <TemplateSelector 
              selectedTemplate={selectedTemplate}
              onSelectTemplate={setSelectedTemplate}
            />
            
            <div className="flex justify-end mt-6">
              <Button 
                onClick={() => setActiveTab('personal')}
                className="smooth-transition"
              >
                Next Step
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="personal" className="animate-fade-in mt-0">
            <Card className="p-6">
              <h3 className="text-xl font-medium mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input 
                      id="fullName"
                      name="fullName"
                      placeholder="John Doe"
                      value={resumeData.fullName}
                      onChange={handlePersonalInfoChange}
                      className="focus-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Professional Title</Label>
                    <Input 
                      id="title"
                      name="title"
                      placeholder="UX Designer"
                      value={resumeData.title}
                      onChange={handlePersonalInfoChange}
                      className="focus-ring"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={resumeData.email}
                      onChange={handlePersonalInfoChange}
                      className="focus-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      placeholder="(123) 456-7890"
                      value={resumeData.phone}
                      onChange={handlePersonalInfoChange}
                      className="focus-ring"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input 
                    id="location"
                    name="location"
                    placeholder="City, State"
                    value={resumeData.location}
                    onChange={handlePersonalInfoChange}
                    className="focus-ring"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="summary">Professional Summary</Label>
                  <Textarea 
                    id="summary"
                    name="summary"
                    placeholder="Brief overview of your professional background and strengths..."
                    rows={4}
                    value={resumeData.summary}
                    onChange={handlePersonalInfoChange}
                    className="focus-ring resize-none"
                  />
                </div>
              </div>
              
              <div className="flex justify-between mt-6">
                <Button 
                  variant="outline" 
                  onClick={() => setActiveTab('template')}
                  className="smooth-transition"
                >
                  Back
                </Button>
                <Button 
                  onClick={() => setActiveTab('skills')}
                  className="smooth-transition"
                >
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="skills" className="animate-fade-in mt-0">
            <SkillsSection 
              skills={resumeData.skills}
              onAddSkill={handleAddSkill}
              onRemoveSkill={handleRemoveSkill}
              onToggleFeatured={handleToggleFeatured}
            />
            
            <div className="flex justify-between mt-6">
              <Button 
                variant="outline" 
                onClick={() => setActiveTab('personal')}
                className="smooth-transition"
              >
                Back
              </Button>
              <Button 
                onClick={() => setActiveTab('experience')}
                className="smooth-transition"
              >
                Next Step
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="experience" className="animate-fade-in mt-0">
            <Card className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">Work Experience</h3>
                <p className="text-muted-foreground text-sm">
                  List your work experience, starting with the most recent.
                </p>
              </div>
              
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-6 pb-6 border-b border-border last:border-0 last:pb-0 resume-item-appear" style={{ '--item-index': index } as React.CSSProperties}>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium">Position {index + 1}</h4>
                    {resumeData.experience.length > 1 && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleRemoveExperience(index)}
                        className="h-8 text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`position-${index}`}>Position</Label>
                        <Input 
                          id={`position-${index}`}
                          placeholder="UX Designer"
                          value={exp.position}
                          onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                          className="focus-ring"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`company-${index}`}>Company</Label>
                        <Input 
                          id={`company-${index}`}
                          placeholder="Company Name"
                          value={exp.company}
                          onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                          className="focus-ring"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`duration-${index}`}>Duration</Label>
                      <Input 
                        id={`duration-${index}`}
                        placeholder="Jan 2020 - Present"
                        value={exp.duration}
                        onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
                        className="focus-ring"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`description-${index}`}>Description</Label>
                      <Textarea 
                        id={`description-${index}`}
                        placeholder="Describe your responsibilities and achievements..."
                        rows={3}
                        value={exp.description}
                        onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                        className="focus-ring resize-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <Button 
                variant="outline" 
                onClick={handleAddExperience}
                className="w-full mt-4 smooth-transition"
              >
                Add Another Position
              </Button>
              
              <div className="mt-8">
                <h3 className="text-xl font-medium mb-4">Education</h3>
                
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="mb-6 pb-6 border-b border-border last:border-0 last:pb-0 resume-item-appear" style={{ '--item-index': index + resumeData.experience.length } as React.CSSProperties}>
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium">Degree {index + 1}</h4>
                      {resumeData.education.length > 1 && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleRemoveEducation(index)}
                          className="h-8 text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`degree-${index}`}>Degree</Label>
                          <Input 
                            id={`degree-${index}`}
                            placeholder="Bachelor of Arts"
                            value={edu.degree}
                            onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                            className="focus-ring"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`year-${index}`}>Year</Label>
                          <Input 
                            id={`year-${index}`}
                            placeholder="2020"
                            value={edu.year}
                            onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                            className="focus-ring"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`institution-${index}`}>Institution</Label>
                        <Input 
                          id={`institution-${index}`}
                          placeholder="University Name"
                          value={edu.institution}
                          onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                          className="focus-ring"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button 
                  variant="outline" 
                  onClick={handleAddEducation}
                  className="w-full mt-4 smooth-transition"
                >
                  Add Another Degree
                </Button>
              </div>
              
              <div className="flex justify-between mt-8">
                <Button 
                  variant="outline" 
                  onClick={() => setActiveTab('skills')}
                  className="smooth-transition"
                >
                  Back
                </Button>
                <Button 
                  onClick={handleDownload}
                  className="smooth-transition"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="lg:sticky lg:top-20 h-fit">
        <ResumePreview data={resumeData} template={selectedTemplate} />
        
        <div className="flex flex-col sm:flex-row mt-4 gap-2">
          <Button 
            variant="outline" 
            className="flex-1 smooth-transition"
            onClick={() => {
              toast.success("Resume saved to your account");
            }}
          >
            <FileText className="mr-2 h-4 w-4" />
            Save as Draft
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 smooth-transition"
            onClick={handleDownload}
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 smooth-transition"
            onClick={() => {
              toast.success("Upload option coming soon!");
            }}
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
