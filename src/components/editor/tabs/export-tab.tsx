import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { exportPoster, type PosterSize, type Quality, type Format } from "@/lib/export";

interface ExportTabProps {
	settings: {
		posterSize: PosterSize;
		quality: Quality;
		format: Format;
	};
	onSettingsChange: (s: Partial<typeof settings>) => void;
	posterRef: React.RefObject<HTMLDivElement | null>;
	selection: { title: string; artist: string } | null;
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

const formats = [
	{ id: "pdf", label: "PDF" },
	{ id: "png", label: "PNG" },
	{ id: "jpeg", label: "JPEG" },
];

export const ExportTab = ({ settings, onSettingsChange, posterRef, selection }: ExportTabProps) => {
	const [isExporting, setIsExporting] = useState(false);

	const handleExport = async () => {
		if (!posterRef.current) return;
		
		setIsExporting(true);
		try {
			await exportPoster(posterRef.current, settings, selection ?? undefined);
		} catch (error) {
			console.error('Export failed:', error);
		} finally {
			setIsExporting(false);
		}
	};

	const getFormatLabel = () => {
		switch (settings.format) {
			case 'pdf': return 'Download PDF';
			case 'png': return 'Download PNG';
			case 'jpeg': return 'Download JPEG';
		}
	};

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
							onClick={() => onSettingsChange({ posterSize: size.id as PosterSize })}
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
							onClick={() => onSettingsChange({ quality: q.id as Quality })}
						>
							<div className="font-semibold">{q.label}</div>
							<div className="text-[10px] text-neutral-500">{q.desc}</div>
						</button>
					))}
				</div>
			</div>

			<div className="flex flex-col gap-3">
				<span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Format</span>
				<div className="grid grid-cols-3 gap-2">
					{formats.map((f) => (
						<button
							key={f.id}
							className={cn(
								"py-3 px-3 border font-mono text-xs transition-all duration-300",
								settings.format === f.id ? "border-neutral-900 bg-neutral-100" : "border-neutral-300 hover:border-neutral-500",
							)}
							onClick={() => onSettingsChange({ format: f.id as Format })}
						>
							{f.label}
						</button>
					))}
				</div>
			</div>

			<Button
				onClick={handleExport}
				disabled={isExporting}
				className="mt-auto py-6 w-full disabled:opacity-50"
				style={{ clipPath: "polygon(0% 0%, 100% 0%, 98% 100%, 2% 100%)" }}
			>
				{isExporting ? 'Exporting...' : getFormatLabel()}
			</Button>

			<p className="font-mono text-[10px] text-center text-neutral-500">
				{settings.quality === 'high' ? '300 DPI • ' : '150 DPI • '}
				{settings.format.toUpperCase()} format
			</p>
		</>
	);
};

export default ExportTab;
