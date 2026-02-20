import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ExportTabProps {
	settings: {
		posterSize: string;
		quality: string;
	};
	onSettingsChange: (s: Partial<typeof settings>) => void;
}

const posterSizes = [
	{ id: "a4", label: "A4", dims: "210 × 297mm" },
	{ id: "a3", label: "A3", dims: "297 × 420mm" },
	{ id: "a2", label: "A2", dims: "420 × 594mm" },
	{ id: "b2", label: "B2", dims: "500 × 707mm" },
];

const qualities = [
	{ id: "standard", label: "Standard", desc: "150 DPI" },
	{ id: "high", label: "High", desc: "300 DPI" },
];

export const ExportTab = ({ settings, onSettingsChange }: ExportTabProps) => {
	return (
		<>
			<div className="flex flex-col gap-3">
				<span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Size</span>
				<div className="grid grid-cols-2 gap-2">
					{posterSizes.map((size) => (
						<button
							key={size.id}
							className={cn(
								"py-3 px-3 border font-mono text-xs transition-all duration-300 text-left",
								settings.posterSize === size.id ? "border-neutral-900 bg-neutral-100" : "border-neutral-300 hover:border-neutral-500",
							)}
							onClick={() => onSettingsChange({ posterSize: size.id })}
						>
							<div className="font-semibold">{size.label}</div>
							<div className="text-[10px] text-neutral-500">{size.dims}</div>
						</button>
					))}
				</div>
			</div>

			<div className="flex flex-col gap-3">
				<span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Quality</span>
				<div className="grid grid-cols-2 gap-2">
					{qualities.map((q) => (
						<button
							key={q.id}
							className={cn(
								"py-3 px-3 border font-mono text-xs transition-all duration-300 text-left",
								settings.quality === q.id ? "border-neutral-900 bg-neutral-100" : "border-neutral-300 hover:border-neutral-500",
							)}
							onClick={() => onSettingsChange({ quality: q.id })}
						>
							<div className="font-semibold">{q.label}</div>
							<div className="text-[10px] text-neutral-500">{q.desc}</div>
						</button>
					))}
				</div>
			</div>

			<Button
				className="mt-auto py-6 w-full"
				style={{ clipPath: "polygon(0% 0%, 100% 0%, 98% 100%, 2% 100%)" }}
			>
				Download PDF
			</Button>

			<p className="font-mono text-[10px] text-center text-neutral-500">Ready for print • PDF format</p>
		</>
	);
};

export default ExportTab;
