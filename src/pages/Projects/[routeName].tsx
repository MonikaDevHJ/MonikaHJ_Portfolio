import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { projects, Project } from "../../Data/ProjectData";
import Github from "../../../public/assets//Github.png";
import Link from "../../../public/assets/Link.png";
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
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-gray-800 rounded-xl shadow-lg p-6">

        {/* Project Name */}
        <h1 className="text-center text-4xl font-bold mb-6 text-fuchsia-400">
          {project.name}
        </h1>

        {/* Project Image */}
        <div className="flex justify-center mb-6">
          <Image
            src={project.image}
            alt={project.alt}
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row sm:justify-center gap-6 mb-8">
          {/* Website Link */}
          <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300"
          >
            <Image src={Link} alt="Live Site" width={24} height={24} />
            <span>Website</span>
          </a>

          {/* GitHub Link */}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md transition duration-300"
          >
            <Image src={Github} alt="GitHub" width={24} height={24} />
            <span>GitHub</span>
          </a>
        </div>

        {/* Project Details */}
        <div className="bg-gray-700 p-4 rounded-md text-base leading-relaxed whitespace-pre-line">
          <p className="mb-3 text-xl">About The Project</p>
          {project.details}
        </div>
      </div>
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
