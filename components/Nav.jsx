'use client'

import { capitalize } from '@material-ui/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

const Nav = () => {
	const pathname = usePathname()

	return (
		<nav className='flex gap-8'>
			{links.map((link, index) => (
				<Link
					href={link.path}
					key={index}
					className={`${
						pathname == link.path && 'text-accent border-accent border-b-2'
					} capitalize font-medium hover:text-accent-hover transition-all `}>
					{link.name}
				</Link>
			))}
		</nav>
	)
}

export default Nav
