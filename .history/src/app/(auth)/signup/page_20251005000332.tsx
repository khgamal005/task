'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(3, 'Full name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  mobile: z.string().min(5, 'Phone number is required'),
  mobile_country_code: z.string().min(1, 'Country code is required'),
});

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    setError('');

    try {
      const res = await registerUse(data);

      if (res.status) {
        localStorage.setItem('token', res.data.token);
        router.push('/verify');
      } else {
        setError(res.message || 'Registration failed');
      }
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-4">
        <h1 className="text-2xl font-semibold text-center">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <input placeholder="Full Name" {...register('name')} className="border p-2 w-full rounded" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <input placeholder="Email" type="email" {...register('email')} className="border p-2 w-full rounded" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <input placeholder="Password" type="password" {...register('password')} className="border p-2 w-full rounded" />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <input placeholder="Phone Number" {...register('mobile')} className="border p-2 w-full rounded" />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}

          <input placeholder="Country Code" {...register('mobile_country_code')} className="border p-2 w-full rounded" />
          {errors.mobile_country_code && <p className="text-red-500 text-sm">{errors.mobile_country_code.message}</p>}

          <button type="submit" disabled={loading} className="bg-blue-600 w-full text-white py-2 rounded hover:bg-blue-700">
            {loading ? 'Creating Account...' : 'Register'}
          </button>

          {error && <p className="text-red-600 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}
