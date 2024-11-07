import { Shield, Globe, Cpu, Smartphone, Zap, Power } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'Military-grade Encryption',
    description: 'Your data is protected with AES-256 encryption, the same standard used by security experts worldwide.',
  },
  {
    icon: Globe,
    title: 'Global Servers',
    description: 'Access our network of high-speed servers across 90+ countries for ultimate freedom.',
  },
  {
    icon: Cpu,
    title: 'No-logs Policy',
    description: 'We never track, collect, or share your browsing data. Your privacy is guaranteed.',
  },
  {
    icon: Smartphone,
    title: 'Multi-platform Support',
    description: 'Protect all your devices with apps for Windows, Mac, iOS, Android, and more.',
  },
  {
    icon: Zap,
    title: 'High-speed Connections',
    description: 'Experience lightning-fast speeds with our optimized server network.',
  },
  {
    icon: Power,
    title: 'Automatic Kill Switch',
    description: 'Protects your data by instantly cutting internet if VPN connection drops.',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Advanced Features for Complete Privacy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the most comprehensive VPN service with cutting-edge security features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}