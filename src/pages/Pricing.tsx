
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, DollarSign, Zap } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const PricingPlans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Basic resume building with limited features',
    features: [
      'Basic ATS analysis',
      'Limited template selection',
      'Skill extraction (2 resumes/month)',
      'PDF downloads',
      'Email support'
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outline',
    popular: false
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/month',
    description: 'Enhanced features for job seekers',
    features: [
      'Full ATS optimization',
      'All templates included',
      'Unlimited skill extraction',
      'Multiple resume versions',
      'Job description matcher',
      'Priority support'
    ],
    buttonText: 'Upgrade to Pro',
    buttonVariant: 'default',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    description: 'Custom solutions for recruiters and teams',
    features: [
      'All Pro features',
      'Team collaboration',
      'Custom templates',
      'Analytics dashboard',
      'API access',
      'Dedicated account manager'
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outline',
    popular: false
  }
];

const Pricing = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            Pricing Plans
          </span>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Choose the Right Plan for You</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're just starting out or a seasoned professional, we have the right plan to help you create standout resumes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PricingPlans.map((plan, index) => (
            <Card key={index} className={`flex flex-col ${plan.popular ? 'border-primary shadow-md relative' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.period && <span className="ml-1 text-muted-foreground">{plan.period}</span>}
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <Separator className="mb-6" />
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={plan.buttonVariant as any} className="w-full">
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
