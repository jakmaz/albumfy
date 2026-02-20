import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-neutral-900 text-[#f4f1ea] py-24 px-8">
      <div className="max-w-[1440px] mx-auto text-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.9] tracking-tight mb-6">
          READY TO PRINT?
        </h2>
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-8">
          Connect your library. Select your pulp. Ink the press.
        </p>
        <Link
          to="/create"
          className="inline-block px-16 py-6 text-white font-mono text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105"
          style={{ 
            background: "#cc4422", 
            clipPath: "polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)" 
          }}
        >
          Start The Generator
        </Link>
      </div>
    </section>
  );
};

export default CTA;
