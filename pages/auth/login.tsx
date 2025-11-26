import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { createSupabaseComponentClient } from '@/utils/supabase/clients/component';

export default function LoginPage() {
  const router = useRouter();
  const supabase = createSupabaseComponentClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
      } else {
        router.push('/');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-wec-cream">
      <div className="w-full max-w-md p-8 space-y-6 bg-wec-cream rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-wec-blue">Login</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-wec-blue">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-wec-gold rounded-md shadow-sm focus:ring-wec-gold focus:border-wec-gold"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-wec-blue">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-wec-gold rounded-md shadow-sm focus:ring-wec-gold focus:border-wec-gold"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 font-medium text-wec-blue bg-wec-gold rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wec-gold disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don&apos;t have an account?{' '}
          <Link href="/auth/signup" className="font-medium text-wec-gold hover:text-yellow-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
