import { Shield, Eye, Rocket, TrendingUp, Network } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Trusted Company',
    description: 'Built on a foundation of integrity, transparency, and proven track record. Our clients trust us to deliver on our promises and maintain the highest ethical standards in every engagement.',
  },
  {
    icon: Eye,
    title: 'Transparent Process',
    description: 'Clear communication, honest reporting, and open collaboration at every stage. We believe in keeping our clients informed and involved throughout the entire project lifecycle.',
  },
  {
    icon: Rocket,
    title: 'Future-Focused',
    description: 'We stay ahead of industry trends and emerging technologies to provide forward-thinking solutions. Our innovation-driven approach ensures your business is prepared for tomorrow\'s challenges.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Our services are designed to grow with your business. Whether you\'re a startup or an established enterprise, we provide solutions that scale efficiently and cost-effectively.',
  },
  {
    icon: Network,
    title: 'Strong Network',
    description: 'Extensive partnerships across industries and geographies enable us to connect you with the right resources, markets, and opportunities for accelerated growth.',
  },
];

const stats = [
  { value: '6', label: 'Industry Sectors' },
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Partner Network' },
  { value: '99%', label: 'Client Satisfaction' },
];

export default function WhyChooseUsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">Why Choose GARUDAYA</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Partner with a multi-sector enterprise that combines expertise, innovation, 
              and unwavering commitment to your success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border/40 bg-background py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-4xl font-bold text-accent lg:text-5xl">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4">What Sets Us Apart</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Five core strengths that make GARUDAYA PRIVATE LIMITED the ideal partner 
              for your business transformation journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="group rounded-lg border border-border bg-card p-6 shadow-xs transition-all hover:shadow-premium"
                >
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-accent/10 p-3">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center">Additional Benefits</h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-2 text-lg font-semibold">Industry Expertise</h3>
                <p className="text-muted-foreground">
                  Deep domain knowledge across agriculture, technology, energy, education, 
                  trade, and consulting sectors ensures comprehensive solutions.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-2 text-lg font-semibold">Proven Methodology</h3>
                <p className="text-muted-foreground">
                  Our structured approach combines best practices with innovative thinking 
                  to deliver consistent, measurable results.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-2 text-lg font-semibold">Long-term Partnership</h3>
                <p className="text-muted-foreground">
                  We don't just complete projects—we build lasting relationships and provide 
                  ongoing support to ensure sustained success.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-2 text-lg font-semibold">Competitive Advantage</h3>
                <p className="text-muted-foreground">
                  Our multi-sector presence and integrated approach give you access to 
                  unique insights and opportunities unavailable elsewhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-4 text-primary-foreground">
            Experience the GARUDAYA Difference
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Join the growing list of businesses that trust us to drive their success.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-premium transition-all hover:bg-accent/90 hover:shadow-premium-lg"
          >
            Start Your Journey
          </a>
        </div>
      </section>
    </div>
  );
}
