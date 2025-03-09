
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, X, Star } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  featured: boolean;
}

interface SkillsSectionProps {
  skills: Skill[];
  onAddSkill: (skill: Skill) => void;
  onRemoveSkill: (id: string) => void;
  onToggleFeatured: (id: string) => void;
  suggestedSkills?: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  skills,
  onAddSkill,
  onRemoveSkill,
  onToggleFeatured,
  suggestedSkills = ['JavaScript', 'React', 'TypeScript', 'UI/UX Design', 'Communication', 'Problem Solving']
}) => {
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      onAddSkill({
        id: Date.now().toString(),
        name: newSkill.trim(),
        featured: false
      });
      setNewSkill('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddSkill();
    }
  };

  const handleSuggestionClick = (skill: string) => {
    onAddSkill({
      id: Date.now().toString(),
      name: skill,
      featured: false
    });
  };

  return (
    <Card className="p-6 animate-scale-in">
      <h3 className="text-xl font-medium mb-4">Skills & Expertise</h3>
      <p className="text-muted-foreground text-sm mb-6">
        Highlight your key skills to stand out to recruiters and ATS systems.
      </p>
      
      <div className="mb-6">
        <div className="flex gap-2">
          <Input
            placeholder="Add a skill..."
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            className="focus-ring"
          />
          <Button
            onClick={handleAddSkill}
            size="sm"
            className="flex-shrink-0 smooth-transition"
            disabled={!newSkill.trim()}
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
        
        {suggestedSkills && suggestedSkills.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-2">Suggested skills:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="cursor-pointer hover:bg-secondary transition-colors"
                  onClick={() => handleSuggestionClick(skill)}
                >
                  {skill}
                  <Plus className="h-3 w-3 ml-1" />
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <h4 className="text-sm font-medium mb-2">Your skills:</h4>
        {skills.length === 0 ? (
          <p className="text-sm text-muted-foreground italic">No skills added yet.</p>
        ) : (
          <div className="flex flex-wrap gap-2 animate-fade-in">
            {skills.map((skill, index) => (
              <Badge
                key={skill.id}
                variant={skill.featured ? "default" : "secondary"}
                className="px-3 py-1 text-sm flex items-center gap-1 resume-item-appear smooth-transition"
                style={{ '--item-index': index } as React.CSSProperties}
              >
                {skill.name}
                <button
                  onClick={() => onToggleFeatured(skill.id)}
                  className="ml-1 opacity-60 hover:opacity-100 focus:opacity-100 transition-opacity"
                  aria-label={skill.featured ? "Unmark as featured" : "Mark as featured"}
                >
                  <Star className={`h-3 w-3 ${skill.featured ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={() => onRemoveSkill(skill.id)}
                  className="ml-1 opacity-60 hover:opacity-100 focus:opacity-100 transition-opacity"
                  aria-label="Remove skill"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default SkillsSection;
