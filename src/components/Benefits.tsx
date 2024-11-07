import { Shield, Globe, Lock, Coffee } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Public WiFi Protection',
    description: 'Stay safe on public networks with automatic encryption.',
    useCase: 'Perfect for remote workers and travelers',
  },
  {
    icon: Globe,
    title: 'Global Content Access',
    description: 'Access your favorite content from anywhere.',
    useCase: 'Stream and browse without restrictions',
  },
  {
    icon: Lock,
    title: 'ISP Privacy',
    description: 'Keep your browsing history private from your ISP.',
    useCase: 'Browse with complete confidence',
  },
  {
    icon: Coffee,
    title: 'Seamless Experience',
    description: "Connect with one click and forget it's running.",
    useCase: 'Ideal for daily internet usage',
  },
];

export function Benefits() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose NexaNode VPN?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the internet on your terms with our comprehensive protection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 rounded-full p-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-2">{benefit.description}</p>
                  <p className="text-sm text-primary">{benefit.useCase}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}