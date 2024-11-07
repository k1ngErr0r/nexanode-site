import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="h-16 w-16 mx-auto mb-8" />
          
          <h2 className="text-4xl font-bold mb-6">
            Ready to Secure Your Online Privacy?
          </h2>
          
          <p className="text-xl mb-8 text-primary-foreground/90">
            Try NexaNode VPN risk-free with our 30-day money-back guarantee
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              View Plans
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-primary-foreground/80">
            No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}