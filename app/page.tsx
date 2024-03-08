"use client";

import Link from "next/link";

import { useEffect } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

export default function Home() {
  const navigate = useRouter();

  const gsapEase = "power4.out";
  const gsapDuration = 2;
  gsap.defaults({
    ease: gsapEase,
    duration: gsapDuration,
  });

  useEffect(() => {
    gsap.to(".hero-title", {
      y: 0,
    });

    if ("serviceWorker" in navigator) {
      const handleServiceWorker = async () => {
        await navigator.serviceWorker.register("/service-worker.js");
      };
      handleServiceWorker();
    }
  }, []);

  const handleNavigate = () => {
    navigate.push("/overview");
  };
  const onClick = () => {
    gsap.to(".hero-title", {
      y: "-110%",
      duration: 0.5,
      onComplete: handleNavigate,
    });
  };

  return (
    <section className="hero-title hero-title-home">
      <h1 className="title-here">
        wannahave
        <br />
        websites uit <br />
        mozambique
      </h1>
      <button onClick={onClick} className="btn">
        Bekijk projecten
      </button>
    </section>
  );
}
