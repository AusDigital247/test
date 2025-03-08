import { BlogPost } from '../../types/blog';
import { azureDataPost } from './azureData';
import { webDevPost } from './webDevelopment';
import { magentoPost } from './magento';
import { wordpressPost } from './wordpress';
import { seoPost } from './seo';
import { adwordsPost } from './adwords';
import { dataLakesPost } from './dataLakes';
import { cicdPost } from './cicd';
import { cloudMigrationPost } from './cloudMigration';
import { microservicesPost } from './microservices';
import { azureDataBestPracticesPost } from './azureDataBestPractices';
import { magentoOptimizationPost } from './magentoOptimization';
import { kubernetesDeploymentPost } from './kubernetesDeployment';
import { graphqlApiPost } from './graphqlApi';

export const blogPosts: BlogPost[] = [
  // Latest posts first
  graphqlApiPost,
  azureDataBestPracticesPost,
  magentoOptimizationPost,
  kubernetesDeploymentPost,
  azureDataPost,
  webDevPost,
  magentoPost,
  wordpressPost,
  seoPost,
  adwordsPost,
  dataLakesPost,
  cicdPost,
  cloudMigrationPost,
  microservicesPost
];