import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Digital Nomad',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60',
    content: 'NexaNode VPN has been essential for my remote work. The connection is always stable and fast.',
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=60',
    content: "Best VPN I've ever used. The no-logs policy and security features give me peace of mind.",
  },
  {
    name: 'Emily Rodriguez',
    role: 'Content Creator',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop&q=60',
    content: 'NexaNode VPN allows me to access region-restricted content seamlessly. Perfect for my work!',
  }
];

const trustIndicators = [
  '4.8/5 App Store Rating',
  'ISO 27001 Certified',
  'Independent Security Audits',
];

export function SocialProof() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Trusted by Users Worldwide
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our community of satisfied users who trust NexaNode VPN for their online privacy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="p-4 bg-secondary/50 rounded-lg">
              <p className="font-semibold">{indicator}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}