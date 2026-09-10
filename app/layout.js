import './globals.css'
import { Archivo, Space_Grotesk, JetBrains_Mono } from 'next/font/google'

// Two voices, one page: heavy condensed caps state the problem, mono states the
// system that answers it. See app/globals.css.
const display = Archivo({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
})

const sans = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://smaffan.com'),
  title: 'Muhammad Affan — AI Engineer & Data Engineer',
  description:
    'AI voice agents, data pipelines and computer vision, shipped to production. LiveKit, GPT-4o, AWS, Docker, PostgreSQL — from the model call to the container it runs in.',
  openGraph: {
    title: 'Muhammad Affan — AI Engineer & Data Engineer',
    description:
      'Something is broken. I build the thing that answers it.',
    url: 'https://smaffan.com',
    siteName: 'Muhammad Affan',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Affan — AI Engineer & Data Engineer',
    description:
      'Something is broken. I build the thing that answers it.',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
}

export const viewport = {
  themeColor: '#12151F',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/66ae42f81601a2195ba06609/1i4cbb6r1';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
