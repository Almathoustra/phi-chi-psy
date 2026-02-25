import type { Metadata } from "next";
import "./globals.css";
import Banner from "./components/Banner";
import MobileMenu from "./components/MobileMenu";
import DesktopMenu from "./components/DesktopMenu";
import styles from "./layout.module.css";
import Footer from "./components/Footer";
import TopSkipLink from "./components/TopSkipLink";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.phichipsy.be'),
  description: "Philippe Anciaux - Psychologue",
  alternates:{
    canonical:'./'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=chevron_right" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gentium+Plus:ital,wght@0,400;0,700;1,400;1,700&display=swap" />
      </head>
      <body>
        <TopSkipLink/>
        <MobileMenu />
        <Banner/>
        <DesktopMenu/>
        <div className={styles.MainWrapper} id="content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
