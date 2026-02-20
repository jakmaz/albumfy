import CTA from "@/components/landing/cta";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Philosophy from "@/components/landing/philosophy";
import Result from "@/components/landing/result";
import WhyAlbumfy from "@/components/landing/why-albumfy";
import Navbar from "@/components/navbar";

const Index = () => {
	return (
		<div className="min-h-screen bg-[#e2ddd3]">
			{/* Subtle grain overlay - reduced opacity */}
			<div
				className="fixed inset-0 pointer-events-none z-9999 opacity-[0.03]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg%27%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
			/>

			<Navbar />

			<main>
				<Hero />
				<Philosophy />
				<WhyAlbumfy />
				<Result />
				<CTA />
			</main>

			<Footer />
		</div>
	);
};

export default Index;
