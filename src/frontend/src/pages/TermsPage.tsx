import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="border-border/40 shadow-xs">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-slate max-w-none">
                  <p className="text-lg text-muted-foreground">
                    Welcome to GARUDAYA PRIVATE LIMITED. These Terms of Service ("Terms") govern your use of 
                    our website and services. By accessing or using our services, you agree to be bound by these Terms.
                  </p>

                  <Separator className="my-8" />

                  <CardHeader className="px-0">
                    <CardTitle className="text-2xl">Acceptance of Terms</CardTitle>
                  </CardHeader>
                  <p className="text-muted-foreground">
                    By accessing and using this website, you accept and agree to be bound by the terms and 
                    provision of this agreement. If you do not agree to these terms, please do not use this website.
                  </p>

                  <Separator className="my-8" />

                  <CardHeader className="px-0">
                    <CardTitle className="text-2xl">Use of Services</CardTitle>
                  </CardHeader>
                  <p className="text-muted-foreground">
                    You agree to use our services only for lawful purposes and in accordance with these Terms. 
                    You agree not to:
                  </p>
                  <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                    <li>Use the services in any way that violates any applicable law or regulation</li>
                    <li>Engage in any conduct that restricts or inhibits anyone's use of the services</li>
                    <li>Attempt to gain unauthorized access to any portion of the services</li>
                    <li>Use the services to transmit any harmful or malicious code</li>
                  </ul>

                  <Separator className="my-8" />

                  <CardHeader className="px-0">
                    <CardTitle className="text-2xl">Registration and Accounts</CardTitle>
                  </CardHeader>
                  <p className="text-muted-foreground">
                    When you create an account with us, you must provide accurate, complete, and current information. 
                    You are responsible for safeguarding your account credentials and for any activities or actions 
                    under your account.
                  </p>

                  <Separator className="my-8" />

                  <CardHeader className="px-0">
                    <CardTitle className="text-2xl">Intellectual Property</CardTitle>
                  </CardHeader>
                  <p className="text-muted-foreground">
                    The services and their original content, features, and functionality are and will remain the 
                    exclusive property of GARUDAYA PRIVATE LIMITED and its licensors. The services are protected 
                    by copyright, trademark, and other laws.
                  </p>

                  <Separator className="my-8" />

                  <CardHeader className="px-0">
                    <CardTitle className="text-2xl">Limitation of Liability</CardTitle>
                  </CardHeader>
                  <p className="text-muted-foreground">
                    In no event shall GARUDAYA PRIVATE LIMITED, nor its directors, employees, partners, agents, 
                    suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or 
                    punitive damages, including without limitation, loss of profits, data, use, goodwill, or other 
                    intangible losses.
                  </p>

                  <Separator className="my-8" />

                  <CardHeader className="px-0">
                    <CardTitle className="text-2xl">Changes to Terms</CardTitle>
                  </CardHeader>
                  <p className="text-muted-foreground">
                    We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                    we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes 
                    a material change will be determined at our sole discretion.
                  </p>

                  <Separator className="my-8" />

                  <CardHeader className="px-0">
                    <CardTitle className="text-2xl">Contact Us</CardTitle>
                  </CardHeader>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <div className="mt-4 rounded-lg bg-muted/30 p-4">
                    <p className="font-medium">GARUDAYA PRIVATE LIMITED</p>
                    <p className="text-sm text-muted-foreground">Email: legal@garudaya.com</p>
                    <p className="text-sm text-muted-foreground">Phone: +91 (XXX) XXX-XXXX</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
