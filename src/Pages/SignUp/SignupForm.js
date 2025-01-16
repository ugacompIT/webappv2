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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (role) => {
    setFormData({ ...formData, role });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-3xl font-bold text-white mb-4">Create an Account</h2>
      <div className="flex justify-center space-x-8 mb-6">
        <div
          onClick={() => handleRoleChange('guest')}
          className={`role-card ${formData.role === 'guest' ? 'selected' : ''}`}
        >
          <Users size={40} className="mb-2 text-gray-300" />
          <p className="text-white">I am a Guest</p>
        </div>
        <div
          onClick={() => handleRoleChange('host')}
          className={`role-card ${formData.role === 'host' ? 'selected' : ''}`}
        >
          <Home size={40} className="mb-2 text-gray-300" />
          <p className="text-white">I am a Host</p>
        </div>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
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
            placeholder="Enter your last name"
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
      <button type="submit" className="submit-button">
        Create Account
      </button>
    </form>
  );
};

export default SignUpForm;
