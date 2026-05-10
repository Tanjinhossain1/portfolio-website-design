export async function StructuredData() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mahabub Hossain Arafat',
    jobTitle: 'Social Media Manager',
    url: 'https://mahabub-portfolio.vercel.app',
    telephone: '+880-1979755714',
    email: 'workwithmha@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Narayanganj',
      addressCountry: 'BD',
    },
    sameAs: [
      'https://facebook.com',
      'https://instagram.com',
      'https://linkedin.com',
      'https://youtube.com',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  )
}
