
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { content, type } = await req.json();
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

    if (!OPENAI_API_KEY) {
      throw new Error('OpenAI API key not found');
    }

    let systemPrompt = '';
    
    switch (type) {
      case 'extract-skills':
        systemPrompt = 'You are a skill extraction assistant. Extract all professional skills mentioned in the text and categorize them as either technical or soft skills. Return the result as a JSON object with two arrays: technicalSkills and softSkills.';
        break;
      case 'analyze-ats':
        systemPrompt = 'You are an ATS optimization assistant. Analyze the resume content for ATS compatibility and suggest improvements. Focus on keyword optimization, formatting, and content structure. Return a JSON object with score (0-100) and suggestions array.';
        break;
      case 'job-matching':
        systemPrompt = 'You are a job matching assistant. Based on the resume content, generate relevant job opportunities that would be a good match. Return a JSON object with an array of jobs, each containing title, company, description, match (percentage), and a placeholder LinkedIn URL.';
        break;
      default:
        throw new Error('Invalid analysis type');
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: content
          }
        ],
        temperature: 0.5,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to analyze resume');
    }

    const result = JSON.parse(data.choices[0].message.content);

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in resume-analyzer:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
