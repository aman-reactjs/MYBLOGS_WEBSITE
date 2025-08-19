import './globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar1 from '@/components/Navbar1';
// import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeProvider } from "next-themes"

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
        <html lang="en" suppressHydrationWarning>
      <body>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Navbar1/>
        {children}
</ThemeProvider>
            
      </body>
    </html>
  )
}
