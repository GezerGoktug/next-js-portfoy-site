import { Card, CardBody, Image } from "@heroui/react";
import {
  BriefcaseBusiness,
  Building2,
  Calendar,
  GraduationCap,
  University,
} from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";
import Seperator from "../common/Seperator";

const EducationAndWorkExperienceSection = ({
  isShowMediumScreen = true,
}: {
  isShowMediumScreen?: boolean;
}) => {
  return (
    <>
      <div
        className={`w-full mt-12 ${
          isShowMediumScreen ? "max-lg:hidden" : "lg:hidden"
        }`}
      >
        <MotionWrapper
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          initial={{ x: 40, opacity: 0, filter: "blur(5px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="row-center  gap-6 mb-10"
        >
          <div className="ms-2 bg-foreground-100 rounded-full outline outline-2 outline-foreground-100 outline-offset-4  ">
            <GraduationCap className="p-2 size-10 xs:size-12" />
          </div>
          <h6 className="relative text-lg xs:text-xl font-semibold py-1 xs:py-2 border-2 border-l-0 rounded-e-lg border-foreground-100 -ms-7  ps-5 xs:ps-7 pe-6">
            Educations
          </h6>
          <div className="h-[2px] flex-1  -ms-6 bg-foreground-100 my-auto" />
        </MotionWrapper>
        <div className="grid grid-cols-1 xls:grid-cols-2 gap-2">
          <MotionWrapper
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            initial={{ y: 40, opacity: 0, filter: "blur(5px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-3 border-2 border-foreground-300/50 p-4 rounded-lg bg-gradient-to-br from-zinc-900 to-stone-950"
          >
            <div className="h-max bg-foreground-300/50 rounded-full  border-2 border-foreground-300/50   ">
              <University className="p-2 size-12" />
            </div>
            <div>
              <h6 className="font-semibold">Gazi University</h6>
              <div className="row-center gap-2 my-2">
                <Calendar size={15} />
                <span className="font-light italic text-sm text-foreground-600">
                  2023 - 2027
                </span>
              </div>
              <p className="text-sm ">
                I will study computer engineering at Gazi University
              </p>
            </div>
          </MotionWrapper>
          <MotionWrapper
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            initial={{ y: 40, opacity: 0, filter: "blur(5px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-3 border-2 border-foreground-300/50 p-4 rounded-lg bg-gradient-to-br from-zinc-900 to-stone-950"
          >
            <div className="h-max bg-foreground-300/50 rounded-full  border-2 border-foreground-300/50   ">
              <University className="p-2 size-12" />
            </div>
            <div>
              <h6 className="font-semibold">
                Atatürk Mesleki ve Teknik Anadolu Lisesi
              </h6>
              <div className="row-center gap-2 my-2">
                <Calendar size={15} />
                <span className="font-light italic text-sm text-foreground-600">
                  2018 - 2022
                </span>
              </div>
              <p className="text-sm ">
                I studied mechatronics in the field of industrial automation
                technologies at a vocational high school in high school.
              </p>
            </div>
          </MotionWrapper>
        </div>
        <MotionWrapper
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          initial={{ x: 40, opacity: 0, filter: "blur(5px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="row-center  gap-6 my-10"
        >
          <div className="ms-2 bg-foreground-100 rounded-full outline outline-2 outline-foreground-100 outline-offset-4  ">
            <BriefcaseBusiness className="p-2 size-10 xs:size-12" />
          </div>
          <h6 className="relative text-lg xs:text-xl font-semibold py-1 xs:py-2 border-2 border-l-0 rounded-e-lg border-foreground-100 -ms-7 ps-5 xs:ps-7 pe-6">
            Work Experience
          </h6>
          <div className="h-[2px] flex-1  -ms-6 bg-foreground-100 my-auto" />
        </MotionWrapper>
        <div className="grid grid-cols-1 xls:grid-cols-2 gap-2">
          <MotionWrapper
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            initial={{ y: 40, opacity: 0, filter: "blur(5px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-3 border-2 border-foreground-300/50 p-4 rounded-lg bg-gradient-to-br from-zinc-900 to-stone-950"
          >
            <div className="h-max bg-foreground-300/50 rounded-full  border-2 border-foreground-300/50   ">
              <Building2 className="p-2 size-12" />
            </div>
            <div>
              <h6 className="font-semibold">TEI - Tusaş Motor Sanayi A.Ş</h6>
              <div className="row-center gap-2 my-2">
                <Calendar size={15} />
                <span className="font-light italic text-sm text-foreground-600">
                  2022 - 2023
                </span>
              </div>
              <p className="text-sm ">
                After high school, I worked in the defense industry for 6 months
                as an intern and 4 months as a permanent technician
                <br />
                Then I left because I wanted to continue my education and
                improve myself in the software field
              </p>
            </div>
          </MotionWrapper>
          <MotionWrapper
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            initial={{ y: 40, opacity: 0, filter: "blur(5px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-3 border-2 border-foreground-300/50 p-4 rounded-lg bg-gradient-to-br from-zinc-900 to-stone-950"
          >
            <div className="h-max bg-foreground-300/50 rounded-full  border-2 border-foreground-300/50   ">
              <Building2 className="p-2 size-12" />
            </div>
            <div>
              <h6 className="font-semibold">Yorglass </h6>
              <div className="row-center gap-2 my-2">
                <Calendar size={15} />
                <span className="font-light italic text-sm text-foreground-600">
                  2021
                </span>
              </div>
              <p className="text-sm ">
                As part of my high school internship, I worked as a technician
                in an intern position for 4 months
              </p>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </>
  );
};

const About = () => {
  return (
    <div
      id="about"
      className="relative bg-gradient-to-br from-zinc-900 to-stone-950 py-24"
    >
      <div className="container ">
        <h3 className="text-center z-0 w-max mx-auto text-4xl relative  font-semibold mb-12">
          <span className=" -z-[1] inline-block bg-skew after:bg-gradient-to-br after:from-zinc-800 after:to-stone-800 ">
            About Me
          </span>
        </h3>
        <Card
          isBlurred
          className="border-none !bg-background/10 -mx-4 px-0 py-6  md:px-6 "
          shadow="sm"
        >
          <CardBody className="overflow-hidden">
            <div className="flex  flex-col md:flex-row gap-8 xl:gap-12">
              <MotionWrapper
                whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                initial={{ y: 40, opacity: 0, filter: "blur(5px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Image
                  alt="Album cover"
                  className="ms-2 object-cover  size-56 xs:size-72 md:size-56 lg:size-72 xl:size-96 outline outline-offset-4 outline-foreground-100 shadow-lg shadow-foreground-200"
                  radius="full"
                  src="/profile.jpg"
                />
              </MotionWrapper>
              <div className="flex-1 col-start gap-6 overflow-hidden">
                <MotionWrapper
                  whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                  initial={{ x: -40, opacity: 0, filter: "blur(5px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  as="h6"
                  className="text-3xl font-semibold italic"
                >
                  Why am I ?
                </MotionWrapper>

                <MotionWrapper
                  as="p"
                  whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  initial={{ y: 40, opacity: 0, filter: "blur(5px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Hello, I am Göktuğ Gezer. I am currently studying computer
                  engineering at Gazi University. I am a developer who loves
                  software and is willing to learn and research. I am improving
                  myself in the fields of web development and artificial
                  intelligence.
                </MotionWrapper>
                <EducationAndWorkExperienceSection />
              </div>
            </div>
            <EducationAndWorkExperienceSection isShowMediumScreen={false} />
          </CardBody>
        </Card>
      </div>
      <Seperator />
    </div>
  );
};

export default About;
