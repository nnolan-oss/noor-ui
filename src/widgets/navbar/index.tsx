import { noorDetails } from "@/shared/constants/noorDetails";
import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb";

export const Navbar = () => {
  return (
    <div className="backdrop-blur-md sticky top-0 left-0 z-50">
      <div className="my-container py-4 flex items-center justify-between">
        <Link href={"/"} className="text-primary font-bold">
          Noor UI
        </Link>
        <div className="flex items-center gap-8">
          <Link href={"/"}>Products</Link>
          <Link href={"/"}>Components</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Resources</Link>
          <Link href={"/"}>Changelog</Link>
          <Link href={"/"}>Docs</Link>
        </div>
        <div>
          <Link
            target="_blank"
            className="text-primary"
            href={noorDetails.github}
          >
            <TbBrandGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};
