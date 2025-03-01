import MyWriting from '@/components/work/my-writing';
import SortableWork from '@/components/work/sortable-work';

export default function Work() {
	return (
		<main className="max-w-screen-sm mx-4 sm:mx-auto pt-2 flex flex-col gap-2">
			<SortableWork />
			<MyWriting />
		</main>
	);
}
