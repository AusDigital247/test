import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeaderLinkProps {
  to: string;
  children: React.ReactNode;
}

export default function HeaderLink({ to, children }: HeaderLinkProps) {
  return (
    <Link to={to} className="relative group">
      <span className="text-gray-300 group-hover:text-[#3DD2F0] transition-colors duration-300">
        {children}
      </span>
      <motion.span
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3DD2F0] group-hover:w-full transition-all duration-300"
        whileHover={{ width: '100%' }}
      />
    </Link>
  );
}