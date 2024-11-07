import { Download, ArrowRight, Monitor, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    title: 'Choose Your Plan',
    description: 'Select the plan that best fits your needs',
    icon: Download,
  },
  {
    title: 'Download & Install',
    description: 'Get the app for your device',
    icon: ArrowRight,
  },
  {
    title: 'Connect & Enjoy',
    description: 'One click to secure your connection',
    icon: Monitor,
  },
];

export function QuickStart() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Protecting your online privacy has never been easier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <div className="absolute -top-4 left-6 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="pt-4">
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto bg-background rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Download NexaNode VPN</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              Windows
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              macOS
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              iOS
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              Android
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}