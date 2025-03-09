
import React from 'react';
import { Card } from '@/components/ui/card';

interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  recommended?: boolean;
}

interface TemplateSelectorProps {
  selectedTemplate: string;
  onSelectTemplate: (id: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ 
  selectedTemplate, 
  onSelectTemplate 
}) => {
  const templates: Template[] = [
    {
      id: 'minimal',
      name: 'Minimal',
      description: 'Clean and concise design focused on content',
      thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=300&h=400&auto=format&fit=crop',
      recommended: true
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Traditional layout with a modern twist',
      thumbnail: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?q=80&w=300&h=400&auto=format&fit=crop'
    },
    {
      id: 'creative',
      name: 'Creative',
      description: 'Stand out with a distinctive design',
      thumbnail: 'https://images.unsplash.com/photo-1574156892205-5db2a61c595b?q=80&w=300&h=400&auto=format&fit=crop'
    },
    {
      id: 'tech',
      name: 'Tech',
      description: 'Optimized for IT and tech positions',
      thumbnail: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=300&h=400&auto=format&fit=crop'
    }
  ];

  return (
    <div className="animate-scale-in">
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">Choose a Template</h3>
        <p className="text-muted-foreground text-sm">
          Select a template that best showcases your skills and experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {templates.map((template, index) => (
          <div 
            key={template.id}
            className="template-item"
            style={{ '--item-index': index } as React.CSSProperties}
          >
            <Card 
              className={`overflow-hidden cursor-pointer transition-all duration-300 ${
                selectedTemplate === template.id 
                  ? 'ring-2 ring-primary' 
                  : 'hover:ring-1 hover:ring-primary/50'
              }`}
              onClick={() => onSelectTemplate(template.id)}
            >
              <div className="relative">
                <img 
                  src={template.thumbnail} 
                  alt={template.name} 
                  className="w-full h-[200px] object-cover"
                  loading="lazy"
                />
                {template.recommended && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h4 className="font-medium text-base">{template.name}</h4>
                <p className="text-muted-foreground text-sm mt-1">{template.description}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
