"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  Avatar,
  Breadcrumbs,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Progress,
  Step,
  Stepper,
  Typography,
} from "noor-ui";
import { useState } from "react";
import {
  TbArrowAutofitContent,
  TbBrandOffice,
  TbHome,
  TbTrash,
  TbX,
} from "react-icons/tb";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stepIdx, setStepIdx] = useState("tab-1");
  return (
    <div className="p-4 space-y-4">
      <Stepper activeStep={stepIdx}>
        <Step>
          <IconButton icon={<TbHome />} />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet error
          libero repudiandae rerum, pariatur fugit! Vero aliquid, quos eum fuga
          voluptate repellat doloremque officia aut maiores iure libero neque
          aspernatur.
        </Step>
        <Step>
          <IconButton icon={<TbBrandOffice />} />
          Lorem ipsum dolor sit amet consectetur a
        </Step>
        <Step>
          <IconButton icon={<TbArrowAutofitContent />} />
          sit amet consectetur a
        </Step>
      </Stepper>
      <Button onClick={() => setStepIdx(stepIdx - 1)}>prev</Button>
      <Button onClick={() => setStepIdx(stepIdx + 1)}>next</Button>

      <div className="w-24 h-24 animate-pulse bg-gray-200 rounded-xl"></div>

      <List className="max-w-64">
        <ListItem>
          <ListItemPrefix>📥</ListItemPrefix>
          Inbox
        </ListItem>
        <ListItem>
          Trash
          <ListItemSuffix>
            <IconButton size="sm" icon={<TbTrash />} />
          </ListItemSuffix>
        </ListItem>
        <ListItem>Settings</ListItem>
      </List>

      <Breadcrumbs>
        <a href="#" className="opacity-60">
          Docs
        </a>
        <a href="#" className="opacity-60">
          Components
        </a>
        <a href="#">Breadcrumbs</a>
      </Breadcrumbs>

      <Button onClick={() => setIsOpen(true)}>Salom</Button>

      <Alert
        variant="filled"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        color="success"
        startIcon={<TbHome />}
        endIcon={<TbX />}
      >
        This is a success filled alert with start icon
      </Alert>
      {/* Typography Examples */}
      <div className="space-y-2">
        <Typography variant="h1">Material Tailwind</Typography>
        <Typography variant="h2">Material Tailwind</Typography>
        <Typography variant="h3">Material Tailwind</Typography>
        <Typography variant="h4">Material Tailwind</Typography>
        <Typography variant="h5">Material Tailwind</Typography>
        <Typography variant="h6">Material Tailwind</Typography>
        <Typography variant="lead">
          Material Tailwind is an easy to use components library for Tailwind
          CSS and Material Design. It provides a simple way to customize your
          components, you can change the colors, fonts, breakpoints and
          everything you need.
        </Typography>
        <Typography variant="paragraph">
          Material Tailwind is an easy to use components library for Tailwind
          CSS and Material Design. It provides a simple way to customize your
          components, you can change the colors, fonts, breakpoints and
          everything you need.
        </Typography>
        <Typography variant="small">
          Material Tailwind is an easy to use components library for Tailwind
          CSS and Material Design. It provides a simple way to customize your
          components, you can change the colors, fonts, breakpoints and
          everything you need.
        </Typography>
      </div>

      {/* Color Examples */}
      <div className="space-y-2">
        <Typography variant="h3" color="primary">
          Primary Color
        </Typography>
        <Typography variant="h3" color="secondary">
          Secondary Color
        </Typography>
        <Typography variant="h3" color="success">
          Success Color
        </Typography>
        <Typography variant="h3" color="error">
          Error Color
        </Typography>
        <Typography variant="h3" color="info">
          Info Color
        </Typography>
        <Typography variant="h3" color="warning">
          Warning Color
        </Typography>
      </div>

      {/* Alert Examples */}
      <div className="space-y-4">
        <Typography variant="h3">Alert Component Examples</Typography>

        {/* Filled Alerts */}
        <div className="space-y-2">
          <Typography variant="h4">Filled Variants</Typography>
          <Alert variant="filled" color="primary">
            This is a primary filled alert
          </Alert>

          <Alert
            variant="filled"
            color="error"
            endIcon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            }
          >
            This is an error filled alert with end icon
          </Alert>
          <Alert
            variant="filled"
            color="warning"
            startIcon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            }
            endIcon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            }
          >
            This is a warning filled alert with both icons
          </Alert>
        </div>

        {/* Outlined Alerts */}
        <div className="space-y-2">
          <Typography variant="h4">Outlined Variants</Typography>
          <Alert variant="outlined" color="primary">
            This is a primary outlined alert
          </Alert>
          <Alert
            variant="outlined"
            color="info"
            startIcon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            }
          >
            This is an info outlined alert with start icon
          </Alert>
          <Alert
            variant="outlined"
            color="secondary"
            endIcon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
            }
          >
            This is a secondary outlined alert with end icon
          </Alert>
        </div>

        {/* Text Alerts */}
        <div className="space-y-2">
          <Typography variant="h4">Text Variants</Typography>
          <Alert variant="text" color="primary">
            This is a primary text alert
          </Alert>
          <Alert
            variant="text"
            color="success"
            startIcon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            }
          >
            This is a success text alert with start icon
          </Alert>
        </div>
      </div>

      {/* Avatar Examples */}
      <div className="space-y-4">
        <Typography variant="h3">Avatar Component Examples</Typography>

        {/* Size Examples */}
        <div className="space-y-2">
          <Typography variant="h4">Size Variants</Typography>
          <div className="flex items-center gap-4">
            <Avatar size="xs" alt="XS Avatar">
              A
            </Avatar>
            <Avatar size="sm" alt="SM Avatar">
              B
            </Avatar>
            <Avatar size="md" alt="MD Avatar">
              C
            </Avatar>
            <Avatar size="lg" alt="LG Avatar">
              D
            </Avatar>
            <Avatar size="xl" alt="XL Avatar">
              E
            </Avatar>
            <Avatar size="xxl" alt="XXL Avatar">
              F
            </Avatar>
          </div>
        </div>

        {/* Variant Examples */}
        <div className="space-y-2">
          <Typography variant="h4">Shape Variants</Typography>
          <div className="flex items-center gap-4">
            <Avatar variant="circle" size="lg" alt="Circle Avatar">
              C
            </Avatar>
            <Avatar variant="rounded" size="lg" alt="Rounded Avatar">
              R
            </Avatar>
            <Avatar variant="square" size="lg" alt="Square Avatar">
              S
            </Avatar>
          </div>
        </div>

        {/* Border Examples */}
        <div className="space-y-2">
          <Typography variant="h4">Border Variants</Typography>
          <div className="flex items-center gap-4">
            <Avatar size="lg" alt="No Border">
              NB
            </Avatar>
            <Avatar size="lg" bordered alt="With Border">
              WB
            </Avatar>
            <Avatar
              size="lg"
              bordered
              borderColor="primary"
              alt="Primary Border"
            >
              PB
            </Avatar>
            <Avatar
              size="lg"
              bordered
              borderColor="success"
              alt="Success Border"
            >
              SB
            </Avatar>
            <Avatar size="lg" bordered borderColor="error" alt="Error Border">
              EB
            </Avatar>
          </div>
        </div>

        {/* Image Avatar Example */}
        <div className="space-y-2">
          <Typography variant="h4">Image Avatar</Typography>
          <div className="flex items-center gap-4">
            <Avatar
              size="sm"
              src="https://picsum.photos/300"
              alt="Profile Picture"
              bordered
              borderColor="primary"
            />
            <Avatar
              size="lg"
              variant="rounded"
              bordered
              borderColor="primary"
              src="https://picsum.photos/300"
              alt="Profile Picture"
            />
            <Avatar
              size="lg"
              variant="square"
              bordered
              borderColor="error"
              // src="https://picsum.photos/300"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Progress Examples */}
      <div className="space-y-6">
        <Typography variant="h6">Progress Components</Typography>

        <div className="space-y-4">
          <div>
            <Typography variant="small" className="mb-2">
              Filled Progress (Default)
            </Typography>
            <Progress
              variant="filled"
              color="primary"
              size="md"
              label="Loading..."
              bar={75}
              value={75}
            />
          </div>

          <div>
            <Typography variant="small" className="mb-2">
              Outlined Progress
            </Typography>
            <Progress
              variant="outlined"
              color="success"
              size="md"
              label="Upload Progress"
              bar={60}
              value={60}
            />
          </div>

          <div>
            <Typography variant="small" className="mb-2">
              Text Progress
            </Typography>
            <Progress
              variant="text"
              color="warning"
              size="md"
              label="Processing..."
              bar={40}
              value={40}
            />
          </div>

          <div>
            <Typography variant="small" className="mb-2">
              Different Sizes
            </Typography>
            <div className="space-y-3">
              <Progress
                variant="filled"
                color="info"
                size="sm"
                label="Small Progress"
                bar={30}
                value={30}
              />
              <Progress
                variant="filled"
                color="error"
                size="lg"
                label="Large Progress"
                bar={90}
                value={90}
              />
            </div>
          </div>

          <div>
            <Typography variant="small" className="mb-2">
              Different Colors
            </Typography>
            <div className="space-y-3">
              <Progress variant="filled" color="primary" bar={25} />
              <Progress variant="filled" color="secondary" bar={50} />
              <Progress variant="filled" color="success" bar={75} />
              <Progress variant="filled" color="warning" bar={100} />
            </div>
          </div>
        </div>
      </div>

      <Accordion variant="filled">
        <AccordionItem value="item-1">
          <AccordionTrigger>Salom</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quae
            perferendis, deleniti molestias veritatis eum ad animi suscipit modi
            itaque voluptatum dicta, eaque iure facere! Ipsam, dolorum sit?
            Tenetur nisi temporibus perferendis quisquam maxime corrupti,
            placeat exercitationem saepe earum praesentium fugiat veniam
            laborum. Eius cum inventore exercitationem voluptas, molestiae
            debitis et nisi vel. Qui facere explicabo totam rerum hic, est,
            dolores autem labore consequatur, ipsa quaerat veniam esse numquam!
            Quibusdam totam atque, dignissimos blanditiis sequi perspiciatis
            voluptatem fugit veniam sapiente ad deleniti corrupti eaque minus,
            labore laboriosam similique natus dicta repellendus repudiandae.
            Unde cupiditate magnam voluptas eveniet vel aut consequuntur?
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Salom</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quae
            perferendis, deleniti molestias veritatis eum ad animi suscipit modi
            itaque voluptatum dicta, eaque iure facere! Ipsam, dolorum sit?
            Tenetur nisi temporibus perferendis quisquam maxime corrupti,
            placeat exercitationem saepe earum praesentium fugiat veniam
            laborum. Eius cum inventore exercitationem voluptas, molestiae
            debitis et nisi vel. Qui facere explicabo totam rerum hic, est,
            dolores autem labore consequatur, ipsa quaerat veniam esse numquam!
            Quibusdam totam atque, dignissimos blanditiis sequi perspiciatis
            voluptatem fugit veniam sapiente ad deleniti corrupti eaque minus,
            labore laboriosam similique natus dicta repellendus repudiandae.
            Unde cupiditate magnam voluptas eveniet vel aut consequuntur?
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HomePage;
