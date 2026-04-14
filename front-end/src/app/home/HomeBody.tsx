const HomeBody = () => {
  return (
    <section className="flex-1 bg-[#FFFBEF]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-40">
        <div className="flex max-w-xl flex-col gap-6 text-center lg:text-left">
          <h1 className="text-5xl leading-tight font-bold text-secondary md:text-6xl">
            Master <span className="text-primary">Japanese</span> with
            Confidence
          </h1>
          <p className="text-lg text-secondary-light md:text-xl">
            Join over 500+ students learning Japanese. From basic Hiragana to
            flowing conversations.
          </p>
        </div>

        <div className="card flex aspect-video w-full max-w-xl items-center justify-center">
          <span className="caption">Demo panel</span>
        </div>
      </div>
    </section>
  );
};

export default HomeBody;
