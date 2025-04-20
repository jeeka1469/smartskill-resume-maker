
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useResumeForm } from '@/hooks/useResumeForm';
import TemplateSelector from './TemplateSelector';
import SkillsSection from './SkillsSection';
import ResumePreview from './ResumePreview';
import PersonalInfoSection from './resume/PersonalInfoSection';
import ExperienceSection from './resume/ExperienceSection';
import EducationSection from './resume/EducationSection';
import PreviewActions from './resume/PreviewActions';

const ResumeBuilder: React.FC = () => {
  const [activeTab, setActiveTab] = useState('template');
  const [selectedTemplate, setSelectedTemplate] = useState('minimal');
  
  const {
    resumeData,
    handlePersonalInfoChange,
    handleExperienceChange,
    handleAddExperience,
    handleRemoveExperience,
    handleEducationChange,
    handleAddEducation,
    handleRemoveEducation,
    handleAddSkill,
    handleRemoveSkill,
    handleToggleFeatured
  } = useResumeForm();

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
            <PersonalInfoSection 
              data={resumeData}
              onChange={handlePersonalInfoChange}
            />
            
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
              <ExperienceSection 
                data={resumeData}
                onExperienceChange={handleExperienceChange}
                onAddExperience={handleAddExperience}
                onRemoveExperience={handleRemoveExperience}
              />
              
              <div className="mt-8">
                <EducationSection 
                  data={resumeData}
                  onEducationChange={handleEducationChange}
                  onAddEducation={handleAddEducation}
                  onRemoveEducation={handleRemoveEducation}
                />
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="lg:sticky lg:top-20 h-fit">
        <ResumePreview data={resumeData} template={selectedTemplate} />
        <PreviewActions />
      </div>
    </div>
  );
};

export default ResumeBuilder;
