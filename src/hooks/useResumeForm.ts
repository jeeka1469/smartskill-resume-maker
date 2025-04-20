
import { useState } from 'react';

interface Skill {
  id: string;
  name: string;
  featured: boolean;
}

export interface ResumeData {
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

export const useResumeForm = () => {
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

  const handleAddSkill = (skill: Skill) => {
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, skill]
    });
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

  return {
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
  };
};
