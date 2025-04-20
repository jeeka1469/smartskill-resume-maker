
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AnalysisResult {
  technicalSkills?: string[];
  softSkills?: string[];
  score?: number;
  suggestions?: string[];
}

export const useResumeAnalysis = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyzeResume = async (content: string, type: 'extract-skills' | 'analyze-ats') => {
    setIsAnalyzing(true);
    setError(null);
    
    try {
      const { data, error: functionError } = await supabase.functions.invoke('resume-analyzer', {
        body: { content, type }
      });

      if (functionError) {
        throw new Error(functionError.message);
      }

      setResult(data);
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to analyze resume';
      setError(message);
      throw err;
    } finally {
      setIsAnalyzing(false);
    }
  };

  return {
    analyzeResume,
    isAnalyzing,
    result,
    error
  };
};
