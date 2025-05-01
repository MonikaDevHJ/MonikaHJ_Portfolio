import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { projects, Project } from "../../Data/ProjectData";
import Github from "../../assets/Github.png";
import Link from "../../assets/Link.png";
import { useRouter } from "next/router";

type Props = {
  project: Project | null;
};

export default function ProjectDetails({ project }: Props) {
  const router = useRouter();

  // fallback loading
  if (router.isFallback) return <p className="text-white">Loading...</p>;

  if (!project) return <p className="text-white">Project not found.</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white px-8 py-10 justify-center">
      <h1 className="text-4xl font-bold mb-6 text-fuchsia-400">{project.name}</h1>

      <Image
        src={project.image}
        alt={project.alt}
        width={600}
        height={400}
        className="rounded-lg shadow-xl mb-6 object-cover"
      />

      <div className="flex gap-4 mb-4">
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <Image src={Github} alt="GitHub" width={40} height={40} />
        </a>
        <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
          <Image src={Link} alt="Live Site" width={40} height={40} />
        </a>
      </div>

      <p className="text-lg">
        {/* Add more details here if you want */}
        This is the detail page for <strong>{project.name}</strong>.
      </p>
    </div>
  );
}

// Static paths for all projects
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { routeName: project.routeName },
  }));

  return {
    paths,
    fallback: true, // or 'blocking' for better SEO
  };
};

// Static props for each route
export const getStaticProps: GetStaticProps = async (context) => {
  const routeName = context.params?.routeName as string;

  const project = projects.find((proj) => proj.routeName === routeName) || null;

  return {
    props: {
      project,
    },
  };
};
