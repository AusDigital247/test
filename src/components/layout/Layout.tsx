import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from '../header/Header';
import FooterSection from '../footer/FooterSection';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0B0F17]">
      <Header />
      <main className="relative">
        <Outlet />
      </main>
      <FooterSection />
      <Toaster position="top-right" />
    </div>
  );
}