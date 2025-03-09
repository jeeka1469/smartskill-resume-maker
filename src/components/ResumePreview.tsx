
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Skill {
  id: string;
  name: string;
  featured: boolean;
}

interface ResumeData {
  fullName?: string;
  title?: string;
  email?: string;
  phone?: string;
  location?: string;
  summary?: string;
  skills: Skill[];
  experience?: { position: string; company: string; duration: string; description: string }[];
  education?: { degree: string; institution: string; year: string }[];
}

interface ResumePreviewProps {
  data: ResumeData;
  template: string;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data, template }) => {
  const placeholderData: ResumeData = {
    fullName: data.fullName || 'Alex Johnson',
    title: data.title || 'UX/UI Designer',
    email: data.email || 'alex@example.com',
    phone: data.phone || '(555) 123-4567',
    location: data.location || 'San Francisco, CA',
    summary: data.summary || 'Creative UI/UX designer with 5 years of experience creating user-centered digital experiences. Proficient in design systems, prototyping, and collaborative environments.',
    skills: data.skills.length > 0 ? data.skills : [
      { id: '1', name: 'UI Design', featured: true },
      { id: '2', name: 'Prototyping', featured: true },
      { id: '3', name: 'Design Systems', featured: false },
      { id: '4', name: 'User Research', featured: false },
      { id: '5', name: 'Figma', featured: true },
    ],
    experience: data.experience || [
      { 
        position: 'Senior UX Designer', 
        company: 'TechCorp', 
        duration: '2019 - Present', 
        description: 'Led UI/UX design for flagship product, increasing user satisfaction by 35%.' 
      },
      { 
        position: 'UI Designer', 
        company: 'Creative Studios', 
        duration: '2017 - 2019', 
        description: 'Designed interfaces for mobile applications and responsive websites.' 
      }
    ],
    education: data.education || [
      { 
        degree: 'B.A. Design', 
        institution: 'California Design Institute', 
        year: '2017' 
      }
    ]
  };

  const renderMinimalTemplate = () => (
    <div className="p-8 min-h-[600px] bg-white text-black">
      <div className="border-b-2 border-primary pb-4 mb-6">
        <h1 className="text-3xl font-bold text-black">{placeholderData.fullName}</h1>
        <p className="text-lg text-gray-600 mt-1">{placeholderData.title}</p>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Summary</h2>
            <p className="text-gray-700">{placeholderData.summary}</p>
          </section>
          
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Experience</h2>
            {placeholderData.experience?.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium text-lg">{exp.position}</h3>
                  <span className="text-gray-600 text-sm">{exp.duration}</span>
                </div>
                <p className="text-gray-600 mb-1">{exp.company}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Education</h2>
            {placeholderData.education?.map((edu, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between">
                  <h3 className="font-medium">{edu.degree}</h3>
                  <span className="text-gray-600 text-sm">{edu.year}</span>
                </div>
                <p className="text-gray-600">{edu.institution}</p>
              </div>
            ))}
          </section>
        </div>
        
        <div className="col-span-1">
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <div className="text-gray-700 space-y-1">
              <p>{placeholderData.email}</p>
              <p>{placeholderData.phone}</p>
              <p>{placeholderData.location}</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {placeholderData.skills.map((skill) => (
                <Badge 
                  key={skill.id}
                  variant={skill.featured ? "default" : "outline"}
                  className="smooth-transition"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  const renderProfessionalTemplate = () => (
    <div className="min-h-[600px] bg-white text-black">
      <div className="bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-black">{placeholderData.fullName}</h1>
        <p className="text-lg text-gray-600 mt-1">{placeholderData.title}</p>
        
        <div className="flex gap-4 mt-3 text-sm text-gray-600">
          <p>{placeholderData.email}</p>
          <p>{placeholderData.phone}</p>
          <p>{placeholderData.location}</p>
        </div>
      </div>
      
      <div className="p-8">
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 mb-3">Professional Summary</h2>
          <p className="text-gray-700">{placeholderData.summary}</p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 mb-3">Core Skills</h2>
          <div className="flex flex-wrap gap-2">
            {placeholderData.skills.map((skill) => (
              <Badge 
                key={skill.id}
                variant={skill.featured ? "default" : "outline"}
                className="smooth-transition"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 mb-3">Professional Experience</h2>
          {placeholderData.experience?.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium text-lg">{exp.position} | {exp.company}</h3>
                <span className="text-gray-600 text-sm">{exp.duration}</span>
              </div>
              <p className="text-gray-700 mt-1">{exp.description}</p>
            </div>
          ))}
        </section>
        
        <section>
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 mb-3">Education</h2>
          {placeholderData.education?.map((edu, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between">
                <h3 className="font-medium">{edu.degree} - {edu.institution}</h3>
                <span className="text-gray-600 text-sm">{edu.year}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );

  const renderCreativeTemplate = () => (
    <div className="min-h-[600px] bg-white text-black">
      <div className="grid grid-cols-3">
        <div className="col-span-1 bg-primary p-8 text-white">
          <div className="mb-8">
            <div className="w-24 h-24 rounded-full bg-white/20 mb-4 flex items-center justify-center text-3xl font-bold">
              {placeholderData.fullName?.charAt(0) || 'A'}
            </div>
            <h1 className="text-2xl font-bold">{placeholderData.fullName}</h1>
            <p className="text-primary-foreground/80 mt-1">{placeholderData.title}</p>
          </div>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-3 border-b border-white/20 pb-2">Contact</h2>
            <div className="text-primary-foreground/90 space-y-2">
              <p>{placeholderData.email}</p>
              <p>{placeholderData.phone}</p>
              <p>{placeholderData.location}</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-lg font-semibold mb-3 border-b border-white/20 pb-2">Skills</h2>
            <div className="flex flex-col gap-2">
              {placeholderData.skills.map((skill) => (
                <Badge 
                  key={skill.id}
                  variant="secondary"
                  className={`smooth-transition ${skill.featured ? 'bg-white text-primary' : 'bg-primary-foreground/10 text-white'}`}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </section>
        </div>
        
        <div className="col-span-2 p-8">
          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3 text-gray-800">About Me</h2>
            <p className="text-gray-700">{placeholderData.summary}</p>
          </section>
          
          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Experience</h2>
            {placeholderData.experience?.map((exp, index) => (
              <div key={index} className="mb-5">
                <div className="flex items-baseline">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <h3 className="font-medium text-lg text-gray-800">{exp.position}</h3>
                </div>
                <div className="ml-4 border-l-2 border-gray-200 pl-4 py-1">
                  <div className="flex justify-between">
                    <p className="text-gray-600">{exp.company}</p>
                    <span className="text-gray-600 text-sm">{exp.duration}</span>
                  </div>
                  <p className="text-gray-700 mt-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Education</h2>
            {placeholderData.education?.map((edu, index) => (
              <div key={index} className="mb-2">
                <div className="flex items-baseline">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                </div>
                <div className="ml-4 border-l-2 border-gray-200 pl-4 py-1">
                  <div className="flex justify-between">
                    <p className="text-gray-600">{edu.institution}</p>
                    <span className="text-gray-600 text-sm">{edu.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );

  const renderTechTemplate = () => (
    <div className="min-h-[600px] bg-white text-black">
      <div className="grid grid-cols-12">
        <div className="col-span-4 bg-gray-900 text-white p-6">
          <h1 className="text-2xl font-bold mb-1">{placeholderData.fullName}</h1>
          <p className="text-gray-400 border-b border-gray-700 pb-4 mb-4">{placeholderData.title}</p>
          
          <section className="mb-6">
            <h2 className="text-lg font-medium mb-3 text-gray-300">Contact Info</h2>
            <div className="text-gray-400 space-y-2 text-sm">
              <p>{placeholderData.email}</p>
              <p>{placeholderData.phone}</p>
              <p>{placeholderData.location}</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-lg font-medium mb-3 text-gray-300">Technical Skills</h2>
            <div className="space-y-2">
              {placeholderData.skills.map((skill) => (
                <div key={skill.id} className="flex items-center">
                  <div className={`w-2 h-2 rounded-full ${skill.featured ? 'bg-primary' : 'bg-gray-600'} mr-2`}></div>
                  <span className={skill.featured ? 'text-white' : 'text-gray-400'}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </section>
          
          <section className="mt-6">
            <h2 className="text-lg font-medium mb-3 text-gray-300">Education</h2>
            {placeholderData.education?.map((edu, index) => (
              <div key={index} className="mb-3">
                <h3 className="font-medium text-white">{edu.degree}</h3>
                <p className="text-gray-400 text-sm">{edu.institution}</p>
                <p className="text-gray-500 text-xs">{edu.year}</p>
              </div>
            ))}
          </section>
        </div>
        
        <div className="col-span-8 p-6">
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-gray-800 flex items-center">
              <span className="w-3 h-3 bg-primary rounded-sm mr-2"></span>
              Professional Profile
            </h2>
            <p className="text-gray-700">{placeholderData.summary}</p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
              <span className="w-3 h-3 bg-primary rounded-sm mr-2"></span>
              Work Experience
            </h2>
            {placeholderData.experience?.map((exp, index) => (
              <div key={index} className="mb-5">
                <div className="flex justify-between items-baseline border-b border-gray-200 pb-1 mb-2">
                  <h3 className="font-semibold text-gray-800">{exp.position}</h3>
                  <span className="text-primary text-sm font-medium">{exp.duration}</span>
                </div>
                <p className="text-gray-600 text-sm mb-1">{exp.company}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </section>
          
          <section className="mt-6">
            <h2 className="text-xl font-bold mb-3 text-gray-800 flex items-center">
              <span className="w-3 h-3 bg-primary rounded-sm mr-2"></span>
              Skills Assessment
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {placeholderData.skills.map((skill) => (
                <div key={skill.id} className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: skill.featured ? '85%' : '65%' }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  let templateContent;
  switch (template) {
    case 'professional':
      templateContent = renderProfessionalTemplate();
      break;
    case 'creative':
      templateContent = renderCreativeTemplate();
      break;
    case 'tech':
      templateContent = renderTechTemplate();
      break;
    case 'minimal':
    default:
      templateContent = renderMinimalTemplate();
  }

  return (
    <Card className="overflow-hidden shadow-md transition-all duration-300 animate-blur-in">
      <div className="bg-gray-50 px-4 py-3 text-sm font-medium border-b">
        Preview — {template.charAt(0).toUpperCase() + template.slice(1)} Template
      </div>
      <div className="overflow-hidden bg-white">
        {templateContent}
      </div>
    </Card>
  );
};

export default ResumePreview;
