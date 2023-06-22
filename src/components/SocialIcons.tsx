import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {FiGithub, FiLinkedin, FiInstagram} from 'react-icons/fi';
function SocialIcons(){
	const socialLinks = [
		{
			name: "Github",
			icon: <FiGithub/>,
			link: "https://www.github.com/ngogiaphat"
		},
		{
      name: "LinkedIn",
      icon: <FiLinkedin/>,
      link: "https://www.linkedin.com/in/ngô-gia-phát-25711623a/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram/>,
      link: "https://www.instagram.com/sg_11_09/",
    },
	];
	return(
		<motion.div className='social-icons' initial= {{opacity: 0}} animate = {{opacity: 1}} transition={{duration: 0.3, ease: "backInOut", delay: 1.95}}>
			<ul className='social-icons-list'>
				{socialLinks.map(({name, icon, link}) => (
					<li key={name} title={name} className='social-icons-list-item'>
						<Link href={link} className='social-icons-list-item-link'>
							{icon}
						</Link>
					</li>
				))}
			</ul>
		</motion.div>
	);
};
export default SocialIcons;