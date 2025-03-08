import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/date';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  image: string;
  readTime: number;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  author,
  slug,
  image,
  readTime
}: BlogCardProps) {
  return (
    <Link to={`/blog/${slug}`} className="group block">
      <div className="rounded-xl overflow-hidden border border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 transition-all">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {formatDate(date)}
            </span>
            <span className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {author}
            </span>
            <span>{readTime} min read</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-[#3DD2F0] transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">{excerpt}</p>
          <div className="flex items-center text-[#3DD2F0] font-medium">
            Read More
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </Link>
  );
}