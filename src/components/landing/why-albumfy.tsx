const WhyAlbumfy = () => {
	return (
		<section className="py-24 px-8 bg-neutral-900">
			<div className="max-w-[1440px] mx-auto">
				<div className="grid md:grid-cols-3 gap-px bg-neutral-800">
					{/* Feature 1 */}
					<div className="bg-neutral-900 p-10 text-center">
						<p
							className="font-mono text-xs uppercase tracking-widest mb-3"
							style={{ color: "#cc4422" }}
						>
							01
						</p>
						<h3 className="font-extrabold text-2xl uppercase text-[#f4f1ea] mb-3">
							Free Forever
						</h3>
						<p className="text-neutral-400 text-base">
							No subscriptions. No watermarks.
						</p>
					</div>
					{/* Feature 2 */}
					<div className="bg-neutral-900 p-10 text-center">
						<p
							className="font-mono text-xs uppercase tracking-widest mb-3"
							style={{ color: "#cc4422" }}
						>
							02
						</p>
						<h3 className="font-extrabold text-2xl uppercase text-[#f4f1ea] mb-3">
							Open Source
						</h3>
						<p className="text-neutral-400 text-base">
							Transparent & community-driven.
						</p>
					</div>
					{/* Feature 3 */}
					<div className="bg-neutral-900 p-10 text-center">
						<p
							className="font-mono text-xs uppercase tracking-widest mb-3"
							style={{ color: "#cc4422" }}
						>
							03
						</p>
						<h3 className="font-extrabold text-2xl uppercase text-[#f4f1ea] mb-3">
							Print-Ready
						</h3>
						<p className="text-neutral-400 text-base">150 or 300 DPI PDFs.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyAlbumfy;
