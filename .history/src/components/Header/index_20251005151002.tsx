// components/Header.tsx
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow">
      <Navbar />
    </header>
  );
}
