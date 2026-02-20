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

export const typeOnlyLayout = {
  id: "type-only",
  label: "Type Only",
  render: ({ title, artist, year, genre, label, tracklist, bg, ink, fontClass, settings }: LayoutProps) => (
    <div
      className="relative w-full h-full flex flex-col justify-center p-8"
      style={{ background: bg, color: ink }}
    >
      {/* Large Title - Full */}
      <div className="flex-1 flex flex-col justify-center">
        <h2
          className={cn("uppercase leading-[0.85]", fontClass)}
          style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", letterSpacing: "-0.03em", lineHeight: 0.9 }}
        >
          {title}
        </h2>
        {settings.showArtist && (
          <p 
            className="font-mono text-sm mt-4 uppercase tracking-[0.2em] opacity-60"
          >
            {artist}
          </p>
        )}
      </div>

      {/* Bottom Metadata */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-wider opacity-50 pt-4" style={{ borderTop: `1px solid ${ink}15` }}>
        {settings.showYear && <span>{year}</span>}
        {settings.showGenre && <span>{genre}</span>}
        {settings.showLabel && <span>{label}</span>}
        {settings.showTracklist && <span>{tracklist.length} tracks</span>}
      </div>
    </div>
  ),
};

export const typeOnlyIcon = (
  <svg viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="32" height="48" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <text x="20" y="28" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="bold">TITLE</text>
    <line x1="8" y1="42" x2="32" y2="42" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  </svg>
);
