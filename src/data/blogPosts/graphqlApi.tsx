import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import { CodeBlock } from '../../components/blog/CodeBlock';
import { TechnicalSection } from '../../components/blog/TechnicalSection';

export const graphqlApiPost: BlogPost = {
  title: "GraphQL API Design: Best Practices and Implementation Patterns",
  slug: "graphql-api-design-patterns",
  excerpt: "Master GraphQL API design with practical examples covering schema design, resolvers, authentication, and performance optimization.",
  date: "2024-03-08",
  author: "A Shareef",
  tags: ["GraphQL", "API Design", "Backend", "Performance"],
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
  readTime: 15,
  content: (
    <>
      <p>
        GraphQL has revolutionized API development by providing a flexible and efficient way to query data. This guide covers advanced patterns and best practices for building production-ready GraphQL APIs.
      </p>

      <TechnicalSection title="1. Schema Design">
        <CodeBlock
          language="graphql"
          code={`# schema.graphql
type User {
  id: ID!
  email: String!
  profile: Profile!
  posts(first: Int, after: String): PostConnection!
  role: UserRole!
  createdAt: DateTime!
}

type Profile {
  id: ID!
  user: User!
  name: String!
  bio: String
  avatar: String
  socialLinks: [SocialLink!]
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  comments(first: Int, after: String): CommentConnection!
  tags: [String!]!
  publishedAt: DateTime
}

type PostConnection {
  edges: [PostEdge!]!
  pageInfo: PageInfo!
}

type PostEdge {
  node: Post!
  cursor: String!
}

type PageInfo {
  hasNextPage: Boolean!
  endCursor: String
}

enum UserRole {
  ADMIN
  EDITOR
  USER
}

type Query {
  me: User
  user(id: ID!): User
  posts(first: Int, after: String): PostConnection!
}

type Mutation {
  createPost(input: CreatePostInput!): CreatePostPayload!
  updatePost(input: UpdatePostInput!): UpdatePostPayload!
  deletePost(id: ID!): DeletePostPayload!
}

input CreatePostInput {
  title: String!
  content: String!
  tags: [String!]
}`}
        />
      </TechnicalSection>

      <TechnicalSection title="2. Resolver Implementation">
        <CodeBlock
          language="typescript"
          code={`// resolvers/User.ts
import { UserResolvers } from '../generated/graphql';
import { Context } from '../context';

export const User: UserResolvers = {
  posts: async (
    parent,
    { first = 10, after },
    context: Context
  ) => {
    const posts = await context.prisma.post.findMany({
      where: { authorId: parent.id },
      take: first + 1,
      cursor: after ? { id: after } : undefined,
      orderBy: { createdAt: 'desc' }
    });

    const hasNextPage = posts.length > first;
    const nodes = hasNextPage ? posts.slice(0, -1) : posts;

    return {
      edges: nodes.map(post => ({
        node: post,
        cursor: post.id,
      })),
      pageInfo: {
        hasNextPage,
        endCursor: nodes[nodes.length - 1]?.id
      }
    };
  },

  profile: async (parent, _, context: Context) => {
    return context.prisma.profile.findUnique({
      where: { userId: parent.id }
    });
  }
};

// resolvers/Mutation.ts
export const Mutation = {
  createPost: async (
    _,
    { input },
    context: Context
  ) => {
    const { userId } = context.auth;
    if (!userId) throw new Error('Not authenticated');

    const post = await context.prisma.post.create({
      data: {
        ...input,
        authorId: userId
      }
    });

    return { post };
  }
};`}
        />
      </TechnicalSection>

      <TechnicalSection title="3. Authentication & Authorization">
        <CodeBlock
          language="typescript"
          code={`// auth/directiveResolvers.ts
import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils';
import { defaultFieldResolver, GraphQLSchema } from 'graphql';

export function authDirectiveTransformer(
  schema: GraphQLSchema
): GraphQLSchema {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const authDirective = getDirective(
        schema,
        fieldConfig,
        'auth'
      )?.[0];

      if (authDirective) {
        const { requires } = authDirective;
        const { resolve = defaultFieldResolver } = fieldConfig;

        fieldConfig.resolve = async function (
          source,
          args,
          context,
          info
        ) {
          const { user } = context.auth;
          if (!user) throw new Error('Not authenticated');

          if (requires && !user.roles.includes(requires)) {
            throw new Error('Not authorized');
          }

          return resolve(source, args, context, info);
        };
      }
      return fieldConfig;
    },
  });
}

// schema.graphql
directive @auth(
  requires: Role = USER
) on OBJECT | FIELD_DEFINITION

type Mutation {
  createPost(input: CreatePostInput!): CreatePostPayload! 
    @auth(requires: EDITOR)
  deletePost(id: ID!): DeletePostPayload! 
    @auth(requires: ADMIN)
}`}
        />
      </TechnicalSection>

      <p>
        Our <Link to="/services/web-development" className="text-[#3DD2F0] hover:underline">API development team</Link> can help design 
        and implement your GraphQL API. Visit our <Link to="/" className="text-[#3DD2F0] hover:underline">homepage</Link> to learn more.
      </p>
    </>
  )
};