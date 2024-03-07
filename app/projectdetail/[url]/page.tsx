/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import Projects from "../../overview/content.json";
const Project = ({ params }: { params: { url: string } }) => {
  const url = decodeURI(params.url);

  const data = Projects.find((item) => item.url === url);
  return (
    <>
      <section className="hero-title hero-absolute hero-project">
        <h1 data-aos="fade-up">
          {data?.title}
        </h1>
      </section>

      <div
        className="project-img cover-image fullwidth"
        style={{
          position: "relative",
          top: "0px",
          left: "0px",
          width: "100vw",
          height: "100vh",
        }}
      >
        <img src={data?.image.url} alt={data?.title} />
        <div
          className="project-img-bg"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            opacity: 1,
            transform: "translate(0px, 0px)",
          }}
        ></div>
      </div>

      <section className="project-item with-margin">
        <div className="project-item-image ipad-image-wrapper">
          <img src="/ipad.png" alt="ipad" />
          <div className="project-item-image-image ipad-image-image cover-image">
            <img src={data?.ipadImage.url} alt="ipad" />
          </div>
        </div>
      </section>

      <section className="project-item-text with-margin text-container">
        <div className="project-item-text-title">
          <h3>{data?.text?.title}</h3>
        </div>
        <div className="project-item-text-text">
          <p>{data?.text?.text}</p>
          {data?.text?.url && (
            <Link href={data?.text.url} className="btn">
              <span className="btn-wave"></span>
              <span className="btn-text">{data?.text?.urlLabel}</span>
            </Link>
          )}
        </div>
      </section>
      <section className="project-item-images with-padding fullwidth">
        <div className="content-grid">
          <div className="project-item-images-wrapper">
            {data?.images?.map((item, index) => (
              <div
                key={index}
                className="project-item-images-image ipad-image-wrapper"
              >
                <img src="/ipad.png" alt="ipad" />
                <div className="ipad-image-image cover-image">
                  <img src={item.url} alt="ipad" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
