import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { layouts, layoutIcons } from "@/components/layouts";

interface DesignTabProps {
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
	onLayoutChange: (l: string) => void;
	onSettingsChange: (s: Partial<typeof settings>) => void;
}

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

export const DesignTab = ({ layout, settings, onLayoutChange, onSettingsChange }: DesignTabProps) => {
	return (
		<>
			{/* Layout */}
			<div className="flex flex-col gap-3">
				<span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Layout</span>
				<div className="grid grid-cols-2 gap-2">
					{layouts.map((l) => (
						<button
							key={l.id}
							className={cn(
								"aspect-square border flex flex-col items-center justify-center gap-2 transition-all duration-300",
								layout === l.id ? "border-neutral-900 bg-neutral-100" : "border-neutral-300 bg-white hover:border-neutral-500",
							)}
							onClick={() => onLayoutChange(l.id)}
						>
							<div className="w-8 h-10 text-neutral-600">
								{layoutIcons[l.id]}
							</div>
							<span className="font-mono text-[9px] uppercase">{l.label}</span>
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

			{/* Show/Hide Toggles */}
			<div className="flex flex-col gap-3">
				<span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Show on Poster</span>
				<div className="space-y-3">
					{[
						{ key: "showArtist", label: "Artist Name" },
						{ key: "showYear", label: "Release Year" },
						{ key: "showTracklist", label: "Tracklist" },
						{ key: "showGenre", label: "Genre" },
						{ key: "showLabel", label: "Record Label" },
					].map((toggle) => (
						<div key={toggle.key} className="flex items-center justify-between">
							<span className="font-mono text-xs">{toggle.label}</span>
							<Switch
								checked={settings[toggle.key]}
								onCheckedChange={(v) => onSettingsChange({ [toggle.key]: v })}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default DesignTab;
