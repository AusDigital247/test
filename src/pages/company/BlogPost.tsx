import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../../data/blogPosts';
import NotFound from '../NotFound';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | TechnovaAI Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
        <article className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-8">
            <div className="relative aspect-[21/9] rounded-xl overflow-hidden mb-6">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
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

            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <span className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="mx-2">•</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            {post.content}
          </div>

          <div className="border-t border-gray-200 pt-8">
            <Link 
              to="/blog"
              className="inline-flex items-center text-[#3DD2F0] hover:text-[#2CC1E0] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}