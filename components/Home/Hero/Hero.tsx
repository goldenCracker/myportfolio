import Socials from "@/components/Shared/Socials";
import NextImage from "next/image";
import AvatarJPG from "public/static/images/avatar.png";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between md:space-y-0">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        {process.env.NEXT_PUBLIC_NAME_SHOW_HEADLINE && (
          <h1 className="will-change-opacity text-5xl font-bold will-change-transform">
            {"Carl"}{" "}
            {"Jurkovski"}
          </h1>
        )}
        <h2 className="will-change-opacity text-lg font-medium text-gray-300 will-change-transform">
          GenAI Specialist | Backend Engineering | MLOps Engineer | Business
          Automation | Code Agents | Cloud Architect | 9+ years of experience |
          Startup MakeDream
        </h2>
        <hr />
        <p className="text-md will-change-opacity text-lg text-gray-300 will-change-transform">
          I am a technologist specializing in{" "}
          <b>Artificial Intelligence and Big Data</b>, with a passion for{" "}
          <b>transforming complex datasets</b> into actionable insights and
          intelligent systems. Over the past few years, I have developed
          expertise in{" "}
          <b>
            machine learning, deep learning, natural language processing, and
            scalable data architectures
          </b>
          , creating solutions that solve real-world problems in finance,
          healthcare, and e-commerce. My work spans the entire AI lifecycle—from
          data acquisition and preprocessing, to model development and
          evaluation, to deployment in cloud-based and distributed systems. I
          enjoy tackling challenging problems where data complexity and scale
          intersect with business impact.
          <b style={{ color: "skyblue" }}>My core philosophy is:</b> AI should
          not just predict or automate—it should empower decision-making and
          create measurable impact. I am continuously exploring the latest
          technologies in <b>generative AI, multimodal AI, and edge computing</b>, with
          a focus on building <b>robust, ethical, and scalable</b> AI solutions. When
          I’m not building AI systems, I mentor aspiring technologists,
          contribute to open-source projects, and explore innovative
          applications of AI in creative domains.
        </p>
        <Socials className="!mt-12" />
      </div>
      <div className="will-change-opacity relative h-32 w-32 overflow-hidden rounded-full will-change-transform">
        <NextImage
          src={AvatarJPG}
          layout="fill"
          placeholder="blur"
          alt={`${process.env.NEXT_PUBLIC_FIRST_NAME || "Carl"} ${
            process.env.NEXT_PUBLIC_LAST_NAME || "Jacob"
          }`}
        />
      </div>
    </div>
  );
};

export default Hero;
