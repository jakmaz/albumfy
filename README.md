# Albumfy

Turn your favorite songs and albums into printable posters.

## What is this?

Albumfy is a web app that lets you search for any song or album and create a custom poster from it. You pick the layout, paper color, ink color, and typography. Then you download it as a PDF, PNG, or JPEG in various sizes.

It's free. No watermarks. No subscriptions.

## Why?

I wanted to print posters of albums I love but didn't want to pay for expensive design services or deal with watermarked "free" generators. So I built this instead.

## Tech Stack

- Bun (runtime)
- React (frontend)
- Tailwind CSS (styling)
- jsPDF + html2canvas (export)

## Getting Started

Install dependencies:

```bash
bun install
```

Run development server:

```bash
bun dev
```

Open http://localhost:3000

## Features

- Search for songs or albums
- Choose from multiple layouts
- Select paper color (cream, warm, white, aged)
- Pick ink color (black, cobalt, carmine, hemlock)
- Change typography
- Toggle metadata visibility (artist, year, tracklist, genre)
- Export as PDF, PNG, or JPEG
- Multiple sizes: A4, A3, A2, B2
- Standard (150 DPI) or High (300 DPI) quality

## Contributing

Found a bug? Want to add a feature? Open an issue or submit a pull request. All contributions welcome.

## License

MIT
