import WritingCard from './writing-card';

export default function MyWriting() {
	return (
		<>
			<section className="p-1 rounded-3xl flex flex-col gap-2 bg-white">
				<h2 className="text-slate-950 bg-slate-200 w-max text-xl p-1 px-2 flex items-center gap-2 rounded-full">
					My Latest Article
				</h2>
			</section>

			<section className="modal p-2 rounded-3xl gap-2 bg-white grid grid-cols-1 md:grid-cols-3">
				<WritingCard />
				<WritingCard />
				<WritingCard />
			</section>
		</>
	);
}
