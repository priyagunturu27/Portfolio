"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "web development",
    title: "ai mock interview application",
    description:
      "Ai Mock Interview Application leverages Google Gemini AI to create realistic interview scenarios, offering users the opportunity to practice, receive evaluations, and get personalized feedback. Seamless Authentication, powered by Clerk, ensures secure and efficient access control for users. The application features an intuitive, modern interface built with Shadcn UI, providing a smooth and responsive user experience. All user progress, interview analytics, and configurations are securely managed in Google Firebase Firestore. Additionally, Dynamic Interview Customization allows users to tailor mock interviews based on job roles, difficulty levels, and specific domains, enhancing the preparation experience.",
    stack: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "TailwindCss" },
      { name: "ShadCn" },
      { name: "GoogleGeminiAI" },
      { name: "GoogleFirebaseFirestore" },
      { name: "ClerkAuthentication" },
    ],
    image: "/assets/ai-mock-interview.png",
    github: "https://github.com/priyagunturu27/AI-Mock-Interview-App.git",
  },
  {
    num: "02",
    category: "mobile development",
    title: "meals receipe app",
    description:
      "The Meals App is a React-based application designed to help users discover, browse, and explore a variety of meal recipes. It allows users to search for meals based on specific criteria like ingredients, meal types, or cuisine. The app provides detailed information about each meal, including ingredients, instructions, and possibly nutritional information. Users can easily browse through different categories of meals and save their favorite meals for future reference. With an intuitive user interface and dynamic functionality, the Meals App aims to enhance the meal planning and cooking experience by making it easy to find and organize meals.",
    stack: [
      { name: "ReactNative" },
      { name: "JavaScript" },
      { name: "ReactNavigation" },
      { name: "ContextApi" },
      { name: "StyleSheet" },
      { name: "expo" },
    ],
    image: "/assets/meals-app.png",
    github: "https://github.com/priyagunturu27/Meals-App.git",
  },
  {
    num: "03",
    category: "web development",
    title: "react fitness application",
    description: "The React Fitness Application is a static, single-page application (SPA) designed to provide a comprehensive fitness tracking experience within one page. It features multiple sections, allowing users to navigate seamlessly between different areas of the app without needing to reload the page. These sections might include workout logging, tracking calories burned, setting fitness goals, and viewing progress. The app is built using React to manage the user interface and provide smooth, dynamic navigation across the various sections. Styled with Tailwind CSS, it offers a modern, responsive design that adapts to different screen sizes, ensuring a great user experience across devices. The single-page structure enables users to easily interact with the app while maintaining a simple and organized layout.",
    stack: [
      { name: "React" },
      { name: "TailwindCss" },
      { name: "Vite" },
      { name: "ts" },
      { name: "HeroIcons" },
      { name: "FramerMotion" },
      { name: "ReactAnchorLinkSmoothScroll" },
    ],
    image: "/assets/react-fitness-app.png",
    github: "https://github.com/priyagunturu27/React-Fitness-Application.git",
  },
  {
    num: "04",
    category: "mobile development",
    title: "game app",
    description: `The Game App is an interactive number-guessing quiz game designed to challenge user's ability to make accurate numerical predictions. Upon selecting a number, the game displays a random number and prompts the user to determine whether the displayed number is above or below their selected value. The game continues in this manner, providing feedback after each guess, until the user correctly guesses the displayed number, at which point the game concludes. This app offers an engaging, straightforward experience that tests users' decision-making skills in a dynamic, real-time setting.`,
    stack: [
      { name: "ReactNative" },
      { name: "StyleSheet" },
      { name: "JavaScript" },
      { name: "expo" },
    ],
    image: "/assets/game-app.png",
    github: "https://github.com/priyagunturu27/game-App.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none xl:h-[460px] gap-[30px]">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* num */}
              <div className="text-8xl font-extrabold leading-none text-outline text-transparent">
                {project.num}
              </div>

              {/* category */}
              <h2 className="font-bold text-white group-hover:text-accent capitalize transition-all duration-200 leading-none text-[42px]">
                {project.category}
              </h2>
			  <h3 className="text-accent text-xl capitalize">{project.title}</h3>

              {/* description */}
              <p className="text-white/60">{project.description}</p>

              

          

             
            </div>
          </div>

          {/* slides */}
          <div className="w-full xl:w-[50%] ">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              className="mb-12 gap-10"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative flex justify-center items-center group">
                    {/* image */}
                    <div className="relative w-full h-full ">
						
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider button */}
              <WorkSliderBtns
                containerStyles="flex absolute right-0 bottom-[calc(80%_-_30px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none gap-6"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                disabled=''
                projects={projects}
                project={project}
              />
            </Swiper>
            {/* tech stack */}
            <div className="pb-4 xl:w-[50%]">
              <span className="text-xl text-white/60 text-center">TechStack</span>
             <ul className="grid gap-x-36 grid-cols-2">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-accent text-xl">
                    {item.name}
                    {/* {index !== project.stack.length - 1 && ","} */}
                  </li>
                ))}
              </ul>
            </div>
             {/* border */}
             <div className="border-white/20 border mb-4"></div>
              <div className="flex items-center gap-4">
                {/* buttons */}
                {/* <Link href={project.live}>
								<TooltipProvider delayDuration={100}>
									<Tooltip>
										<TooltipTrigger className="w-[70px] h-[70px] rounded-full items-center group bg-white/5 flex justify-center">
										 <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
										</TooltipTrigger>
										<TooltipContent>
											<p>Live Project</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
								</Link> */}

                {/* git */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full items-center group bg-white/5 flex justify-center">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{project.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
           
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Work;
