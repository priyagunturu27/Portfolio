"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiReactquery,
  SiReactrouter,
  SiRedux,
} from "react-icons/si";

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description: "Hi, I am Priya. ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Priya Gunturu",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 (507)301-7390",
    },
    
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
   
	{
		fieldName: "Email",
		fieldValue: "gpriya.dev27@gmail.com",
	  },
	  {
		fieldName: "Location",
		fieldValue: "Minneapolis, MN",
	  },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description:
    "I have over 5 years of experience working as a front-end developer with react and react native being my core technologies.",
  items: [
    {
      company: "Cigna-Evernorth",
      position: "Software Developer",
      duration: "2022-Present",
    },
    {
      company: "Infosys",
      position: "Systems Engineer",
      duration: "2019-2022",
    },
	
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description: "I am a graduate. I did my Bachelor's in india from an autonomous insitution. I specialized in electrical and electronics.",
  items: [
    {
      institution: "Gayatri Vidya Parishad College of Engineering",
      degree: `Bachelor's of Technology`,
      duration: "2016-2020",
      Location: "India",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Over the years, I have learnt so many different things about front-end development, libraries, tools, techniques etc. Here are the major skillset of mine.",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiReactquery />,
      name: "react query",
    },
    {
      icon: <SiReactrouter />,
      name: "react router",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto border-yellow-200">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience"> Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
			{/* experience */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col text-center gap-[30px] xl:text-left">
                <h3 className="font-bold text-4xl">{experience.title}</h3>
                <p className="text-white/60">{experience.description}</p>

				<ScrollArea className='h-[400px]'>
				<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
					{experience.items.map((item,index)=>(
						<li key={index} className="bg-[#232329] flex h-[184px] flex-col justify-center items-center gap-1 py-6 px-10 xl:items-start">
							<span className="text-accent">{item.duration}</span>

							<h3 className="text-xl max-w-[260px] min-h-[60px]">{item.position}</h3>

							<div className="flex items-center gap-2">
								<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
								<p className="text-white/60">{item.company}</p>
							</div>
						</li>
					))}
				</ul>
			  </ScrollArea>

              </div>
			 
            </TabsContent>

			{/* skills */}
            <TabsContent value="skills" className="w-full h-full">
			<div className="flex flex-col  gap-[30px] ">

					<div className="flex flex-col text-center gap-[30px] xl:text-left">
					<h3 className="font-bold text-4xl">{skills.title}</h3>
                   <p className="text-white/60">{skills.description}</p>
				</div>
				<ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:gap-[30px] lg:grid-cols-4  gap-4 ">
					{skills.skillsList.map((skill,index)=>(
						<li key={index} className=" ">
							<TooltipProvider delayDuration={100}>
								<Tooltip >
									<TooltipTrigger className="w-full h-[120px] rounded-xl flex justify-center bg-[#232329] items-center group">
										<div className="text-6xl group-hover:text-accent transition-all duration-300 ">{skill.icon}</div>
									</TooltipTrigger >
									<TooltipContent>
										<p className=" capitalize">{skill.name}</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</li>
					))}
				</ul>
			

              </div>
            </TabsContent>

			{/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
			<div className="flex flex-col gap-[30px]">
				
				<h3 className="font-bold text-4xl">{about.title}</h3>
                <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">{about.description}</p>
				

				<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0 max-w-[900px]">
					{about.info.map((item,index)=>(
						<li key={index} className="flex justify-center items-center gap-4 xl:justify-start">
							<span className="text-white/60">{item.fieldName} </span>
							<span className="text-xl">{item.fieldValue}</span>
						</li>
					))}
				</ul>
              </div>
            </TabsContent>

			{/* education */}
            <TabsContent value="education" className="w-full ">
            <div className="flex flex-col text-center gap-[30px] xl:text-left">
                <h3 className="font-bold text-4xl">{education.title}</h3>
                <p className="text-white/60">{education.description}</p>

				<ScrollArea className='h-[400px]'>
				<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
					{education.items.map((item,index)=>(
						<li key={index} className="bg-[#232329] flex h-[184px] flex-col justify-center items-center gap-1 py-6 px-10 xl:items-start w-[400px]">
							<span className="text-accent">{item.duration}</span>

							<h3 className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>

							<div className="flex gap-3 items-center w-[400px]">
								<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
								<p className="text-white/60">{item.institution}</p>
							</div>
						</li>
					))}
				</ul>
			  </ScrollArea>

              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
