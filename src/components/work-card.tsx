type Props = {
	id: number;
	title: string;
	imageUrl: string;
	description: string;
};

export default function WorkCard({ title, imageUrl, description }: Props) {
	return (
		<article className="modal p-4 rounded-2xl flex gap-4 bg-slate-200">
			<div className="modal w-1/4 rounded-lg shrink-0 bg-slate-100">
				<div className="modal w-full pt-[100%]"></div>
			</div>

			<div className="modal flex flex-col justify-between">
				<h4 className="modal text-slate-950 text-xl tracking-tight leading-5">
					Lorem ipsum dolor sit amet.
				</h4>

				<p className="modal text-slate-700 text-lg tracking-tight leading-5">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
					sapiente, incidunt eligendi consequatur laborum corrupti. Culpa.
				</p>
			</div>
		</article>
	);
}
