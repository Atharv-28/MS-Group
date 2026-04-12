import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import PolicyModal from '@/components/PolicyModal/PolicyModal';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'MS Group — Empowering Global Business Through Integrated Solutions',
    template: '%s | MS Group',
  },
  description:
    'MS Group is a unified powerhouse offering strategic consulting (ClientWise), global logistics (Mavenside), and cutting-edge technology (MOXVER) solutions from Bangalore, India.',
  keywords: ['MS Group', 'business consulting', 'logistics', 'technology', 'Bangalore', 'Mavenside', 'ClientWise', 'MOXVER'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <PolicyModal />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
