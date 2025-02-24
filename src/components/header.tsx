'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
	const pathname = usePathname();

	return (
		<header className="sticky mt-4 top-4 mx-auto flex flex-row justify-between w-max sm:w-full max-w-screen-sm py-2 px-[10px] rounded-full bg-white">
			<span></span>

			<nav>
				<ul className="flex flex-row items-center gap-2">
					<li>
						<NavLink href="/" currentPathname={pathname}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink href="/work" currentPathname={pathname}>
							Work
						</NavLink>
					</li>
					<li>
						<NavLink href="/contact" currentPathname={pathname}>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

interface NavLinkProps extends React.HTMLProps<HTMLAnchorElement> {
	currentPathname: string;
	href: string;
}

const animationEasing = [0.57, 0.32, 0.55, 0.83];

function NavLink(props: NavLinkProps) {
	const isActive = props.currentPathname === props.href;

	return (
		<Link href={props.href}>
			<motion.div
				initial={false}
				animate={{
					backgroundColor: isActive ? 'rgb(34,197,94)' : 'rgb(226,232,240)',
				}}
				transition={{ ease: animationEasing }}
				className="p-1 px-2 flex items-center gap-2 rounded-full"
			>
				<div className="tracking-tight text-xl">{props.children}</div>

				<motion.div className="w-6 h-6 rounded-full relative border border-slate-950">
					<motion.span
						initial={{ x: '-50%', y: '-50%' }}
						animate={{ rotate: isActive ? 180 : 0, x: '-50%', y: '-50%' }}
						transition={{ ease: animationEasing }}
						className="w-4 h-[1px] bg-slate-950 absolute top-1/2 left-1/2"
					></motion.span>

					<motion.span
						initial={{ x: '-50%', y: '-50%' }}
						animate={{ rotate: isActive ? 270 : 0, y: '-50%', x: '-50%' }}
						transition={{ ease: animationEasing }}
						className="w-[1px] h-4 bg-slate-950 absolute top-1/2 left-1/2"
					></motion.span>
				</motion.div>
			</motion.div>
		</Link>
	);
}
