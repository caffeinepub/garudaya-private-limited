import { Shield, Eye, Award, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const trustItems = [
  {
    icon: Shield,
    title: 'Secure Partnerships',
    description: 'Your data and business relationships are protected with industry-leading security standards.',
  },
  {
    icon: Eye,
    title: 'Transparent Dealings',
    description: 'Complete visibility into processes, pricing, and operations. No hidden terms or surprises.',
  },
  {
    icon: Award,
    title: 'Professional Operations',
    description: 'Certified processes and experienced teams ensuring quality at every step.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: '24/7 assistance from our expert team to help you succeed and grow.',
  },
];

export default function TrustSection() {
  return (
    <section className="border-y border-border/40 bg-muted/20 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4">Your Growth is Our Commitment</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We build lasting partnerships based on trust, transparency, and mutual success.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="border-border/40 bg-card shadow-xs transition-all hover:shadow-premium">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
