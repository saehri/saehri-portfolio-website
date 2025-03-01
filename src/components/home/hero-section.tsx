import HeroAnimatedText from './hero-section-animated-text';

export default function HeroSection() {
	return (
		<section className="p-4 rounded-3xl flex flex-col gap-32 bg-white">
			<div>
				<div className="w-60 h-60 rounded-lg bg-slate-100"></div>
			</div>

			<HeroAnimatedText />
		</section>
	);
}
