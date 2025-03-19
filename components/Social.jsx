import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const socials = [
	{
		icon: <FaGithub />,
		path: 'https://github.com/priyagunturu27',
	},
	{
		icon: <FaLinkedinIn />,
		path: 'https://www.linkedin.com/in/priya-g-7736061b7/',
	},
]

const Social = ({ containerStyles, iconStyles }) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => (
				<Link
					key={index}
					href={item.path}
					target='_blank'
					className={iconStyles}>
					{item.icon}
				</Link>
			))}
		</div>
	)
}

export default Social
