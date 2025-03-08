import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/date';

interface BlogPostProps {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  slug: string;
  image: string;
  readTime: number;
}

export default function BlogPost({ 
  title, 
  excerpt,
  content,
  date, 
  author, 
  tags,
  slug,
  image,
  readTime 
}: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative aspect-[21/9] rounded-xl overflow-hidden mb-6"
        >
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
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

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm
                bg-[#3DD2F0]/10 text-[#3DD2F0]"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="prose prose-lg max-w-none mb-8 text-gray-800">
        {content}
      </div>

      <div className="border-t border-gray-200 pt-8">
        <Link 
          to="/blog"
          className="inline-flex items-center text-[#3DD2F0] hover:text-[#2CC1E0] transition-colors"
        >
          <ArrowRight className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>
    </article>
  );
}