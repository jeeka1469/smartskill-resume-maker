
import React from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ResumeData } from '@/hooks/useResumeForm';

interface PersonalInfoSectionProps {
  data: ResumeData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({ data, onChange }) => {
  return (
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
              value={data.fullName}
              onChange={onChange}
              className="focus-ring"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Professional Title</Label>
            <Input 
              id="title"
              name="title"
              placeholder="UX Designer"
              value={data.title}
              onChange={onChange}
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
              value={data.email}
              onChange={onChange}
              className="focus-ring"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input 
              id="phone"
              name="phone"
              placeholder="(123) 456-7890"
              value={data.phone}
              onChange={onChange}
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
            value={data.location}
            onChange={onChange}
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
            value={data.summary}
            onChange={onChange}
            className="focus-ring resize-none"
          />
        </div>
      </div>
    </Card>
  );
};

export default PersonalInfoSection;
