import React from 'react';
import SignInForm from './SignInForm';

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <div className="bg-white/10 p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-white mb-6">Sign In</h2>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;