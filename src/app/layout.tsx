import './globals.css';
import { dmSans, geistMono, geistSans, poppins, productSans } from './fonts';
import { Toaster } from '@/components/ui/sonner';
import HOC from '@/components/shared/hoc/HOC';
import { homeMetadata, viewport } from '@/config/seo/metadata';

export const metadata = homeMetadata;
export { viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${dmSans.variable} ${productSans.variable}  antialiased`}
      >
        <Toaster position="top-right" />
        <HOC>{children}</HOC>
      </body>
    </html>
  );
}
