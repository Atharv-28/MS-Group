"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PolicyModal() {
  const [open, setOpen] = useState(false);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : undefined;
  // fallback for Next's usePathname in some environments
  try {
    // prefer usePathname hook when available
  } catch (e) {}

  useEffect(() => {
    try {
      const accepted = localStorage.getItem('msgroup_policy_accepted');
      if (!accepted) setOpen(true);
    } catch (e) {
      setOpen(true);
    }
  }, []);

  function accept() {
    try { localStorage.setItem('msgroup_policy_accepted', 'true'); } catch (e) {}
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div style={{ position: 'relative' }}>

        <button
          aria-label="Close policy"
          onClick={accept}
          style={{
            position: 'absolute',
            top: -20,
            right: -20,
            width: 44,
            height: 44,
            borderRadius: '50%',
            border: 'none',
            background: '#dc2626',
            boxShadow: '0 6px 18px rgba(2,6,23,0.12)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
            color: '#fff',
          }}
        >
          ✕
        </button>

        <div style={{ width: 'min(980px,96%)', maxHeight: '80vh', overflowY: 'auto', background: '#ffffff', borderRadius: 12, padding: '2rem', boxShadow: '0 20px 60px rgba(2,6,23,0.35)', color: '#111827', fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Terms of Service & Privacy Policy</h2>
              <p style={{ color: '#6b7280', marginTop: 6, marginBottom: 8, fontSize: '0.9rem' }}><strong>Last updated:</strong> April 12, 2026</p>
            </div>
          </div>

          <div style={{ marginTop: 12, lineHeight: 1.6, color: '#374151' }}>
            <h3 style={{ marginBottom: 8 }}>Privacy — key points</h3>
            <ul style={{ marginTop: 0, paddingLeft: '1.2rem' }}>
              <li>We collect data you provide (name, email, message) and technical data (cookies, usage).</li>
              <li>Purpose: respond to inquiries, deliver services, improve products, and analytics.</li>
              <li>Sharing: limited to service providers, analytics partners, and as required by law.</li>
              <li>Retention: we keep data only as long as necessary for the purpose collected.</li>
            </ul>

            <h3 style={{ marginBottom: 8, marginTop: 12 }}>Terms — short</h3>
            <ul style={{ marginTop: 0, paddingLeft: '1.2rem' }}>
              <li>Use the site lawfully; do not submit unlawful or harmful content.</li>
              <li>Sites are provided "as-is"; MS Group disclaims certain warranties; commercial contracts govern services.</li>
            </ul>

            <h3 style={{ marginBottom: 8, marginTop: 12 }}>Cookies & Tracking</h3>
            <ul style={{ marginTop: 0, paddingLeft: '1.2rem' }}>
              <li>We and partners use cookies for analytics, preferences, and functionality.</li>
              <li>Control cookies through your browser settings.</li>
            </ul>

            <h3 style={{ marginBottom: 8, marginTop: 12 }}>Your rights</h3>
            <ul style={{ marginTop: 0, paddingLeft: '1.2rem' }}>
              <li>Request access, correction, deletion, or restriction of your personal data.</li>
              <li>Contact: founder@msgroup.cc to exercise rights or ask questions.</li>
            </ul>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 18 }}>
            <a href={(pathname && pathname.startsWith('/mavenside')) ? '/mavenside/privacy-policy' : '/privacy-policy'} style={{ color: '#374151', textDecoration: 'underline', alignSelf: 'center' }}>Read full policy</a>
            <button onClick={accept} style={{ background: '#0f172a', color: '#fff', border: 'none', padding: '0.6rem 1rem', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>Accept</button>
          </div>
        </div>
      </div>
    </div>
  );

}
