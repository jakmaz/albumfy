import { cn } from "@/lib/utils";

interface StyleTabProps {
	layout: string;
	orientation: string;
	settings: {
		paperColor: string;
		inkColor: string;
		font: string;
	};
	onLayoutChange: (l: string) => void;
	onOrientationChange: (o: string) => void;
	onSettingsChange: (s: Partial<typeof settings>) => void;
}

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

export const StyleTab = ({ layout, orientation, settings, onLayoutChange, onOrientationChange, onSettingsChange }: StyleTabProps) => {
	return (
		<>
			{/* Layout */}
			<div className="flex flex-col gap-3">
				<span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Layout</span>
				<div className="grid grid-cols-3 gap-2">
					{layouts.map((l) => (
						<button
							key={l.id}
							className={cn(
								"aspect-square border flex flex-col items-center justify-center gap-1 transition-all duration-300",
								layout === l.id ? "border-neutral-900 bg-neutral-100" : "border-neutral-300 bg-white hover:border-neutral-500",
							)}
							onClick={() => onLayoutChange(l.id)}
						>
							<div className="w-5 h-7 border border-neutral-400 relative">
								{l.id === "standard" && <div className="absolute bottom-1 left-1 right-1 h-1.5 bg-neutral-400" />}
								{l.id === "centered" && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-neutral-400 rounded-full" />}
								{l.id === "type-only" && (
									<>
										<div className="absolute top-1 left-1 right-1 h-1 bg-neutral-400" />
										<div className="absolute top-3 left-1 right-2 h-0.5 bg-neutral-300" />
									</>
								)}
							</div>
							<span className="font-mono text-[9px] uppercase">{l.label}</span>
						</button>
					))}
				</div>
			</div>

			{/* Orientation */}
			<div className="flex flex-col gap-3">
				<span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Orientation</span>
				<div className="grid grid-cols-2 gap-2">
					{["portrait", "landscape"].map((o) => (
						<button
							key={o}
							onClick={() => onOrientationChange(o)}
							className={cn(
								"py-3 px-4 border font-mono text-xs uppercase transition-all duration-300",
								orientation === o ? "border-neutral-900 bg-neutral-100" : "border-neutral-300 hover:border-neutral-500",
							)}
						>
							{o}
						</button>
					))}
				</div>
			</div>

			{/* Paper */}
			<div className="flex flex-col gap-3">
				<span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Paper</span>
				<div className="flex gap-3">
					{paperSwatches.map((s) => (
						<button
							key={s.id}
							className={cn(
								"w-9 h-9 rounded-full border-2 transition-all duration-300",
								settings.paperColor === s.id ? "border-neutral-900 scale-110" : "border-transparent hover:scale-105",
							)}
							style={{ background: s.color, boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)" }}
							onClick={() => onSettingsChange({ paperColor: s.id })}
						/>
					))}
				</div>
			</div>

			{/* Ink */}
			<div className="flex flex-col gap-3">
				<span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Ink</span>
				<div className="flex flex-wrap gap-2">
					{inkChips.map((chip) => (
						<button
							key={chip.id}
							className={cn(
								"font-mono text-xs border border-neutral-300 px-3 py-2 cursor-pointer transition-all duration-300 hover:bg-neutral-900 hover:text-white",
								settings.inkColor === chip.id && "bg-neutral-900 text-white -translate-y-0.5",
							)}
							onClick={() => onSettingsChange({ inkColor: chip.id })}
						>
							{chip.label}
						</button>
					))}
				</div>
			</div>

			{/* Typography */}
			<div className="flex flex-col gap-3">
				<span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Typography</span>
				<div className="flex flex-wrap gap-2">
					{fonts.map((f) => (
						<button
							key={f.id}
							className={cn(
								"font-mono text-xs border border-neutral-300 px-3 py-2 cursor-pointer transition-all duration-300 hover:bg-neutral-900 hover:text-white",
								settings.font === f.id && "bg-neutral-900 text-white -translate-y-0.5",
							)}
							onClick={() => onSettingsChange({ font: f.id })}
						>
							{f.label}
						</button>
					))}
				</div>
			</div>
		</>
	);
};

export default StyleTab;
