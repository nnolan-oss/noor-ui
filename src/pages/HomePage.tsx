import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "noor-ui"

const HomePage = () => {
  return (
    <div className="p-4">
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