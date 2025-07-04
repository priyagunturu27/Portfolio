'use client'
import CountUp from 'react-countup'

const stats = [
	{
		num: 4,
		text: 'Years of Experience',
	},
	{
		num: 17,
		text: 'Technologies mastered',
	},
	{
		num: 8,
		text: 'Projects completed',
	},
]

const Stats = () => {
	return (
		<section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
			<div className='container mx-auto'>
				<div className='flex flex-wrap max-w-[80vw] mx-auto xl:max-w-none gap-6'>
					{stats.map((item, index) => (
						<div
							key={index}
							className='flex-1 flex gap-4 items-center justify-center xl:justify-start'>
							<CountUp
								end={item.num}
								duration={5}
								delay={2}
								className='text-4xl xl:text-6xl font-bold'
							/>
							<p
								className={`${
									item.text.length > 15 ? 'max-w-[100px]' : 'max-w-[150px]'
								} leading-snug text-white/80`}>
								{item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Stats
