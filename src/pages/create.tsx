import { useState } from "react";
import Navbar from "@/components/navbar";
import PosterPreview from "@/components/poster-preview";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const mockResults = [
	{ title: "OK Computer", artist: "Radiohead", type: "album" },
	{ title: "Abbey Road", artist: "The Beatles", type: "album" },
	{ title: "Bohemian Rhapsody", artist: "Queen", type: "song" },
	{ title: "Dark Side of the Moon", artist: "Pink Floyd", type: "album" },
	{ title: "Blinding Lights", artist: "The Weeknd", type: "song" },
	{ title: "Random Access Memories", artist: "Daft Punk", type: "album" },
];

const layouts = [
	{ id: "standard", label: "Standard" },
	{ id: "centered", label: "Centered" },
	{ id: "type-only", label: "Type Only" },
];

const paperSwatches = [
	{ id: "cream", color: "#f4f1ea" },
	{ id: "warm", color: "#f0e6d3" },
	{ id: "white", color: "#fafafa" },
	{ id: "aged", color: "#e8dcc8" },
];

const inkChips = [
	{ id: "black", label: "Obsidian Black" },
	{ id: "cobalt", label: "Deep Cobalt" },
	{ id: "carmine", label: "Dried Carmine" },
	{ id: "hemlock", label: "Forest Hemlock" },
];

const fonts = [
	{ id: "inter", label: "Inter Display Bold" },
	{ id: "cormorant", label: "Cormorant Garamond Italics" },
	{ id: "space-mono", label: "Space Mono Bold" },
	{ id: "condensed", label: "Condensed Display" },
];

