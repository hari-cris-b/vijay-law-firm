import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crusaders Law Firm | Expert Legal Services | Madras High Court, Chennai',
  description: 'Leading law firm in Chennai providing expert legal services including civil law, criminal law, corporate law, and family law. Trusted advocates at Madras High Court with 15+ years experience.',
  keywords: [
    'law firm Chennai',
    'Madras High Court advocates',
    'legal services India',
    'corporate law Chennai',
    'criminal lawyer Chennai',
    'civil law attorney',
    'family law Chennai',
    'legal consultation Chennai',
    'advocate Vijayakumar',
    'Crusaders Law Firm'
  ],
  authors: [{ name: 'Crusaders Law Firm' }],
  creator: 'Crusaders Law Firm',
  publisher: 'Crusaders Law Firm',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://crusaderslawfirm.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Crusaders Law Firm | Expert Legal Services | Madras High Court, Chennai',
    description: 'Leading law firm in Chennai providing expert legal services including civil law, criminal law, corporate law, and family law. Trusted advocates at Madras High Court.',
    url: 'https://crusaderslawfirm.com',
    siteName: 'Crusaders Law Firm',
    images: [
      {
        url: '/images/CLFico2.png',
        width: 1200,
        height: 630,
        alt: 'Crusaders Law Firm Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crusaders Law Firm | Expert Legal Services',
    description: 'Leading law firm in Chennai providing expert legal services at Madras High Court.',
    images: ['/images/CLFico2.png'],
    creator: '@crusaderslawfirm',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Crusaders Law Firm",
    "description": "Leading law firm in Chennai providing expert legal services including civil law, criminal law, corporate law, and family law. Trusted advocates at Madras High Court with 15+ years experience.",
    "url": "https://crusaderslawfirm.com",
    "logo": "https://crusaderslawfirm.com/images/CLFico2.png",
    "image": "https://crusaderslawfirm.com/images/CLFico2.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.0827",
      "longitude": "80.2707"
    },
    "telephone": ["+91-8248168261", "+91-8682819999"],
    "email": "info@crusaderslawfirm.com",
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.facebook.com/crusaderslawfirm",
      "https://www.linkedin.com/company/crusaderslawfirm",
      "https://wa.me/918682819999"
    ],
    "founder": {
      "@type": "Person",
      "name": "P. Vijayakumar",
      "jobTitle": "Founder & Managing Partner",
      "description": "Advocate with MBA, BL. qualification"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Chennai, Tamil Nadu, India"
    },
    "serviceType": [
      "Civil Law",
      "Criminal Law",
      "Corporate Law",
      "Family Law",
      "Property Law",
      "Legal Consultation"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Civil Law Services",
            "description": "Expert civil litigation and dispute resolution"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Criminal Law Services",
            "description": "Professional criminal defense and prosecution"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Law Services",
            "description": "Business law, contracts, and corporate compliance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Family Law Services",
            "description": "Divorce, custody, and family dispute resolution"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} scroll-smooth`} suppressHydrationWarning>{children}</body>
    </html>
  )
}
