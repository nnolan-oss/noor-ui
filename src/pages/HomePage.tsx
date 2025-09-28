import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Typography } from "noor-ui"

const HomePage = () => {
  return (
    <div className="p-4 space-y-4">
      {/* Typography Examples */}
      <div className="space-y-2">
        <Typography variant="h1">Material Tailwind</Typography>
        <Typography variant="h2">Material Tailwind</Typography>
        <Typography variant="h3">Material Tailwind</Typography>
        <Typography variant="h4">Material Tailwind</Typography>
        <Typography variant="h5">Material Tailwind</Typography>
        <Typography variant="h6">Material Tailwind</Typography>
        <Typography variant="lead">
          Material Tailwind is an easy to use components library for Tailwind CSS
          and Material Design. It provides a simple way to customize your
          components, you can change the colors, fonts, breakpoints and everything
          you need.
        </Typography>
        <Typography variant="paragraph">
          Material Tailwind is an easy to use components library for Tailwind CSS
          and Material Design. It provides a simple way to customize your
          components, you can change the colors, fonts, breakpoints and everything
          you need.
        </Typography>
        <Typography variant="small">
          Material Tailwind is an easy to use components library for Tailwind CSS
          and Material Design. It provides a simple way to customize your
          components, you can change the colors, fonts, breakpoints and everything
          you need.
        </Typography>
      </div>

      {/* Color Examples */}
      <div className="space-y-2">
        <Typography variant="h3" color="primary">Primary Color</Typography>
        <Typography variant="h3" color="secondary">Secondary Color</Typography>
        <Typography variant="h3" color="success">Success Color</Typography>
        <Typography variant="h3" color="error">Error Color</Typography>
        <Typography variant="h3" color="info">Info Color</Typography>
        <Typography variant="h3" color="warning">Warning Color</Typography>
      </div>

      <Accordion variant="filled">
        <AccordionItem value="item-1">
          <AccordionTrigger>Salom</AccordionTrigger>
          <AccordionContent>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quae perferendis, deleniti molestias veritatis eum ad animi suscipit modi itaque voluptatum dicta, eaque iure facere! Ipsam, dolorum sit? Tenetur nisi temporibus perferendis quisquam maxime corrupti, placeat exercitationem saepe earum praesentium fugiat veniam laborum. Eius cum inventore exercitationem voluptas, molestiae debitis et nisi vel. Qui facere explicabo totam rerum hic, est, dolores autem labore consequatur, ipsa quaerat veniam esse numquam! Quibusdam totam atque, dignissimos blanditiis sequi perspiciatis voluptatem fugit veniam sapiente ad deleniti corrupti eaque minus, labore laboriosam similique natus dicta repellendus repudiandae. Unde cupiditate magnam voluptas eveniet vel aut consequuntur?</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Salom</AccordionTrigger>
          <AccordionContent>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quae perferendis, deleniti molestias veritatis eum ad animi suscipit modi itaque voluptatum dicta, eaque iure facere! Ipsam, dolorum sit? Tenetur nisi temporibus perferendis quisquam maxime corrupti, placeat exercitationem saepe earum praesentium fugiat veniam laborum. Eius cum inventore exercitationem voluptas, molestiae debitis et nisi vel. Qui facere explicabo totam rerum hic, est, dolores autem labore consequatur, ipsa quaerat veniam esse numquam! Quibusdam totam atque, dignissimos blanditiis sequi perspiciatis voluptatem fugit veniam sapiente ad deleniti corrupti eaque minus, labore laboriosam similique natus dicta repellendus repudiandae. Unde cupiditate magnam voluptas eveniet vel aut consequuntur?</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default HomePage