'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type PointerTargetTypes = 'link' | 'media' | 'modal' | undefined;

export default function CustomCursor() {
	const [pointerTarget, setPointerTarget] = useState<PointerTargetTypes>();

	const translateX = useMotionValue(0);
	const translateY = useMotionValue(0);

	const pointerScale = {
		link: 0,
		media: 4,
		modal: 4,
	};

	useEffect(() => {
		function handleMouseMove(ev: MouseEvent) {
			// 8 is not magic number, its the width of the pointer / 2 -
			// we use this number to position the pointer to the center of the mouse.
			translateX.set(ev.clientX - 8);
			translateY.set(ev.clientY - 8);

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
			style={{
				x: useSpring(translateX, { stiffness: 80, damping: 15, mass: 0.1 }),
				y: useSpring(translateY, { stiffness: 80, damping: 15, mass: 0.1 }),
			}}
			animate={{
				scale: pointerTarget !== undefined ? pointerScale[pointerTarget] : 1,
				transition: { damping: 15, stiffness: 80 },
			}}
			className="mix-blend-difference hidden lg:block fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none bg-white"
		>
			<div></div>
		</motion.div>
	);
}
