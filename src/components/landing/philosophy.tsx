const Philosophy = () => {
  return (
    <section id="philosophy" className="py-32 px-8 bg-[#e2ddd3]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest mb-8 text-neutral-600">
            01 // The Philosophy
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold uppercase leading-[0.9] tracking-tight mb-8 text-neutral-900">
            MATERIALITY <br /> OVER PIXELS.
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Every digital artwork is stripped to its essence and rebuilt using our proprietary Pulp engine. 
            We don't just generate images; we synthesize layers of typography and texture to create posters 
            that demand to be hung on your wall.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed mt-4">
            Albumfy is free, open-source, and built for music lovers who want their favorite albums 
            to live beyond streaming playlists. Print what you love. Hang what moves you.
          </p>
        </div>
        <div className="aspect-square bg-[#2c3e50] p-4">
          <div className="w-full h-full bg-neutral-800 mix-blend-screen flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-neutral-900 flex items-center justify-center">
                <span className="text-5xl text-neutral-600">♫</span>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                Open Source
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
