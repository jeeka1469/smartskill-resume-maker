
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ResumeData } from '@/hooks/useResumeForm';

interface ExperienceSectionProps {
  data: ResumeData;
  onExperienceChange: (index: number, field: string, value: string) => void;
  onAddExperience: () => void;
  onRemoveExperience: (index: number) => void;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  data,
  onExperienceChange,
  onAddExperience,
  onRemoveExperience
}) => {
  return (
    <div>
      <h3 className="text-xl font-medium mb-2">Work Experience</h3>
      <p className="text-muted-foreground text-sm mb-6">
        List your work experience, starting with the most recent.
      </p>
      
      {data.experience.map((exp, index) => (
        <div 
          key={index} 
          className="mb-6 pb-6 border-b border-border last:border-0 last:pb-0 resume-item-appear"
          style={{ '--item-index': index } as React.CSSProperties}
        >
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-medium">Position {index + 1}</h4>
            {data.experience.length > 1 && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onRemoveExperience(index)}
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
                  onChange={(e) => onExperienceChange(index, 'position', e.target.value)}
                  className="focus-ring"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`company-${index}`}>Company</Label>
                <Input 
                  id={`company-${index}`}
                  placeholder="Company Name"
                  value={exp.company}
                  onChange={(e) => onExperienceChange(index, 'company', e.target.value)}
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
                onChange={(e) => onExperienceChange(index, 'duration', e.target.value)}
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
                onChange={(e) => onExperienceChange(index, 'description', e.target.value)}
                className="focus-ring resize-none"
              />
            </div>
          </div>
        </div>
      ))}
      
      <Button 
        variant="outline" 
        onClick={onAddExperience}
        className="w-full mt-4 smooth-transition"
      >
        Add Another Position
      </Button>
    </div>
  );
};

export default ExperienceSection;
