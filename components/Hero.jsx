import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
const Hero = () => {
  return (
    <section className="pb-30 pt-5 xl:py-24 h-[84vh] xl:pt-12 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 lg:mx-0  text-center md:text-left ">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, My Name is Ilyas Farkhane</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              React JS Developer and UI/UX Designer.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2 text-white">
                  Contact Me
                  <Send size={18} />{" "}
                </Button>
              </Link>
              <Link href="/hero/IlyasFarkhane.pdf" download>
                <Button
                  variant="secondary"
                  className="gap-x-2  hover:bg-primary "
                >
                  Download CV
                  <Download size={18} />{" "}
                </Button>
              </Link>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden md:flex relative -top-4">
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={1}
              badgeText="Years Of Experience"
            />
            <Badge
              containerStyles="absolute top-[90%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={6}
              badgeText="Finished Projects"
            />
            <Badge
              containerStyles="absolute top-[55%] -right-2"
              icon={<RiTeamFill />}
              endCountNum={6}
              badgeText="Happy Clients"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom -top-6"
              imgSrc="/hero/dev.png"
              width={510} // Specify the width of the image
              height={462} // Specify the height of the image
            />
          </div>
          <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
