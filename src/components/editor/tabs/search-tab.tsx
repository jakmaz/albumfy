import { useState } from "react";
import { Button } from "@/components/ui/button";

interface SearchTabProps {
	selection: { title: string; artist: string } | null;
	query: string;
	showResults: boolean;
	filtered: { title: string; artist: string; type: string }[];
	onQueryChange: (q: string) => void;
	onSelect: (item: { title: string; artist: string }) => void;
	onToggleResults: (show: boolean) => void;
}

export const SearchTab = ({ selection, query, showResults, filtered, onQueryChange, onSelect, onToggleResults }: SearchTabProps) => {
	return (
		<>
			<div className="flex flex-col gap-3">
				<span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Search</span>
				<div className="relative">
					<input
						type="text"
						className="w-full border-0 border-b-2 border-neutral-900 bg-transparent py-2 text-lg font-sans outline-none placeholder:text-neutral-400"
						placeholder="Search artist or album..."
						value={query}
						onChange={(e) => {
							onQueryChange(e.target.value);
							onToggleResults(true);
						}}
						onFocus={() => onToggleResults(true)}
					/>
					{showResults && filtered.length > 0 && (
						<div className="absolute top-full left-0 right-0 bg-white border border-neutral-200 mt-1 z-20 max-h-60 overflow-y-auto">
							{filtered.map((item) => (
								<button
									key={item.title}
									className="w-full text-left px-3 py-2.5 hover:bg-neutral-100 transition-colors flex justify-between items-center"
									onClick={() => {
										onSelect({ title: item.title, artist: item.artist });
										onQueryChange(item.title);
										onToggleResults(false);
									}}
								>
									<div>
										<p className="text-sm font-semibold">{item.title}</p>
										<p className="text-xs text-neutral-500">{item.artist}</p>
									</div>
									<span className="font-mono text-[10px] uppercase text-neutral-400">{item.type}</span>
								</button>
							))}
						</div>
					)}
				</div>
			</div>

			{selection && (
				<div className="p-4 bg-neutral-100 rounded-lg">
					<p className="font-mono text-xs text-neutral-500 mb-1">Selected</p>
					<p className="font-semibold">{selection.title}</p>
					<p className="text-sm text-neutral-500">{selection.artist}</p>
				</div>
			)}

			<div className="mt-auto p-4 border border-neutral-200 rounded-lg">
				<p className="font-mono text-xs text-neutral-500 mb-2">Tip</p>
				<p className="text-sm text-neutral-500">Search for any album or song to create a poster. Try "Radiohead" or "OK Computer"</p>
			</div>
		</>
	);
};

export default SearchTab;
