import React, { useState } from 'react';
import { Mail, Lock, User, Users, Home } from 'lucide-react';
import './SignUp.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'guest', // Default role is 'guest'
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Password validation (on password change)
    if (name === 'password') {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // At least 8 characters, one lowercase, one uppercase, one number, one special character
      if (!passwordRegex.test(value)) {
        setPasswordError(
          'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.'
        );
      } else {
        setPasswordError('');
      }
    }
  };

  const handleRoleChange = (role) => {
    setFormData({ ...formData, role });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Additional validation (optional)
    // You can add checks for matching passwords, email format, etc. here

    if (passwordError) {
      return; // Prevent submission if password validation fails
    }

    console.log('Form submitted:', formData);
    // ... (your form submission logic) ...
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex justify-center space-x-8 mb-6">
        <div
          onClick={() => handleRoleChange('guest')}
          className={`role-card ${formData.role === 'guest' ? 'selected' : ''}`}
        >
          <Users size={40} className="mb-2 text-gray-300" />
          <p className="text-white">Guest</p>
        </div>
        <div
          onClick={() => handleRoleChange('host')}
          className={`role-card ${formData.role === 'host' ? 'selected' : ''}`}
        >
          <Home size={40} className="mb-2 text-gray-300" />
          <p className="text-white">Host</p>
        </div>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
      </div>

      {/* Email and Password Fields */}
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      {passwordError && (
        <p className="text-red-500 mt-1 text-xs">{passwordError}</p>
      )}
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="submit-button" disabled={passwordError.length > 0}>
        Create Account
      </button>
    </form>
  );
};

export default SignUpForm;