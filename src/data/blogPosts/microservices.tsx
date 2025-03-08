import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';

export const microservicesPost: BlogPost = {
  title: "Building Scalable Microservices Architectures: A Comprehensive Guide",
  slug: "scalable-microservices-architectures",
  excerpt: "Learn how to design, implement, and maintain scalable microservices architectures with practical examples and best practices.",
  date: "2024-03-01",
  author: "Thomas Anderson",
  tags: ["Microservices", "Architecture", "Scalability", "Docker", "Kubernetes"],
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
  readTime: 15,
  content: (
    <>
      <p>
        Microservices architecture has become the standard for building scalable, maintainable applications. This comprehensive guide covers design patterns, implementation strategies, and best practices for microservices architecture.
      </p>

      <img 
        src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80" 
        alt="Microservices Architecture"
        className="w-full rounded-xl my-8"
      />

      <h2>Service Design Patterns</h2>
      
      <h3>1. API Gateway Pattern</h3>
      <p>Implement an API Gateway using Node.js and Express:</p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`// api-gateway/src/server.ts
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// Service registry
const services = {
  auth: 'http://auth-service:3001',
  users: 'http://user-service:3002',
  orders: 'http://order-service:3003'
};

// Route configuration
const routes = {
  '/auth/*': services.auth,
  '/users/*': services.users,
  '/orders/*': services.orders
};

// Configure routes with proxy
Object.entries(routes).forEach(([path, target]) => {
  app.use(path, createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      [\`^$\{path.replace('/*', '')}\`]: ''
    }
  }));
});

app.listen(3000, () => {
  console.log('API Gateway running on port 3000');
});`}</pre>

      <h3>2. Circuit Breaker Pattern</h3>
      <p>Implement circuit breaker using Opossum:</p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`// service/src/circuit-breaker.ts
import CircuitBreaker from 'opossum';

const breaker = new CircuitBreaker(async function request() {
  const response = await fetch('http://api.example.com/data');
  return response.json();
}, {
  timeout: 3000, // If our function takes longer than 3 seconds, trigger a failure
  errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
  resetTimeout: 30000 // After 30 seconds, try again.
});

breaker.fallback(() => ({ error: 'Service unavailable' }));

breaker.on('success', (result) => {
  console.log('Request succeeded');
});

breaker.on('timeout', () => {
  console.log('Request timed out');
});

breaker.on('reject', () => {
  console.log('Circuit breaker is open');
});`}</pre>

      <h3>3. Event-Driven Architecture</h3>
      <p>Implement event-driven communication using RabbitMQ:</p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`// service/src/event-bus.ts
import amqp from 'amqplib';

class EventBus {
  private connection: amqp.Connection;
  private channel: amqp.Channel;

  async connect() {
    this.connection = await amqp.connect('amqp://localhost');
    this.channel = await this.connection.createChannel();
  }

  async publish(exchange: string, routingKey: string, message: any) {
    await this.channel.assertExchange(exchange, 'topic', { durable: true });
    this.channel.publish(
      exchange,
      routingKey,
      Buffer.from(JSON.stringify(message))
    );
  }

  async subscribe(
    exchange: string,
    queue: string,
    routingKey: string,
    handler: (message: any) => void
  ) {
    await this.channel.assertExchange(exchange, 'topic', { durable: true });
    const q = await this.channel.assertQueue(queue, { durable: true });
    
    await this.channel.bindQueue(q.queue, exchange, routingKey);
    
    this.channel.consume(q.queue, (msg) => {
      if (msg) {
        const content = JSON.parse(msg.content.toString());
        handler(content);
        this.channel.ack(msg);
      }
    });
  }
}`}</pre>

      <img 
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80" 
        alt="Service Communication"
        className="w-full rounded-xl my-8"
      />

      <h2>Service Discovery and Configuration</h2>
      <p>
        Implement service discovery using Consul:
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`// service/src/service-registry.ts
import Consul from 'consul';

const consul = new Consul({
  host: 'localhost',
  port: 8500
});

async function registerService(
  name: string,
  address: string,
  port: number
) {
  await consul.agent.service.register({
    name,
    address,
    port,
    check: {
      http: \`http://$\{address}:$\{port}/health\`,
      interval: '10s'
    }
  });
}

async function discoverService(name: string) {
  const result = await consul.catalog.service.nodes(name);
  return result[0]; // Return first healthy instance
}`}</pre>

      <h2>Monitoring and Observability</h2>
      <p>
        Implement distributed tracing using OpenTelemetry:
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`// service/src/tracing.ts
import { 
  NodeTracerProvider,
  SimpleSpanProcessor
} from '@opentelemetry/sdk-trace-node';
import { JaegerExporter } from '@opentelemetry/exporter-jaeger';
import { Resource } from '@opentelemetry/resources';
import { 
  SemanticResourceAttributes 
} from '@opentelemetry/semantic-conventions';

const provider = new NodeTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'user-service'
  })
});

const exporter = new JaegerExporter({
  endpoint: 'http://jaeger:14268/api/traces'
});

provider.addSpanProcessor(
  new SimpleSpanProcessor(exporter)
);

provider.register();

const tracer = provider.getTracer('user-service-tracer');

// Usage in routes
app.get('/users/:id', async (req, res) => {
  const span = tracer.startSpan('get-user');
  try {
    const user = await getUserById(req.params.id);
    span.setStatus({ code: SpanStatusCode.OK });
    res.json(user);
  } catch (error) {
    span.setStatus({
      code: SpanStatusCode.ERROR,
      message: error.message
    });
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    span.end();
  }
});`}</pre>

      <h2>Deployment Configuration</h2>
      <p>
        Kubernetes deployment configuration for microservices:
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`# kubernetes/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-service
        image: user-service:1.0.0
        ports:
        - containerPort: 3000
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        resources:
          limits:
            cpu: "500m"
            memory: "512Mi"
          requests:
            cpu: "200m"
            memory: "256Mi"
        env:
        - name: NODE_ENV
          value: "production"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-credentials
              key: url`}</pre>

      <p>
        Our <Link to="/services/web-development" className="text-[#3DD2F0] hover:underline">development team</Link> can help design 
        your microservices architecture. Visit our <Link to="/" className="text-[#3DD2F0] hover:underline">homepage</Link> to learn more.
      </p>
    </>
  )
};