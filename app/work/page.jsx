'use client'
import { motion } from "framer-motion"
import { useState } from "react"
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {BsGithub,BsArrowUpRight} from 'react-icons/bs'
import { Tooltip,TooltipContent,TooltipTrigger,TooltipProvider } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects=[
	{
		num:'01',
		category:'web development',
		title:'project 1',
		description:'mnlwecborebv clqwebcoe n2ehfp f3pejfp 3projf[',
		stack:[{name:'Html'},{name:'css'}, {name:'react'}, {name:'js'}],
		live:'',
		image:'/assets/photo.png',
		github:''
	},
	{
		num:'02',
		category:'web development',
		title:'project 2',
		description:'cdwnbfe fekjfbp3i effovhp13 wrofp3ir rvjnbp3irhv',
		stack:[{name:'Html'},{name:'css'}, {name:'next'}, {name:'js'}],
		live:'',
		image:'/assets/photo.png',
		github:''
	},
	{
		num:'03',
		category:'mobile development',
		title:'project 3',
		description:'fc3rio3f 3fnp3of ewjnp',
		stack:[{name:'Html'},{name:'css'}, {name:'react native'}, {name:'js'}],
		live:'',
		image:'/assets/photo.png',
		github:''
	},
	{
		num:'04',
		category:'web development',
		title:'project 4',
		description:'sdnl ckwejnce cjbdcoc cwdbc',
		stack:[{name:'Html'},{name:'css'}, {name:'react'}, {name:'ts'}],
		live:'',
		image:'/assets/photo.png',
		github:''
	}
]

const Work = () => {
	const [project, setProject] = useState(projects[0])

const handleSlideChange = (swiper)=>{

		const currentIndex = swiper.activeIndex
		setProject(projects[currentIndex])
}

	return <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4 , duration:0.4 ,ease:'easeIn'}}} 
	   className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
	>
		<div className="container mx-auto">
			<div className="flex flex-col xl:flex-row xl:gap-[30px]">
				<div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none xl:h-[460px]">
					<div className="flex flex-col gap-[30px] h-[50%]">
						{/* num */}
						<div className="text-8xl font-extrabold leading-none text-outline text-transparent">{project.num}</div>

						{/* category */}
						<h2 className="font-bold text-white group-hover:text-accent capitalize transition-all duration-200 leading-none text-[42px]">{project.category}</h2>

						{/* description */}
						<p className="text-white/60">{project.description}</p>

						{/* tech stack */}
						<ul className="flex gap-4">
							{project.stack.map((item,index)=>(
								<li key={index} className="text-accent text-xl">
									{item.name}
									{index!==project.stack.length-1 && ','}
								</li>
							))}
						</ul>

						{/* border */}
						<div className=" border-white/20 border"></div>
					<div className="flex items-center gap-4">
								{/* buttons */}
								<Link href={project.live}>
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
								</Link>

								{/* git */}
								<Link href={project.github}>
								<TooltipProvider delayDuration={100}>
									<Tooltip>
										<TooltipTrigger className="w-[70px] h-[70px] rounded-full items-center group bg-white/5 flex justify-center">
										 <BsGithub className="text-white text-3xl group-hover:text-accent"/>
										</TooltipTrigger>
										<TooltipContent>
											<p>Live Project</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
								</Link>
							</div>
						</div>
				</div>

				{/* slides */}
			    <div className="w-full xl:w-[50%]">
					<Swiper slidesPerView={1} spaceBetween={10} className="mb-12 gap-10"
					onSlideChange={handleSlideChange}
					>
						{projects.map((item,index)=>(
							<SwiperSlide key={index} className="w-full">
								<div className="h-[460px] relative flex justify-center items-center bg-pink-50/20 group"> 
								{/* overlay */}
								<div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 xl:max-h-[460px] ">
								</div>

								{/* image */}
								<div className="relative w-full h-full ">
									<Image src={project.image} alt="" fill className="object-contain"/>
								</div>
				
							</div>
							</SwiperSlide >
						))}
						{/* slider button */}
						<WorkSliderBtns containerStyles='flex absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none gap-6'
						btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
						/>

					</Swiper>
					
				</div>
			</div>
			</div>
		</motion.section >
}

export default Work
