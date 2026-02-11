const services = [
  {
    name: 'Agriculture & Farmer Growth Programs',
    icon: '/assets/generated/icon-agriculture.dim_256x256.png',
    description: 'Comprehensive agricultural solutions designed to increase farmer income through modern farming techniques, supply chain optimization, and direct market access. We help farmers boost productivity while promoting sustainable practices that ensure long-term profitability.',
    features: [
      'Income-focused farming techniques',
      'Direct market access & fair pricing',
      'Supply chain optimization',
      'Sustainable agriculture practices',
    ],
  },
  {
    name: 'Vendor Development & Market Linkage',
    icon: '/assets/generated/icon-import-export.dim_256x256.png',
    description: 'End-to-end vendor support services that expand your business reach and increase revenue through national and global market connections. We simplify logistics, customs clearance, and documentation while opening doors to new growth opportunities.',
    features: [
      'Business expansion support',
      'National & global market access',
      'Revenue growth strategies',
      'Trade documentation & compliance',
    ],
  },
  {
    name: 'Technology Services',
    icon: '/assets/generated/icon-technology.dim_256x256.png',
    description: 'Cutting-edge digital transformation services that drive business efficiency and unlock new revenue streams. Our technology solutions help businesses leverage innovation for competitive advantage and sustainable growth.',
    features: [
      'Custom software development',
      'Digital transformation consulting',
      'Business process automation',
      'Technology integration',
    ],
  },
  {
    name: 'Solar & Renewable Projects',
    icon: '/assets/generated/icon-renewable.dim_256x256.png',
    description: 'Sustainable energy solutions that reduce operational costs and create new income opportunities. From project planning to installation and maintenance, we design renewable energy systems that deliver long-term financial and environmental benefits.',
    features: [
      'Cost-saving solar installations',
      'Energy efficiency optimization',
      'Renewable project consulting',
      'Long-term savings programs',
    ],
  },
  {
    name: 'Education & Skill Development',
    icon: '/assets/generated/icon-education.dim_256x256.png',
    description: 'Professional training programs and educational support services designed to enhance earning potential and career growth. We invest in human capital development to create skilled professionals ready for high-income opportunities.',
    features: [
      'Income-enhancing skill training',
      'Professional certification programs',
      'Career advancement support',
      'Industry-relevant education',
    ],
  },
  {
    name: 'Business Consulting',
    icon: '/assets/generated/icon-consulting.dim_256x256.png',
    description: 'Strategic business consulting focused on revenue growth, market expansion, and operational excellence. Our expert advisors help businesses identify new opportunities, optimize operations, and achieve sustainable profitability.',
    features: [
      'Revenue growth strategies',
      'Market expansion planning',
      'Operational efficiency consulting',
      'Business transformation support',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-primary-foreground">Our Services</h1>
            <p className="text-lg text-primary-foreground/90 md:text-xl">
              Comprehensive solutions across six core sectors, all designed to increase your income, 
              expand your market reach, and drive sustainable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-lg bg-accent/10">
                    <img
                      src={service.icon}
                      alt={service.name}
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold">{service.name}</h2>
                  <p className="mb-6 text-lg text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                          <div className="h-2 w-2 rounded-full bg-accent" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`flex items-center justify-center rounded-lg bg-muted/30 p-8 ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="h-48 w-48 object-contain opacity-20"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Contact us today to discuss how we can help grow your business.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-premium transition-all hover:bg-accent/90 hover:shadow-premium-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
