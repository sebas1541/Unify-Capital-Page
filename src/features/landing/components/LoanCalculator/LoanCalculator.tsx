import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../../../../utils/cn';
import { useIntersectionObserver } from '../../../../common/hooks/useIntersectionObserver';

interface LoanCalculatorProps {
  className?: string;
}

export const LoanCalculator: React.FC<LoanCalculatorProps> = ({ className }) => {
  const [loanAmount, setLoanAmount] = useState(2500);
  const [loanTerm, setLoanTerm] = useState(4); // weeks
  
  const calculatorRef = useRef<HTMLElement>(null);
  const entry = useIntersectionObserver(calculatorRef, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;
  
  // Calculate payments
  const initialPayment = (loanAmount / loanTerm) + 75;
  const numberOfRegularPayments = loanTerm - 1;
  const regularPaymentAmount = (loanAmount / loanTerm) + 25;
  const totalAmount = initialPayment + (regularPaymentAmount * numberOfRegularPayments);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div 
      ref={calculatorRef}
      className={cn(
        "bg-white rounded-3xl shadow-xl p-6 md:p-8 transition-all duration-1000",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <h3 className="text-2xl font-semibold text-[#1c243c] mb-6">Loan Calculator</h3>
      
      <div className="space-y-6">
        {/* Loan Amount */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">Loan Amount</label>
            <span className="text-sm font-semibold text-[#489094]">{formatCurrency(loanAmount)}</span>
          </div>
          <input
            type="range"
            min="1000"
            max="5000"
            step="100"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#489094]"
          />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">$1,000</span>
            <span className="text-xs text-gray-500">$5,000</span>
          </div>
        </div>
        
        {/* Loan Term */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">Loan Term</label>
            <span className="text-sm font-semibold text-[#489094]">{loanTerm} weeks</span>
          </div>
          <input
            type="range"
            min="2"
            max="8"
            step="1"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#489094]"
          />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">2 weeks</span>
            <span className="text-xs text-gray-500">8 weeks</span>
          </div>
        </div>
        
        {/* Result */}
        <div className="bg-gray-50 rounded-2xl p-6 mt-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm text-gray-600 mb-1">Payment Structure</h4>
              <p className="text-lg text-[#1c243c]">
                An initial payment of {formatCurrency(initialPayment)} and {numberOfRegularPayments} payments of {formatCurrency(regularPaymentAmount)}
              </p>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-sm text-gray-600 mb-1">Total Amount to be Paid</h4>
              <p className="text-3xl font-bold text-[#1c243c]">
                {formatCurrency(totalAmount)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};