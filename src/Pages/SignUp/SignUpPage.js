import React from 'react';
import { ArrowLeft } from 'lucide-react';
import SignUpForm from './SignupForm';
import './SignUp.css';

const SignUpPage = () => {
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

        {/* Signup Form Component */}
        <div className="max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-gray-300 mb-6">
              Join AppiSpot to discover and book amazing venues
            </p>
            <SignUpForm />
            <div className="mt-6 text-center">
              <p className="text-gray-300">
                Already have an account?{' '}
                <a href="/signin" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;