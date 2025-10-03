import Link from "next/link";
import { Badge, Button, Typography } from "noor-ui";
import { TbBook, TbCube } from "react-icons/tb";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

export const HeroSection = ({
  title = "Noor UI - Tailwind based modern UI library",
  subtitle = "Build fast, modern, and accessible UIs with 40+ ready-to-use components.",
}: HeroSectionProps) => {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center rounded-b-4xl overflow-hidden">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,_#000000_40%,_#0d1a36_100%)]"
      />

      {/* Content */}
      <div className="my-container text-center space-y-10">
        <Badge variant="outlined">✨ 42+ components</Badge>

        <Typography variant="h1" className="text-6xl font-bold">
          {title}
        </Typography>

        <Typography
          variant="paragraph"
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          {subtitle}
        </Typography>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3 justify-center">
          <Button startIcon={<TbCube />} variant="outlined">
            Components
          </Button>
          <Link href={"/docs"}>
            <Button startIcon={<TbBook />}>Documentation</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
