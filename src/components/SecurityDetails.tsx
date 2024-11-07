import { Shield, Lock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const securityFeatures = [
  {
    icon: Shield,
    title: 'Advanced Encryption',
    description: 'AES-256 encryption with perfect forward secrecy',
  },
  {
    icon: Lock,
    title: 'No-Logs Policy',
    description: 'Your data is never logged, stored, or shared',
  },
  {
    icon: CheckCircle,
    title: 'Third-party Audits',
    description: 'Regular security audits by independent firms',
  },
];

export function SecurityDetails() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your privacy is our top priority
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="encryption">
              <AccordionTrigger>Encryption Protocols</AccordionTrigger>
              <AccordionContent>
                We use AES-256 encryption, the same standard trusted by security experts worldwide. Our implementation includes perfect forward secrecy and secure key exchange protocols.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="logs">
              <AccordionTrigger>No-Logs Policy Details</AccordionTrigger>
              <AccordionContent>
                We maintain a strict no-logs policy. We don't track, collect, or store your browsing history, traffic destination, data content, or DNS queries.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="audits">
              <AccordionTrigger>Independent Security Audits</AccordionTrigger>
              <AccordionContent>
                Our service undergoes regular security audits by respected cybersecurity firms. All audit reports are publicly available for transparency.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}