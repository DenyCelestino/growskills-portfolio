import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Dolphin from "./images/dolphin.png";

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
        <div className="body-gradient"></div>
        <div id="site-container">
          <header>
            <a className="header-logo" href="#"></a>
          </header>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider">
              <span className="slider-play"></span>
              <span className="slider-pause"></span>
            </span>
          </label>
          <div id="content-container">
            <div className="content-grid">{children}</div>
          </div>
          <div className="dolphin">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image src={Dolphin} width={500} height={300} alt="" />
        </div>
        <div className="noise"></div>

      <footer>
        {/* <!-- <video src="video/turtle-output.mp4" autoplay muted loop></video> --> */}
      </footer>
      {/* <!-- end site-container --> */}

      <div className="bubbles">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
        <div className="bubble bubble-7"></div>
        <div className="bubble bubble-8"></div>
        <div className="bubble bubble-9"></div>
        <div className="bubble bubble-10"></div>
        <div className="bubble bubble-11"></div>
        <div className="bubble bubble-12"></div>
        <div className="bubble bubble-13"></div>
        <div className="bubble bubble-14"></div>
        <div className="bubble bubble-15"></div>
        <div className="bubble bubble-16"></div>
        <div className="bubble bubble-17"></div>
        <div className="bubble bubble-18"></div>
        <div className="bubble bubble-19"></div>
        <div className="bubble bubble-20"></div>
        <div className="bubble bubble-21"></div>
        <div className="bubble bubble-22"></div>
        <div className="bubble bubble-23"></div>
        <div className="bubble bubble-24"></div>
        <div className="bubble bubble-25"></div>
        <div className="bubble bubble-26"></div>
        <div className="bubble bubble-27"></div>
        <div className="bubble bubble-28"></div>
        <div className="bubble bubble-29"></div>
        <div className="bubble bubble-30"></div>
      </div>
        </div>
      </body>
    </html>
  );
}
