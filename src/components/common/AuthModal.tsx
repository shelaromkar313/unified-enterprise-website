import React, { useState } from 'react';
import { Globe, X, ArrowLeft, CheckCircle2, Eye, EyeOff } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: (user: any) => void;
  initialMode?: 'login' | 'signup';
}

export default function AuthModal({
  isOpen,
  onClose,
  onLoginSuccess,
  initialMode = 'login',
}: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [step, setStep] = useState<'email' | 'password'>('email');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');

  if (!isOpen) return null;

  // Step 1: Email Next
  const handleEmailNext = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid corporate email address.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('password');
    }, 350);
  };

  // Step 2: Password Login
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!password || password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const user = {
        email,
        name: email.split('@')[0],
        token: 'ue_jwt_enterprise_auth_token_demo',
      };
      localStorage.setItem('ue_user', JSON.stringify(user));
      setAuthSuccess(true);
      if (onLoginSuccess) onLoginSuccess(user);
      setTimeout(() => {
        setAuthSuccess(false);
        onClose();
      }, 1000);
    }, 600);
  };

  // Sign up submit
  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid business email.');
      return;
    }
    if (!password || password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const user = {
        email,
        name: fullName || email.split('@')[0],
        company: company || 'Enterprise Client',
        token: 'ue_jwt_enterprise_auth_token_demo',
      };
      localStorage.setItem('ue_user', JSON.stringify(user));
      setAuthSuccess(true);
      if (onLoginSuccess) onLoginSuccess(user);
      setTimeout(() => {
        setAuthSuccess(false);
        onClose();
      }, 1000);
    }, 700);
  };

  const handleModalClose = () => {
    setErrorMessage('');
    setAuthSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative max-w-[450px] w-full bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Card Header: Company Logo & Top Utility Controls */}
        <div className="pt-5 pb-5 px-6 sm:px-8 relative border-b border-slate-100 flex flex-col items-center">
          
          {/* Top-Right: Language Selector + Close X Button */}
          <div className="absolute top-4 right-5 flex items-center gap-3">
            <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>US EN</span>
            </div>
            <button
              onClick={handleModalClose}
              className="p-1 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Company Logo replacing Cisco logo */}
          <div className="mt-2 mb-1">
            <img
              src="/brand/ue_logo_horizontal.jpg"
              alt="Unified Enterprise Solutions"
              className="h-11 sm:h-12 w-auto object-contain"
            />
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-8">
          {authSuccess ? (
            <div className="text-center py-6 space-y-3 animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {mode === 'login' ? 'Authentication Successful' : 'Account Created Successfully'}
              </h3>
              <p className="text-xs text-slate-600">
                Welcome to Unified Enterprise Portal. Logging you in...
              </p>
            </div>
          ) : mode === 'login' ? (
            
            /* =================== LOGIN VIEW =================== */
            <div className="space-y-5">
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-slate-900">Log in</h2>
                {step === 'password' && (
                  <button
                    type="button"
                    onClick={() => setStep('email')}
                    className="text-xs text-[#dc2626] hover:underline mt-1.5 inline-flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    <span>Change {email}</span>
                  </button>
                )}
              </div>

              {errorMessage && (
                <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600">
                  {errorMessage}
                </div>
              )}

              {step === 'email' ? (
                /* Step 1: Email */
                <form onSubmit={handleEmailNext} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-11 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] active:scale-[0.99] text-white text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    {isLoading ? <span>Verifying...</span> : <span>Next</span>}
                  </button>

                  <div className="space-y-2 pt-2 text-xs">
                    <div>
                      <a
                        href="#unlock"
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Account unlock instructions have been sent to your registered address.');
                        }}
                        className="text-[#dc2626] hover:underline"
                      >
                        Unlock account?
                      </a>
                    </div>
                    <div>
                      <a
                        href="#help"
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Enterprise Support Desk hotline: +91 9972457774 / support@unifiedenterprise.com');
                        }}
                        className="text-[#dc2626] hover:underline"
                      >
                        Help
                      </a>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-center text-xs text-slate-600 gap-1.5">
                    <span>Don't have an account?</span>
                    <button
                      type="button"
                      onClick={() => {
                        setMode('signup');
                        setErrorMessage('');
                      }}
                      className="text-[#dc2626] font-semibold hover:underline"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              ) : (
                /* Step 2: Password */
                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
                      >
                        {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        <span>{showPassword ? 'Hide' : 'Show'}</span>
                      </button>
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      autoFocus
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your corporate password"
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-11 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] active:scale-[0.99] text-white text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    {isLoading ? <span>Authenticating...</span> : <span>Log in</span>}
                  </button>

                  <div className="space-y-2 pt-2 text-xs">
                    <div>
                      <a
                        href="#forgot"
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Password reset link has been dispatched to your email.');
                        }}
                        className="text-[#dc2626] hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          ) : (
            
            /* =================== SIGN UP VIEW =================== */
            <div className="space-y-4">
              <div className="text-center mb-3">
                <h2 className="text-2xl font-bold text-slate-900">Sign up</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Create your Unified Enterprise corporate account
                </p>
              </div>

              {errorMessage && (
                <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSignUpSubmit} className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Vikram Singhal"
                    className="w-full h-10 px-3.5 rounded-lg border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#dc2626] transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="v.singhal@enterprise.com"
                    className="w-full h-10 px-3.5 rounded-lg border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#dc2626] transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">Company Name</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Apex Global Technologies"
                    className="w-full h-10 px-3.5 rounded-lg border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#dc2626] transition-all"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-slate-800">Create Password *</label>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
                    >
                      {showPassword ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      <span>{showPassword ? 'Hide' : 'Show'}</span>
                    </button>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    className="w-full h-10 px-3.5 rounded-lg border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#dc2626] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] active:scale-[0.99] text-white text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2 mt-2"
                >
                  {isLoading ? <span>Creating Account...</span> : <span>Register & Continue</span>}
                </button>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-center text-xs text-slate-600 gap-1.5">
                  <span>Already have an account?</span>
                  <button
                    type="button"
                    onClick={() => {
                      setMode('login');
                      setStep('email');
                      setErrorMessage('');
                    }}
                    className="text-[#dc2626] font-semibold hover:underline"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Cisco Footer Links */}
        <div className="bg-slate-50/70 border-t border-slate-100 py-3 px-6 text-center text-[11px] text-slate-500 flex flex-wrap items-center justify-center gap-3">
          <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Enterprise confidentiality & ISO data protection guaranteed.'); }} className="hover:text-slate-800">
            Privacy
          </a>
          <span>•</span>
          <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms of Service for enterprise portal access.'); }} className="hover:text-slate-800">
            Terms & Conditions
          </a>
          <span>•</span>
          <a href="#cookies" onClick={(e) => { e.preventDefault(); alert('Secure authorization session tokens.'); }} className="hover:text-slate-800">
            Cookies
          </a>
        </div>
      </div>
    </div>
  );
}
