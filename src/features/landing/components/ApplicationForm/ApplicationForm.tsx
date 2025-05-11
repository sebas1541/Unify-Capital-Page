import React, { useState } from 'react';
import { Button } from '../../../../common/components/Button/Button';
import { cn } from '../../../../utils/cn';

interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  options?: string[];
}

interface FormSection {
  title: string;
  fields: FormField[];
}

const formSections: FormSection[] = [
  {
    title: 'Personal Information',
    fields: [
      { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter your first name', required: true },
      { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Enter your last name', required: true },
      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(123) 456-7890', required: true },
    ]
  },
  {
    title: 'Financial Information',
    fields: [
      { name: 'income', label: 'Annual Income', type: 'number', placeholder: 'Enter your annual income', required: true },
      { name: 'employment', label: 'Employment Status', type: 'select', placeholder: 'Select your status', required: true, 
        options: ['Full-time', 'Part-time', 'Self-employed', 'Unemployed', 'Retired'] },
      { name: 'creditScore', label: 'Credit Score Range', type: 'select', placeholder: 'Select your range', required: true,
        options: ['Excellent (720+)', 'Good (690-719)', 'Fair (630-689)', 'Poor (Below 630)', 'Not sure'] },
    ]
  },
  {
    title: 'Vehicle Information',
    fields: [
      { name: 'vehicleType', label: 'Vehicle Type', type: 'select', placeholder: 'Select vehicle type', required: true,
        options: ['New', 'Used', 'Certified Pre-owned'] },
      { name: 'vehiclePrice', label: 'Estimated Vehicle Price', type: 'number', placeholder: 'Enter estimated price', required: true },
      { name: 'downPayment', label: 'Down Payment Amount', type: 'number', placeholder: 'Enter down payment amount' },
    ]
  }
];

interface ApplicationFormProps {
  className?: string;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ className }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    const currentSectionFields = formSections[activeSection].fields;
    const isValid = currentSectionFields.every(field => 
      !field.required || formData[field.name]
    );

    if (isValid) {
      if (activeSection < formSections.length - 1) {
        setActiveSection(prev => prev + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (activeSection > 0) {
      setActiveSection(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // In a real application, you would submit the data to a server here
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={cn(
        "bg-white rounded-3xl shadow-xl p-6 md:p-8 text-center",
        className
      )}>
        <div className="mx-auto w-16 h-16 bg-[#489094]/20 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-[#489094]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-[#1c243c] mb-3">Application Submitted</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your application! Our team will review your information and contact you within 24-48 hours.
        </p>
        <Button 
          onClick={() => setSubmitted(false)} 
          variant="outline"
        >
          Submit Another Application
        </Button>
      </div>
    );
  }

  const currentSection = formSections[activeSection];

  return (
    <div className={cn(
      "bg-white rounded-3xl shadow-xl p-6 md:p-8",
      className
    )}>
      <h3 className="text-2xl font-semibold text-[#1c243c] mb-2">Loan Application</h3>
      <p className="text-gray-600 mb-6">Fill out the form below to get started with your car loan</p>
      
      {/* Progress Indicator */}
      <div className="flex mb-8">
        {formSections.map((section, index) => (
          <React.Fragment key={section.title}>
            <div className="flex flex-col items-center">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                index <= activeSection 
                  ? "bg-[#489094] text-white" 
                  : "bg-gray-200 text-gray-600"
              )}>
                {index + 1}
              </div>
              <span className="text-xs mt-1 text-gray-600 hidden sm:block">{section.title}</span>
            </div>
            {index < formSections.length - 1 && (
              <div className={cn(
                "flex-1 h-0.5 self-center transition-colors",
                index < activeSection ? "bg-[#489094]" : "bg-gray-200"
              )} />
            )}
          </React.Fragment>
        ))}
      </div>
      
      <div className="space-y-4">
        <h4 className="font-medium text-lg text-[#1c243c]">{currentSection.title}</h4>
        
        {currentSection.fields.map(field => (
          <div key={field.name} className="space-y-1">
            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            {field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                required={field.required}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#489094] focus:border-[#489094]"
              >
                <option value="">{field.placeholder}</option>
                {field.options?.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name] || ''}
                onChange={handleChange}
                required={field.required}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#489094] focus:border-[#489094]"
              />
            )}
          </div>
        ))}
      </div>
      
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={activeSection === 0}
          className={activeSection === 0 ? 'invisible' : ''}
        >
          Back
        </Button>
        <Button onClick={handleNext}>
          {activeSection < formSections.length - 1 ? 'Next' : 'Submit Application'}
        </Button>
      </div>
    </div>
  );
};