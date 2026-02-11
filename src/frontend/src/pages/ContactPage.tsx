import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Map } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Placeholder submission - in production, this would send to backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Have a question or ready to start a project? We'd love to hear from you. 
              Our team is here to help you achieve your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Email</h3>
                    <p className="text-muted-foreground">info@garudaya.com</p>
                    <p className="text-muted-foreground">contact@garudaya.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+91 (XXX) XXX-XXXX</p>
                    <p className="text-muted-foreground">+91 (XXX) XXX-XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Office Address</h3>
                    <p className="text-muted-foreground">
                      GARUDAYA PRIVATE LIMITED
                      <br />
                      [Address Line 1]
                      <br />
                      [City, State - PIN Code]
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <Card className="mt-8 border-border/40 bg-muted/30 shadow-xs">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="mt-6 border-border/40 shadow-xs">
                <CardContent className="p-0">
                  <div className="flex h-64 items-center justify-center bg-muted/30">
                    <div className="text-center">
                      <Map className="mx-auto mb-2 h-12 w-12 text-muted-foreground/50" />
                      <p className="text-sm font-medium text-muted-foreground">Location Map</p>
                      <p className="text-xs text-muted-foreground/70">Map integration coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-8">Send Us a Message</h2>
              
              {submitted && (
                <div className="mb-6 rounded-lg border border-accent/20 bg-accent/10 p-4">
                  <p className="text-sm font-medium text-accent">
                    Thank you for your inquiry! We've received your message and will get back to you shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      errors.name ? 'border-destructive' : 'border-input'
                    } bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      errors.email ? 'border-destructive' : 'border-input'
                    } bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      errors.subject ? 'border-destructive' : 'border-input'
                    } bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
                    placeholder="How can we help you?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-destructive">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full rounded-md border ${
                      errors.message ? 'border-destructive' : 'border-input'
                    } bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
                    placeholder="Tell us more about your project or inquiry..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-8 py-3 font-semibold text-accent-foreground shadow-xs transition-all hover:bg-accent/90 hover:shadow-premium"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>

                <p className="text-sm text-muted-foreground">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
