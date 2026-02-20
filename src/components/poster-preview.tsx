import { cn } from "@/lib/utils";

interface PosterPreviewProps {
	selection: { title: string; artist: string } | null;
	layout: string;
	settings: {
		paperColor: string;
		inkColor: string;
		font: string;
		showArtist: boolean;
		showYear: boolean;
		showTracklist: boolean;
		showGenre: boolean;
		showLabel: boolean;
	};
	manualInput?: {
		title: string;
		artist: string;
		year: string;
		genre: string;
		label: string;
	};
}

const paperColors: Record<string, string> = {
	cream: "#f4f1ea",
	warm: "#f0e6d3",
	white: "#fafafa",
	aged: "#e8dcc8",
};

const inkColors: Record<string, string> = {
	black: "#1a1a1a",
	cobalt: "#2c3e50",
	carmine: "#d35400",
	hemlock: "#2d5016",
};

const fontClasses: Record<string, string> = {
	inter: "font-sans font-extrabold",
	cormorant: "font-serif italic",
	"space-mono": "font-mono font-bold",
	condensed: "font-sans font-extrabold tracking-tighter",
};

const mockTracks = [
	"01 — Signal Loss",
	"02 — Cathode Dreams",
	"03 — Paper Ghosts",
	"04 — Wavelength",
	"05 — Dust & Echo",
	"06 — Oxide",
	"07 — Meridian",
	"08 — Neon Echoes",
];

const PosterPreview = ({ selection, layout, settings, manualInput }: PosterPreviewProps) => {
	const title = selection?.title || manualInput?.title || "Neon Echoes";
	const artist = selection?.artist || manualInput?.artist || "Glass Parallel";
	const year = manualInput?.year || "2024";
	const genre = manualInput?.genre || "Electronic";
	const label = manualInput?.label || "Independent";
	const bg = paperColors[settings.paperColor] || paperColors.cream;
	const ink = inkColors[settings.inkColor] || inkColors.black;
	const fontClass = fontClasses[settings.font] || fontClasses.inter;

	return (
		<div
			className="relative animate-slide-up"
			style={{ perspective: "1000px" }}
		>
			<div
				className="relative w-full max-w-[420px] mx-auto transition-all duration-500 hover:scale-[1.02]"
				style={{
					aspectRatio: "1 / 1.414",
					transform: "rotateX(3deg) rotateY(-3deg)",
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.transform = "rotateX(0) rotateY(0)";
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.transform = "rotateX(3deg) rotateY(-3deg)";
				}}
			>
				{/* Shadow layers */}
				<div
					className="absolute inset-0 opacity-50"
					style={{
						background: bg,
						transform: "translate(-4px, 4px) rotate(-0.5deg)",
						boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
					}}
				/>
				<div
					className="absolute inset-0 opacity-70"
					style={{
						background: bg,
						transform: "translate(-2px, 2px) rotate(0.3deg)",
						boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
					}}
				/>

				{/* Main poster */}
				<div
					className="relative w-full h-full flex flex-col overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
					style={{
						background: bg,
						color: ink,
						padding: "clamp(1.2rem, 4vw, 2.5rem)",
					}}
				>
					{/* Art area */}
					{layout !== "type-only" && (
						<div
							className="w-full aspect-square mb-4 md:mb-6 relative overflow-hidden"
							style={{ background: ink, mixBlendMode: "multiply" }}
						>
							<div className="absolute inset-0 flex items-center justify-center opacity-20">
								<span className="text-6xl" style={{ color: bg }}>
									♪
								</span>
							</div>
						</div>
					)}

					{/* Info */}
					<div className="flex-1 flex flex-col justify-between min-h-0">
						<div>
							<h2
								className={cn("leading-none uppercase break-all", fontClass)}
								style={{
									fontSize:
										layout === "type-only"
											? "clamp(2rem, 6vw, 4rem)"
											: "clamp(1.2rem, 4vw, 2.5rem)",
									letterSpacing: "-0.04em",
									color: ink,
								}}
							>
								{title}
							</h2>
							{settings.showArtist && (
								<p
									className="font-mono text-xs mt-2 opacity-50 uppercase tracking-[2px]"
									style={{ color: ink }}
								>
									{artist}
								</p>
							)}
						</div>

						{/* Tracklist */}
						{settings.showTracklist && (
							<div className="mt-4 space-y-0.5">
								{mockTracks.map((t) => (
									<p
										key={t}
										className="font-mono text-[9px] opacity-30"
										style={{ color: ink }}
									>
										{t}
									</p>
								))}
							</div>
						)}

						{/* Metadata footer */}
						<div
							className="grid grid-cols-2 gap-x-4 pt-3 mt-auto font-mono text-[0.6rem] uppercase tracking-wider"
							style={{
								borderTop: `1px solid ${ink}20`,
								color: ink,
								opacity: 0.5,
							}}
						>
							{settings.showYear && (
								<span>Release // {year}</span>
							)}
							{settings.showGenre && (
								<span>Genre // {genre}</span>
							)}
							{settings.showLabel && (
								<span>Label // {label}</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PosterPreview;