const Create = () => {
	const [query, setQuery] = useState("");
	const [selection, setSelection] = useState<{
		title: string;
		artist: string;
	} | null>(null);
	const [showResults, setShowResults] = useState(false);
	const [layout, setLayout] = useState("standard");
	const [settings, setSettings] = useState({
		paperColor: "cream",
		inkColor: "black",
		font: "inter",
		showArtist: true,
		showYear: true,
		showTracklist: false,
	});

	const filtered =
		query.length > 0
			? mockResults.filter(
					(r) =>
						r.title.toLowerCase().includes(query.toLowerCase()) ||
						r.artist.toLowerCase().includes(query.toLowerCase()),
				)
			: [];

	const update = (partial: Partial<typeof settings>) => {
		setSettings((s) => ({ ...s, ...partial }));
	};

	return (
		<div className="min-h-screen h-screen bg-background overflow-hidden">
			<div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%20200%20200%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27noiseFilter%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%270.65%27%20numOctaves=%273%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E')]" />
			<Navbar />

			<div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] h-full">
				{/* Canvas Area */}
				<div
					className="flex items-center justify-center p-8 lg:p-16 pt-20"
					style={{
						background:
							"radial-gradient(circle at center, hsl(37 18% 86%) 0%, hsl(37 18% 82%) 100%)",
					}}
				>
					<PosterPreview
						selection={selection}
						layout={layout}
						settings={settings}
					/>
				</div>

				{/* Controls Panel */}
				<div className="bg-card border-l border-border overflow-y-auto p-8 pt-20 flex flex-col gap-8">
					{/* 01. Selection */}
					<div
						className="flex flex-col gap-3"
						style={{
							animation:
								"slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0.1s both",
						}}
					>
						<span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">01. Selection</span>
						<div className="relative">
							<input
								type="text"
								className="w-full border-0 border-b-2 border-foreground bg-transparent py-2 text-lg font-sans outline-none placeholder:text-muted-foreground/40"
								placeholder="Search artist or album..."
								value={query}
								onChange={(e) => {
									setQuery(e.target.value);
									setShowResults(true);
								}}
								onFocus={() => setShowResults(true)}
							/>
							{showResults && filtered.length > 0 && (
								<div className="absolute top-full left-0 right-0 bg-card border border-border mt-1 z-20 max-h-48 overflow-y-auto">
									{filtered.map((item) => (
										<button
											key={item.title}
											className="w-full text-left px-3 py-2.5 hover:bg-secondary transition-colors flex justify-between items-center"
											onClick={() => {
												setSelection({
													title: item.title,
													artist: item.artist,
												});
												setQuery(item.title);
												setShowResults(false);
											}}
										>
											<div>
												<p className="text-sm font-semibold">{item.title}</p>
												<p className="text-xs text-muted-foreground">
													{item.artist}
												</p>
											</div>
											<span className="font-mono text-[10px] uppercase text-muted-foreground">
												{item.type}
											</span>
										</button>
									))}
								</div>
							)}
						</div>
						{selection && (
							<p className="font-mono text-xs text-muted-foreground">
								Selected: {selection.title} — {selection.artist}
							</p>
						)}
					</div>

					{/* 02. Layout Structure */}
					<div
						className="flex flex-col gap-3"
						style={{
							animation:
								"slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0.2s both",
						}}
					>
						<span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">02. Layout Structure</span>
						<div className="grid grid-cols-3 gap-2">
							{layouts.map((l) => (
								<button
									key={l.id}
									className={cn(
										"aspect-square border flex flex-col items-center justify-center gap-1 transition-all duration-300",
										layout === l.id
											? "border-foreground bg-secondary"
											: "border-muted bg-card hover:border-foreground/30",
									)}
									onClick={() => setLayout(l.id)}
								>
									{/* Mini layout icon */}
									<div className="w-5 h-7 border border-muted-foreground/40 relative">
										{l.id === "standard" && (
											<div className="absolute bottom-1 left-1 right-1 h-1.5 bg-muted-foreground/40" />
										)}
										{l.id === "centered" && (
											<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-muted-foreground/40 rounded-full" />
										)}
										{l.id === "type-only" && (
											<>
												<div className="absolute top-1 left-1 right-1 h-1 bg-muted-foreground/40" />
												<div className="absolute top-3 left-1 right-2 h-0.5 bg-muted-foreground/20" />
											</>
										)}
									</div>
									<span className="font-mono text-[9px] uppercase">
										{l.label}
									</span>
								</button>
							))}
						</div>
					</div>

					{/* 03. Material & Pulp */}
					<div
						className="flex flex-col gap-3"
						style={{
							animation:
								"slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0.3s both",
						}}
					>
						<span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">03. Material & Pulp</span>
						<div className="flex gap-3">
							{paperSwatches.map((s) => (
								<button
									key={s.id}
									className={cn(
										"w-9 h-9 rounded-full border-2 transition-all duration-300",
										settings.paperColor === s.id
											? "border-foreground scale-110"
											: "border-transparent hover:scale-105",
									)}
									style={{
										background: s.color,
										boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
									}}
									onClick={() => update({ paperColor: s.id })}
								/>
							))}
						</div>
					</div>

					{/* 04. Ink Palette */}
					<div
						className="flex flex-col gap-3"
						style={{
							animation:
								"slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0.4s both",
						}}
					>
						<span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">04. Ink Palette</span>
						<div className="flex flex-wrap gap-2">
							{inkChips.map((chip) => (
								<button
									key={chip.id}
									className={cn(
										"font-mono text-xs border border-muted px-3 py-2 cursor-pointer transition-all duration-300 hover:bg-foreground hover:text-background",
										settings.inkColor === chip.id && "bg-foreground text-background -translate-y-0.5",
									)}
									onClick={() => update({ inkColor: chip.id })}
								>
									{chip.label}
								</button>
							))}
						</div>
					</div>

					{/* 05. Typography */}
					<div
						className="flex flex-col gap-3"
						style={{
							animation:
								"slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0.5s both",
						}}
					>
						<span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">05. Typography Refinement</span>
						<div className="flex flex-wrap gap-2">
							{fonts.map((f) => (
								<button
									key={f.id}
									className={cn("font-mono text-xs border border-muted px-3 py-2 cursor-pointer transition-all duration-300 hover:bg-foreground hover:text-background", settings.font === f.id && "bg-foreground text-background -translate-y-0.5")}
									onClick={() => update({ font: f.id })}
								>
									{f.label}
								</button>
							))}
						</div>
					</div>

					{/* 06. Metadata */}
					<div
						className="flex flex-col gap-3"
						style={{
							animation:
								"slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0.6s both",
						}}
					>
						<span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">06. Metadata Visibility</span>
						<div className="space-y-3">
							{[
								{ key: "showArtist" as const, label: "Artist Name" },
								{ key: "showYear" as const, label: "Release Year" },
								{ key: "showTracklist" as const, label: "Tracklist" },
							].map((toggle) => (
								<div
									key={toggle.key}
									className="flex items-center justify-between"
								>
									<span className="font-mono text-xs">{toggle.label}</span>
									<Switch
										checked={settings[toggle.key]}
										onCheckedChange={(v) => update({ [toggle.key]: v })}
									/>
								</div>
							))}
						</div>
					</div>

					{/* Generate button */}
					<Button
						variant="generate"
						className="mt-auto py-6 w-full"
						style={{ clipPath: "polygon(0% 0%, 100% 0%, 98% 100%, 2% 100%)" }}
					>
						Generate Print Ready PDF
					</Button>

					<p className="font-mono text-[10px] text-center text-muted-foreground pb-4">
						Ships on 200gsm Acid-Free Cotton Paper
					</p>
				</div>
			</div>
		</div>
	);
};

export default Create;
