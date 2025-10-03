import { Badge, List, ListItem, Typography } from "noor-ui";
import React from "react";

export const Sidebar = () => {
  return (
    <div className="col-span-3 w-full space-y-4 h-screen overflow-scroll">
      <Typography>Get started</Typography>
      <List>
        <ListItem>Installition</ListItem>
        <ListItem>salom</ListItem>
        <ListItem>salom</ListItem>
        <ListItem>salom</ListItem>
      </List>

      <Typography>Customization</Typography>
      <List>
        <ListItem>salom</ListItem>
        <ListItem>salom</ListItem>
        <ListItem>salom</ListItem>
        <ListItem>salom</ListItem>
      </List>

      <Typography>Components</Typography>
      <List>
        <ListItem>salom</ListItem>
        <ListItem>salom</ListItem>
        <ListItem>salom</ListItem>
        <ListItem>salom</ListItem>
      </List>

      <Typography>Forms</Typography>
      <List>
        <ListItem>salom</ListItem>
        <ListItem>salom</ListItem>
        <ListItem>salom</ListItem>
        <ListItem>salom</ListItem>
      </List>

      <Typography className="items-center justify-between flex">
        Plugins <Badge variant="text">Soon</Badge>
      </Typography>
    </div>
  );
};
