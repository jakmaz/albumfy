import { cn } from "@/lib/utils";

interface LayoutProps {
  title: string;
  artist: string;
  year: string;
  genre: string;
  label: string;
  tracklist: string[];
  bg: string;
  ink: string;
  fontClass: string;
  settings: {
    showArtist: boolean;
    showYear: boolean;
    showTracklist: boolean;
    showGenre: boolean;
    showLabel: boolean;
  };
}

export const centeredLayout = {
  id: "centered",
  label: "Centered",
  render: ({ title, artist, year, genre, label, tracklist, bg, ink, fontClass, settings }: LayoutProps) => (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
      style={{ background: bg, color: ink, padding: "2rem" }}
    >
      {/* Centered Art */}
      <div className="flex-1 flex items-center justify-center">
        <div
          className="w-48 h-48 flex items-center justify-center"
          style={{ background: ink, mixBlendMode: "multiply" }}
        >
          <span className="text-6xl" style={{ color: bg }}>♪</span>
        </div>
      </div>

      {/* Centered Title */}
      <div className="text-center mt-6">
        <h2
          className={cn("uppercase leading-none", fontClass)}
          style={{ fontSize: "1.5rem", letterSpacing: "-0.02em" }}
        >
          {title}
        </h2>
        {settings.showArtist && (
          <p className="font-mono text-xs mt-2 opacity-50 uppercase tracking-widest">
            {artist}
          </p>
        )}
      </div>

      {/* Metadata */}
      {(settings.showYear || settings.showGenre || settings.showLabel) && (
        <div className="mt-4 pt-3 border-t" style={{ borderColor: `${ink}20` }}>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 font-mono text-[10px] uppercase opacity-50">
            {settings.showYear && <span>{year}</span>}
            {settings.showGenre && <span>{genre}</span>}
            {settings.showLabel && <span>{label}</span>}
          </div>
        </div>
      )}

      {/* Tracklist */}
      {settings.showTracklist && tracklist.length > 0 && (
        <div className="mt-4 text-center">
          <div className="flex flex-col items-center gap-0.5">
            {tracklist.slice(0, 4).map((t, i) => (
              <p key={i} className="font-mono text-[8px] opacity-30">{t}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  ),
};

export const centeredIcon = (
  <svg viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="32" height="48" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="20" cy="22" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <line x1="10" y1="38" x2="30" y2="38" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
