import { notFound } from "next/navigation";
import { chapters } from "@/src/_data/chapters";

export function generateStaticParams() {
  return chapters.map((c) => ({ slug: c.slug }));
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = chapters.find((c) => c.slug === slug);
  if (!chapter) notFound();

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold text-secondary">{chapter.title}</h1>
      <p className="mt-4 text-lg text-secondary-light">{chapter.description}</p>
    </section>
  );
}
