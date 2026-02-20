import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export type PosterSize = 'a4' | 'a3' | 'a2' | 'b2';
export type Quality = 'standard' | 'high';
export type Format = 'pdf' | 'png' | 'jpeg';

interface ExportOptions {
  posterSize: PosterSize;
  quality: Quality;
  format: Format;
}

const sizes: Record<PosterSize, { width: number; height: number }> = {
  a4: { width: 210, height: 297 },
  a3: { width: 297, height: 420 },
  a2: { width: 420, height: 594 },
  b2: { width: 500, height: 707 },
};

function getFilename(artist: string, title: string, format: Format): string {
  const sanitized = (str: string) => str.replace(/[^a-z0-9]/gi, '-').toLowerCase();
  return `albumfy-${sanitized(artist)}-${sanitized(title)}.${format}`;
}

export async function exportPoster(
  element: HTMLElement,
  options: ExportOptions,
  metadata?: { artist: string; title: string }
): Promise<void> {
  const { posterSize, quality, format } = options;
  const dims = sizes[posterSize];
  
  // Scale: standard = 2 (150 DPI), high = 4 (300 DPI)
  const scale = quality === 'high' ? 4 : 2;
  
  // Capture the poster element as canvas
  const canvas = await html2canvas(element, {
    scale,
    useCORS: true,
    backgroundColor: '#ffffff',
    logging: false,
  });
  
  const filename = metadata 
    ? getFilename(metadata.artist, metadata.title, format)
    : `albumfy-poster.${format}`;
  
  if (format === 'pdf') {
    const pdf = new jsPDF({
      orientation: dims.width > dims.height ? 'landscape' : 'portrait',
      unit: 'mm',
      format: [dims.width, dims.height],
    });
    
    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    pdf.addImage(imgData, 'JPEG', 0, 0, dims.width, dims.height);
    pdf.save(filename);
    
  } else if (format === 'png') {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    link.click();
    
  } else if (format === 'jpeg') {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/jpeg', 0.95);
    link.click();
  }
}
