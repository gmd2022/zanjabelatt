import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/BlogPostLayout.css';

const BlogPostLayout = ({ title, description, children }) => {
  const slug = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
  const url = `https://zanjabela.xyz/blog/${slug}`;
  const featuredImage = `https://zanjabela.xyz/assets/${slug}.jpg`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: featuredImage,
    author: {
      '@type': 'Badr',
      name: 'Zanjabela Tours'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zanjabela Tours',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zanjabela.xyz/logo.png'
      }
    },
    url: url,
    datePublished: new Date().toISOString(),
    mainEntityOfPage: url
  };

  return (
    <>
      <Helmet>
        <title>{title} | Libya Tours Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Zanjabela Tours" />
        <meta property="og:image" content={featuredImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={featuredImage} />

        <link rel="canonical" href={url} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="blog-post-layout">
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
    </>
  );
};

export default BlogPostLayout;
