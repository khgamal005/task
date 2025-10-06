'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedName = localStorage.getItem('userName');

    if (storedName) {
      setUserName(storedName);
    } else {
      // Optional: redirect if not logged in
      router.push('/signin');
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      {userName ? (
        <h1 className="text-2xl font-semibold text-gray-800">
          👋 Welcome, {userName}!
        </h1>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
}
