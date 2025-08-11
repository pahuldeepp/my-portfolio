import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Portfolio',
  description: 'Your site description',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
