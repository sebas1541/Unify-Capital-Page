import React, { useRef } from 'react';
import { Container } from '../../../../common/components/Container/Container';
import { useIntersectionObserver } from '../../../../common/hooks/useIntersectionObserver';
import { cn } from '../../../../utils/cn';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Unify Capital made it possible for me to get my dream car without depleting my savings. The process was incredibly simple and fast.",
    author: "Michael Thompson",
    role: "Florida Resident",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120",
  },
  {
    quote: "I needed a car for work but was short on the down payment. Unify Capital helped me bridge that gap in less than 24 hours!",
    author: "Sarah Johnson",
    role: "Small Business Owner",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120",
  },
  {
    quote: "The direct payment to the dealership made everything so smooth. I was driving my new car the very next day.",
    author: "David Chen",
    role: "Tampa Resident",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120",
  },
];

export const TestimonialSection: React.FC = () => {
  const testimonialRefs = testimonials.map(() => useRef<HTMLDivElement>(null));
  const entries = testimonialRefs.map(ref => 
    useIntersectionObserver(ref, { threshold: 0.1 })
  );

  return (
    <section className="py-20 bg-[#f8f9fa]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c243c] mb-4">
            Trusted by Floridians
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who are already driving their dream cars thanks to Unify Capital's down payment assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              ref={testimonialRefs[index]}
              className={cn(
                "bg-white rounded-3xl p-6 shadow-sm transition-all duration-1000",
                !!entries[index]?.isIntersecting
                  ? "opacity-100"
                  : "opacity-0",
                `delay-[${index * 200}ms]`
              )}
            >
              <div className="flex items-center space-x-1 text-[#489094] mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-semibold text-[#1c243c]">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};