import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Globe, ArrowRight, ArrowLeft, CheckCircle2, Eye, EyeOff, Lock, Mail, Building, User as UserIcon } from 'lucide-react';

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const initialMode = searchParams.get('mode') === 'signup' ? 'signup' : 'login';
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [step, setStep] = useState<'email' | 'password'>('email');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');

  useEffect(() => {
    if (searchParams.get('mode') === 'signup') {
      setMode('signup');
    }
  }, [searchParams]);

  // Handle Login Step 1: Email
  const handleEmailNext = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid business email address.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('password');
    }, 400);
  };

  // Handle Login Step 2: Password submission
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
      // Save authenticated user profile in localStorage
      localStorage.setItem('ue_user', JSON.stringify({
        email,
        name: email.split('@')[0],
        token: 'ue_jwt_enterprise_auth_token_demo'
      }));
      setAuthSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 1200);
    }, 700);
  };

  // Handle Sign Up Submission
  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid corporate email.');
      return;
    }
    if (!password || password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('ue_user', JSON.stringify({
        email,
        name: fullName || email.split('@')[0],
        company: company || 'Enterprise Client',
        token: 'ue_jwt_enterprise_auth_token_demo'
      }));
      setAuthSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 1200);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7] flex flex-col justify-between py-6 sm:py-12 px-3 sm:px-4 select-none">
      
      {/* Top spacing */}
      <div />

      {/* Center Cisco-Benchmarked Authentication Card */}
      <div className="max-w-[460px] w-full mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200/80 overflow-hidden">
        
        {/* Card Header with Language Selector & Company Logo */}
        <div className="pt-5 pb-5 sm:pt-6 sm:pb-6 px-4 sm:px-8 relative border-b border-slate-100 flex flex-col items-center">
          
          {/* Top-Right Language / Region Badge */}
          <div className="absolute top-4 right-4 sm:top-5 sm:right-6 flex items-center gap-1 text-[11px] sm:text-xs text-slate-500 font-medium">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span>US EN</span>
          </div>

          {/* Company Logo replacing Cisco logo */}
          <Link to="/" className="inline-block mt-2 mb-1 group" title="Return to Homepage">
            <img
              src="/brand/ue_logo_horizontal.jpg"
              alt="Unified Enterprise Solutions"
              className="h-10 sm:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-8 lg:p-10">
          
          {authSuccess ? (
            <div className="text-center py-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {mode === 'login' ? 'Authentication Successful' : 'Account Created Successfully'}
              </h3>
              <p className="text-xs text-slate-600">
                Welcome back to Unified Enterprise Portal. Redirecting to your dashboard...
              </p>
            </div>
          ) : mode === 'login' ? (
            
            /* =================== LOGIN FLOW =================== */
            <div className="space-y-6">
              
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Log in</h2>
                {step === 'password' && (
                  <button
                    type="button"
                    onClick={() => setStep('email')}
                    className="text-xs text-[#dc2626] hover:underline mt-2 inline-flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    <span>Change {email}</span>
                  </button>
                )}
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600">
                  {errorMessage}
                </div>
              )}

              {step === 'email' ? (
                /* Step 1: Email */
                <form onSubmit={handleEmailNext} className="space-y-5">
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
                      <Link to="/contact-us?item=customer-support" className="text-[#dc2626] hover:underline">
                        Help
                      </Link>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-center text-xs text-slate-600 gap-1.5">
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
                <form onSubmit={handlePasswordSubmit} className="space-y-5">
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
                    <div>
                      <Link to="/contact-us?item=customer-support" className="text-[#dc2626] hover:underline">
                        Help & Support
                      </Link>
                    </div>
                  </div>
                </form>
              )}

            </div>
          ) : (

            /* =================== SIGN UP FLOW =================== */
            <div className="space-y-5">
              <div className="text-center mb-5">
                <h2 className="text-2xl font-bold text-slate-900">Sign up</h2>
                <p className="text-xs text-slate-500 mt-1">
                  Create your Unified Enterprise corporate account
                </p>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSignUpSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">
                    Full Name *
                  </label>
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
                  <label className="text-xs font-bold text-slate-800 block mb-1">
                    Work Email *
                  </label>
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
                  <label className="text-xs font-bold text-slate-800 block mb-1">
                    Company Name
                  </label>
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
                    <label className="text-xs font-bold text-slate-800">
                      Create Password *
                    </label>
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

                <div className="pt-4 border-t border-slate-100 flex items-center justify-center text-xs text-slate-600 gap-1.5">
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
      </div>

      {/* Cisco-Benchmarked Authentication Page Footer */}
      <footer className="text-center text-xs text-slate-500 space-y-2 mt-8">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          <Link to="/contact-us" className="hover:text-slate-800 transition-colors">
            Contact support
          </Link>
          <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Unified Enterprise adheres to strict ISO/IEC & enterprise data confidentiality policies.'); }} className="hover:text-slate-800 transition-colors">
            Privacy
          </a>
          <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms & Conditions for enterprise procurement, equipment leasing, and AMC SLAs.'); }} className="hover:text-slate-800 transition-colors">
            Terms & Conditions
          </a>
          <a href="#cookies" onClick={(e) => { e.preventDefault(); alert('Session cookies are encrypted and utilized only for secure authorization tokens.'); }} className="hover:text-slate-800 transition-colors">
            Cookies
          </a>
          <a href="#trademarks" onClick={(e) => { e.preventDefault(); alert('Unified Enterprise and respective OEM trademarks are recognized and acknowledged.'); }} className="hover:text-slate-800 transition-colors">
            Trademarks
          </a>
        </div>
        <p className="text-[11px] text-slate-400">
          © {new Date().getFullYear()} Unified Enterprise Solutions. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
