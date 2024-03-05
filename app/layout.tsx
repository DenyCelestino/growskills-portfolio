import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Player from "./components/player/page";
import BodyGradient from "./components/body-gradient";
import Header from "./components/header";
import Dolphin from "./components/dolphin";
import Bubbles from "./components/bubbles";
import Footer from "./components/footer";
import Link from "next/link";
import Animation from "./components/animation/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Growskills Portfolio",
  description: "Growskills Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BodyGradient />
        <Animation />
        <div id="site-container">
          <Header />
          <Player />
          <div id="content-container">
            <div className="content-grid">{children}</div>
          </div>
          <Footer />
          <Dolphin />
          <div className="noise"></div>
          <Link
            href="https://api.whatsapp.com/send?phone=258848990989&text=Sim%20quero%20ter%20site!%20"
            className="btn whatsapp"
          >
            Whatsapp-nos
          </Link>
          <Bubbles />
        </div>
      </body>
    </html>
  );
}
