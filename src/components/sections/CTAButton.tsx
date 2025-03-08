import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
}

export function CTAButton({ to, children }: CTAButtonProps) {
  return (
    <Link
      to={to}
      className="bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0] hover:from-[#2CC1E0] hover:to-[#4C8DE0]
        text-[#0B0F17] px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2
        shadow-lg shadow-[#3DD2F0]/20 hover:shadow-[#3DD2F0]/30 transition-all"
    >
      <span>{children}</span>
      <ArrowRight className="w-5 h-5" />
    </Link>
  );
}