import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add your form submission logic here
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition-all hover:bg-white/20"
        />
      </div>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition-all hover:bg-white/20"
        />
      </div>
      <button type="submit" className="w-full px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105 font-medium">
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;