import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-border flex items-center justify-between px-12 py-6" style={{ backgroundColor: '#eee1c4' }}>
        <div className="flex items-center gap-3">
          <Image src="/images/Blank Logo.png?v=4" alt="WEC Logo" width={100} height={100} className="object-contain" />
          <h1 className="text-2xl font-bold font-serif tracking-wide" style={{ color: '#2a2a2a' }}>Women Executives Circle</h1>
        </div>
        <nav className="flex items-center gap-8 text-lg font-medium" style={{ color: '#2a2a2a' }}>
          <a href="/" className="hover:text-primary">Home</a>
          <a href="/about" className="hover:text-primary font-bold">About Us</a>
          <a href="/events" className="hover:text-primary">Events</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button onClick={() => router.push('/auth/login')} size="lg" className="px-12 py-7 text-xl" style={{ backgroundColor: 'transparent', color: '#2a2a2a', border: '2px solid #c9a961' }}>
            Log In
          </Button>
          <Button onClick={() => router.push('/auth/signup')} size="lg" className="px-12 py-7 text-xl">
            Apply
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-12 py-20">
        <h2 className="text-5xl font-bold font-serif mb-8" style={{ color: '#2a2a2a' }}>About Us</h2>
        <div className="max-w-4xl">
          <p className="text-xl mb-6" style={{ color: '#2a2a2a' }}>
            Content coming soon...
          </p>
        </div>
      </main>
    </div>
  );
}
