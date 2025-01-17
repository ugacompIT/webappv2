import React, { useState } from 'react';
import { ArrowLeft, Users, Home } from 'lucide-react';
import SignInForm from './SignInForm';

const SignInPage = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-cyan-400 text-2xl font-bold">AppiSpot</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
          </a>
          <a
            href="/"
            className="flex items-center text-white hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </a>
        </div>

        {/* Sign In Form Component */}
        <div className="max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h1 className="text-3xl font-bold text-white mb-2">Sign In</h1>
            <p className="text-sm text-gray-300 mb-4">Select the appropriate User to sign in</p> 

            <div className="flex justify-center space-x-8 mb-6">
              <div
                onClick={() => handleRoleChange('guest')}
                className={`role-card ${selectedRole === 'guest' ? 'selected' : ''}`}
              >
                <Users size={40} className="mb-2 text-gray-300" />
                <p className="text-white">Guest</p>
              </div>
              <div
                onClick={() => handleRoleChange('host')}
                className={`role-card ${selectedRole === 'host' ? 'selected' : ''}`}
              >
                <Home size={40} className="mb-2 text-gray-300" />
                <p className="text-white">Host</p>
              </div>
            </div>

            <SignInForm selectedRole={selectedRole} /> 

            <div className="mt-6 text-center">
              <p className="text-gray-300">
                Do you want to create an account?{' '}
                <a
                  href="/signup"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;