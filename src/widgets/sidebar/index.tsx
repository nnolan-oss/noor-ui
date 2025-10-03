"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge, List, ListItem, Typography } from "noor-ui";

export const Sidebar = () => {
  const pageName = usePathname();

  return (
    <div className="col-span-3 w-full text-sm px-4 space-y-4 h-screen overflow-scroll">
      <Typography variant="h6">Get started</Typography>
      <List>
        <ListItem>Installition</ListItem>
      </List>

      <Typography variant="h6">Customization</Typography>
      <List>
        <ListItem>Theming</ListItem>
        <ListItem>Colors</ListItem>
        <ListItem>Fonts</ListItem>
        <ListItem>Shadows</ListItem>
        <ListItem>Screen</ListItem>
      </List>

      <Typography variant="h6">Components</Typography>
      <List>
        <ListItem>Accordion</ListItem>
        <ListItem>Alert</ListItem>
        <ListItem>Avatar</ListItem>
        <ListItem>Badge</ListItem>
        <ListItem>Breadcrumbs</ListItem>
        <ListItem selected={pageName === "/docs/button"}>
          <Link href={"/docs/button"}>Button</Link>
        </ListItem>
        <ListItem>IconButton</ListItem>
        <ListItem>List</ListItem>
        <ListItem>Loader</ListItem>
        <ListItem>Menu</ListItem>
        <ListItem>Popover</ListItem>
        <ListItem>Progress</ListItem>
        <ListItem>Stepper</ListItem>
        <ListItem>Tabs</ListItem>
        <ListItem>Typography</ListItem>
        <ListItem>Video</ListItem>
        <ListItem>BgPattern</ListItem>
      </List>

      <Typography variant="h6">Forms</Typography>
      <List>
        <ListItem>Input</ListItem>
        <ListItem>Textarea</ListItem>
        <ListItem>Checkbox</ListItem>
        <ListItem>Radio</ListItem>
        <ListItem>Switch</ListItem>
      </List>

      <Typography variant="h6" className="items-center justify-between flex">
        Plugins <Badge variant="text">Soon</Badge>
      </Typography>
    </div>
  );
};
