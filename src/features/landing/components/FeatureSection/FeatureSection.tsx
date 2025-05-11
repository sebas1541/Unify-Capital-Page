import React, { useRef } from 'react';
import { Container } from '../../../../common/components/Container/Container';
import { DollarSign, Clock, Shield, Car, CreditCard, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../../../../common/hooks/useIntersectionObserver';
import { cn } from '../../../../utils/cn';

export const FeatureSection: React.FC = () => {
  const imageRefs = Array.from({ length: 3 }, () => useRef<HTMLDivElement>(null));
  const gridRefs = Array.from({ length: 3 }, () => useRef<HTMLDivElement>(null));
  
  const imageEntries = imageRefs.map(ref => useIntersectionObserver(ref, { threshold: 0.1 }));
  const gridEntries = gridRefs.map(ref => useIntersectionObserver(ref, { threshold: 0.1 }));

  return (
    <section id="features" className="py-32 bg-white">
      <Container>
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold text-[#1c243c] mb-8">
            The Unify Capital Difference
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing car financing in Florida with lightning-fast down payment assistance and a seamless experience.
          </p>
        </div>
        
        <div className="space-y-48">
          {/* Fast Funding Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-3 mb-6">
                <Clock className="h-8 w-8 text-[#489094]" />
                <span className="text-[#489094] text-xl font-medium">Fast Funding</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-[#1c243c] mb-8">
                Hours, not days.
                <br />
                That's our promise.
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get your down payment funded in hours with our streamlined process. No more waiting for days or weeks to get behind the wheel of your dream car.
              </p>
            </div>
            <div 
              ref={imageRefs[0]}
              className={cn(
                "relative h-[500px] rounded-3xl overflow-hidden transition-all duration-1000",
                !!imageEntries[0]?.isIntersecting 
                  ? "opacity-100" 
                  : "opacity-0"
              )}
            >
              <img 
                src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg"
                alt="Fast funding process"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Flexible Terms Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div 
              ref={imageRefs[1]}
              className={cn(
                "order-2 lg:order-1 relative h-[500px] rounded-3xl overflow-hidden transition-all duration-1000",
                !!imageEntries[1]?.isIntersecting 
                  ? "opacity-100" 
                  : "opacity-0"
              )}
            >
              <img 
                src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg"
                alt="Flexible payment terms"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center space-x-3 mb-6">
                <DollarSign className="h-8 w-8 text-[#489094]" />
                <span className="text-[#489094] text-xl font-medium">Flexible Terms</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-[#1c243c] mb-8">
                Your loan,
                <br />
                your way.
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Choose loan amounts from $1,000 to $5,000 with flexible 2-8 week repayment options that fit your budget perfectly.
              </p>
            </div>
          </div>

          {/* Direct to Dealer Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-3 mb-6">
                <Car className="h-8 w-8 text-[#489094]" />
                <span className="text-[#489094] text-xl font-medium">Direct to Dealer</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-[#1c243c] mb-8">
                Seamless dealer
                <br />
                payments.
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                We pay the dealership directly—no extra steps, no hassle. Just a smooth, straightforward process to get you in your new car faster.
              </p>
            </div>
            <div 
              ref={imageRefs[2]}
              className={cn(
                "relative h-[500px] rounded-3xl overflow-hidden transition-all duration-1000",
                !!imageEntries[2]?.isIntersecting 
                  ? "opacity-100" 
                  : "opacity-0"
              )}
            >
              <img 
                src="https://images.unsplash.com/photo-1574023240744-64c47c8c0676?q=80&w=5340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dealership handshake"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: CheckCircle,
                title: "Simple Application",
                description: "Complete your application in just 5 minutes with minimal documentation required.",
                ref: gridRefs[0],
                isVisible: !!gridEntries[0]?.isIntersecting
              },
              {
                icon: Shield,
                title: "Secure Process",
                description: "Your information is protected with bank-level security and encryption.",
                ref: gridRefs[1],
                isVisible: !!gridEntries[1]?.isIntersecting
              },
              {
                icon: CreditCard,
                title: "No Hidden Fees",
                description: "Transparent pricing with no prepayment penalties or surprise charges.",
                ref: gridRefs[2],
                isVisible: !!gridEntries[2]?.isIntersecting
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                ref={feature.ref}
                className={cn(
                  "bg-[#f8f9fa] p-12 rounded-3xl transition-all duration-1000",
                  feature.isVisible
                    ? "opacity-100"
                    : "opacity-0",
                  `delay-[${index * 200}ms]`
                )}
              >
                <feature.icon className="h-12 w-12 text-[#489094] mb-6" />
                <h4 className="text-2xl font-bold text-[#1c243c] mb-4">
                  {feature.title}
                </h4>
                <p className="text-lg text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};