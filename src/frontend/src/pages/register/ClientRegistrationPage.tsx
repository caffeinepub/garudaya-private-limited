import { useState } from 'react';
import RegistrationFormShell from '@/components/registration/RegistrationFormShell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { validateRequired, validateEmail, validatePhone, ValidationErrors } from '@/components/registration/validators';

interface ClientFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  requirement: string;
  quantity: string;
  message: string;
}

export default function ClientRegistrationPage() {
  const [formData, setFormData] = useState<ClientFormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    requirement: '',
    quantity: '',
    message: '',
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    const companyError = validateRequired(formData.companyName, 'Company/Client name');
    if (companyError) newErrors.companyName = companyError;

    const contactError = validateRequired(formData.contactName, 'Contact name');
    if (contactError) newErrors.contactName = contactError;

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;

    const requirementError = validateRequired(formData.requirement, 'Requirement');
    if (requirementError) newErrors.requirement = requirementError;

    const messageError = validateRequired(formData.message, 'Message');
    if (messageError) newErrors.message = messageError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Client registration submitted:', formData);
      setSubmitted(true);
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        requirement: '',
        quantity: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (field: keyof ClientFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <RegistrationFormShell
      title="Client Registration"
      description="Partner with GARUDAYA for reliable sourcing, quality products, and professional service that drives your business forward."
      message="Tell us your requirement — our team will connect with you."
      submitted={submitted}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="companyName">Company / Client Name *</Label>
            <Input
              id="companyName"
              value={formData.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              placeholder="Your company name"
              className={errors.companyName ? 'border-destructive' : ''}
            />
            {errors.companyName && (
              <p className="mt-1 text-sm text-destructive">{errors.companyName}</p>
            )}
          </div>

          <div>
            <Label htmlFor="contactName">Contact Person Name *</Label>
            <Input
              id="contactName"
              value={formData.contactName}
              onChange={(e) => handleChange('contactName', e.target.value)}
              placeholder="Your full name"
              className={errors.contactName ? 'border-destructive' : ''}
            />
            {errors.contactName && (
              <p className="mt-1 text-sm text-destructive">{errors.contactName}</p>
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="your.email@example.com"
              className={errors.email ? 'border-destructive' : ''}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="10-digit mobile number"
              className={errors.phone ? 'border-destructive' : ''}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="requirement">Requirement *</Label>
          <Input
            id="requirement"
            value={formData.requirement}
            onChange={(e) => handleChange('requirement', e.target.value)}
            placeholder="What products or services do you need?"
            className={errors.requirement ? 'border-destructive' : ''}
          />
          {errors.requirement && (
            <p className="mt-1 text-sm text-destructive">{errors.requirement}</p>
          )}
        </div>

        <div>
          <Label htmlFor="quantity">Quantity (Optional)</Label>
          <Input
            id="quantity"
            value={formData.quantity}
            onChange={(e) => handleChange('quantity', e.target.value)}
            placeholder="e.g., 100 units, 5 tons"
          />
          <p className="mt-1 text-sm text-muted-foreground">
            Approximate quantity if known
          </p>
        </div>

        <div>
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            placeholder="Tell us more about your requirements, timeline, and any specific needs..."
            rows={5}
            className={errors.message ? 'border-destructive' : ''}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-destructive">{errors.message}</p>
          )}
        </div>

        <Button type="submit" size="lg" className="w-full">
          Submit Inquiry
        </Button>
      </form>
    </RegistrationFormShell>
  );
}
