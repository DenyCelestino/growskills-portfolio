/* eslint-disable @next/next/no-img-element */
"use client";
import Projects from "./content.json";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

const Overview = () => {
  const navigate = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const buttonsRef = Projects.map(() => useRef<HTMLButtonElement | null>(null));
  const gsapEase = "power4.out";
  const gsapDuration = 2;
  useEffect(() => {
    gsap.to(".hero-title", {
      y: 0,
    });
  }, []);
  const animateOverviewOut = (index: number) => {
    const button = buttonsRef[index].current;
    if (!button) return;
    const getCurrentSection = button.parentElement
      ?.parentElement as HTMLElement;
    console.log(getCurrentSection);
    let projectContainer = document.querySelector(
      ".content-grid"
    ) as HTMLElement;
    let clickedItemIpadImg = getCurrentSection.querySelector(
      ".project-overview-item-image"
    ) as HTMLElement;
    let clickedPosition = clickedItemIpadImg.getBoundingClientRect();
    let newImg = clickedItemIpadImg.querySelector(
      ".project-img"
    ) as HTMLElement;
    newImg.cloneNode(true);
    const newImgBg = document.createElement("div");
    newImgBg.classList.add("project-img-bg");
    newImg.append(newImgBg);

    newImg.classList.add("fullwidth");
    newImg.style.position = "fixed";
    newImg.style.top = clickedPosition.y + "px";
    newImg.style.left = clickedPosition.x + "px";
    newImg.style.width = clickedPosition.width + "px";
    newImg.style.height = clickedPosition.height + "px";
    projectContainer.prepend(newImg);

    let activeImgAnim = gsap.timeline({
      onComplete: () => {
        newImg.style.position = "relative";
        gsap.to(".project-img-bg", {
          ease: gsapEase,
          duration: gsapDuration,
          y: 0,
          opacity: 1,
        });
      },
    });
    activeImgAnim.to(newImg, {
      ease: gsapEase,
      duration: gsapDuration,
      left: 0,
      top: 0,
      width: "100vw",
      height: "100vh",
      onComplete: () => {
        setTimeout(() => {
          newImg.remove();
        }, 900);
      },
    });
    gsap.to(".hero-title", {
      ease: gsapEase,
      duration: gsapDuration,
      y: "-100%",
      opacity: 0,
    });
    let projectOverview = document.querySelector(
      ".project-overview"
    ) as HTMLElement;
    gsap.to(projectOverview, {
      y: "50vh",
      opacity: 0,
      onComplete: () => {
        window.scrollTo({ top: 0, behavior: "instant" });
        navigate.push("/projectdetail/" + Projects[index].url);
      },
    });
  };

  return (
    <>
      <section className="hero-title">
        <h1>
          Bekijk onze
          <br />
          portfolio
        </h1>
      </section>
      <section className="project-overview">
        {Projects.map((item, index) => (
          <div data-aos="fade-up" key={index} className="project-overview-item">
            <div className="project-overview-item-image">
              <img className="ipad-bg" src="/ipad.png" alt="" />
              <div className="project-img cover-image">
                <img src={item.image.url} alt="" />
              </div>
            </div>
            <div className="project-overview-item-text">
              <div className="project-overview-item-text-bg"></div>
              <h3>{item.title}</h3>
              <button
                ref={buttonsRef[index]}
                onClick={() => animateOverviewOut(index)}
                className="btn"
              >
                <span className="btn-wave"></span>
                <span className="btn-text">{item.title}</span>
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Overview;
