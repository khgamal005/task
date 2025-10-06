'use client'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ;

export async function registerUser(data: any) {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('mobile', data.mobile);
  formData.append('mobile_country_code', data.mobile_country_code);
  formData.append('password', data.password);
  formData.append('password_confirmation', data.password);

  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: formData,
  });

  return res.json();
}

export async function verifyAccount(token: string, code: string) {
  const formData = new FormData();
  formData.append('code', code);

  const res = await fetch(`${BASE_URL}/auth/verify-email`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  return res.json();
}
