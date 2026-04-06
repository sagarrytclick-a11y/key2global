"use client";

import React, { useState, useEffect } from 'react';
import { useApplyModal } from '@/context/ApplyModalContext';

const courses = [
  { value: '', label: 'Select a course' },
  { value: 'study-abroad', label: 'Study Abroad Programs' },
  { value: 'mbbs-abroad', label: 'MBBS Abroad' },
  { value: 'engineering', label: 'Engineering (B.Tech/B.E.)' },
  { value: 'mbbs-india', label: 'MBBS in India' },
];

export default function ApplyModal() {
  const { isOpen, closeModal } = useApplyModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    course: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeModal]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({ name: '', email: '', mobile: '', course: '' });
        setErrors({});
        setIsSuccess(false);
        setIsSubmitting(false);
      }, 300);
    }
  }, [isOpen]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.replace(/\D/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Call API to send email via Resend
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application');
      }

      console.log('Application submitted:', result);
      setIsSuccess(true);

      // Close modal after success message
      setTimeout(() => {
        closeModal();
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={closeModal}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-slideUp max-h-[90vh] overflow-y-auto">
        
        {/* Decorative Header */}
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 px-8 py-10 overflow-hidden">
          {/* Animated circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90 group"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">Limited Seats Available</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
              Start Your Journey
            </h2>
            <p className="text-blue-100 text-sm md:text-base">
              Fill in your details and our counselors will reach out within 24 hours
            </p>
          </div>
        </div>

        {/* Form Content */}
        <div className="px-8 py-8">
          {isSuccess ? (
            /* Success Message */
            <div className="text-center py-12 animate-fadeIn">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
              <p className="text-gray-600 mb-4">
                Thank you for your interest. Our team will contact you shortly.
              </p>
              <p className="text-sm text-gray-500">Closing in 3 seconds...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className={`w-5 h-5 transition-colors duration-300 ${focusedField === 'name' ? 'text-blue-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your full name"
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 ${
                      errors.name
                        ? 'border-red-400 bg-red-50 focus:border-red-500'
                        : 'border-gray-200 hover:border-blue-300 focus:border-blue-600 focus:shadow-lg focus:shadow-blue-100'
                    }`}
                  />
                  {errors.name && (
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center animate-shake">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                {errors.name && (
                  <p className="text-red-500 text-xs font-semibold mt-1 ml-1 animate-slideDown">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className={`w-5 h-5 transition-colors duration-300 ${focusedField === 'email' ? 'text-blue-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="your.email@example.com"
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 ${
                      errors.email
                        ? 'border-red-400 bg-red-50 focus:border-red-500'
                        : 'border-gray-200 hover:border-blue-300 focus:border-blue-600 focus:shadow-lg focus:shadow-blue-100'
                    }`}
                  />
                  {errors.email && (
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center animate-shake">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs font-semibold mt-1 ml-1 animate-slideDown">{errors.email}</p>
                )}
              </div>

              {/* Mobile Field */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className={`w-5 h-5 transition-colors duration-300 ${focusedField === 'mobile' ? 'text-blue-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="absolute inset-y-0 left-12 flex items-center pointer-events-none">
                    <span className="text-gray-500 font-semibold text-sm">+91</span>
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('mobile')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="98765 43210"
                    maxLength={10}
                    className={`w-full pl-20 pr-4 py-4 border-2 rounded-xl transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 ${
                      errors.mobile
                        ? 'border-red-400 bg-red-50 focus:border-red-500'
                        : 'border-gray-200 hover:border-blue-300 focus:border-blue-600 focus:shadow-lg focus:shadow-blue-100'
                    }`}
                  />
                  {errors.mobile && (
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center animate-shake">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                {errors.mobile && (
                  <p className="text-red-500 text-xs font-semibold mt-1 ml-1 animate-slideDown">{errors.mobile}</p>
                )}
              </div>

              {/* Course Dropdown */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                  Select Course <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className={`w-5 h-5 transition-colors duration-300 ${focusedField === 'course' ? 'text-blue-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('course')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-12 py-4 border-2 rounded-xl transition-all duration-300 outline-none appearance-none cursor-pointer text-gray-900 ${
                      errors.course
                        ? 'border-red-400 bg-red-50 focus:border-red-500'
                        : 'border-gray-200 hover:border-blue-300 focus:border-blue-600 focus:shadow-lg focus:shadow-blue-100'
                    } ${!formData.course ? 'text-gray-400' : 'text-gray-900'}`}
                  >
                    {courses.map((course) => (
                      <option key={course.value} value={course.value} className="text-gray-900">
                        {course.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.course && (
                  <p className="text-red-500 text-xs font-semibold mt-1 ml-1 animate-slideDown">{errors.course}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm tracking-widest uppercase py-4 rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <span>Submit Application</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </button>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-6 pt-4 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>24hr Response</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>Trusted</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
}
