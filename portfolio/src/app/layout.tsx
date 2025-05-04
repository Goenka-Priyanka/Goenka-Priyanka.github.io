import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Priyanka Goenka - Portfolio',
  description: 'Personal portfolio of Priyanka Goenka, MS-CSE Student at UC San Diego, specializing in AI and formerly a Data Scientist at Walmart.',
  keywords: ['Priyanka Goenka', 'Portfolio', 'Computer Science', 'AI', 'Data Science', 'UCSD', 'Machine Learning'],
  authors: [{ name: 'Priyanka Goenka' }],
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100 transition-colors duration-300 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
