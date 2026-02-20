import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%20200%20200%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27noiseFilter%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%270.65%27%20numOctaves=%273%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E')]" />
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">Poster Laboratory</p>

          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.9] tracking-tighter mb-8">
            Your music,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-amber-700">your poster.</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
            Turn any song or album into wall-worthy art. Choose paper, ink, layout — make it physical.
          </p>

          <Link
            to="/create"
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-mono text-sm uppercase tracking-[2px] transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-[1.02]"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 98% 100%, 2% 100%)" }}
          >
            Open the Lab <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8 text-center">Process</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Select", desc: "Search any song or album" },
              { num: "02", title: "Compose", desc: "Choose layout & structure" },
              { num: "03", title: "Refine", desc: "Paper, ink, typography" },
              { num: "04", title: "Print", desc: "Export as print-ready PDF" },
            ].map((step) => (
              <div key={step.num} className="flex flex-col gap-2">
                <span className="font-mono text-xs text-muted-foreground">{step.num}</span>
                <h3 className="font-sans text-xl font-extrabold uppercase">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <p className="font-mono text-[10px] uppercase tracking-[3px] text-muted-foreground">
          Albumfy · Poster Laboratory
        </p>
      </footer>
    </div>
  );
};

export default Index;
