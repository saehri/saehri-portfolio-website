'use client';

import { motion } from 'framer-motion';

const heroText =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, maiores recusandae. Eius officiis, sapiente beatae porro molestias at enim temporibus ratione fuga aperiam aut consectetur possimus quis nobis in. Distinctio, magni soluta explicabo nulla facilis cumque?';

const containerVariants = {
	open: { opacity: 1, transition: { staggerChildren: 0.04 } },
	close: { opacity: 0 },
};

const itemVariants = {
	open: { opacity: 1, y: 0, transition: { damping: 15, stiffness: 80 } },
	close: { opacity: 0, y: 10 },
};

export default function HeroAnimatedText() {
	return (
		<motion.p
			initial="close"
			animate="open"
			variants={containerVariants}
			className="text-xl leading-tight tracking-tight flex flex-wrap gap-x-1 text-slate-950"
		>
			{heroText.split(' ').map((text, index) => (
				<motion.span variants={itemVariants} key={index}>
					{text}
				</motion.span>
			))}
		</motion.p>
	);
}
