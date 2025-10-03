import Image from "next/image";
import { Badge, Typography } from "noor-ui";
import React from "react";

export const ComponentsSection = () => {
  return (
    <div className="my-container py-24">
      <div className="text-center">
        <Badge variant="text">Ready-to-use</Badge>
        <Typography variant="h2" className="mb-8">
          42+ Tailwind CSS Components
        </Typography>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div>
            <div className="border border-primary/20 hover:border-primary/50 rounded-2xl overflow-hidden p-4">
              <Image
                className="w-full rounded-xl h-[150px]"
                alt="salom"
                src={"https://picsum.photos/300"}
                width={100}
                height={100}
              />
            </div>
            <Typography variant="h5" className="my-4 ps-4">
              Button
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
