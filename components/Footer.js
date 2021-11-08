import Link from "next/link";
import Hr from "../components/Hr";

//ICONS
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  const navigation = {
    main: [
      { name: "About", href: "/" },
      { name: "Portfolio", href: "/portfolio" },
    ],
    social: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/leroyclarkejr",
        icon: (props) => <InstagramIcon fontSize="large" {...props} />,
      },
      {
        name: "GitHub",
        href: "https://github.com/ldcjrStudio",
        icon: (props) => <GitHubIcon fontSize="large" {...props} />,
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/leroy-clarke-jr/",
        icon: (props) => <LinkedInIcon fontSize="large" {...props} />,
      },
      {
        name: "Facebook",
        href: "https://www.facebook.com/leroyclarkejr",
        icon: (props) => <FacebookIcon fontSize="large" {...props} />,
      },
    ],
  };
  return (
    <footer>
      <Hr />
      <div className="max-w-7xl mx-auto pb-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                href={item.href}
                className="text-base dark:hover:text-secondary hover:text-primary "
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 dark:hover:text-secondary hover:text-primary"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-400">
          &copy; Leroy Clarke Jr. 2021
        </p>
      </div>
    </footer>
  );
};

export default Footer;
