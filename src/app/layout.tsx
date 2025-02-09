import Header from "../components/Header";
import Footer from "../components/Footer";
import Providers from "../components/Providers";
import ScrollToTop from "../components/client/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Rekonsys',
  description: 'Rekonsys Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
