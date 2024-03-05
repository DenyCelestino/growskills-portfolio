/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Projects from "./content.json";

const Overview = () => {
  return (
    <>
      <section data-aos="fade-down" className="hero-title">
        <h1>
          Bekijk onze
          <br />
          portfolio
        </h1>
      </section>
      <section className="project-overview">
        {Projects.map((item, index) => (
          <div data-aos="fade-up" data-aos-duration="1500" key={index} className="project-overview-item">
            <div className="project-overview-item-image">
              <img className="ipad-bg" src="/ipad.png" alt="" />
              <div className="project-img cover-image">
                <img src={item.image.url} alt="" />
              </div>
            </div>
            <div className="project-overview-item-text">
              <div className="project-overview-item-text-bg"></div>
              <h3>{item.title}</h3>
              <Link href={"/projectdetail/" + item.url} className="btn">
                <span className="btn-wave"></span>
                <span className="btn-text">Bekijk project</span>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Overview;
