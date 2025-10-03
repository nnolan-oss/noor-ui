import { noorDetails } from "@/shared/constants/noorDetails";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="text-center border-t border-t-gray-100/10 py-5 mt-24">
      <p>
        Powered by{" "}
        <Link
          className="my-underline-link"
          href={noorDetails.organization}
          target="_blank"
          rel="noopener"
        >
          nnolan-oss
        </Link>
        . Contribute on{" "}
        <Link
          className="my-underline-link"
          href={noorDetails.github}
          target="_blank"
          rel="noopener"
        >
          Github
        </Link>
      </p>
    </div>
  );
};
