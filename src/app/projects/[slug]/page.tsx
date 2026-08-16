import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  getAllProjects,
  getProjectBySlug,
  getProjectCategory,
  type Project,
} from "@/lib/site";
import { ArrowUpRightIcon } from "@/components/icons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjects()
    .filter((project) => project.slug !== "rackd")
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} — Vanshika Sharma`,
    description: project.description,
  };
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-subtle">
      {children}
    </p>
  );
}

function Prose({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 text-[15px] leading-relaxed text-muted">{children}</p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2.5 text-[15px] leading-relaxed text-foreground/90"
        >
          <span className="shrink-0 text-subtle" aria-hidden>
            →
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectCaseStudy({ project }: { project: Project }) {
  const detail = project.detail;
  const images = project.images?.length
    ? project.images
    : project.image
      ? [project.image]
      : [];

  const textSections = [
    { label: "Overview", body: detail?.summary ?? project.description },
    { label: "Problem", body: detail?.problem },
    { label: "Solution", body: detail?.solution },
    { label: "Impact", body: detail?.impact },
    { label: "Process", body: detail?.process },
    { label: "Technical Implementation", body: detail?.technical },
    { label: "Data Model", body: detail?.dataModel },
    { label: "Challenges", body: detail?.challenges },
    { label: "Outcomes", body: detail?.outcomes },
    { label: "What’s Next", body: detail?.nextSteps },
  ].filter((section) => Boolean(section.body));

  return (
    <>
      {images.length > 0 ? (
        <section className="mt-10 space-y-4">
          <SectionLabel>Screenshots</SectionLabel>
          <div className="space-y-4">
            {images.map((src) => (
              <div
                key={src}
                className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface"
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-12 space-y-10">
        {textSections.map((section) => (
          <section key={section.label}>
            <SectionLabel>{section.label}</SectionLabel>
            <Prose>{section.body}</Prose>
          </section>
        ))}

        {detail?.architecture && detail.architecture.length > 0 && (
          <section>
            <SectionLabel>Architecture</SectionLabel>
            <BulletList items={detail.architecture} />
          </section>
        )}

        {detail?.features && detail.features.length > 0 && (
          <section>
            <SectionLabel>Features</SectionLabel>
            <BulletList items={detail.features} />
          </section>
        )}

        <section>
          <SectionLabel>Highlights</SectionLabel>
          <BulletList items={project.highlights} />
        </section>

        <section>
          <SectionLabel>Built With</SectionLabel>
          <p className="mt-3 text-sm tracking-wide text-muted">
            {project.tags.join(" · ")}
          </p>
        </section>
      </div>
    </>
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const category = getProjectCategory(slug);

  return (
    <main className="pb-20 pt-28 sm:pb-28 sm:pt-32">
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          ← Back to projects
        </Link>

        <header className="mt-8 border-b border-border pb-8">
          {category && (
            <SectionLabel>{category.title}</SectionLabel>
          )}
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            {project.description}
          </p>
          <p className="mt-5 text-sm tracking-wide text-subtle">
            {project.tags.join(" · ")}
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent-hover"
              >
                Live demo
                <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent-hover"
              >
                GitHub
                <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
        </header>

        <ProjectCaseStudy project={project} />
      </div>
    </main>
  );
}
