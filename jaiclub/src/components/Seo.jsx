// src/components/Seo.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Seo({ title, description, keywords, url, image }) {
  const siteName = "Jai Club";
  
  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}