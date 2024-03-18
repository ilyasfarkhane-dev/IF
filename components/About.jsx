import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  HomeIcon,
} from "lucide-react";
const infoDta = [
  {
    icon: <User2 size={20} />,
    text: "Ilyas Farkhane",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+212 687678104",
  },
  {
    icon: <MailIcon size={20} />,
    text: "ilyasfarkhane@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born On 25 May, 2001",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor degree, Mathematics and Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Morocco, Casablanca",
  },
];
const qualificationData = [
  {
    title: "Education",
    data: [
      {
        university: "3W Academy Maroc",
        qualification: "MERN Bootcamp Certificate, Information Technology",
        years: "2024-currently",
      },
      {
        university: "University Hassan II",
        qualification: "Bachelor degree, Mathematics and Computer Science",
        years: "2019-2022",
      },

      {
        university: "Mohamed VI High School",
        qualification: "High School Diploma, Mathematical Sciences (A)",
        years: "2019",
      },
    ],
  },
  {
    title: "Experiences",
    data: [
      {
        Company: "ARK-X Talent Factory",
        role: "MERN Full-Stack Developer-InternshipARK",
        years: "2024-currently",
      },
      {
        Company: "WEB AGENCY MAROC",
        role: "Front-End Developer-InternshipARK",
        years: "Aug/2023-Oct2023",
      },

      {
        Company: "BRIGHTEN CONSULTATION",
        role: "Front-End Developer-Internship",
        years: "Jan 2023 - Mar 2023",
      },
    ],
  },
];
const skillData = [
  {
    title: "Skills",
    data: [
      {
        imgPath: "/about/mongodb.svg",
      },
      {
        imgPath: "/about/expressjs.svg",
      },
      {
        imgPath: "/about/reactjs.svg",
      },
      {
        imgPath: "/about/nodejs.svg",
      },
      {
        imgPath: "/about/html.svg",
      },
      {
        imgPath: "/about/css.svg",
      },
      {
        imgPath: "/about/js.svg",
      },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/github1.svg",
      },
      {
        imgPath: "/about/postman.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
    ],
  },
];
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  //   console.log(getData(qualificationData, "Experiences"));
  return (
    <section className="xl:h-[860px] pt-9 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-6 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] 
            bg-no-repeat relative"
              imgSrc="/about/dev.png"
              width={505}
              height={505}
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-2">
                      Delivering Exceptional Service for Over a Decade
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:max-0">
                      Specializing in creating intuitive websites with the
                      latest technology, I provide dynamic and captivating user
                      experiences that engage and delight.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-5">
                      {infoDta.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Langagues</div>
                      <div className="border-b border-border"></div>
                      <div>English, French, Arabic</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* education & experiences */}
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                      {/* experiences */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Experiences").title}
                          </h4>
                        </div>

                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Experiences").data.map(
                            (item, index) => {
                              const { Company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {Company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Education").title}
                          </h4>
                        </div>
                        {/* list */}

                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skills list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "Skills").data.map(
                          (item, index) => {
                            const { imgPath } = item;
                            return (
                              <div key={index}>
                                <Image
                                  src={imgPath}
                                  width={48}
                                  height={48}
                                  alt=""
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tolls */}
                    <h4 className="text-xl font-semibold mb-2 xl:text-left">
                      Tools
                    </h4>
                    <div className="border-b border-border mb-4"></div>
                    {/* tools list */}
                    <div className="flex gap-x-8 justify-center xl:justify-start">
                      {getData(skillData, "Tools").data.map((item, index) => {
                        const { imgPath } = item;
                        return (
                          <div key={index}>
                            <Image
                              src={imgPath}
                              width={48}
                              height={48}
                              alt=""
                              priority
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
