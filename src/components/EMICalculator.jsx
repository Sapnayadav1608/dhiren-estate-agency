import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { agencyInfo } from '../data/agencyInfo';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(15000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);

  const calculateEMI = () => {
    const p = loanAmount;
    const r = interestRate / (12 * 100);
    const n = tenureYears * 12;
    if (r === 0) return p / n;
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const monthlyEMI = calculateEMI();
  const totalPayment = monthlyEMI * tenureYears * 12;
  const totalInterest = totalPayment - loanAmount;

  const formatCurrency = (val) => {
    if (val >= 10000000) {
      return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    } else if (val >= 100000) {
      return `₹ ${(val / 100000).toFixed(2)} Lakhs`;
    }
    return `₹ ${val.toLocaleString('en-IN')}`;
  };

  return (
    <section id="calculator" className="section-padding sec-grey">
      <div className="container">
        <div className="section-header">
          <div className="badge-gold">Financial Planning</div>
          <h2>Home Loan EMI Calculator</h2>
          <p>Estimate your monthly home loan installment and check loan eligibility instantly.</p>
        </div>

        <div className="calculator-container-card">
          {/* Sliders Side */}
          <div className="calc-sliders-side">
            <div className="slider-group">
              <div className="slider-label-row">
                <span>Loan Amount</span>
                <span className="slider-value-badge">{formatCurrency(loanAmount)}</span>
              </div>
              <input 
                type="range" 
                min="2000000" 
                max="50000000" 
                step="500000"
                value={loanAmount} 
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="range-slider"
              />
              <div className="slider-minmax-row">
                <span>₹ 20 Lakhs</span>
                <span>₹ 5.0 Cr</span>
              </div>
            </div>

            <div className="slider-group">
              <div className="slider-label-row">
                <span>Interest Rate (P.A.)</span>
                <span className="slider-value-badge">{interestRate} %</span>
              </div>
              <input 
                type="range" 
                min="7.5" 
                max="12.0" 
                step="0.1"
                value={interestRate} 
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="range-slider"
              />
              <div className="slider-minmax-row">
                <span>7.5%</span>
                <span>12.0%</span>
              </div>
            </div>

            <div className="slider-group">
              <div className="slider-label-row">
                <span>Loan Tenure</span>
                <span className="slider-value-badge">{tenureYears} Years</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="30" 
                step="1"
                value={tenureYears} 
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="range-slider"
              />
              <div className="slider-minmax-row">
                <span>5 Years</span>
                <span>30 Years</span>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="calc-summary-side">
            <div>
              <div className="summary-title-label">Estimated Monthly Installment</div>
              <div className="emi-amount-large">
                ₹ {monthlyEMI.toLocaleString('en-IN')} <span className="emi-unit">/ month</span>
              </div>

              <div className="summary-breakdown-list">
                <div className="breakdown-item">
                  <span>Principal Amount:</span>
                  <strong>{formatCurrency(loanAmount)}</strong>
                </div>
                <div className="breakdown-item">
                  <span>Total Interest Payable:</span>
                  <strong>{formatCurrency(totalInterest)}</strong>
                </div>
                <div className="breakdown-item highlight-row">
                  <span>Total Amount Payable:</span>
                  <strong className="text-gold-highlight">{formatCurrency(totalPayment)}</strong>
                </div>
              </div>
            </div>

            <a 
              href={`https://wa.me/${agencyInfo.whatsapp}?text=Hi%20Dhiren%20Estate%20Agency,%20I%20calculated%20an%20EMI%20of%20₹${monthlyEMI}%20for%20a%20loan%20of%20${formatCurrency(loanAmount)}.%20Please%20assist%20with%20bank%20loan%20approval.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-whatsapp btn-full-width"
            >
              <Calculator size={18} />
              <span>Get Bank Loan Assistance</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
