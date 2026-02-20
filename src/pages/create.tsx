import { useState, useRef } from "react";
import {
	DesignTab,
	ExportTab,
	SearchTab,
} from "@/components/editor/tabs";
import Navbar from "@/components/navbar";
import PosterPreview from "@/components/poster-preview";
import { cn } from "@/lib/utils";
import type { PosterSize, Quality, Format } from "@/lib/export";

const mockResults = [
	{ title: "OK Computer", artist: "Radiohead", type: "album" },
	{ title: "Abbey Road", artist: "The Beatles", type: "album" },
	{ title: "Bohemian Rhapsody", artist: "Queen", type: "song" },
	{ title: "Dark Side of the Moon", artist: "Pink Floyd", type: "album" },
	{ title: "Blinding Lights", artist: "The Weeknd", type: "song" },
	{ title: "Random Access Memories", artist: "Daft Punk", type: "album" },
];

const tabs = [
	{ id: "search", label: "Search" },
	{ id: "design", label: "Design" },
	{ id: "export", label: "Export" },
];

const Create = () => {
	const [activeTab, setActiveTab] = useState("search");
	const [query, setQuery] = useState("");
	const [selection, setSelection] = useState<{
		title: string;
		artist: string;
	} | null>(null);
	const [showResults, setShowResults] = useState(false);
	const [layout, setLayout] = useState("standard");
	const posterRef = useRef<HTMLDivElement>(null);
	const [manualInput, setManualInput] = useState({
		title: "",
		artist: "",
		year: "",
		genre: "",
		label: "",
		tracklist: "",
	});
	const [settings, setSettings] = useState({
		paperColor: "cream",
		inkColor: "black",
		font: "inter",
		showArtist: true,
		showYear: true,
		showTracklist: false,
		showGenre: true,
		showLabel: false,
		posterSize: "a3" as PosterSize,
		quality: "high" as Quality,
		format: "pdf" as Format,
	});

	const filtered =
		query.length > 0
			? mockResults.filter(
					(r) =>
						r.title.toLowerCase().includes(query.toLowerCase()) ||
						r.artist.toLowerCase().includes(query.toLowerCase()),
				)
			: [];

	const updateSettings = (partial: Partial<typeof settings>) => {
		setSettings((s) => ({ ...s, ...partial }));
	};

	return (
		<div className="min-h-screen h-screen bg-neutral-100 overflow-hidden">
			<div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%20200%20200%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27noiseFilter%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%270.65%27%20numOctaves=%273%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E')]" />

			<div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] h-full">
				{/* Canvas Area */}
				<div
					className="flex items-center justify-center p-8 lg:p-16 pt-20 relative"
					style={{
						background:
							"radial-gradient(circle at center, hsl(37 18% 86%) 0%, hsl(37 18% 82%) 100%)",
					}}
				>
					<Navbar />
					<div ref={posterRef}>
						<PosterPreview
							selection={selection}
							layout={layout}
							settings={settings}
							manualInput={manualInput}
						/>
					</div>
				</div>

				{/* Controls Panel */}
				<div className="bg-[#f4f1ea] border-l border-neutral-200 flex flex-col">
					{/* Tabs */}
					<div className="flex border-b border-neutral-200 bg-[#f4f1ea]">
						{tabs.map((tab) => (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={cn(
									"flex-1 py-4 font-mono text-xs uppercase tracking-widest transition-colors border-b-2",
									activeTab === tab.id
										? "border-neutral-900 text-neutral-900"
										: "border-transparent text-neutral-500 hover:text-neutral-700",
								)}
							>
								{tab.label}
							</button>
						))}
					</div>

					{/* Tab Content */}
					<div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto bg-[#f4f1ea]">
						{activeTab === "search" && (
							<SearchTab
								selection={selection}
								query={query}
								showResults={showResults}
								filtered={filtered}
								onQueryChange={setQuery}
								onSelect={setSelection}
								onToggleResults={setShowResults}
								manualInput={manualInput}
								onManualInputChange={setManualInput}
							/>
						)}

						{activeTab === "design" && (
							<DesignTab
								layout={layout}
								settings={settings}
								onLayoutChange={setLayout}
								onSettingsChange={updateSettings}
							/>
						)}

						{activeTab === "export" && (
							<ExportTab
								settings={settings}
								onSettingsChange={updateSettings}
								posterRef={posterRef}
								selection={selection}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Create;
