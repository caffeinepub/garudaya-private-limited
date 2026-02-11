import { Target, Eye, Users, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Every action we take is aligned with our core mission to empower and innovate.',
  },
  {
    icon: Eye,
    title: 'Visionary Leadership',
    description: 'We lead with foresight, anticipating market needs and future trends.',
  },
  {
    icon: Users,
    title: 'People-Centric',
    description: 'Our success is built on strong relationships with clients, partners, and communities.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We embrace new technologies and methodologies to stay ahead of the curve.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">About GARUDAYA</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              A multi-sector enterprise built on the pillars of trust, innovation, and sustainable growth. 
              We are shaping the future of business across diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-accent/10 p-3">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h2 className="mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                Empower businesses, farmers, and future technologies through innovative solutions, 
                sustainable practices, and unwavering commitment to excellence. We bridge the gap 
                between traditional industries and modern innovation, creating lasting value for 
                all stakeholders.
              </p>
            </div>

            <div>
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-accent/10 p-3">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h2 className="mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                Become a trusted global multi-sector enterprise recognized for driving positive 
                change, fostering innovation, and delivering scalable solutions that transform 
                industries. We envision a future where technology, sustainability, and human 
                potential converge to create unprecedented opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The principles that guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-lg border border-border bg-card p-6 text-center shadow-xs"
                >
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-accent/10 p-3">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">Leadership & Innovation</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              GARUDAYA PRIVATE LIMITED is led by a team of experienced professionals who bring 
              decades of combined expertise across multiple sectors. Our leadership is committed 
              to fostering a culture of innovation, transparency, and continuous improvement.
            </p>
            <p className="text-lg text-muted-foreground">
              We invest heavily in research and development, staying at the forefront of 
              technological advancement while maintaining our commitment to sustainable and 
              ethical business practices. Our approach combines strategic thinking with 
              operational excellence, ensuring we deliver measurable results for our clients 
              and partners.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
