import { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import gsap from "gsap";
import { useOnClickOutside } from "./hooks";
import DarkModeToggle from "./DarkModeToggle";

//ICONS
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const handleNavOpen = () => {
    setOpen(!open);
    const navMenuItems = document.querySelectorAll("nav a");
    if (open === false) {
      const menuAppear = gsap.timeline();
      menuAppear.set(navMenuItems, { opacity: 0 }).to(navMenuItems, {
        opacity: 1,
        duration: 0.25,
        delay: 0.7,
        stagger: 0.075,
      });

      document.querySelector("body").style.overflowY = "hidden";
    } else {
      document.querySelector("body").style.overflowY = "scroll";
    }
  };

  // useEffect(() => {
  //   const headerElement = document.getElementById("header");
  //   const headerAppear = gsap.timeline();
  //   headerAppear
  //     .set(headerElement, { opacity: 0, transform: "translatey(-12px)" })
  //     .to(headerElement, {
  //       opacity: 1,
  //       duration: 0.5,
  //       delay: 1,
  //       transform: "translatey(0)",
  //     });
  // }, []);
  return (
    <header
      id="header"
      className="bg-white bg-opacity-40 dark:bg-transparent transition-all duration-150"
    >
      <div className="left-icon font-bold text-black dark:text-white">
        <Link href="/">LC</Link>
      </div>

      <div id="nav" ref={node}>
        <DarkModeToggle />
        <button
          className="nav-button"
          open={open}
          onClick={handleNavOpen}
          aria-label="open navigation menu"
        >
          <div
            className={` ${open ? "bg-white " : "bg-black dark:bg-white"}`}
            style={{
              transform: open ? "rotate(45deg)" : "rotate(0)",
            }}
          />
          <div
            className="bg-black dark:bg-white"
            style={{
              opacity: open ? "0" : "1",
              transform: open ? "translateX(-20px)" : "translateX(0)",
            }}
          />
          <div
            className={` ${open ? "bg-white " : "bg-black dark:bg-white"}`}
            style={{
              transform: open ? "rotate(-45deg)" : "rotate(0)",
            }}
          />
        </button>
        <nav
          className="fake-back nav-menu"
          style={{
            transform: open ? "translatex(0)" : "translatex(100%)",
            transitionDelay: open ? "0s" : ".2s",
          }}
        ></nav>
        <nav
          className="fake-mid nav-menu bg-primary dark:bg-secondary"
          style={{
            transform: open ? "translatex(0)" : "translatex(100%)",
            transitionDelay: open ? ".1s" : ".1s",
          }}
        ></nav>

        <nav
          className="nav-menu main-nav-menu bg-offBlack"
          open={open}
          // style={{ transform: open ? "translatey(0)" : "translatey(-100%)" }}
          style={{
            transform: open ? "translatex(0)" : "translatex(100%)",
            transitionDelay: open ? ".2s" : "0s",
          }}
        >
          <div className="internal-links">
            <Link href="/" activeClassName="active">
              About
            </Link>
            <Link href="/portfolio" activeClassName="active">
              Portfolio
            </Link>
            <a
              href="https://personal-things.s3.amazonaws.com/LeroyClarkejr-Aug.pdf"
              target="_blank"
            >
              Resume
            </a>
            {/* <Link to="/blog/" activeClassName="active">
            Blog
          </Link> */}
          </div>

          <div className="external-links">
            <div className="content">
              <a
                target="_blank"
                href="https://www.instagram.com/leroyclarkejr"
                // to="https://www.instagram.com/leroyclarkejr"
              >
                <InstagramIcon fontSize="large" />
              </a>
              <a
                target="_blank"
                href="https://github.com/ldcjrStudio"
                // to="https://github.com/ldcjrStudio"
              >
                <GitHubIcon fontSize="large" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/leroy-clarke-jr/"
                // to="https://www.linkedin.com/in/leroy-clarke-jr/"
              >
                <LinkedInIcon fontSize="large" />
              </a>

              <a
                target="_blank"
                href="https://www.facebook.com/leroyclarkejr"
                // to="https://www.facebook.com/leroyclarkejr"
              >
                <FacebookIcon fontSize="large" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
