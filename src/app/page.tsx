import {
  SiAngular,
  SiCoffeescript,
  SiGithub,
  SiLinkedin,
  SiPhp,
  SiReact,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Coffee, Download, Send } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import ProjectsPage from "./projects/page";
import AboutPage from "./about/page";
import Image from "next/image";

interface Link {
  name: string;
  description?: string;
  url: string;
  icon?: ReactNode;
}

const badgeTechClass = 'inline-flex items-center justify-center h-[30px] gap-1 w-fit m-1 px-2.5 py-0.5 text-sm text-zinc-300 rounded-xl';
const externalLinks: Link[] = [
  {
    name: "LinkedIn",
    description: "Acompanhe minha carreira",
    url: "https://www.linkedin.com/in/joao-nardi-36746230a",
    icon: <SiLinkedin className="fill-[#0077B5] dark:fill-zinc-200" />,
  },
  {
    name: "GitHub",
    description: "Acompanhe meu código",
    url: "https://github.com/JoaoNardi",
    icon: <SiGithub />,
  },

];

const ExternalLink = (link: Link) => {
  return (
    <a
      key={link.description}
      href={link.url}
      target="_blank"
      className="group flex items-center justify-between p-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
    >
      <span className="flex items-center gap-4">
        {link.icon} {link.name}
        <span className="text-zinc-500 opacity-0 transition-transform max-sm:hidden sm:group-hover:opacity-100 dark:text-zinc-400">
          {link.description}
        </span>
      </span>
      <ArrowUpRight
        strokeWidth={1.4}
        className="size-5 shrink-0 text-zinc-800 transition-transform sm:group-hover:rotate-45 dark:text-zinc-200"
      />
    </a>
  );
};

export default function HomePage() {
  return (

    <div className="flex flex-col gap-6 px-1">
      <p className="text-sm leading-relaxed">
        Desenvolvedor fullstack com foco em interfaces modernas e experiência do usuário.
        Gosto de transformar ideias em aplicações funcionais e bem construídas. Curto trabalhar com tecnologias como

        <span className={`${badgeTechClass} bg-[#591F00]`}>
          <Image
            className="size-4"
            src="/icones/java.svg"
            width={16}
            height={16}
            alt=""
          />
          Java
        </span>

        <span className={`${badgeTechClass} bg-[#084D6E]`}>
          <Image
            className="size-4"
            src="/icones/php.svg"
            width={16}
            height={16}
            alt=""
          />
          PHP
        </span>

        <span className={`${badgeTechClass} bg-[#942628]`}>
          <SiAngular className="size-4" />
          Angular
        </span>

        <span className={`${badgeTechClass} bg-[#3e8799]`}>
          <SiReact className="size-4" />
          React
        </span>
      </p>
      <div className="divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
        {externalLinks.map((link: Link) => (
          <ExternalLink key={link.url} {...link} />
        ))}
      </div>
      <div className="justify-center flex flex-col gap-6 max-sm:flex-col-reverse sm:justify-between">
        <AboutPage />
        <ProjectsPage />
      </div>
    </div>
  );
}
