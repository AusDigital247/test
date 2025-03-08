import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';

export const webDevPost: BlogPost = {
  title: "Modern Web Development: Building High-Performance Applications with React and Next.js",
  slug: "modern-web-development-react-nextjs",
  excerpt: "A comprehensive guide to building scalable, performant web applications using React and Next.js, with practical examples and best practices for production deployments.",
  date: "2024-03-18",
  author: "Michael Rodriguez",
  tags: ["React", "Next.js", "Performance", "TypeScript", "Web Development"],
  image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80",
  readTime: 15,
  content: (
    <>
      <p>
        Modern web development demands high-performance, scalable solutions that deliver exceptional user experiences. This comprehensive guide covers advanced React and Next.js patterns, performance optimizations, and deployment strategies.
      </p>

      <h2>Advanced React Patterns</h2>
      
      <h3>1. Compound Components Pattern</h3>
      <p>Create flexible and reusable component APIs:</p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`// components/Select/index.tsx
import React, { createContext, useContext, useState } from 'react';

interface SelectContextType {
  value: string;
  onChange: (value: string) => void;
}

const SelectContext = createContext<SelectContextType | undefined>(undefined);

export function Select({ children, value, onChange }: {
  children: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <SelectContext.Provider value={{ value, onChange }}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
}

Select.Option = function Option({ value, children }: {
  value: string;
  children: React.ReactNode;
}) {
  const context = useContext(SelectContext);
  if (!context) throw new Error('Option must be used within Select');

  const { value: selectedValue, onChange } = context;
  const isSelected = value === selectedValue;

  return (
    <div
      className={\`cursor-pointer p-2 \${
        isSelected ? 'bg-blue-100' : 'hover:bg-gray-100'
      }\`}
      onClick={() => onChange(value)}
    >
      {children}
    </div>
  );
};

// Usage
function Example() {
  const [value, setValue] = useState('');
  return (
    <Select value={value} onChange={setValue}>
      <Select.Option value="1">Option 1</Select.Option>
      <Select.Option value="2">Option 2</Select.Option>
    </Select>
  );
}`}</pre>

      <h3>2. Custom Hooks for Business Logic</h3>
      <p>Implement reusable business logic:</p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`// hooks/useDataFetching.ts
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

interface FetchConfig<T> {
  url: string;
  transform?: (data: any) => T;
  onError?: (error: Error) => void;
}

export function useDataFetching<T>({
  url,
  transform,
  onError
}: FetchConfig<T>) {
  return useQuery({
    queryKey: [url],
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return transform ? transform(data) : data;
    },
    onError: (error: Error) => {
      console.error('Fetch error:', error);
      onError?.(error);
    }
  });
}

// Usage
function UserList() {
  const { data, isLoading, error } = useDataFetching({
    url: '/api/users',
    transform: (data) => data.map(user => ({
      ...user,
      fullName: \`\${user.firstName} \${user.lastName}\`
    }))
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;
  
  return (
    <ul>
      {data?.map(user => (
        <li key={user.id}>{user.fullName}</li>
      ))}
    </ul>
  );
}`}</pre>

      <h3>3. Performance Optimization</h3>
      <p>Implement advanced React optimization techniques:</p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`// components/VirtualList.tsx
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

interface Item {
  id: string;
  content: string;
}

export function VirtualList({ items }: { items: Item[] }) {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 5
  });

  return (
    <div
      ref={parentRef}
      className="h-[400px] overflow-auto"
    >
      <div
        style={{
          height: \`\${virtualizer.getTotalSize()}px\`,
          width: '100%',
          position: 'relative'
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={items[virtualItem.index].id}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: \`\${virtualItem.size}px\`,
              transform: \`translateY(\${virtualItem.start}px)\`
            }}
          >
            {items[virtualItem.index].content}
          </div>
        ))}
      </div>
    </div>
  );
}`}</pre>

      <h2>Next.js Advanced Features</h2>

      <h3>1. Middleware Implementation</h3>
      <p>Create custom middleware for authentication and logging:</p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Authentication check
  const token = request.cookies.get('auth-token');
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Add custom headers
  const response = NextResponse.next();
  response.headers.set('x-page-locale', request.nextUrl.locale || 'en');
  
  // Log request metrics
  console.log(\`[Request] \${request.method} \${request.url}\`);
  
  return response;
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/api/:path*'
  ]
}`}</pre>

      <h3>2. API Route Handlers</h3>
      <p>Implement type-safe API routes:</p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`// app/api/users/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  role: z.enum(['user', 'admin'])
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = UserSchema.parse(body);
    
    // Create user in database
    const user = await db.user.create({
      data: validatedData
    });
    
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { errors: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}`}</pre>

      <h3>3. Build-time Optimizations</h3>
      <p>Implement advanced build configurations:</p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    serverActions: true,
    optimizeCss: true
  },
  webpack: (config, { isServer }) => {
    // Custom webpack configurations
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          defaultVendors: {
            test: /[\\\\/]node_modules[\\\\/]/,
            priority: -10,
            reuseExistingChunk: true
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      };
    }
    return config;
  }
}`}</pre>

      <p>
        Our <Link to="/services/web-development" className="text-[#3DD2F0] hover:underline">web development team</Link> specializes 
        in building high-performance applications. Visit our <Link to="/" className="text-[#3DD2F0] hover:underline">homepage</Link> to learn more.
      </p>
    </>
  )
};