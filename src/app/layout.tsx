import './globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar1 from '@/components/Navbar1';

export const metadata = {
  title: 'My App',
  description: 'Responsive navbar in Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
       
        <Navbar1/>
        {children}
      </body>
    </html>
  )
}
