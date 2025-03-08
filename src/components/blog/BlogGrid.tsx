import BlogCard from './BlogCard';
import { BlogPost } from '../../types/blog';

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          {...post}
        />
      ))}
    </div>
  );
}