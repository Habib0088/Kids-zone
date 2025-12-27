import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";

const poppins=Poppins({
  weight:['100','200','400','500','600','800']
})

// app/metadata.js or directly in app/layout.js for Next.js App Router
export const metadata = {
  title: {
    default: 'Kids-Zone',
    template: '%s | Kids-Zone'
  },
  description: 'Explore educational toys and learning materials for children including learning boards, flash cards, and more.',
  keywords: [
    'educational toys', 
    'learning board', 
    'flash cards', 
    'kids learning', 
    'children education', 
    'math toys', 
    'animal flash cards'
  ],
  authors: [
    { name: 'Kids-Zone', url: 'https://kidszone-inky.vercel.app' }
  ],
  creator: 'Kids-Zone',
  publisher: 'Kids-Zone',
  openGraph: {
    title: 'Kids-Zone',
    description: 'Explore educational toys and learning materials for children including learning boards, flash cards, and more.',
    url: 'https://kidszone-inky.vercel.app',
    siteName: 'Kids-Zone',
    images: [
      {
        url: 'https://i.ibb.co.com/FbXHBbMh/image.png', // homepage preview
        width: 1200,
        height: 630,
        alt: 'Kids-Zone Homepage Preview'
      },
      {
        url: 'https://i.ibb.co.com/JwXsSs2K/logo.png',
        width: 600,
        height: 600,
        alt: 'Kids-Zone Logo'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kids-Zone',
    description: 'Explore educational toys and learning materials for children including learning boards, flash cards, and more.',
    images: ['https://i.ibb.co.com/FbXHBbMh/image.png'],
    creator: '@KidsZoneOfficial'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      ><header>
        <Navbar>

        </Navbar>
      </header>
        <main className="min-h-[calc(100vh-300px)]">
          {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
