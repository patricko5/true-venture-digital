import * as React from 'react';

export const OrderConfirmationEmail = ({
  customerName,
  orderNumber,
  productName,
  amountTotal,
}) => (
  <div style={{
    fontFamily: 'Inter, system-ui, sans-serif',
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    padding: '40px',
    maxWidth: '600px',
    margin: '0 auto',
    border: '1px solid rgba(255,255,255,0.1)'
  }}>
    <div style={{
      textAlign: 'center',
      marginBottom: '40px'
    }}>
      <div style={{
        display: 'inline-block',
        backgroundColor: '#ff5c35',
        color: '#ffffff',
        padding: '12px',
        fontWeight: '900',
        fontSize: '24px',
        marginBottom: '20px'
      }}>
        TVD
      </div>
      <h1 style={{
        fontSize: '28px',
        fontWeight: '900',
        letterSpacing: '-0.02em',
        margin: '0'
      }}>PURCHASE CONFIRMED</h1>
      <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '8px' }}>
        Order #{orderNumber}
      </p>
    </div>

    <div style={{ marginBottom: '40px' }}>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        Hello {customerName},
      </p>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(255,255,255,0.8)' }}>
        Thank you for choosing **True Venture Digital**. Your project setup is now finalized. 
        Our team will reach out within 24 hours to begin the discovery phase.
      </p>
    </div>

    <div style={{
      backgroundColor: 'rgba(255,255,255,0.03)',
      padding: '24px',
      borderRadius: '8px',
      marginBottom: '40px'
    }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#ff5c35' }}>Order Summary</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span>{productName}</span>
        <span style={{ fontWeight: 'bold' }}>${(amountTotal / 100).toFixed(2)}</span>
      </div>
    </div>

    <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
      <p>© 2026 True Venture Digital. Kinetic Architect. All rights reserved.</p>
      <p>Calgary, AB</p>
    </div>
  </div>
);
