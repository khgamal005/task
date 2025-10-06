'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function DashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/signin');
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch(`${BASE_URL}/auth/user-data`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();
        if (data.status) {
          setUserName(data.data.name);
          localStorage.setItem('userName', data.data.name);
        } else {
          router.push('/signin');
        }
      } catch (err) {
        router.push('/signin');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-2xl font-semibold text-gray-800">
        👋 Welcome, {userName}!
      </h1>
    </div>
  );
}
