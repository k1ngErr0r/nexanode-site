import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const plans = [
  {
    name: 'Monthly',
    price: '$12.99',
    period: '/month',
    features: [
      'Up to 5 devices',
      'All server locations',
      'No bandwidth limits',
      'Basic support',
    ],
    popular: false,
  },
  {
    name: 'Yearly',
    price: '$6.99',
    period: '/month',
    billing: 'Billed annually',
    features: [
      'Up to 5 devices',
      'All server locations',
      'No bandwidth limits',
      'Priority support',
      '46% savings',
    ],
    popular: true,
  },
  {
    name: 'Family',
    price: '$9.99',
    period: '/month',
    billing: 'Billed annually',
    features: [
      'Up to 10 devices',
      'All server locations',
      'No bandwidth limits',
      'Premium support',
      'Family controls',
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            30-day money-back guarantee. No questions asked.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle>
                  <div className="text-2xl font-bold">{plan.name}</div>
                  <div className="flex items-baseline mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  {plan.billing && (
                    <div className="text-sm text-muted-foreground mt-1">
                      {plan.billing}
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}