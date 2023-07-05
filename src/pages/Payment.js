import React from 'react';
import "./Payment.css";
export default function PaymentForm() {
  return (
    <div>
      <h6 className="payment-form-heading">Payment method</h6>
      <div className="payment-form">
        <div className="form-row">
          <label htmlFor="cardName">Name on card</label>
          <input
            type="text"
            id="cardName"
            className="payment-input"
            autoComplete="cc-name"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="cardNumber">Card number</label>
          <input
            type="text"
            id="cardNumber"
            className="payment-input"
            autoComplete="cc-number"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="expDate">Expiry date</label>
          <input
            type="text"
            id="expDate"
            className="payment-input"
            autoComplete="cc-exp"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            className="payment-input"
            autoComplete="cc-csc"
            required
          />
          <span className="helper-text">Last three digits on signature strip</span>
        </div>
        <div className="form-row">
          <label className="remember-card-label">
            <input
              type="checkbox"
              className="payment-checkbox"
              name="saveCard"
              value="yes"
            />
            Remember credit card details for next time
          </label>
        </div>
      </div>
    </div>
  );
}