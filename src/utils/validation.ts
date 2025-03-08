import validator from 'validator';
import DOMPurify from 'dompurify';

export const validateEmail = (email: string): boolean => {
  return validator.isEmail(email);
};

export const validateURL = (url: string): boolean => {
  return url === '' || validator.isURL(url, { require_protocol: true });
};

export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input.trim());
};

export const validateForm = (formData: {
  name: string;
  email: string;
  website: string;
  subject: string;
  message: string;
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Name validation
  if (!validator.isLength(formData.name, { min: 2, max: 50 })) {
    errors.push('Name must be between 2 and 50 characters');
  }

  // Email validation
  if (!validateEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  // Website validation (optional)
  if (formData.website && !validateURL(formData.website)) {
    errors.push('Please enter a valid website URL (including http:// or https://)');
  }

  // Subject validation
  if (!validator.isLength(formData.subject, { min: 3, max: 100 })) {
    errors.push('Subject must be between 3 and 100 characters');
  }

  // Message validation
  if (!validator.isLength(formData.message, { min: 10, max: 1000 })) {
    errors.push('Message must be between 10 and 1000 characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};