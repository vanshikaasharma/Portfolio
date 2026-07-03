import { Container } from "./Container";
import { GitHubIcon, LinkedInIcon, MailIcon, XIcon } from "./icons";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "GitHub", href: site.socials.github, Icon: GitHubIcon },
    { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon },
    { label: "X", href: site.socials.twitter, Icon: XIcon },
    { label: "Email", href: `mailto:${site.email}`, Icon: MailIcon },
  ];

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-subtle">
          © {year} {site.name}
        </p>
        <div className="flex items-center gap-2">
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:bg-accent hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
