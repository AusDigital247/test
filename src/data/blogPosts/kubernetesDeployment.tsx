import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import { CodeBlock } from '../../components/blog/CodeBlock';
import { TechnicalSection } from '../../components/blog/TechnicalSection';

export const kubernetesDeploymentPost: BlogPost = {
  title: "Kubernetes Deployment Strategies: A Technical Deep Dive",
  slug: "kubernetes-deployment-strategies",
  excerpt: "Learn advanced Kubernetes deployment strategies including blue-green, canary, and rolling updates with practical examples and best practices.",
  date: "2024-03-25",
  author: "James Wilson",
  tags: ["Kubernetes", "DevOps", "Deployment", "Container Orchestration"],
  image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80",
  readTime: 15,
  content: (
    <>
      <p>
        Kubernetes offers several sophisticated deployment strategies that enable zero-downtime deployments and risk mitigation. This guide explores implementation details for the most effective deployment patterns.
      </p>

      <TechnicalSection title="1. Rolling Update Strategy">
        <CodeBlock
          language="yaml"
          code={`apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-deployment
spec:
  replicas: 4
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:1.0.0
        ports:
        - containerPort: 8080
        readinessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 10
        resources:
          limits:
            cpu: "500m"
            memory: "512Mi"
          requests:
            cpu: "200m"
            memory: "256Mi"`}
        />
      </TechnicalSection>

      <TechnicalSection title="2. Blue-Green Deployment">
        <CodeBlock
          language="yaml"
          code={`# blue-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-blue
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
      version: blue
  template:
    metadata:
      labels:
        app: myapp
        version: blue
    spec:
      containers:
      - name: myapp
        image: myapp:1.0.0

---
# green-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-green
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
      version: green
  template:
    metadata:
      labels:
        app: myapp
        version: green
    spec:
      containers:
      - name: myapp
        image: myapp:2.0.0

---
# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: app-service
spec:
  selector:
    app: myapp
    version: blue  # Switch to green for cutover
  ports:
  - port: 80
    targetPort: 8080`}
        />
      </TechnicalSection>

      <TechnicalSection title="3. Canary Deployment">
        <CodeBlock
          language="yaml"
          code={`# canary-deployment.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
  annotations:
    nginx.ingress.kubernetes.io/canary: "true"
    nginx.ingress.kubernetes.io/canary-weight: "20"
spec:
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: app-canary
            port:
              number: 80

---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-canary
spec:
  replicas: 2
  selector:
    matchLabels:
      app: myapp
      version: canary
  template:
    metadata:
      labels:
        app: myapp
        version: canary
    spec:
      containers:
      - name: myapp
        image: myapp:2.0.0
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 15
          periodSeconds: 20`}
        />
      </TechnicalSection>

      <p>
        Our <Link to="/services/web-development" className="text-[#3DD2F0] hover:underline">DevOps team</Link> can help implement 
        these deployment strategies. Visit our <Link to="/" className="text-[#3DD2F0] hover:underline">homepage</Link> to learn more.
      </p>
    </>
  )
};