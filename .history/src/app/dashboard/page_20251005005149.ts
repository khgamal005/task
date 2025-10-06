'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedName = localStorage.getItem('userName');

    if (storedName) {
      setUserName(storedName);
      setLoading(false);
    } else {
      // Redirect after short delay to prevent hydration mismatch
      setTimeout(() => {
        router.push('/signin');
      }, 300);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-2xl font-semibold text-gray-800">
        👋 Welcome, {userName}!
      </h1>
    </div>
  );
}
