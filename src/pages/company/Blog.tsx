import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../../data/blogPosts/index';
import BlogGrid from '../../components/blog/BlogGrid';

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | AUS Digital Insights & Updates</title>
        <meta 
          name="description" 
          content="Stay updated with the latest insights on AI technology, industry trends, and best practices from AUS Digital's expert team." 
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Insights & Articles
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert perspectives on technology, development, and digital transformation
            </p>
          </div>

          <BlogGrid posts={blogPosts} />
        </div>
      </div>
    </>
  );
}