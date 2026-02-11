import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

interface RegistrationFormShellProps {
  title: string;
  description: string;
  message: string;
  children: ReactNode;
  submitted?: boolean;
  error?: string;
}

export default function RegistrationFormShell({
  title,
  description,
  message,
  children,
  submitted,
  error,
}: RegistrationFormShellProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-primary-foreground">{title}</h1>
            <p className="text-lg text-primary-foreground/90 md:text-xl">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Card className="border-border/40 shadow-premium">
              <CardHeader>
                <CardTitle className="text-2xl">{message}</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below to get started. All fields marked with * are required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Placeholder Notice */}
                <Alert className="mb-6 border-accent/20 bg-accent/10">
                  <Info className="h-4 w-4 text-accent" />
                  <AlertDescription className="text-sm text-accent-foreground">
                    This is a demonstration form. Submissions are not currently sent to a backend system.
                  </AlertDescription>
                </Alert>

                {/* Success Message */}
                {submitted && (
                  <Alert className="mb-6 border-accent/20 bg-accent/10">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <AlertDescription className="text-sm font-medium text-accent-foreground">
                      Thank you for your registration! We've received your information and will contact you shortly.
                    </AlertDescription>
                  </Alert>
                )}

                {/* Error Message */}
                {error && (
                  <Alert className="mb-6 border-destructive/20 bg-destructive/10">
                    <AlertCircle className="h-4 w-4 text-destructive" />
                    <AlertDescription className="text-sm font-medium text-destructive">
                      {error}
                    </AlertDescription>
                  </Alert>
                )}

                {children}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
