
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ResumeData } from '@/hooks/useResumeForm';

interface EducationSectionProps {
  data: ResumeData;
  onEducationChange: (index: number, field: string, value: string) => void;
  onAddEducation: () => void;
  onRemoveEducation: (index: number) => void;
}

const EducationSection: React.FC<EducationSectionProps> = ({
  data,
  onEducationChange,
  onAddEducation,
  onRemoveEducation
}) => {
  return (
    <div>
      <h3 className="text-xl font-medium mb-4">Education</h3>
      
      {data.education.map((edu, index) => (
        <div 
          key={index} 
          className="mb-6 pb-6 border-b border-border last:border-0 last:pb-0 resume-item-appear"
          style={{ '--item-index': index } as React.CSSProperties}
        >
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-medium">Degree {index + 1}</h4>
            {data.education.length > 1 && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onRemoveEducation(index)}
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
                  onChange={(e) => onEducationChange(index, 'degree', e.target.value)}
                  className="focus-ring"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`year-${index}`}>Year</Label>
                <Input 
                  id={`year-${index}`}
                  placeholder="2020"
                  value={edu.year}
                  onChange={(e) => onEducationChange(index, 'year', e.target.value)}
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
                onChange={(e) => onEducationChange(index, 'institution', e.target.value)}
                className="focus-ring"
              />
            </div>
          </div>
        </div>
      ))}
      
      <Button 
        variant="outline" 
        onClick={onAddEducation}
        className="w-full mt-4 smooth-transition"
      >
        Add Another Degree
      </Button>
    </div>
  );
};

export default EducationSection;
