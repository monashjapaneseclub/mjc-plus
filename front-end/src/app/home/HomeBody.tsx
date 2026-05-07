import Chapter from "@/src/_components/ui/Chapter";
import { chapters } from "@/src/_data/chapters";

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

      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-20 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        <h2 className="subheading mb-12 text-center text-4xl">Chapters</h2>
        <div className="flex flex-col gap-16 lg:flex-row">
          {chapters.map((chapter) => (
            <Chapter key={chapter.title} {...chapter} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button className="cursor-pointer rounded-xl border-2 border-primary px-8 py-3 text-lg font-medium text-primary transition-colors hover:bg-primary hover:text-white">
            learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBody;
