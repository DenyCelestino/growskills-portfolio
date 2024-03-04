/* eslint-disable @next/next/no-img-element */
import Projects from "./content.json";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <section className="hero-title">
        <h1>Bekijk onze portfolio</h1>
      </section>
      <section className="project-overview">
        {Projects.map((item, index) => (
          <div className="project-overview-item" key={index}>
            <div className="project-overview-item-image">
              <img src={"/ipad.png"} alt={item.title} />
              <div className="project-img cover-image">
                <img src={item.image.url} alt={item.title} />
              </div>
            </div>
            <div className="project-overview-item-text">
              <div className="project-overview-item-text-bg"></div>
              <h3>{item.title}</h3>
              <Link href={"/projects/" + item.url} className="ajaxBtn btn">
                <span className="btn-wave"></span>
                <span className="btn-text">Bekijk project</span>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
