import { useState } from 'react';
import RegistrationFormShell from '@/components/registration/RegistrationFormShell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { validateRequired, validateEmail, validatePhone, ValidationErrors } from '@/components/registration/validators';
import { Upload } from 'lucide-react';

interface VendorFormData {
  businessName: string;
  ownerName: string;
  phone: string;
  email: string;
  address: string;
  category: string;
  experience: string;
  bankDetails: string;
}

export default function VendorRegistrationPage() {
  const [formData, setFormData] = useState<VendorFormData>({
    businessName: '',
    ownerName: '',
    phone: '',
    email: '',
    address: '',
    category: '',
    experience: '',
    bankDetails: '',
  });
  const [document, setDocument] = useState<File | null>(null);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    const businessNameError = validateRequired(formData.businessName, 'Business name');
    if (businessNameError) newErrors.businessName = businessNameError;

    const ownerNameError = validateRequired(formData.ownerName, 'Owner name');
    if (ownerNameError) newErrors.ownerName = ownerNameError;

    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    const addressError = validateRequired(formData.address, 'Address');
    if (addressError) newErrors.address = addressError;

    const categoryError = validateRequired(formData.category, 'Product/Service category');
    if (categoryError) newErrors.category = categoryError;

    const experienceError = validateRequired(formData.experience, 'Years of experience');
    if (experienceError) newErrors.experience = experienceError;

    if (!document) {
      newErrors.document = 'Business document is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Vendor registration submitted:', { ...formData, document });
      setSubmitted(true);
      setFormData({
        businessName: '',
        ownerName: '',
        phone: '',
        email: '',
        address: '',
        category: '',
        experience: '',
        bankDetails: '',
      });
      setDocument(null);

      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (field: keyof VendorFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDocument(e.target.files[0]);
      if (errors.document) {
        setErrors((prev) => ({ ...prev, document: '' }));
      }
    }
  };

  return (
    <RegistrationFormShell
      title="Vendor Registration"
      description="Partner with GARUDAYA and expand your business reach across national and global markets."
      message="Join our trusted vendor network and expand your business reach."
      submitted={submitted}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="businessName">Business Name *</Label>
            <Input
              id="businessName"
              value={formData.businessName}
              onChange={(e) => handleChange('businessName', e.target.value)}
              placeholder="Your business name"
              className={errors.businessName ? 'border-destructive' : ''}
            />
            {errors.businessName && (
              <p className="mt-1 text-sm text-destructive">{errors.businessName}</p>
            )}
          </div>

          <div>
            <Label htmlFor="ownerName">Owner Name *</Label>
            <Input
              id="ownerName"
              value={formData.ownerName}
              onChange={(e) => handleChange('ownerName', e.target.value)}
              placeholder="Full name of owner"
              className={errors.ownerName ? 'border-destructive' : ''}
            />
            {errors.ownerName && (
              <p className="mt-1 text-sm text-destructive">{errors.ownerName}</p>
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
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
        </div>

        <div>
          <Label htmlFor="address">Address *</Label>
          <Textarea
            id="address"
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            placeholder="Complete business address"
            rows={3}
            className={errors.address ? 'border-destructive' : ''}
          />
          {errors.address && (
            <p className="mt-1 text-sm text-destructive">{errors.address}</p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="category">Product/Service Category *</Label>
            <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
              <SelectTrigger className={errors.category ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="agriculture">Agriculture & Farming</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="technology">Technology & IT</SelectItem>
                <SelectItem value="construction">Construction & Materials</SelectItem>
                <SelectItem value="food">Food & Beverages</SelectItem>
                <SelectItem value="textiles">Textiles & Garments</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="mt-1 text-sm text-destructive">{errors.category}</p>
            )}
          </div>

          <div>
            <Label htmlFor="experience">Years of Experience *</Label>
            <Input
              id="experience"
              type="number"
              min="0"
              value={formData.experience}
              onChange={(e) => handleChange('experience', e.target.value)}
              placeholder="Years in business"
              className={errors.experience ? 'border-destructive' : ''}
            />
            {errors.experience && (
              <p className="mt-1 text-sm text-destructive">{errors.experience}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="document">Upload Business Documents *</Label>
          <div className="mt-2">
            <label
              htmlFor="document"
              className={`flex cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-dashed ${
                errors.document ? 'border-destructive' : 'border-border'
              } bg-muted/30 px-6 py-8 transition-colors hover:bg-muted/50`}
            >
              <Upload className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {document ? document.name : 'Click to upload (PDF, JPG, PNG - Max 5MB)'}
              </span>
            </label>
            <input
              id="document"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="sr-only"
            />
          </div>
          {errors.document && (
            <p className="mt-1 text-sm text-destructive">{errors.document}</p>
          )}
        </div>

        <div>
          <Label htmlFor="bankDetails">Bank Details (Optional)</Label>
          <Textarea
            id="bankDetails"
            value={formData.bankDetails}
            onChange={(e) => handleChange('bankDetails', e.target.value)}
            placeholder="Bank name, account number, IFSC code (can be provided later)"
            rows={3}
          />
          <p className="mt-1 text-sm text-muted-foreground">
            You can provide this information later during onboarding.
          </p>
        </div>

        <Button type="submit" size="lg" className="w-full">
          Submit Registration
        </Button>
      </form>
    </RegistrationFormShell>
  );
}
