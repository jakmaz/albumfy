export default function WhyAlbumfy() {
	return (
		<section className="py-24 px-8 bg-white">
			<div className="max-w-[1440px] mx-auto">
				<div className="grid md:grid-cols-3 gap-px bg-neutral-200">
					{/* Feature 1 */}
					<div className="bg-white p-8 text-center">
						<p
							className="font-mono text-xs uppercase tracking-widest mb-2"
							style={{ color: "#cc4422" }}
						>
							01
						</p>
						<h3 className="font-extrabold text-xl uppercase text-neutral-900 mb-2">
							Free Forever
						</h3>
						<p className="text-neutral-600 text-sm">
							No subscriptions. No watermarks.
						</p>
					</div>
					{/* Feature 2 */}
					<div className="bg-white p-8 text-center">
						<p
							className="font-mono text-xs uppercase tracking-widest mb-2"
							style={{ color: "#cc4422" }}
						>
							02
						</p>
						<h3 className="font-extrabold text-xl uppercase text-neutral-900 mb-2">
							Open Source
						</h3>
						<p className="text-neutral-600 text-sm">
							Transparent & community-driven.
						</p>
					</div>
					{/* Feature 3 */}
					<div className="bg-white p-8 text-center">
						<p
							className="font-mono text-xs uppercase tracking-widest mb-2"
							style={{ color: "#cc4422" }}
						>
							03
						</p>
						<h3 className="font-extrabold text-xl uppercase text-neutral-900 mb-2">
							Print-Ready
						</h3>
						<p className="text-neutral-600 text-sm">150 or 300 DPI PDFs.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
