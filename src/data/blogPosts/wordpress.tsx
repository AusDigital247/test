import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';

export const wordpressPost: BlogPost = {
  title: "WordPress Development: Building Enterprise-Grade Websites with Modern Architecture",
  slug: "wordpress-enterprise-development",
  excerpt: "Learn how to leverage WordPress for enterprise-level websites with modern development practices, security hardening, and scalability optimizations.",
  date: "2024-03-12",
  author: "Emily Parker",
  tags: ["WordPress", "Enterprise", "Web Development", "Performance", "Security"],
  image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80",
  readTime: 15,
  content: (
    <>
      <p>
        WordPress powers over 40% of the web, and with proper architecture and optimization, it can serve as a robust platform for enterprise applications. This guide covers modern development practices and performance optimizations.
      </p>

      <h2>Modern Development Architecture</h2>
      
      <h3>1. Composer-based Dependency Management</h3>
      <p>Implement proper dependency management with Composer:</p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`{
  "name": "enterprise/wordpress-project",
  "type": "project",
  "require": {
    "php": ">=8.1",
    "composer/installers": "^2.0",
    "vlucas/phpdotenv": "^5.5",
    "roots/wordpress": "^6.4",
    "roots/wp-config": "^1.0",
    "roots/bedrock-autoloader": "^1.0"
  },
  "config": {
    "optimize-autoloader": true,
    "preferred-install": "dist",
    "allow-plugins": {
      "composer/installers": true,
      "roots/wordpress-core-installer": true
    }
  },
  "extra": {
    "wordpress-install-dir": "web/wp"
  }
}`}</pre>

      <h3>2. Modern Build Process</h3>
      <p>Implement Vite for theme development:</p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`// vite.config.js
import { defineConfig } from 'vite';
import liveReload from 'vite-plugin-live-reload';

export default defineConfig({
  plugins: [
    liveReload([
      // Theme PHP files
      './web/app/themes/**/*.php',
      // Theme template files
      './web/app/themes/**/*.twig'
    ])
  ],
  build: {
    outDir: 'web/app/themes/your-theme/dist',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: '/web/app/themes/your-theme/src/main.js'
    }
  }
})`}</pre>

      <h3>3. Custom Block Development</h3>
      <p>Create modern Gutenberg blocks:</p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`// Custom Hero Block
import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload } from '@wordpress/block-editor';

registerBlockType('enterprise/hero', {
  title: 'Enterprise Hero',
  icon: 'cover-image',
  category: 'design',
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h1'
    },
    backgroundId: {
      type: 'number'
    }
  },
  edit: ({ attributes, setAttributes }) => {
    return (
      <div className="hero-block">
        <RichText
          tagName="h1"
          value={attributes.title}
          onChange={(title) => setAttributes({ title })}
          placeholder="Enter title..."
        />
        <MediaUpload
          onSelect={(media) => setAttributes({ backgroundId: media.id })}
          type="image"
          render={({ open }) => (
            <button onClick={open}>
              Choose Background Image
            </button>
          )}
        />
      </div>
    );
  },
  save: ({ attributes }) => {
    return (
      <div className="hero-block">
        <RichText.Content
          tagName="h1"
          value={attributes.title}
        />
      </div>
    );
  }
})`}</pre>

      <h2>Performance Optimization</h2>

      <h3>1. Object Cache Implementation</h3>
      <p>Redis object cache configuration:</p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`// wp-config.php
define('WP_CACHE', true);
define('WP_REDIS_HOST', getenv('REDIS_HOST'));
define('WP_REDIS_PORT', getenv('REDIS_PORT'));
define('WP_REDIS_PASSWORD', getenv('REDIS_PASSWORD'));
define('WP_REDIS_TIMEOUT', 1);
define('WP_REDIS_READ_TIMEOUT', 1);
define('WP_REDIS_DATABASE', 0);

// Custom cache invalidation
function invalidate_custom_cache($post_id) {
  if (function_exists('wp_cache_delete')) {
    wp_cache_delete("custom_data_{$post_id}", 'enterprise');
  }
}`}</pre>

      <h3>2. Query Optimization</h3>
      <p>Implement efficient database queries:</p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`// Efficient WP_Query implementation
function get_optimized_posts($args = []) {
  $default_args = [
    'post_type' => 'post',
    'posts_per_page' => 10,
    'no_found_rows' => true, // Skip counting total rows
    'update_post_meta_cache' => false, // Skip meta query
    'update_post_term_cache' => false, // Skip term query
    'fields' => 'ids' // Only get IDs
  ];

  $query_args = wp_parse_args($args, $default_args);
  $query = new WP_Query($query_args);

  return $query->posts;
}`}</pre>

      <h3>3. Asset Optimization</h3>
      <p>Implement critical CSS and lazy loading:</p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`// Critical CSS implementation
function add_critical_css() {
  $critical_css = file_get_contents(
    get_template_directory() . '/dist/critical.css'
  );
  
  if ($critical_css) {
    echo '<style id="critical-css">' . 
      $critical_css . 
    '</style>';
  }
}
add_action('wp_head', 'add_critical_css', 1);

// Lazy loading implementation
function defer_non_critical_css($tag, $handle) {
  if (!is_admin() && !is_customize_preview()) {
    return str_replace(
      'rel="stylesheet"',
      'rel="preload" as="style" onload="this.rel=\'stylesheet\'"',
      $tag
    );
  }
  return $tag;
}
add_filter('style_loader_tag', 'defer_non_critical_css', 10, 2);`}</pre>

      <h2>Security Implementation</h2>
      <p>Implement comprehensive security measures:</p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`// Security headers implementation
function add_security_headers() {
  header('Content-Security-Policy: default-src \'self\'; script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' https:; style-src \'self\' \'unsafe-inline\' https:; img-src \'self\' data: https:; font-src \'self\' https:; connect-src \'self\' https:;');
  header('X-Content-Type-Options: nosniff');
  header('X-Frame-Options: SAMEORIGIN');
  header('X-XSS-Protection: 1; mode=block');
  header('Referrer-Policy: strict-origin-when-cross-origin');
  header('Permissions-Policy: geolocation=(), microphone=(), camera=()');
}
add_action('send_headers', 'add_security_headers');

// Custom login security
function enhance_login_security($user, $username, $password) {
  if (empty($username) || empty($password)) {
    remove_action('login_head', 'wp_shake_js', 12);
    return new WP_Error(
      'empty_credentials',
      'Invalid login credentials.'
    );
  }
  return $user;
}
add_filter('authenticate', 'enhance_login_security', 30, 3);`}</pre>

      <p>
        Our <Link to="/services/web-development" className="text-[#3DD2F0] hover:underline">development team</Link> specializes in 
        enterprise WordPress solutions. Visit our <Link to="/" className="text-[#3DD2F0] hover:underline">homepage</Link> to learn more.
      </p>
    </>
  )
};