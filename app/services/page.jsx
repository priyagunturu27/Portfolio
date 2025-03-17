'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { BsArrowDownRight } from 'react-icons/bs'

const services = [
	{
		num: '01',
		title: 'Web Development',
		description:
			'I specialize in building modern web applications using React, TypeScript (TS), JavaScript (JS), and Next.js for fast, SEO-optimized solutions. I use React Query for efficient data management and GraphQL to streamline data fetching. With Next.js, I enhance performance through server-side rendering (SSR) and static site generation (SSG). I prioritize code quality with Jest and React Testing Library (RTL) for robust testing. Additionally, I focus on UI/UX optimization and seamless navigation, ensuring smooth, responsive, and accessible user experiences.',
		href: '',
	},
	{
		num: '02',
		title: 'Mobile Development',
		description:
			'I build high-performance mobile apps using React Native, leveraging a single codebase for both iOS and Android platforms. With a strong focus on optimization, I implement efficient performance strategies like lazy loading, image optimization, and memory management. I use React Navigation to create smooth and intuitive navigation flows, providing a seamless user experience across devices. From handling complex states with Redux or React Query to optimizing native modules, I deliver polished, fast, and scalable mobile applications.',
		href: '',
	},
]

const Services = () => {
	return (
		<section className='min-h-[80vh] flex flex-col py-12 xl:py-0 justify-center'>
			<div className='container mx-auto'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
					}}
					className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
					{services.map((service, index) => (
						<div
							key={index}
							className='flex gap-6 flex-1 flex-col justify-center group '>
								{/* number and link */}
							<div
								className='flex
								justify-between
								w-full'>
								<div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
									{service.num}
								</div>
								<Link
									href={service.href}
									className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent flex justify-center items-center hover:rotate-45 transition-all duration-500 '>
									<BsArrowDownRight className='text-3xl text-primary' />
								</Link>
							</div>
							{/* title */}
							<h2 className='text-[42px] font-bold leading-none text-white  group-hover:text-accent transition-all duration-500'>
								{service.title}
							</h2>
							{/* description */}
							<p className='text-white/60'>{service.description}</p>
							{/* border */}
							<div className='border-b border-white/80 w-full'></div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default Services
