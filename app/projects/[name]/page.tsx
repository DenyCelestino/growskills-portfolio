/* eslint-disable @next/next/no-img-element */
import Projects from "../../content.json";
import Link from "next/link";
import Dolphin from "../../images/dolphin.png";
import Image from "next/image";
const Project = ({ params }: { params: { name: string } }) => {
  const name = decodeURI(params.name);

  const data = Projects.find((item) => item.url === name);
  return (
    <>
      <div className="project-img cover-image fullwidth">
        <img src={data?.image.url} alt={data?.title} />
        <div className="project-img-bg"></div>
      </div>
      <section className="hero-title">
        <h1>{data?.title}</h1>
      </section>
      <section className="project-item with-margin">
        <div className="project-item-image">
          <img src={"/ipad.png"} alt={"ipad"} />
          {data?.images.map((item, index) => (
            <div className="project-item-image cover-image" key={index}>
              <img src={item.url} alt={item.url} />
            </div>
          ))}
        </div>
      </section>
      <section className="project-item-text with-margin text-container">
        <div className="project-item-text-title">
          {data?.text?.map((item, index) => (
            <h3 key={index}>{item.title}</h3>
          ))}
        </div>
        <div className="project-item-text-text">
          {data?.text?.map((item, index) => (
            <div key={index}>
              <p key={index}>{item.text}</p>

              {item.url && <Link href={item?.url}>{item?.urlLabel}</Link>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
