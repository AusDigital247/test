import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import { CodeBlock } from '../../components/blog/CodeBlock';
import { TechnicalSection } from '../../components/blog/TechnicalSection';

export const cloudMigrationPost: BlogPost = {
  title: "Enterprise Cloud Migration: Strategies and Implementation Guide",
  slug: "cloud-migration-enterprise-applications",
  excerpt: "A comprehensive guide to migrating enterprise applications to the cloud, covering assessment, planning, execution, and monitoring phases with practical examples.",
  date: "2024-02-28",
  author: "A Shareef",
  tags: ["Cloud Migration", "AWS", "Azure", "DevOps", "Infrastructure"],
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
  readTime: 20,
  content: (
    <>
      <p>
        Successful cloud migration requires a systematic approach that balances business continuity with technical transformation. This guide provides detailed strategies and implementation examples for enterprise cloud migration.
      </p>

      <TechnicalSection title="1. Assessment and Planning">
        <CodeBlock
          language="yaml"
          code={`# Cloud Migration Assessment Template
assessment:
  application:
    name: "Enterprise CRM"
    type: "Java Spring Boot"
    dependencies:
      - "PostgreSQL 13"
      - "Redis 6"
      - "Elasticsearch 7.x"
    
  current_infrastructure:
    servers:
      - role: "Application"
        count: 4
        specs: "8 vCPU, 32GB RAM"
      - role: "Database"
        count: 2
        specs: "16 vCPU, 64GB RAM"
        
  requirements:
    availability: "99.95%"
    rto: "4 hours"
    rpo: "15 minutes"
    compliance:
      - "GDPR"
      - "SOC 2"
      
  migration_strategy: "Hybrid (Replatform + Refactor)"
  estimated_timeline: "12 weeks"`}
        />
      </TechnicalSection>

      <TechnicalSection title="2. Infrastructure as Code Setup">
        <CodeBlock
          language="typescript"
          code={`// AWS CDK Infrastructure Definition
import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as rds from 'aws-cdk-lib/aws-rds';

export class MigrationStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // VPC Setup
    const vpc = new ec2.Vpc(this, 'MigrationVPC', {
      maxAzs: 3,
      natGateways: 2,
      subnetConfiguration: [
        {
          name: 'Public',
          subnetType: ec2.SubnetType.PUBLIC,
          cidrMask: 24,
        },
        {
          name: 'Private',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
          cidrMask: 24,
        },
        {
          name: 'Database',
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
          cidrMask: 24,
        },
      ],
    });

    // Database Cluster
    const dbCluster = new rds.DatabaseCluster(this, 'Database', {
      engine: rds.DatabaseClusterEngine.auroraPostgres({
        version: rds.AuroraPostgresEngineVersion.VER_13_4,
      }),
      instances: 2,
      instanceProps: {
        vpc,
        instanceType: ec2.InstanceType.of(
          ec2.InstanceClass.R6G,
          ec2.InstanceSize.LARGE
        ),
      },
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
      },
    });

    // ECS Cluster
    const cluster = new ecs.Cluster(this, 'ECSCluster', {
      vpc,
      containerInsights: true,
    });
  }
}`}
        />
      </TechnicalSection>

      <TechnicalSection title="3. Data Migration Pipeline">
        <CodeBlock
          language="python"
          code={`from typing import List, Dict
import boto3
import psycopg2
from concurrent.futures import ThreadPoolExecutor

class DataMigrationPipeline:
    def __init__(self, source_config: Dict, target_config: Dict):
        self.source_conn = psycopg2.connect(**source_config)
        self.target_conn = psycopg2.connect(**target_config)
        self.s3 = boto3.client('s3')
        
    def migrate_table(self, table_name: str, batch_size: int = 10000):
        """Migrate table data with progress tracking and validation"""
        with self.source_conn.cursor() as cursor:
            # Get total rows
            cursor.execute(f"SELECT COUNT(*) FROM {table_name}")
            total_rows = cursor.fetchone()[0]
            
            # Migrate in batches
            for offset in range(0, total_rows, batch_size):
                cursor.execute(
                    f"SELECT * FROM {table_name} "
                    f"ORDER BY id LIMIT {batch_size} OFFSET {offset}"
                )
                batch = cursor.fetchall()
                
                # Insert batch into target
                self._insert_batch(table_name, batch)
                
                # Log progress
                progress = (offset + len(batch)) / total_rows * 100
                print(f"Migration progress: {progress:.2f}%")
                
    def _insert_batch(self, table_name: str, batch: List):
        with self.target_conn.cursor() as cursor:
            # Prepare bulk insert
            args_str = ','.join(
                cursor.mogrify("(%s)", x).decode('utf-8') 
                for x in batch
            )
            cursor.execute(
                f"INSERT INTO {table_name} VALUES " + args_str
            )
        self.target_conn.commit()
        
    def validate_migration(self, table_name: str) -> bool:
        """Validate migrated data"""
        queries = [
            f"SELECT COUNT(*) FROM {table_name}",
            f"SELECT SUM(id) FROM {table_name}",
            f"SELECT MD5(CAST(array_agg(id ORDER BY id) AS text)) "
            f"FROM {table_name}"
        ]
        
        results = {'source': [], 'target': []}
        for conn_name, conn in [
            ('source', self.source_conn),
            ('target', self.target_conn)
        ]:
            with conn.cursor() as cursor:
                for query in queries:
                    cursor.execute(query)
                    results[conn_name].append(cursor.fetchone()[0])
                    
        return results['source'] == results['target']`}
        />
      </TechnicalSection>

      <TechnicalSection title="4. Monitoring and Rollback Strategy">
        <CodeBlock
          language="typescript"
          code={`// Monitoring and Rollback Implementation
import { CloudWatch, ECS } from 'aws-sdk';
import { promisify } from 'util';

export class MigrationMonitor {
  private cloudwatch: CloudWatch;
  private ecs: ECS;
  
  constructor() {
    this.cloudwatch = new CloudWatch();
    this.ecs = new ECS();
  }
  
  async checkHealth(): Promise<boolean> {
    const metrics = await this.cloudwatch.getMetricData({
      MetricDataQueries: [
        {
          Id: 'm1',
          MetricStat: {
            Metric: {
              Namespace: 'AWS/ApplicationELB',
              MetricName: 'HealthyHostCount',
              Dimensions: [
                {
                  Name: 'LoadBalancer',
                  Value: 'app/migration-alb/1234567890'
                }
              ]
            },
            Period: 300,
            Stat: 'Average'
          }
        }
      ],
      StartTime: new Date(Date.now() - 15 * 60000),
      EndTime: new Date()
    }).promise();
    
    const healthyHosts = metrics.MetricDataResults[0].Values[0];
    return healthyHosts > 0;
  }
  
  async rollback(): Promise<void> {
    // Stop new deployment
    await this.ecs.updateService({
      cluster: 'migration-cluster',
      service: 'migration-service',
      desiredCount: 0
    }).promise();
    
    // Restore from backup
    await this.restoreFromBackup();
    
    // Start original version
    await this.ecs.updateService({
      cluster: 'migration-cluster',
      service: 'original-service',
      desiredCount: 3
    }).promise();
  }
  
  private async restoreFromBackup(): Promise<void> {
    // Implementation for backup restoration
  }
}`}
        />
      </TechnicalSection>

      <p>
        Our <Link to="/services/data-engineering" className="text-[#3DD2F0] hover:underline">cloud migration team</Link> can help 
        plan and execute your migration strategy. Learn more about our <Link to="/" className="text-[#3DD2F0] hover:underline">solutions</Link>.
      </p>
    </>
  )
};