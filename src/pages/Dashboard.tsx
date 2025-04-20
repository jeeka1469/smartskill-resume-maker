
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Plus } from 'lucide-react';
import Layout from '@/components/Layout';

interface Resume {
  id: string;
  title: string;
  created_at: string;
  ats_score: number;
}

export default function Dashboard() {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchResumes = async () => {
      const { data, error } = await supabase
        .from('resumes')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching resumes:', error);
        return;
      }
      
      setResumes(data || []);
    };

    fetchResumes();
  }, []);

  return (
    <Layout>
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Resumes</h1>
          <Button onClick={() => navigate('/builder')}>
            <Plus className="h-4 w-4 mr-2" />
            Create New Resume
          </Button>
        </div>

        {resumes.length === 0 ? (
          <Card className="p-8 text-center">
            <h2 className="text-xl font-semibold mb-2">No resumes yet</h2>
            <p className="text-muted-foreground mb-4">
              Create your first resume to get started
            </p>
            <Button onClick={() => navigate('/builder')}>
              Create Resume
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumes.map((resume) => (
              <Card key={resume.id} className="p-6">
                <h3 className="text-lg font-semibold mb-2">{resume.title}</h3>
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                  <span>Created {new Date(resume.created_at).toLocaleDateString()}</span>
                  {resume.ats_score && (
                    <span>ATS Score: {resume.ats_score}%</span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => navigate(`/builder/${resume.id}`)}
                  >
                    Edit
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
