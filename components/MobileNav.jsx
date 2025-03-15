'use client'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'
const links = [
	{
		name: 'home',
		path: '/',
	},
	{
		name: 'services',
		path: '/services',
	},
	{
		name: 'work',
		path: '/work',
	},
	{
		name: 'resume',
		path: '/resume',
	},
	{
		name: 'contact',
		path: '/contact',
	},
]

const MobileNav = () => {
	const pathname = usePathname()

	return (
		<Sheet>
			<SheetTrigger className='flex justify-center items-center'>
				<CiMenuFries className='text-[32px] text-accent' />
			</SheetTrigger>
			<SheetContent>
				{/* logo */}
				<div className='mt-32 mb-40 text-center text-2xl'>
					<Link href='/'>
						<h1
							className='text-4xl
							font-semibold'>
							Priya<span className='text-accent'>.</span>
						</h1>
					</Link>
				</div>
				{/* nav */}
				<nav className='flex flex-col gap-8 justify-center items-center'>
					{links.map((link, index) => (
						<Link
							key={index}
							href={link.path}
							className={`${
								link.path == pathname && 'border-accent border-b-2 text-accent'
							} text-xl capitalize hover:text-accent transition-all`}>
							{link.name}{' '}
						</Link>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	)
}

export default MobileNav
