import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { readVacancy } from "../api/vacancy";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";

import HeroImage from "../assets/hero.png";
import { Card, CardVacancy, Marquee } from "../components";

gsap.registerPlugin(useGSAP);

const Home = () => {
  const [dataVacancy, setDataVacancy] = useState([]);

  const firstBox = useRef(null);
  const secondBox = useRef(null);
  const imageHero = useRef(null);

  useEffect(() => {
    readVacancy()
      .then((res) => {
        setDataVacancy(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

    gsap.fromTo(
      [firstBox.current, imageHero.current, secondBox.current],
      { y: "500", opacity: 0 },
      { y: "0", opacity: 1, duration: 1, ease: "power2.out", stagger: 0.2 }
    );

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const rotationDegree = scrollTop % 360;
      gsap.to(firstBox.current, { rotation: rotationDegree });
      gsap.to(secondBox.current, { rotation: -rotationDegree });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto max-w-screen-xl">
      <section
        className="flex flex-col-reverse md:flex-row gap-4 text-center md:text-left items-center content-center justify-between mb-28 md:mb-40"
        id="hero"
      >
        <div className="basis-2/4  mt-10 md:mt-0">
          <h1 className="text-4xl md:text-7xl font-medium mb-4">
            Find Your Dream Jobs Here
          </h1>
          <h2 className="text-2xl md:text-4xl  font-light mb-4">
            We gonna help you to find your best job here
          </h2>
          <Link to="/find-jobs">
            <button
              type="button"
              className="px-8 p-2 rounded-xl text-white bg-[#216A80] shadow-xl text-lg"
            >
              Find Here
            </button>
          </Link>
        </div>

        <div className="basis-2/4 ">
          <div className="relative m-auto md:w-3/4 w-4/5">
            <div className="overflow-hidden">
              <img
                ref={imageHero}
                src={HeroImage}
                alt="jobify-hero-image"
                className="rounded-2xl shadow-xl border-4 border-primary"
              />
            </div>
            <div
              ref={firstBox}
              className="box-1 absolute -top-5 -left-5 md:-top-10 md:-left-10 rounded-xl w-1/6 h-1/6"
            ></div>
            <div
              ref={secondBox}
              className="box-1 absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 rounded-xl w-1/6 h-1/6"
            ></div>
          </div>
        </div>
      </section>

      <section
        id="why-us"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32 lg:mb-48"
      >
        <Card text="More Than 500+ Jobs Every Day"></Card>
        <Card text="10k People Already Working"></Card>
        <Card text="Cooperates with more than 100 companies"></Card>
        <Card text="Specializing in Recruitment"></Card>
      </section>

      <section className="mb-60">
        <h2 className="text-5xl font-medium mb-12">Jobs Vacancy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!dataVacancy ? (
            <div>Loading...</div>
          ) : (
            dataVacancy.map((data) => {
              return (
                <CardVacancy
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  company={data.company}
                  imageCompany={data.company_image_url}
                  jobTenure={data.job_tenure}
                  companyCity={data.company_city}
                  salaryMax={data.salary_max}
                  salaryMin={data.salary_min}
                  jobType={data.job_type}
                />
              );
            })
          )}
        </div>
      </section>

      <section className="mb-32 lg:mb-48">
        <h2 className="text-5xl font-medium mb-12 text-center">
          Connected with big Companies
        </h2>
        <div className="">
          <Marquee speed={2}>
            <span style={{ marginRight: "50px" }}>This is a marquee item</span>
            <span style={{ marginRight: "50px" }}>Another marquee item</span>
            <span style={{ marginRight: "50px" }}>And another one</span>
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Home;
