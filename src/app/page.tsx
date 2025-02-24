import HeroSection from '@/components/home/hero-section';
import WorkSection from '@/components/home/work-section';

export default function Home() {
	return (
		<main className="max-w-screen-sm mx-4 sm:mx-auto pt-2 flex flex-col gap-2">
			<HeroSection />
			<WorkSection />
		</main>
	);
}
