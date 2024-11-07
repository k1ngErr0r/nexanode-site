import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary opacity-90">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Shield className="h-16 w-16 text-primary animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Secure Your Online Privacy with NexaNode VPN
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Fast, reliable, secure VPN for all devices
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>

          <div className="mt-12 flex justify-center gap-8">
            <div className="flex items-center">
              <div className="bg-primary/10 rounded-full p-2">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <span className="ml-2 text-sm text-muted-foreground">256-bit Encryption</span>
            </div>
            <div className="flex items-center">
              <div className="bg-primary/10 rounded-full p-2">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <span className="ml-2 text-sm text-muted-foreground">No Logs Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}