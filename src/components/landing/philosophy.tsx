const Philosophy = () => {
	return (
		<section id="philosophy" className="py-32 px-12 bg-[#e2ddd3]">
			<div className="max-w-360 mx-auto">
				<div className="grid md:grid-cols-2 gap-16 items-center">
					<div>
						<p className="font-mono text-xs uppercase tracking-widest mb-8 text-neutral-600">
							// The Workflow
						</p>
						<h2 className="text-5xl md:text-6xl font-extrabold uppercase leading-[0.9] tracking-tight mb-8 text-neutral-900">
							SEARCH. <br /> CUSTOMIZE. <br /> PRINT.
						</h2>
						<p className="text-lg text-neutral-700 leading-relaxed">
							Find any song or album. Tweak the layout, switch up the paper and
							ink, toggle what info appears. Download as print-ready PDF. That's
							it—your poster is ready.
						</p>
					</div>
					<div className="aspect-square bg-[#2c3e50] p-4">
						<div className="w-full h-full bg-neutral-800 mix-blend-screen flex items-center justify-center overflow-hidden">
							<div className="text-center">
								<div className="w-32 h-32 mx-auto mb-4 rounded-full bg-neutral-900 flex items-center justify-center">
									<span className="text-5xl text-neutral-600">♫</span>
								</div>
								<p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
									Free & Open Source
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Philosophy;
