'use client';

import { motion } from 'framer-motion';
import WorkCard from '../work-card';

export default function SortableWork() {
	return (
		<>
			<motion.section
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				className="p-1 rounded-3xl flex flex-col gap-2 bg-white"
			>
				<h2 className="text-slate-950 bg-slate-200 w-max text-xl p-1 px-2 flex items-center gap-2 rounded-full">
					My Latest Works
				</h2>
			</motion.section>
			<motion.section
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
				className="modal p-2 rounded-3xl flex flex-col gap-2 bg-white"
			>
				<WorkCard
					description="Example of description"
					id={1}
					imageUrl=""
					title="Example of title"
				/>
				<WorkCard
					description="Example of description"
					id={1}
					imageUrl=""
					title="Example of title"
				/>
				<WorkCard
					description="Example of description"
					id={1}
					imageUrl=""
					title="Example of title"
				/>
			</motion.section>
		</>
	);
}
