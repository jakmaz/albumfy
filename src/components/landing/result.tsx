const Result = () => {
  return (
    <section id="result" className="py-32 px-8 bg-[#e2ddd3]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 aspect-[7/10] p-4">
          <div className="w-full h-full bg-neutral-800 flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 bg-neutral-700 rounded-sm flex items-center justify-center">
                <span className="text-6xl text-neutral-500">♪</span>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                Your Album Art
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-7 md:col-start-7">
          <p className="font-mono text-xs uppercase tracking-widest mb-8 text-neutral-600">
            02 // The Result
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold uppercase leading-[0.9] tracking-tight mb-8 text-neutral-900">
            BORN TO <br /> BE HUNG.
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Albumfy output is optimized for standard paper sizes. Calculated typography density 
            and proper scaling ensure your music collection looks better on your wall than on your screen.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed mt-4">
            Choose from multiple paper textures, ink colors, and layout styles. Your posters, 
            your way — completely free and exportable as print-ready files.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
