import Link from "next/link";
export default function Home() {
  return (
    <section data-aos="fade-down" className="hero-title hero-title-home">
      <h1>
        wannahave
        <br />
        websites uit <br />
        mozambique
      </h1>
      <Link className="btn" href={"/overview"}>
        Bekijk projecten
      </Link>
    </section>
  );
}
