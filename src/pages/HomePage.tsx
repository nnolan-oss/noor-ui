import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Button, useTheme } from "noor-ui";

const HomePage = () => {
  const { mode, toggleMode } = useTheme();
  console.log(mode, "thememm");

  return (
    <div className={"p-4 bg-[var(--noor-color-background-default)] text-white"}>
      <Search size={120} className={"bg-red-500"} />

      <h1>salom</h1>
      <h2>salom</h2>
      <h3>salom</h3>
      <h4>salom</h4>
      <h2 className="text-[size:var(--font-h2)]">salom</h2>
      <h2 className="text-[size:var(--font-h3)]">salom</h2>
      <h2 className="text-[size:var(--font-h4)]">salom</h2>
      <h2 className="text-[size:var(--font-h5)]">salom</h2>
      <h2 className="text-[size:var(--font-h6)]">salom</h2>

      <section>
        <h2 className="font-bold text-lg mb-2">Solid</h2>
        <div className={"space-x-2"}>
          <Button
            startIcon={<ChevronLeft />}
            endIcon={<ChevronRight />}
            color="primary"
            size="md"
            onClick={() => toggleMode()}
          >
            Primary
          </Button>
          <Button color="blue" variant="filled" size="lg">
            Secondary
          </Button>
          <Button color="blue">Secondary</Button>
          <Button color="blue" size="sm">
            Secondary
          </Button>
          <Button color="success">Success</Button>
          <Button color="danger">Danger</Button>
          <Button color="warning">Warning</Button>
          <Button color="neutral">Neutral</Button>
        </div>
      </section>

      {/* Outline buttons */}
      <section>
        <h2 className="font-bold text-lg mb-2">Outline</h2>
        <div>
          <Button variant="solid">Primary</Button>
          <Button variant="outline" color="secondary">
            Secondary
          </Button>
          <Button variant="outline" color="success">
            Success
          </Button>
          <Button variant="outline" color="error">
            Danger
          </Button>
          <Button variant="outline" color="warning">
            Warning
          </Button>
          <Button variant="outline" color="info">
            Neutral
          </Button>
        </div>
      </section>

      {/* Ghost buttons */}
      <section>
        <h2 className="font-bold text-lg mb-2">Ghost</h2>
        <div className="flex gap-3 flex-wrap">
          <Button variant="ghost">Primary</Button>
          <Button variant="ghost" color="secondary">
            Secondary
          </Button>
          <Button variant="ghost" color="success">
            Success
          </Button>
          <Button variant="ghost" color="error">
            Danger
          </Button>
          <Button variant="ghost" color="warning">
            Warning
          </Button>
          <Button variant="ghost" color="warning">
            Neutral
          </Button>
        </div>
      </section>

      {/* Link buttons */}
      <section>
        <h2 className="font-bold text-lg mb-2">Link</h2>
        <div className="flex gap-3 flex-wrap">
          <Button variant="link">Primary</Button>
          <Button variant="link" color="secondary">
            Secondary
          </Button>
          <Button variant="link" color="success">
            Success
          </Button>
          <Button variant="link" color="danger">
            Danger
          </Button>
          <Button variant="link" color="warning">
            Warning
          </Button>
          <Button variant="link" color="neutral">
            Neutral
          </Button>
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
  );
};
export default HomePage;
