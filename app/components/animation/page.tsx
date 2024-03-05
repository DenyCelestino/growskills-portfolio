"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Animation = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration:1000,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  return null;
};

export default Animation;
