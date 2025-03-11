import { Button, Link } from "@heroui/react";
import { Github, Instagram, Linkedin } from "lucide-react";
import React from "react";
import MediumIcon from "../icons/MediumIcon";

const social_links = [
  {
    icon: <Github size={20} />,
    href: "https://github.com/GezerGoktug",
  },
  {
    icon: <Instagram size={20} />,
    href: "https://www.instagram.com/goktug.gezerr",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/göktuğgezer",
  },
  {
    icon: <MediumIcon color="white" />,
    href: "https://medium.com/@ggezer780",
  },
];
const Footer = () => {
  return (
    <footer className="">
      <div className="container  py-8 col-reverse-center gap-4 md:flex-row md:justify-between">
        <span className="italic max-xs:text-sm">
          &#169; 2025 Göktuğ Gezer All Rights Reserved
        </span>

        <div className="row-center gap-3">
          {social_links.map(({ icon, href }, i) => (
            <Link
              href={href}
              target="_blank"
              key={"footer_social_media_links_" + i}
            >
              <Button variant="bordered" isIconOnly>
                {icon}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
