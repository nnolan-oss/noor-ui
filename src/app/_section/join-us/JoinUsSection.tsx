import Image from "next/image";
import { Badge, Button, Typography } from "noor-ui";
import React from "react";
import { TbBrandGithub, TbBrandTelegram, TbUsersGroup } from "react-icons/tb";

export const JoinUsSection = () => {
  return (
    <div className="my-container">
      <div className="text-center">
        <Badge variant="text">Lets cook!</Badge>
        <Typography variant="h2" className="mb-8">
          Join our community
        </Typography>
      </div>

      <div className="relative overflow-hidden flex items-center justify-between bg-primary/10 p-4 rounded-2xl">
        <div>
          <div className="bg-primary p-4 w-12 h-12 rounded-xl flex items-center justify-center">
            <TbUsersGroup />
          </div>
          <Typography variant="h4" className="my-4">
            Community Contributors
          </Typography>
          <Typography variant="paragraph" className="my-4">
            Get it free on Github and please help us spread the news with a
            Star.
          </Typography>
          <Button variant="outlined">Join cook</Button>
        </div>
        <div className="w-[300px] h-[300px] bg-primary/30 absolute -right-20 -bottom-20 rounded-full" />
        <div className="w-[200px] h-[200px] bg-primary/10 absolute -right-20 -bottom-20 rounded-full" />
      </div>
    </div>
  );
};
