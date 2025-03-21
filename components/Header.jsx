'use client'
import { useState } from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'
import { Button } from './ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
	const [clicked,setClicked]= useState(false)
	const pathname= usePathname()
	
	return (
		<header className='py-8 xl:py-12 text-white'>
			<div className='container mx-auto flex justify-between items-center'>
				{/* LOGO */}
				<Link href='/'>
					<h1 className='text-2xl font-semibold'>
						Priya Gunturu<span className='text-accent'>.</span>
					</h1>
				</Link>

				{/* desktop nav and hire me button*/}
				<div className='hidden xl:flex items-center gap-8'>
					<Nav />
					<Link href='/contact'>
						<Button className={`${pathname==='/contact' ? 'bg-accent-hover hover:bg-accent-hover ' : ''}`}>Hire Me</Button>
					</Link>
				</div>

				{/* mobile nav */}

				<div className='xl:hidden'>
					<MobileNav />
				</div>
			</div>
		</header>
	)
}

export default Header
