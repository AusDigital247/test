import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TalentCTA() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#3DD2F0]/10 to-[#5D9EF0]/10 backdrop-blur-sm 
          rounded-2xl p-12 border border-[#3DD2F0]/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a Custom Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you build the perfect team for your project
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0] text-white px-8 py-4 rounded-lg
                inline-flex items-center space-x-2 hover:from-[#2CC1E0] hover:to-[#4C8DE0] transition-all"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}