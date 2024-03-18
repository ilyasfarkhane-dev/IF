import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/ilyas-farkhane/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/ilyasfarkhane-dev",
    name: <RiGithubFill />,
  },
  {
    path: "https://web.facebook.com/profile.php?id=100070025019959&locale=fr_FR",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com/farkhane_ilyas_/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <a
            href={icon.path}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
