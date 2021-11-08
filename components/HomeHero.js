import TypeIt from "typeit";
import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import me from "../public/images/leroyclarkejr.jpg";
// import smoothscroll from "smoothscroll-polyfill";
// smoothscroll.polyfill();

const HomeHero = () => {
  useEffect(() => {
    new TypeIt("#typeit", {
      speed: 45,
      loop: true,
    })
      .pause(1000)
      .type("Self-taught Front-end Engineer.")
      .pause(1500)
      .delete()
      .type("Penn State Graduate.")
      .pause(1500)
      .delete()
      .type("Former Pro Gymnast.")
      .pause(1500)
      .delete()
      .type("Creative Problem Solver.")
      .pause(1500)
      .go();

    //   const scrollBtn = document.getElementById("scroll-btn");

    //   const scrollBtnMove = gsap.timeline();
    //   scrollBtnMove.set(scrollBtn, {transition: "translatey(-24px)"}).to(scrollBtn, {
    //       transform: "translatey(0)",
    //       duration:.5, repeat:-1

    //   })
  }, []);

  return (
    <section
      id="home-hero"
      className="w-full min-h-screen h-screen flex flex-col items-center justify-center px-4 mx-0"
    >
      <div className="hero-image-container mt-2 md:mt-8 mb-8">
        <Image
          src={me}
          layout="fill"
          className="rounded-lg image"
          placeholder="blur"
        />
      </div>

      <div className="content text-center w-full">
        <p id="typeit" className=" text-base md:text-xl"></p>
      </div>
    </section>
  );
};
export default HomeHero;
