import { Link } from '@tanstack/react-router';
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Why Choose Us', href: '/why-choose-us' },
  { name: 'Contact', href: '/contact' },
];

const services = [
  'Agriculture & Farmer Support',
  'Import & Export Solutions',
  'Technology Services',
  'Solar & Renewable Projects',
  'Education & Skill Development',
  'Business Consulting',
];

const registrations = [
  { name: 'Register as Vendor', href: '/register/vendor' },
  { name: 'Register as Farmer', href: '/register/farmer' },
  { name: 'Become a Client', href: '/register/client' },
];

const socialLinks = [
  { name: 'Facebook', icon: SiFacebook, href: '#' },
  { name: 'X (Twitter)', icon: SiX, href: '#' },
  { name: 'LinkedIn', icon: SiLinkedin, href: '#' },
  { name: 'Instagram', icon: SiInstagram, href: '#' },
];

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'garudaya-corporate';

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
            <img
              src="/assets/generated/garudaya-logo-transparent.dim_1200x300.png"
              alt="GARUDAYA PRIVATE LIMITED"
              className="h-8 w-auto object-contain"
            />
            <p className="text-sm text-muted-foreground">
              Building the future across multiple sectors with trust, innovation, and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Registrations */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Registrations
            </h3>
            <ul className="space-y-2">
              {registrations.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 border-t border-border/40 pt-8">
          <div className="mb-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground transition-colors hover:text-accent"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-border/40 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
              <p>
                © {currentYear} GARUDAYA PRIVATE LIMITED. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/privacy"
                  className="transition-colors hover:text-accent"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="transition-colors hover:text-accent"
                >
                  Terms
                </Link>
              </div>
            </div>
            <p className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 fill-accent text-accent" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
