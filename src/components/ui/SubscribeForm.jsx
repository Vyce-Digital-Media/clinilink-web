import { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import HoverButton from './HoverButton';

export default function SubscribeForm({
  buttonClassName = "px-8 py-4 bg-slate-900 text-white font-bold text-sm tracking-wide uppercase hover:bg-blue-600 transition-all duration-500 inline-flex items-center justify-center group relative overflow-hidden",
  inputClassName = "flex-1 w-full px-5 py-4 bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm font-medium",
  buttonText = "Subscribe for Updates",
  containerClassName = "w-full max-w-lg",
  showIcon = true
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    try {
      // We use Web3Forms to send the email automatically in the background
      // You will need to get an access key from https://web3forms.com/
      // by entering pkshah@clinilinkhealth.com on their website
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8513ca49-8367-4a89-8f7c-044a79e55f7f", // Replace with your actual Web3Forms access key
          subject: "New Subscription Request",
          from_name: "Clinilink Website",
          message: `${email} has subscribed from the resources/about us page.`
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-3 p-4 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-100 font-medium animate-in fade-in zoom-in duration-300 justify-center ${containerClassName}`}>
        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
        Thanks for subscribing! Check your inbox for confirmation.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col items-start gap-2 ${containerClassName}`}>
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          placeholder="Enter your email address"
          disabled={status === 'loading'}
          className={`disabled:opacity-50 ${inputClassName}`}
        />
        <HoverButton
          type="submit"
          disabled={status === 'loading'}
          className={`shrink-0 disabled:opacity-70 ${buttonClassName} ${status === 'loading' ? 'cursor-not-allowed' : ''}`}
        >
          <span className="flex items-center gap-3 relative z-10">
            {status === 'loading' ? (
              <>
                Subscribing... <Loader2 size={16} className="animate-spin" />
              </>
            ) : (
              <>
                {buttonText}
                {showIcon && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />}
              </>
            )}
          </span>
        </HoverButton>
      </div>
      {status === 'error' && (
        <p className="text-red-500 text-sm font-medium mt-1">{errorMsg}</p>
      )}
    </form>
  );
}
