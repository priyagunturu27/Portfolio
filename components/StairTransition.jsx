'use client'

import { motion, AnimatePresence, easeInOut } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Stairs from './Stairs'

const StairTransition = () => {
	const pathname = usePathname()
	return (
		<>
			<AnimatePresence mode='wait'>
				<div key={pathname}>
					<div className='w-screen h-screen z-40 pointer-events-none fixed top-0 right-0 left-0 flex'>
						<Stairs />
					</div>
					<motion.div
						className='w-screen h-screen fixed bg-primary top-0 pointer-events-none'
						initial={{ opacity: 1 }}
						animate={{
							opacity: 0,
							transition: { delay: 1, duration: 0.4, ease: easeInOut },
						}}
					/>
				</div>
			</AnimatePresence>
		</>
	)
}

export default StairTransition
