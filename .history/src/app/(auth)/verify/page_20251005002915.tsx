'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { verifyAccount } from '@/app/api/auth';

export default function VerifyPage() {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return setMessage('No token found. Please register again.');

    setLoading(true);
    setMessage('');

    const res = await verifyAccount(token, code);

    if (res.status) {
      setMessage('Account verified successfully!');
      setTimeout(() => router.push('/lo'), 1200);
    } else {
      setMessage(res.message || 'Invalid code');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-xl font-semibold text-center mb-4">Verify Account</h1>
        <form onSubmit={handleVerify} className="space-y-3">
          <input
            placeholder="Enter verification code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="border p-2 w-full rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white py-2 w-full rounded hover:bg-green-700"
          >
            {loading ? 'Verifying...' : 'Verify'}
          </button>
        </form>
        {message && <p className="text-center mt-3 text-gray-700">{message}</p>}
      </div>
    </div>
  );
}
