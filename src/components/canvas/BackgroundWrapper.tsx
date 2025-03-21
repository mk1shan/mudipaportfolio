'use client';

import dynamic from 'next/dynamic';

const ParticleBackground = dynamic(
  () => import('./ParticleBackground'),
  { ssr: false }
);

export default function BackgroundWrapper() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none">
      <ParticleBackground />
    </div>
  );
}