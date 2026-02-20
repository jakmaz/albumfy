const Footer = () => {
  return (
    <footer className="py-12 px-8 border-t border-neutral-200 bg-[#e2ddd3]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">
          © 2026 ALBUMFY POSTER LAB
        </p>
        <a 
          href="https://github.com/jakmaz/albumfy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-mono text-xs uppercase tracking-widest text-neutral-600 hover:opacity-70 transition-opacity"
        >
          github.com/jakmaz/albumfy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
