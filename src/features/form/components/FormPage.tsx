import React, { useEffect, useState, useRef } from 'react';
import { Navbar } from '../../../common/components/Navbar/Navbar';
import { Footer } from '../../landing/components/Footer/Footer';
import { LoadingSpinner } from '../../../common/components/LoadingSpinner/LoadingSpinner';

export const FormPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [startFadeIn, setStartFadeIn] = useState(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      const fadeTimer = setTimeout(() => {
        setStartFadeIn(true);
      }, 50);
      return () => clearTimeout(fadeTimer);
    }, 1200);

    const existingScript = document.querySelector(`script[src="https://link.msgsndr.com/js/form_embed.js"]`);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      scriptRef.current = script;
      document.head.appendChild(script);
    }

    return () => {
      clearTimeout(loadingTimer);
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        try {
          document.head.removeChild(scriptRef.current);
        } catch (error) {
          console.warn('Failed to remove script:', error);
        }
      }
      scriptRef.current = null;
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner fullScreen size="lg" message="Loading Application Form..." />}
      <div className={`flex flex-col min-h-screen bg-gray-100 transition-opacity duration-500 opacity-0 ${startFadeIn ? 'opacity-100' : ''}`}>
        <Navbar />
        <main className="flex-grow container mx-auto px-4 max-w-7xl">
          <div className="pt-28 pb-16 bg-white rounded-xl shadow-lg my-8 md:my-12 px-4 md:px-6">
            <div className="iframe-wrapper min-h-[70vh]">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/3YyL0l6rAQociSaaZHMK"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '0px'
                }}
                id="inline-3YyL0l6rAQociSaaZHMK"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Formulario aplicación"
                data-layout-iframe-id="inline-3YyL0l6rAQociSaaZHMK"
                data-form-id="3YyL0l6rAQociSaaZHMK"
                title="Formulario aplicación"
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};