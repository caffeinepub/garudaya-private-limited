export interface ValidationErrors {
  [key: string]: string;
}

export const validateRequired = (value: string, fieldName: string): string => {
  if (!value.trim()) {
    return `${fieldName} is required`;
  }
  return '';
};

export const validateEmail = (email: string): string => {
  if (!email.trim()) {
    return 'Email is required';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
};

export const validatePhone = (phone: string): string => {
  if (!phone.trim()) {
    return 'Phone number is required';
  }
  if (!/^[0-9]{10}$/.test(phone.replace(/[\s-]/g, ''))) {
    return 'Please enter a valid 10-digit phone number';
  }
  return '';
};

export const validateFile = (file: File | null, fieldName: string): string => {
  if (!file) {
    return `${fieldName} is required`;
  }
  // Check file size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    return 'File size must be less than 5MB';
  }
  return '';
};
