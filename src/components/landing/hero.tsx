import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<section className="min-h-screen flex items-center px-8 py-16">
			<div className="max-w-[1440px] mx-auto w-full flex items-center justify-center gap-44">
				{/* Left column - Text */}
				<div className="z-10 max-w-lg">
					<p
						className="font-mono text-xs uppercase tracking-widest mb-4"
						style={{ color: "#cc4422" }}
					>
						// Poster Lab Edition 2.0
					</p>
					<h1
						className="uppercase mb-8"
						style={{
							color: "rgb(19, 19, 19)",
							fontSize: "clamp(4rem, 10vw, 10rem)",
							fontWeight: 900,
							letterSpacing: "-0.04em",
							fontFamily: "Inter, sans-serif",
							lineHeight: "0.9",
						}}
					>
						ANALOG
						<br />
						SOUL
						<br />
						DIGITAL
						<br />
						PULP.
					</h1>
					<p className="text-lg font-medium text-neutral-700 mt-8">
						Transform your sonic library into tactile monoliths. We blend
						high-fidelity data with the raw imperfection of fibrous paper.
					</p>
					<Link
						to="/create"
						className="inline-block mt-10 px-12 py-5 text-white font-mono text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105"
						style={{
							background: "#cc4422",
							clipPath: "polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)",
						}}
					>
						Enter The Lab
					</Link>
				</div>

				{/* Right column - Monolith Visual */}
				<div className="hidden xl:block w-80 h-[500px] flex-shrink-0">
					<div
						className="relative w-full h-full"
						style={{ transform: "rotate(5deg)" }}
					>
						<div
							className="absolute inset-0 opacity-40"
							style={{
								background: "#f4f1ea",
								transform: "translate(30px, -30px)",
								boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
							}}
						/>
						<div
							className="absolute inset-0 opacity-70"
							style={{
								background: "#f4f1ea",
								transform: "translate(15px, -15px)",
								boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
							}}
						/>
						<div
							className="absolute inset-0 p-4"
							style={{
								background: "#f4f1ea",
								boxShadow: "20px 20px 60px rgba(0,0,0,0.2)",
							}}
						>
							<div className="w-full h-full border-2 border-neutral-900 p-3 flex flex-col">
								<div className="flex-1 bg-neutral-800 mix-blend-multiply flex items-center justify-center">
									<span className="text-6xl text-neutral-600">♪</span>
								</div>
								<div className="mt-4">
									<p className="font-mono text-base font-bold">
										SYNESTHESIA_01
									</p>
									<p className="font-mono text-xs opacity-60 mt-2">
										40.7128° N, 74.0060° W // PULP NO. 44
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
