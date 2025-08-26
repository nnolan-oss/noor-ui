import {HomeIcon, Search, VerifiedIcon} from "lucide-react";
import {Button, Badge, useTheme} from "noor-ui";

const HomePage = () => {

  const {mode} = useTheme()
  console.log(mode, "thememm")

  return (
      <div className={"p-4"}>
        <Search size={120} className={"bg-red-500"}/>
        <section>
          <h2 className="font-bold text-lg mb-2">Solid</h2>
          <div className={"space-x-2"}>
            <Badge icon={<VerifiedIcon/>} iconPosition={"left"}>Primary</Badge>
            <Badge icon={<VerifiedIcon/>} iconPosition={"right"}>Primary</Badge>
            <Badge>Primary</Badge>
            <Badge>Primary</Badge>
            <Badge>Primary</Badge>

            <Badge color="secondary">Secondary</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="danger">Danger</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="neutral">Neutral</Badge>
          </div>
        </section>

        {/* Outline buttons */}
        <section>
          <h2 className="font-bold text-lg mb-2">Outline</h2>
          <div>
            <Badge variant="outline">Primary</Badge>
            <Badge variant="outline" color="secondary">Secondary</Badge>
            <Badge variant="outline" color="success">Success</Badge>
            <Badge variant="outline" color="danger">Danger</Badge>
            <Badge variant="outline" color="warning">Warning</Badge>
            <Badge variant="outline" color="neutral">Neutral</Badge>
          </div>
        </section>

        {/* Ghost buttons */}
        <section>
          <h2 className="font-bold text-lg mb-2">Ghost</h2>
          <div className="flex gap-3 flex-wrap">
            <Badge variant="ghost">Primary</Badge>
            <Badge variant="ghost" color="secondary">Secondary</Badge>
            <Badge variant="ghost" color="success">Success</Badge>
            <Badge variant="ghost" color="danger">Danger</Badge>
            <Badge variant="ghost" color="warning">Warning</Badge>
            <Badge variant="ghost" color="neutral">Neutral</Badge>
          </div>
        </section>

        {/* Link buttons */}
        <section>
          <h2 className="font-bold text-lg mb-2">Link</h2>
          <div className="flex gap-3 flex-wrap">
            <Badge variant="link">Primary</Badge>
            <Badge variant="link" color="secondary">Secondary</Badge>
            <Badge variant="link" color="success">Success</Badge>
            <Badge variant="link" color="danger">Danger</Badge>
            <Badge variant="link" color="warning">Warning</Badge>
            <Badge variant="link" color="neutral">Neutral</Badge>
          </div>
        </section>

        {/* Interactive example */}
        <section>
          <h2 className="font-bold text-lg mb-2">Interactive</h2>
          <Button size="lg" onClick={() => console.log("Toggled!")}>
            Toggle Theme
          </Button>
        </section>
      </div>
  )
}
export default HomePage
