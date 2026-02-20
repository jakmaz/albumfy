import { Switch } from "@/components/ui/switch";

interface DetailsTabProps {
	settings: {
		showArtist: boolean;
		showYear: boolean;
		showTracklist: boolean;
		showGenre: boolean;
		showLabel: boolean;
	};
	onSettingsChange: (s: Partial<typeof settings>) => void;
}

export const DetailsTab = ({ settings, onSettingsChange }: DetailsTabProps) => {
	return (
		<>
			<div className="flex flex-col gap-3">
				<span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Metadata</span>
				<div className="space-y-3">
					{[
						{ key: "showArtist" as const, label: "Artist Name" },
						{ key: "showYear" as const, label: "Release Year" },
						{ key: "showTracklist" as const, label: "Tracklist" },
						{ key: "showGenre" as const, label: "Genre" },
						{ key: "showLabel" as const, label: "Record Label" },
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

			<div className="mt-auto p-4 bg-neutral-100 rounded-lg">
				<p className="font-mono text-xs text-neutral-500 mb-2">Metadata Source</p>
				<p className="text-sm text-neutral-500">Info is pulled from Spotify/Apple Music APIs. Want to customize? Hit export and edit manually.</p>
			</div>
		</>
	);
};

export default DetailsTab;
