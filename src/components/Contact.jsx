 
import   { useState, useEffect } from 'react';
import { FiMail, FiPhone,   FiCopy, FiDownload } from 'react-icons/fi';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'sudarsantm10@gmail.com';
  const phone = '6381627551';  

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('Failed to copy. Please copy manually.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-12 px-6 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-white">
      <div className="max-w-md mx-auto w-full">
        <h1 id='contact'
          className={`text-3xl sm:text-4xl font-bold text-center text-slate-100 mb-10
                     transform transition-opacity duration-700 ease-out
                     ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Contact Information 
        </h1>

        <div className="space-y-6">
          
          <div
            className={`
              p-5 bg-slate-800/80 rounded-lg shadow-lg border border-slate-700/60
              transform transition-all duration-500 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
            `}
            style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FiMail className="h-6 w-6 text-sky-400 mr-3" />
                <a
                  href={`mailto:${email}`}
                  className="text-lg text-slate-200 hover:text-sky-300 transition-colors"
                >
                  {email}
                </a>
              </div>
              <button
                onClick={() => handleCopy(email, 'email')}
                title="Copy Email"
                className="p-2 text-xs bg-sky-600 hover:bg-sky-500 rounded-md text-white transition-colors flex items-center"
              >
                <FiCopy className="h-4 w-4" />
                <span className="ml-1.5 sr-only sm:not-sr-only">{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Phone Section */}
          <div
            className={`
              p-5 bg-slate-800/80 rounded-lg shadow-lg border border-slate-700/60
              transform transition-all duration-500 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
            `}
            style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FiPhone className="h-6 w-6 text-emerald-400 mr-3" />
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="text-lg text-slate-200 hover:text-emerald-300 transition-colors"
                >
                  {phone}
                </a>
              </div>
              <button
                onClick={() => handleCopy(phone, 'phone')}
                title="Copy Phone Number"
                className="p-2 text-xs bg-emerald-600 hover:bg-emerald-500 rounded-md text-white transition-colors flex items-center"
              >
                <FiCopy className="h-4 w-4" />
                <span className="ml-1.5 sr-only sm:not-sr-only">{copiedPhone ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <a
            href={`sudarsan-portfolio.pdf`}  
            download
             
            className="
              inline-flex items-center justify-center
              px-8 py-3 border border-transparent
              text-lg font-semibold rounded-lg shadow-lg
              text-white bg-gradient-to-r from-purple-600 to-indigo-600
              hover:from-purple-700 hover:to-indigo-700
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-indigo-500
              transform transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl group w-full sm:w-auto
            "
          >
            <FiDownload className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:rotate-[-12deg]" />
            Download Resume
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;