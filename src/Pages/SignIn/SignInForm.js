import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

const SignInForm = ({ selectedRole }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Include selectedRole in the form data
      const formDataWithRole = { ...formData, role: selectedRole }; 

      // Send the form data to the server (replace with your actual API endpoint)
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formDataWithRole),
      });

      if (!response.ok) {
        throw new Error('Login failed.'); 
      }

      const data = await response.json(); 

      // Handle successful login (e.g., redirect to dashboard)
      // ...

    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors (e.g., display an error message to the user)
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
          required 
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
          required 
        />
      </div>
      <button type="submit" className="w-full px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105 font-medium">
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;