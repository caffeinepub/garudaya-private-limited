import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TrustSection from '@/components/site/TrustSection';

const sectors = [
  {
    name: 'Agriculture & Farmer Support',
    icon: '/assets/generated/icon-agriculture.dim_256x256.png',
    description: 'Empowering farmers with modern solutions and sustainable practices.',
  },
  {
    name: 'Import & Export Solutions',
    icon: '/assets/generated/icon-import-export.dim_256x256.png',
    description: 'Seamless global trade connections and logistics excellence.',
  },
  {
    name: 'Technology Services',
    icon: '/assets/generated/icon-technology.dim_256x256.png',
    description: 'Cutting-edge digital solutions for modern businesses.',
  },
  {
    name: 'Solar & Renewable Projects',
    icon: '/assets/generated/icon-renewable.dim_256x256.png',
    description: 'Sustainable energy solutions for a greener tomorrow.',
  },
  {
    name: 'Education & Skill Development',
    icon: '/assets/generated/icon-education.dim_256x256.png',
    description: 'Building capabilities and nurturing future leaders.',
  },
  {
    name: 'Business Consulting',
    icon: '/assets/generated/icon-consulting.dim_256x256.png',
    description: 'Strategic guidance for growth and transformation.',
  },
];

const benefits = [
  {
    icon: TrendingUp,
    text: 'Increase your earnings',
  },
  {
    icon: CheckCircle2,
    text: 'Transparent partnerships',
  },
  {
    icon: Globe,
    text: 'National & global market access',
  },
  {
    icon: Zap,
    text: 'Technology-driven operations',
  },
];

const trustIndicators = [
  {
    title: 'Secure Registration',
    description: 'Your data is protected with industry-leading security',
  },
  {
    title: 'Verified Network',
    description: 'Join thousands of verified partners nationwide',
  },
  {
    title: 'Professional Management',
    description: 'Dedicated support from experienced professionals',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/assets/generated/hero-abstract-bg.dim_1920x1080.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-lg font-semibold uppercase tracking-wider text-primary-foreground/80">
              Built for the Future
            </p>
            <h1 className="mb-6 text-balance text-primary-foreground">
              Empowering Growth for Farmers, Vendors, and Businesses
            </h1>
            <p className="mb-12 text-lg text-primary-foreground/90 md:text-xl">
              GARUDAYA PRIVATE LIMITED is your trusted multi-sector growth partner, 
              committed to increasing income and building long-term success through 
              transparency, innovation, and reliable market access.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full bg-accent text-accent-foreground shadow-premium hover:bg-accent/90 hover:shadow-premium-lg sm:w-auto">
                <Link to="/register/vendor">
                  Register as Vendor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 sm:w-auto">
                <Link to="/register/farmer">
                  Register as Farmer
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 sm:w-auto">
                <Link to="/register/client">
                  Become a Client
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-b border-border/40 bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.text} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="font-medium">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {trustIndicators.map((indicator) => (
              <Card key={indicator.title} className="border-border/40 bg-card shadow-xs">
                <CardContent className="p-6 text-center">
                  <h3 className="mb-2 text-lg font-semibold">{indicator.title}</h3>
                  <p className="text-sm text-muted-foreground">{indicator.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Sectors */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Our Core Sectors</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Delivering excellence across multiple industries with specialized expertise and innovative solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="group rounded-lg border border-border bg-card p-6 shadow-xs transition-all hover:shadow-premium"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-muted">
                  <img
                    src={sector.icon}
                    alt={sector.name}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{sector.name}</h3>
                <p className="text-muted-foreground">{sector.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* CTA Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-4 text-primary-foreground">Ready to Transform Your Business?</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Partner with us to unlock new opportunities and drive sustainable growth.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground shadow-premium hover:bg-accent/90 hover:shadow-premium-lg">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
