// src/pages/Auth/RegisterPage.jsx
// Vortek — Register Page
// Route: /register
// Imports: auth.css (all ax-auth-* styles)
// Dependencies: lucide-react, react-router-dom, AuthContext → authService.register()

import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Zap,
  ShieldCheck,
  Star,
} from 'lucide-react';
import '../../styles/auth.css';

// ─── Brand panel features ──────────────────────────────────────────────────────
const BRAND_FEATURES = [
  {
    Icon: Zap,
    title: 'Lightning-Fast Delivery',
    desc: 'Same-day delivery across 50+ cities.',
  },
  {
    Icon: ShieldCheck,
    title: '2-Year Warranty',
    desc: 'Every product backed by our guarantee.',
  },
  {
    Icon: Star,
    title: 'Premium Selection',
    desc: '10,000+ electronics from top brands.',
  },
];

// ─── Google SVG ───────────────────────────────────────────────────────────────
const GoogleIcon = () => (
  <svg className="ax-auth-social-icon" viewBox="0 0 18 18" fill="none">
    <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
    <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
  </svg>
);

// ─── Password strength scorer ──────────────────────────────────────────────────
function getStrength(pwd) {
  if (!pwd) return { score: 0, label: '', level: '' };
  let score = 0;
  if (pwd.length >= 8)   score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  const map = {
    1: { label: 'Weak',   level: 'weak'   },
    2: { label: 'Fair',   level: 'fair'   },
    3: { label: 'Good',   level: 'good'   },
    4: { label: 'Strong', level: 'strong' },
  };
  return { score, ...( map[score] || { label: '', level: '' }) };
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName:  '',
    email:     '',
    phone:     '',
    password:  '',
    confirm:   '',
    terms:     false,
  });
  const [showPwd,     setShowPwd]     = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors,      setErrors]      = useState({});
  const [apiError,    setApiError]    = useState('');
  const [loading,     setLoading]     = useState(false);
  const [success,     setSuccess]     = useState(false);

  const strength = useMemo(() => getStrength(form.password), [form.password]);

  // ── Field change ────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    setApiError('');
  };

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = 'First name is required.';
    if (!form.lastName.trim())  errs.lastName  = 'Last name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email address.';
    }
    if (form.phone && !/^[6-9]\d{9}$/.test(form.phone.replace(/\s+/g, ''))) {
      errs.phone = 'Enter a valid 10-digit phone number.';
    }
    if (!form.password) {
      errs.password = 'Password is required.';
    } else if (form.password.length < 8) {
      errs.password = 'Password must be at least 8 characters.';
    } else if (strength.score < 2) {
      errs.password = 'Password is too weak. Add numbers or symbols.';
    }
    if (!form.confirm) {
      errs.confirm = 'Please confirm your password.';
    } else if (form.confirm !== form.password) {
      errs.confirm = 'Passwords do not match.';
    }
    if (!form.terms) {
      errs.terms = 'You must accept the Terms & Privacy Policy.';
    }
    return errs;
  };

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    try {
      // TODO: replace with → await authService.register({ name, email, password })
      await new Promise((r) => setTimeout(r, 1600)); // Simulated delay
      setSuccess(true);
      setTimeout(() => navigate('login'), 2000);
    } catch (err) {
      setApiError(err?.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // ── Input class helper ──────────────────────────────────────────────────────
  const ic = (field) =>
    `ax-auth-input ax-auth-input-padded-right${errors[field] ? ' ax-auth-input-error' : ''}`;

  // ── Strength bar classes ─────────────────────────────────────────────────────
  const barClass = (index) => {
    const base = 'ax-auth-strength-bar';
    if (!strength.score || index > strength.score) return base;
    return `${base} active-${strength.level}`;
  };

  return (
    <div className="ax-auth-page">

      {/* ── Brand Panel ──────────────────────────────────────── */}
      <div className="ax-auth-brand">
        <div className="ax-auth-brand-ring" aria-hidden="true" />

        <div className="ax-auth-brand-top">
          <Link to="/" className="ax-auth-brand-logo">
            <span className="ax-auth-brand-logo-name">VORTEK</span>
            <span className="ax-auth-brand-logo-dot" />
          </Link>
        </div>

        <div className="ax-auth-brand-center">
          <h2 className="ax-auth-brand-tagline">
            Your Next-Gen<br />
            <em>Electronics Store.</em>
          </h2>
          <p className="ax-auth-brand-desc">
            Create a free account and unlock exclusive member prices,
            express checkout, and order tracking.
          </p>

          <div className="ax-auth-brand-features">
            {BRAND_FEATURES.map(({ Icon, title, desc }) => (
              <div className="ax-auth-brand-feature" key={title}>
                <div className="ax-auth-brand-feature-icon">
                  <Icon size={16} />
                </div>
                <div className="ax-auth-brand-feature-text">
                  <strong>{title}</strong>
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ax-auth-brand-bottom">
          © {new Date().getFullYear()} Vortek Electronics Pvt. Ltd.
        </div>
      </div>

      {/* ── Form Panel ───────────────────────────────────────── */}
      <div className="ax-auth-form-panel">
        <div className="ax-auth-form-inner">

          <div className="ax-auth-form-heading">
            <p className="ax-auth-form-eyebrow">Get started — it's free</p>
            <h1 className="ax-auth-form-title">Create your account</h1>
            <p className="ax-auth-form-sub">
              Already have an account?{' '}
              <Link to="login" className="ax-auth-switch-link">Sign in</Link>
            </p>
          </div>

          {/* Success */}
          {success && (
            <div className="ax-auth-alert ax-auth-alert-success" role="status">
              <CheckCircle2 className="ax-auth-alert-icon" size={16} />
              Account created! Redirecting you to sign in…
            </div>
          )}

          {/* API Error */}
          {apiError && (
            <div className="ax-auth-alert ax-auth-alert-error" role="alert">
              <AlertCircle className="ax-auth-alert-icon" size={16} />
              {apiError}
            </div>
          )}

          <form className="ax-auth-form" onSubmit={handleSubmit} noValidate>

            {/* First name + Last name */}
            <div className="ax-auth-form-row">
              <div className="ax-auth-field">
                <label className="ax-auth-label" htmlFor="reg-first">First Name</label>
                <div className="ax-auth-input-wrap">
                  <span className="ax-auth-input-icon"><User size={16} /></span>
                  <input
                    id="reg-first"
                    className={ic('firstName')}
                    type="text"
                    name="firstName"
                    placeholder="Arjun"
                    value={form.firstName}
                    onChange={handleChange}
                    autoComplete="given-name"
                    aria-invalid={!!errors.firstName}
                  />
                </div>
                {errors.firstName && (
                  <span className="ax-auth-field-error">
                    <AlertCircle size={12} /> {errors.firstName}
                  </span>
                )}
              </div>

              <div className="ax-auth-field">
                <label className="ax-auth-label" htmlFor="reg-last">Last Name</label>
                <div className="ax-auth-input-wrap">
                  <span className="ax-auth-input-icon"><User size={16} /></span>
                  <input
                    id="reg-last"
                    className={ic('lastName')}
                    type="text"
                    name="lastName"
                    placeholder="Sharma"
                    value={form.lastName}
                    onChange={handleChange}
                    autoComplete="family-name"
                    aria-invalid={!!errors.lastName}
                  />
                </div>
                {errors.lastName && (
                  <span className="ax-auth-field-error">
                    <AlertCircle size={12} /> {errors.lastName}
                  </span>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="ax-auth-field">
              <label className="ax-auth-label" htmlFor="reg-email">Email Address</label>
              <div className="ax-auth-input-wrap">
                <span className="ax-auth-input-icon"><Mail size={16} /></span>
                <input
                  id="reg-email"
                  className={ic('email')}
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                />
              </div>
              {errors.email && (
                <span className="ax-auth-field-error">
                  <AlertCircle size={12} /> {errors.email}
                </span>
              )}
            </div>

            {/* Phone (optional) */}
            <div className="ax-auth-field">
              <label className="ax-auth-label" htmlFor="reg-phone">
                Phone Number <span style={{ fontWeight: 400, textTransform: 'none', fontSize: '11px' }}>(optional)</span>
              </label>
              <div className="ax-auth-input-wrap">
                <span className="ax-auth-input-icon"><Phone size={16} /></span>
                <input
                  id="reg-phone"
                  className={ic('phone')}
                  type="tel"
                  name="phone"
                  placeholder="98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                />
              </div>
              {errors.phone && (
                <span className="ax-auth-field-error">
                  <AlertCircle size={12} /> {errors.phone}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="ax-auth-field">
              <label className="ax-auth-label" htmlFor="reg-password">Password</label>
              <div className="ax-auth-input-wrap">
                <span className="ax-auth-input-icon"><Lock size={16} /></span>
                <input
                  id="reg-password"
                  className={ic('password')}
                  type={showPwd ? 'text' : 'password'}
                  name="password"
                  placeholder="Min. 8 characters"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  aria-invalid={!!errors.password}
                />
                <button
                  type="button"
                  className="ax-auth-input-toggle"
                  onClick={() => setShowPwd((v) => !v)}
                  aria-label={showPwd ? 'Hide password' : 'Show password'}
                >
                  {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              {/* Strength meter */}
              {form.password && (
                <div className="ax-auth-password-strength">
                  <div className="ax-auth-strength-bars" aria-hidden="true">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={barClass(i)} />
                    ))}
                  </div>
                  <span className="ax-auth-strength-label">
                    {strength.label ? `Password strength: ${strength.label}` : ''}
                  </span>
                </div>
              )}

              {errors.password && (
                <span className="ax-auth-field-error">
                  <AlertCircle size={12} /> {errors.password}
                </span>
              )}
            </div>

            {/* Confirm password */}
            <div className="ax-auth-field">
              <label className="ax-auth-label" htmlFor="reg-confirm">Confirm Password</label>
              <div className="ax-auth-input-wrap">
                <span className="ax-auth-input-icon"><Lock size={16} /></span>
                <input
                  id="reg-confirm"
                  className={`${ic('confirm')}${form.confirm && form.confirm === form.password ? ' ax-auth-input-valid' : ''}`}
                  type={showConfirm ? 'text' : 'password'}
                  name="confirm"
                  placeholder="Re-enter your password"
                  value={form.confirm}
                  onChange={handleChange}
                  autoComplete="new-password"
                  aria-invalid={!!errors.confirm}
                />
                <button
                  type="button"
                  className="ax-auth-input-toggle"
                  onClick={() => setShowConfirm((v) => !v)}
                  aria-label={showConfirm ? 'Hide confirm password' : 'Show confirm password'}
                >
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.confirm && (
                <span className="ax-auth-field-error">
                  <AlertCircle size={12} /> {errors.confirm}
                </span>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="ax-auth-field">
              <label className="ax-auth-checkbox-wrap">
                <input
                  className="ax-auth-checkbox"
                  type="checkbox"
                  name="terms"
                  checked={form.terms}
                  onChange={handleChange}
                  aria-invalid={!!errors.terms}
                />
                <span className="ax-auth-checkbox-label">
                  I agree to Vortek's{' '}
                  <Link to="/terms" target="_blank" rel="noreferrer">Terms of Service</Link>
                  {' '}and{' '}
                  <Link to="/privacy" target="_blank" rel="noreferrer">Privacy Policy</Link>
                </span>
              </label>
              {errors.terms && (
                <span className="ax-auth-field-error" style={{ marginTop: 2 }}>
                  <AlertCircle size={12} /> {errors.terms}
                </span>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="ax-auth-submit"
              disabled={loading || success}
              aria-busy={loading}
            >
              {loading ? (
                <span className="ax-auth-submit-spinner" aria-hidden="true" />
              ) : success ? (
                <>
                  <CheckCircle2 size={18} style={{ position: 'relative', zIndex: 1 }} />
                  <span>Account Created!</span>
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight size={18} style={{ position: 'relative', zIndex: 1 }} />
                </>
              )}
            </button>

            {/* Divider */}
            <div className="ax-auth-divider">
              <div className="ax-auth-divider-line" />
              <span className="ax-auth-divider-text">or sign up with</span>
              <div className="ax-auth-divider-line" />
            </div>

            {/* Social */}
            <div className="ax-auth-socials">
              <button type="button" className="ax-auth-social-btn">
                <GoogleIcon />
                Google
              </button>
              <button type="button" className="ax-auth-social-btn">
                <svg className="ax-auth-social-icon" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M12.525 1c.062.872-.246 1.73-.774 2.374-.528.644-1.376 1.14-2.19 1.077-.084-.83.282-1.713.78-2.306C10.866 1.5 11.786 1.04 12.525 1zm2.63 11.578c.352-.71.6-1.47.738-2.248-.97-.37-1.79-1.098-2.207-2.093a3.46 3.46 0 01.124-3.07c-.96-1.04-2.3-1.64-3.63-1.612-1.01.02-1.88.38-2.562.38-.696 0-1.59-.37-2.562-.35-1.976.04-3.8 1.178-4.808 2.98-2.066 3.594-.53 8.924 1.464 11.848.994 1.42 2.17 3.01 3.71 2.95 1.49-.06 2.05-.95 3.842-.95 1.79 0 2.302.95 3.862.92 1.604-.03 2.61-1.44 3.59-2.87.71-1.02 1.22-2.08 1.55-3.14a4.15 4.15 0 01-2.612-2.784z"/>
                </svg>
                Apple
              </button>
            </div>
          </form>

          <p className="ax-auth-switch">
            Already have an account?{' '}
            <Link to="login" className="ax-auth-switch-link">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}