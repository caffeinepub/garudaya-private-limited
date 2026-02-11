import { useState } from 'react';
import RegistrationFormShell from '@/components/registration/RegistrationFormShell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { validateRequired, validatePhone, ValidationErrors } from '@/components/registration/validators';

interface FarmerFormData {
  farmerName: string;
  mobile: string;
  location: string;
  cropType: string;
  farmingCapacity: string;
  landSize: string;
  farmingMethod: string;
  bankDetails: string;
}

export default function FarmerRegistrationPage() {
  const [formData, setFormData] = useState<FarmerFormData>({
    farmerName: '',
    mobile: '',
    location: '',
    cropType: '',
    farmingCapacity: '',
    landSize: '',
    farmingMethod: '',
    bankDetails: '',
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    const nameError = validateRequired(formData.farmerName, 'Farmer name');
    if (nameError) newErrors.farmerName = nameError;

    const mobileError = validatePhone(formData.mobile);
    if (mobileError) newErrors.mobile = mobileError;

    const locationError = validateRequired(formData.location, 'Location');
    if (locationError) newErrors.location = locationError;

    const cropTypeError = validateRequired(formData.cropType, 'Type of crops');
    if (cropTypeError) newErrors.cropType = cropTypeError;

    const capacityError = validateRequired(formData.farmingCapacity, 'Farming capacity');
    if (capacityError) newErrors.farmingCapacity = capacityError;

    const landSizeError = validateRequired(formData.landSize, 'Land size');
    if (landSizeError) newErrors.landSize = landSizeError;

    const methodError = validateRequired(formData.farmingMethod, 'Farming method');
    if (methodError) newErrors.farmingMethod = methodError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Farmer registration submitted:', formData);
      setSubmitted(true);
      setFormData({
        farmerName: '',
        mobile: '',
        location: '',
        cropType: '',
        farmingCapacity: '',
        landSize: '',
        farmingMethod: '',
        bankDetails: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (field: keyof FarmerFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <RegistrationFormShell
      title="Farmer Registration"
      description="Connect directly with larger markets and grow your agricultural income with reliable support and fair pricing."
      message="Register today and grow your agricultural income with reliable market access."
      submitted={submitted}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="farmerName">Farmer Name *</Label>
            <Input
              id="farmerName"
              value={formData.farmerName}
              onChange={(e) => handleChange('farmerName', e.target.value)}
              placeholder="Your full name"
              className={errors.farmerName ? 'border-destructive' : ''}
            />
            {errors.farmerName && (
              <p className="mt-1 text-sm text-destructive">{errors.farmerName}</p>
            )}
          </div>

          <div>
            <Label htmlFor="mobile">Mobile Number *</Label>
            <Input
              id="mobile"
              type="tel"
              value={formData.mobile}
              onChange={(e) => handleChange('mobile', e.target.value)}
              placeholder="10-digit mobile number"
              className={errors.mobile ? 'border-destructive' : ''}
            />
            {errors.mobile && (
              <p className="mt-1 text-sm text-destructive">{errors.mobile}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="location">Location *</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => handleChange('location', e.target.value)}
            placeholder="Village, District, State"
            className={errors.location ? 'border-destructive' : ''}
          />
          {errors.location && (
            <p className="mt-1 text-sm text-destructive">{errors.location}</p>
          )}
        </div>

        <div>
          <Label htmlFor="cropType">Type of Crops *</Label>
          <Input
            id="cropType"
            value={formData.cropType}
            onChange={(e) => handleChange('cropType', e.target.value)}
            placeholder="e.g., Rice, Wheat, Vegetables, Fruits"
            className={errors.cropType ? 'border-destructive' : ''}
          />
          {errors.cropType && (
            <p className="mt-1 text-sm text-destructive">{errors.cropType}</p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="farmingCapacity">Farming Capacity *</Label>
            <Input
              id="farmingCapacity"
              value={formData.farmingCapacity}
              onChange={(e) => handleChange('farmingCapacity', e.target.value)}
              placeholder="e.g., 10 tons per season"
              className={errors.farmingCapacity ? 'border-destructive' : ''}
            />
            {errors.farmingCapacity && (
              <p className="mt-1 text-sm text-destructive">{errors.farmingCapacity}</p>
            )}
          </div>

          <div>
            <Label htmlFor="landSize">Land Size *</Label>
            <Input
              id="landSize"
              value={formData.landSize}
              onChange={(e) => handleChange('landSize', e.target.value)}
              placeholder="e.g., 5 acres"
              className={errors.landSize ? 'border-destructive' : ''}
            />
            {errors.landSize && (
              <p className="mt-1 text-sm text-destructive">{errors.landSize}</p>
            )}
          </div>
        </div>

        <div>
          <Label>खेती का प्रकार (Farming Method) *</Label>
          <RadioGroup
            value={formData.farmingMethod}
            onValueChange={(value) => handleChange('farmingMethod', value)}
            className="mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="organic" id="organic" />
              <Label htmlFor="organic" className="font-normal">
                Organic (जैविक)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="traditional" id="traditional" />
              <Label htmlFor="traditional" className="font-normal">
                Traditional (पारंपरिक)
              </Label>
            </div>
          </RadioGroup>
          {errors.farmingMethod && (
            <p className="mt-1 text-sm text-destructive">{errors.farmingMethod}</p>
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
