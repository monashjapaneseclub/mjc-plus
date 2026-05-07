import { SvgClock, SvgBookOpen, SvgProgressCircle } from "@/src/_components/svgs";

export interface ChapterProps {
  slug: string;
  title: string;
  description: string;
  progress: number;
  hours: number;
  chapters: number;
}

const Chapter = ({ title, description, progress, hours, chapters }: ChapterProps) => {
  const hasProgress = progress > 0;

  return (
    <div className="bg-surface rounded-2xl border-2 border-gray-200 p-5 w-full max-w-sm shadow-sm">
      <div className="flex items-start gap-4">
        <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
          <SvgProgressCircle progress={progress} />
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-surface">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-px h-full border-l-2 border-dashed border-gray-300/50" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-px w-full border-t-2 border-dashed border-gray-300/50" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-serif text-secondary mb-1">{title}</h2>
          <div className="flex items-center gap-4 text-gray-700 text-base">
            <div className="flex items-center gap-1">
              <SvgClock className="w-5 h-5" strokeWidth={2} />
              <span>{hours} hours</span>
            </div>
            <div className="flex items-center gap-1">
              <SvgBookOpen className="w-5 h-5" strokeWidth={2} />
              <span>{chapters} Chapters</span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-secondary text-lg my-4">{description}</p>
      <button
        className={`w-full text-xl font-medium py-3 rounded-xl transition-colors cursor-pointer ${
          hasProgress
            ? "bg-red-100 hover:bg-red-200 text-secondary"
            : "bg-primary hover:bg-primary-dark text-white"
        }`}
      >
        {hasProgress ? "Resume" : "Start"}
      </button>
    </div>
  );
};

export default Chapter;
