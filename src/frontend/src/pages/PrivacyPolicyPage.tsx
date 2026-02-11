import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4">Privacy Policy</h1>
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
                    GARUDAYA PRIVATE LIMITED ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                    when you visit our website or use our services.
                  </p>

                  <Separator className="my-8" />

                  <CardHeader className="px-0">
                    <CardTitle className="text-2xl">Information We Collect</CardTitle>
                  </CardHeader>
                  <p className="text-muted-foreground">
                    We may collect personal information that you voluntarily provide to us when you register 
                    on the website, express an interest in obtaining information about us or our products and 
                    services, or otherwise contact us.
                  </p>
                  <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                    <li>Name and contact information</li>
                    <li>Business information</li>
                    <li>Communication preferences</li>
                    <li>Other information you choose to provide</li>
                  </ul>

                  <Separator className="my-8" />

                  <CardHeader className="px-0">
                    <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
                  </CardHeader>
                  <p className="text-muted-foreground">
                    We use the information we collect or receive to:
                  </p>
                  <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                    <li>Facilitate account creation and authentication</li>
                    <li>Send administrative information to you</li>
                    <li>Fulfill and manage your orders</li>
                    <li>Post testimonials with your consent</li>
                    <li>Request feedback and contact you about your use of our services</li>
                    <li>Protect our services and enforce our terms</li>
                  </ul>

                  <Separator className="my-8" />

                  <CardHeader className="px-0">
                    <CardTitle className="text-2xl">Information Security</CardTitle>
                  </CardHeader>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational security measures designed to protect 
                    the security of any personal information we process. However, please note that no electronic 
                    transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                  </p>

                  <Separator className="my-8" />

                  <CardHeader className="px-0">
                    <CardTitle className="text-2xl">Your Privacy Rights</CardTitle>
                  </CardHeader>
                  <p className="text-muted-foreground">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                    <li>The right to access your personal information</li>
                    <li>The right to request correction of your personal information</li>
                    <li>The right to request deletion of your personal information</li>
                    <li>The right to object to processing of your personal information</li>
                  </ul>

                  <Separator className="my-8" />

                  <CardHeader className="px-0">
                    <CardTitle className="text-2xl">Contact Us</CardTitle>
                  </CardHeader>
                  <p className="text-muted-foreground">
                    If you have questions or comments about this Privacy Policy, please contact us at:
                  </p>
                  <div className="mt-4 rounded-lg bg-muted/30 p-4">
                    <p className="font-medium">GARUDAYA PRIVATE LIMITED</p>
                    <p className="text-sm text-muted-foreground">Email: privacy@garudaya.com</p>
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
