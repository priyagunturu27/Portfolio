import Photo from '@/components/Photo'
import Social from '@/components/Social'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

const Home = () => {
	return (
		<section className='h-full'>
			<div className='container mx-auto h-full'>
				home page
				<div className='flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24'>
					{/* text */}
					<div className='text-center xl:text-left'>
						<span className='text-xl'>Software Developer</span>
						<h1 className='h1'>
							Hello I'm <br />{' '}
							<span className='text-accent'>Priya Gunturu</span>
						</h1>
						<p className='max-w-[500px] mb-9 text-white/80'>
							I'm an experienced front-end developer building fast, scalable and
							user-friendly web & mobile applications.
						</p>

						{/* button and socials */}
						<div className='flex flex-col items-center xl:flex-row gap-8'>
							<Button
								variant='outline'
								className='uppercase flex items-center gap-2'
								size='lg'>
								<span>Download CV</span>
								<FiDownload className='text-xl' />
							</Button>
							<div className='mb-8 xl:mb-0'>
								<Social
									containerStyles='flex gap-6'
									iconStyles='w-9 h-9 flex justify-center items-center border border-accent text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500 rounded-full'
								/>
							</div>
						</div>
					</div>

					<div>
						<Photo />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home
