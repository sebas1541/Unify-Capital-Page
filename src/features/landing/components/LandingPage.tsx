import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../../common/components/Navbar/Navbar';
import { Hero } from '../../../common/components/Hero/Hero';
import { FeatureSection } from './FeatureSection/FeatureSection';
import { Container } from '../../../common/components/Container/Container';
import { LoanCalculator } from './LoanCalculator/LoanCalculator';
import { TestimonialSection } from './TestimonialSection/TestimonialSection';
import { Footer } from './Footer/Footer';
import { Button } from '../../../common/components/Button/Button';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate('/apply');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <Hero 
        title="Your Fast Track to Car Ownership"
        subtitle="At Unify Capital, we help you bridge the gap between wanting a car and owning one—fast, easy, and stress-free."
        ctaText="Get My Quote"
        onCtaClick={handleApply}
        backgroundImage="https://images.unsplash.com/photo-1670450268251-9d7afb07a74a?q=80&w=4879&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      
      <section className="py-32 bg-[#f8f9fa]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-[#1c243c] leading-tight mb-8">
                Down payment assistance.
                <br />
                In hours, not days.
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                We specialize in auto loan down payment assistance in Florida, offering quick car loans to help you secure the vehicle you want—without depleting your savings.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      <FeatureSection />
      
      <section className="py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <p className="text-6xl md:text-8xl font-bold text-[#489094] mb-6">5min</p>
              <p className="text-xl text-gray-600">Quick application process that won't affect your credit score</p>
            </div>
            <div>
              <p className="text-6xl md:text-8xl font-bold text-[#489094] mb-6">$5K</p>
              <p className="text-xl text-gray-600">Maximum down payment assistance available for qualified buyers</p>
            </div>
            <div>
              <p className="text-6xl md:text-8xl font-bold text-[#489094] mb-6">24h</p>
              <p className="text-xl text-gray-600">Get your funds within 24 hours of approval</p>
            </div>
          </div>
        </Container>
      </section>
      
      <section id="calculator" className="py-32 bg-[#f8f9fa]">
        <Container>
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold text-[#1c243c] mb-8">
              Calculate Your Payment
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Choose your loan amount between $1,000 – $5,000 and select your repayment term from 2 – 8 weeks.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <LoanCalculator />
          </div>
        </Container>
      </section>
      
      <section id="features" className="py-32 bg-white">
        <Container>
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold text-[#1c243c] mb-8">
              Three Simple Steps
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Your fast track to funding is just three easy steps away.
            </p>
          </div>
          
          <div className="space-y-32">
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#489094] text-2xl mb-4">Step 01</p>
                <h3 className="text-4xl md:text-6xl font-bold text-[#1c243c] mb-8">
                  Get a Free Quote
                </h3>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                  Tell us how much you need. Our streamlined process takes just minutes and won't impact your credit score.
                </p>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=5340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Person using laptop"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1686771416282-3888ddaf249b?q=80&w=5342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Quick approval process"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-[#489094] text-2xl mb-4">Step 02</p>
                <h3 className="text-4xl md:text-6xl font-bold text-[#1c243c] mb-8">
                  Instant Decision
                </h3>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                  No long waits or endless paperwork. Our smart system provides quick decisions so you can move forward fast.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#489094] text-2xl mb-4">Step 03</p>
                <h3 className="text-4xl md:text-6xl font-bold text-[#1c243c] mb-8">
                  Get Funding Fast
                </h3>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                  Once approved, we send funds directly to the dealer. You get the keys and drive away in your new car.
                </p>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7144186/pexels-photo-7144186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Happy car owner"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      <section id="testimonials" className="py-32 bg-[#f8f9fa]">
        <TestimonialSection />
      </section>
      
      <section className="py-32 bg-gradient-to-br from-[#1c243c] via-[#2a3654] to-[#489094] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#489094]/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1c243c]/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
                Driving dreams
                <br />
                forward.
              </h2>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12">
                We've been revolutionizing the car-buying experience in Florida. Our mission is simple: remove financial barriers and help you get behind the wheel of your dream car faster.
              </p>
              <Button size="lg" className="bg-white text-[#1c243c] hover:bg-white/90" onClick={handleApply}>
                Get Started Today
              </Button>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-[#489094] p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-transform">
                  <p className="text-4xl font-bold text-white mb-2">13+</p>
                  <p className="text-xl text-white/90">Years Serving Florida</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-transform">
                  <p className="text-4xl font-bold text-[#1c243c] mb-2">10K+</p>
                  <p className="text-xl text-gray-600">Dreams Funded</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-transform">
                  <p className="text-4xl font-bold text-[#1c243c] mb-2">98%</p>
                  <p className="text-xl text-gray-600">Customer Satisfaction</p>
                </div>
                <div className="bg-[#489094] p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-transform">
                  <p className="text-4xl font-bold text-white mb-2">4.9</p>
                  <p className="text-xl text-white/90">Star Rating</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      <Footer />
    </div>
  );
};