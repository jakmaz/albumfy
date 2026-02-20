import { TextInput } from "../text-input";

interface SearchTabProps {
  selection: { title: string; artist: string } | null;
  query: string;
  showResults: boolean;
  filtered: { title: string; artist: string; type: string }[];
  onQueryChange: (q: string) => void;
  onSelect: (item: { title: string; artist: string }) => void;
  onToggleResults: (show: boolean) => void;
  manualInput: {
    title: string;
    artist: string;
    year: string;
    genre: string;
    label: string;
  };
  onManualInputChange: (input: Partial<typeof manualInput>) => void;
}

export const SearchTab = ({ 
  selection, 
  query, 
  showResults, 
  filtered, 
  onQueryChange, 
  onSelect, 
  onToggleResults,
  manualInput,
  onManualInputChange,
}: SearchTabProps) => {
  const handleSearchSelect = (item: { title: string; artist: string }) => {
    onSelect(item);
    onQueryChange(item.title);
    onManualInputChange({ title: item.title, artist: item.artist });
    onToggleResults(false);
  };

  return (
    <>
      {/* Search Section */}
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
                  onClick={() => handleSearchSelect({ title: item.title, artist: item.artist })}
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

      {/* Selected indicator */}
      {selection && (
        <div className="p-3 bg-neutral-100 rounded-lg">
          <p className="font-mono text-xs text-neutral-500 mb-1">From Search</p>
          <p className="font-semibold">{selection.title}</p>
          <p className="text-sm text-neutral-500">{selection.artist}</p>
        </div>
      )}

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="h-px bg-neutral-300 flex-1" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">or input yourself</span>
        <div className="h-px bg-neutral-300 flex-1" />
      </div>

      {/* Manual Input Section */}
      <div className="flex flex-col gap-4">
        <TextInput
          label="Title"
          value={manualInput.title}
          onChange={(value) => onManualInputChange({ title: value })}
          placeholder="Album or song title"
        />
        <TextInput
          label="Artist"
          value={manualInput.artist}
          onChange={(value) => onManualInputChange({ artist: value })}
          placeholder="Artist name"
        />
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="Year"
            value={manualInput.year}
            onChange={(value) => onManualInputChange({ year: value })}
            placeholder="2024"
          />
          <TextInput
            label="Genre"
            value={manualInput.genre}
            onChange={(value) => onManualInputChange({ genre: value })}
            placeholder="Rock"
          />
        </div>
        <TextInput
          label="Label"
          value={manualInput.label}
          onChange={(value) => onManualInputChange({ label: value })}
          placeholder="Record label"
        />
      </div>

      {/* Tip */}
      <div className="mt-auto p-4 border border-neutral-200 rounded-lg">
        <p className="font-mono text-xs text-neutral-500 mb-2">Tip</p>
        <p className="text-sm text-neutral-500">Search for an album or enter details manually. You can edit any field.</p>
      </div>
    </>
  );
};

export default SearchTab;
