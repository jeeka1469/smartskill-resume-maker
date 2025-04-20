
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { LayoutTemplate, Star } from 'lucide-react';

const templates = [
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Clean, simple design focusing on content with minimal styling',
    isPremium: false,
    thumbnail: '/placeholder.svg'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Traditional resume format with a professional appearance',
    isPremium: false,
    thumbnail: '/placeholder.svg'
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Contemporary design with stylish elements and layout',
    isPremium: true,
    thumbnail: '/placeholder.svg'
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Bold design for creative professionals to stand out',
    isPremium: true,
    thumbnail: '/placeholder.svg'
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'Sophisticated design for senior professionals and executives',
    isPremium: true,
    thumbnail: '/placeholder.svg'
  },
  {
    id: 'academic',
    name: 'Academic',
    description: 'Format designed for academic and research positions',
    isPremium: false,
    thumbnail: '/placeholder.svg'
  }
];

const Templates = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            Resume Templates
          </span>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Choose Your Resume Template</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Select from our professionally designed templates that are optimized for ATS systems and showcase your skills effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[1.5] overflow-hidden bg-muted/30">
                <img 
                  src={template.thumbnail} 
                  alt={template.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold text-lg">{template.name}</h3>
                  </div>
                </div>
                {template.isPremium && (
                  <div className="absolute top-2 right-2">
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      <Star className="mr-1 h-3 w-3" />
                      Premium
                    </Badge>
                  </div>
                )}
              </div>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">{template.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" disabled={template.isPremium}>
                  <Link to="/dashboard">
                    {template.isPremium ? 'Upgrade to Use' : 'Use Template'}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Templates;
