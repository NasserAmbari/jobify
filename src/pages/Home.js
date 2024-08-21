import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { readVacancy } from "../api/vacancy";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import gsap from "gsap";

import "swiper/css";
import "swiper/css/pagination";

import {
  Shopee,
  Discord,
  Tokopedia,
  Udemy,
  Nvdia,
  Microsoft,
  X,
  Facebook,
  Instagram,
} from "../assets/";
import HeroImage from "../assets/hero.png";

import {
  Button,
  Card,
  CardVacancy,
  Input,
  Marquee,
  SplitSentence,
} from "../components";
import CardTestimonial from "../components/CardTestimonial";

gsap.registerPlugin(useGSAP);

const images = [
  { url: Shopee, name: "Shopee" },
  { url: Discord, name: "Discord" },
  { url: Udemy, name: "Udmey" },
  { url: Tokopedia, name: "Tokopedia" },
  { url: Microsoft, name: "Microsoft" },
  { url: Nvdia, name: "Nvdia" },
  { url: X, name: "X" },
  { url: Instagram, name: "Instagram" },
  { url: Facebook, name: "Facebook" },
];

const testimonial = [
  {
    name: "Ahmad Nasser Ambari",
    job: "Front End Dev",
    image:
      "https://miro.medium.com/v2/resize:fit:1200/1*pHb0M9z_UMhO22HlaOl2zw.jpeg",
    testimonial:
      "I found my dream job through this portal with ease! The platform is user-friendly, and the support team is highly responsive. Highly recommended for anyone job hunting",
  },
  {
    name: "Angelin Marshel",
    job: "Administration",
    image:
      "https://miro.medium.com/v2/resize:fit:1200/1*pHb0M9z_UMhO22HlaOl2zw.jpeg",
    testimonial:
      "This portal helped me find the perfect job that matches my skills. The process was quick and efficient, with plenty of job options available.",
  },
  {
    name: "Mohammad Angga Saputra",
    job: "Video Editor",
    image:
      "https://miro.medium.com/v2/resize:fit:1200/1*pHb0M9z_UMhO22HlaOl2zw.jpeg",
    testimonial:
      "I’m very satisfied with the service of this portal. Thanks to its comprehensive features, I secured a new job in no time.",
  },
];

const Home = () => {
  const [dataVacancy, setDataVacancy] = useState([]);

  const firstBox = useRef(null);
  const secondBox = useRef(null);
  const imageHero = useRef(null);
  const buttonHero = useRef(null);

  useEffect(() => {
    readVacancy()
      .then((res) => {
        setDataVacancy(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

    const timelineAnimation = gsap.timeline();

    timelineAnimation.fromTo(
      [
        firstBox.current,
        imageHero.current,
        secondBox.current,
        buttonHero.current,
      ],
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
            <SplitSentence sentence="Find Your Best Job Here" delay={0.5} />
          </h1>

          <h2 className="text-2xl md:text-4xl  font-light mb-4">
            <SplitSentence
              sentence="We gonna help you to find your best job here"
              delay={1.25}
            />
          </h2>

          <Link to="/find-jobs">
            <div className="overflow-y-hidden">
              <Button ref={buttonHero}>Find Here</Button>
            </div>
          </Link>
        </div>

        <div className="basis-2/4 ">
          <div className="relative m-auto md:w-3/4 w-4/5">
            <div className="overflow-y-hidden">
              <img
                ref={imageHero}
                src={HeroImage}
                alt="jobify-hero-image"
                className="rounded-2xl shadow-xl border-4 border-primary inline"
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
        <div className="flex justify-between">
          <h2 className="text-5xl font-medium mb-12">Find Job</h2>
          <Link to="/find-jobs">
            <Button>More Job</Button>
          </Link>
        </div>
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

      <section className="w-full flex gap-4 flex-col justify-center content-center mb-32 lg:mb-48">
        <h2 className="text-5xl font-medium text-center ">What the say</h2>
        <div className="w-full flex justify-center">
          <Swiper
            spaceBetween={50}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 2, // Ketika viewport lebih dari 768px, tampilkan 2 slide
              },
            }}
            modules={[Autoplay, Pagination]}
          >
            {testimonial.map((data, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <CardTestimonial
                    name={data.name}
                    job={data.job}
                    testimonial={data.testimonial}
                    avatar={data.image}
                  />
                </SwiperSlide>
              );
            })}
            <div className="custom-pagination mt-4 flex justify-center"></div>
          </Swiper>
        </div>
      </section>

      <section className="mb-32 lg:mb-48">
        <h2 className="text-5xl font-medium mb-12 text-center">
          Connected with big Companies
        </h2>
        <div className="">
          <Marquee speed={20} length={images.length}>
            {images.map((data, idx) => {
              return (
                <div
                  className="marquee-item"
                  key={idx}
                  style={{ "--item-position": idx }}
                >
                  <img className="w-32" src={data.url} alt={data.name} />
                </div>
              );
            })}
          </Marquee>
        </div>
      </section>

      <section className="mb-32 lg:mb-48">
        <h2 className="text-5xl font-medium mb-12">
          Need Something? <br />
          Reach us
        </h2>
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col">
            <form
              action="mailto:nssr.mbr@gmail.com.com"
              method="post"
              encType="text/plain"
            >
              <Input label="Your Name" placeholder="Your Name" />
              <Input label="Your Email" placeholder="Your Email" type="email" />
              <div className="mb-2 md:mb-8 flex flex-col">
                <label className="md:text-md" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  placeholder="Your Message"
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
                ></textarea>
              </div>
              <input
                type="submit"
                className="text-white py-2 px-4 bg-[#216A80] md:col-span-2 rounded-xl"
              />
            </form>
          </div>

          <div className="relative md:w-1/2 hidden lg:block content-center">
            <div className="overflow-hidden content-center justify-center flex">
              <img
                src={HeroImage}
                alt="jobify-hero-image"
                className="rounded-2xl shadow-xl border-4 border-primary w-3/4"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
