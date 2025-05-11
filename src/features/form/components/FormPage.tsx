import React, { useEffect, useState, useRef } from 'react';
import { Navbar } from '../../../common/components/Navbar/Navbar';
import { LoadingSpinner } from '../../../common/components/LoadingSpinner/LoadingSpinner';

export const FormPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeHeight, setIframeHeight] = useState(4540);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Ensure loading state shows for at least 1.5 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Adjust iframe height for mobile
    const updateIframeHeight = () => {
      const isMobile = window.innerWidth < 768;
      setIframeHeight(isMobile ? 6000 : 4540);
    };

    // Initial height check
    updateIframeHeight();

    // Listen for resize events
    window.addEventListener('resize', updateIframeHeight);

    // Check if script already exists
    const existingScript = document.querySelector(`script[src="https://link.msgsndr.com/js/form_embed.js"]`);
    
    if (!existingScript) {
      // Create and append the script element
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      
      // Store reference to the script
      scriptRef.current = script;
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      clearTimeout(loadingTimer);
      window.removeEventListener('resize', updateIframeHeight);
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
      {isLoading && <LoadingSpinner fullScreen size="lg" message="Loading..." />}
      <div className={`min-h-screen bg-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="pt-24 pb-16">
            <div className="iframe-wrapper" style={{ height: `${iframeHeight}px` }}>
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
                data-height={iframeHeight}
                data-layout-iframe-id="inline-3YyL0l6rAQociSaaZHMK"
                data-form-id="3YyL0l6rAQociSaaZHMK"
                title="Formulario aplicación"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};