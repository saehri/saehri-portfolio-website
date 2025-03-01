'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type PointerTargetTypes = 'link' | 'media' | 'modal' | undefined;

export default function CustomCursor() {
	const [pointerTarget, setPointerTarget] = useState<PointerTargetTypes>();

	const translateX = useMotionValue(0);
	const translateY = useMotionValue(0);

	useEffect(() => {
		function handleMouseMove(ev: MouseEvent) {
			const cursorOffset = pointerTarget ? 16 : 8;

			translateX.set(ev.clientX - cursorOffset);
			translateY.set(ev.clientY - cursorOffset);

			// Make sure we read the target as HTML Element
			const target = ev.target as HTMLElement | null;

			// This outer if else element is used for type safety
			// You can remove it and you will be fine
			if (target) {
				const targetClasses = target.classList;

				if (targetClasses.contains('link')) {
					setPointerTarget('link');
				} else if (targetClasses.contains('media')) {
					setPointerTarget('media');
				} else if (targetClasses.contains('modal')) {
					setPointerTarget('modal');
				} else {
					setPointerTarget(undefined);
				}
			} else {
				setPointerTarget(undefined);
			}
		}

		window.addEventListener('mousemove', handleMouseMove);

		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<motion.div
			aria-hidden="true"
			style={{
				x: useSpring(translateX, { stiffness: 80, damping: 15, mass: 0.1 }),
				y: useSpring(translateY, { stiffness: 80, damping: 15, mass: 0.1 }),
			}}
			animate={{
				width: pointerTarget !== undefined ? 32 : 16,
				height: pointerTarget !== undefined ? 32 : 16,
				transition: { damping: 15, stiffness: 80 },
			}}
			className="hidden lg:grid fixed top-0 left-0 rounded-full pointer-events-none bg-yellow-500 border-[.5px] border-slate-950 place-items-center"
		>
			<motion.img
				animate={{
					opacity: pointerTarget ? 1 : 0,
					scale: pointerTarget ? 1 : 0,
					rotate: pointerTarget ? 0 : 45,
				}}
				src="/arrow_north_east.svg"
				alt=""
				className="w-5 h-5 object-contain object-center"
			/>
		</motion.div>
	);
}
