import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Suzana Carv - Design de Sobrancelhas",
  description = "Sobrancelhas naturais que valorizam sua beleza. Design personalizado, técnicas exclusivas e atendimento em ambiente confortável. Agende agora!",
  image = "/suzana-carv-og-image.jpg",
  url = "/",
  type = "website",
  author = "Suzana Carv",
  keywords = "design de sobrancelhas, brow lamination, beleza, sobrancelhas naturais",
}) {
  const fullUrl = `https://suzanacarv.com${url}`;
  const siteName = "Suzana Carv";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />

      {/* Open Graph Meta Tags (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <link rel="canonical" href={fullUrl} />

      {/* Mobile & App Meta Tags */}
      <meta name="theme-color" content="#d4a373" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Suzana Carv" />
    </Helmet>
  );
}
