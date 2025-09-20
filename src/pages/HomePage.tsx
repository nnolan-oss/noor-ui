import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Button, useTheme } from "noor-ui";

const HomePage = () => {
  const { mode, toggleMode } = useTheme();
  console.log(mode, "thememm");

  return (
    <div className={"p-4 bg-gray-900"}>
      <Search size={120} className={"bg-red-500"} />

      <div className="bg-primary text-contrast p-4 rounded">
        Noor UI Primary Box
      </div>

      <h1 className="text-primary font-h6">
        Noor UI Heading
      </h1>

      <h1 className="text-primary font-subtitle1">
        Noor UI Heading
      </h1>

      {/* Theme Variables Examples - Using Classes */}
      <section className="mt-8 space-y-4">
        <h2 className="text-primary font-h5">
          Theme Variables Examples (Using Classes)
        </h2>
        
        {/* Color Examples */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded bg-primary text-contrast">
            Primary Color
          </div>
          <div className="p-4 rounded bg-secondary text-white">
            Secondary Color
          </div>
          <div className="p-4 rounded bg-success text-white">
            Success Color
          </div>
          <div className="p-4 rounded bg-error text-white">
            Error Color
          </div>
        </div>

        {/* Typography Examples */}
        <div className="space-y-2">
          <h1>H1 Heading</h1>
          <h2>H1 Heading</h2>
          <h3>H1 Heading</h3>
          <h2 className="font-h2 text-primary">H2 Heading</h2>
          <h3 className="font-h3 text-primary">H3 Heading</h3>
          <h3 className="font-h4 text-primary">H3 Heading</h3>
          <h3 className="font-h5 text-primary">H3 Heading</h3>
          <p className="font-body1 text-secondary">Body text example</p>
          <span className="font-caption text-disabled">Caption text</span>
        </div>

        {/* Shadow Examples */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded bg-white shadow-1">
            Shadow 1
          </div>
          <div className="p-4 rounded bg-white shadow-2">
            Shadow 2
          </div>
          <div className="p-4 rounded bg-white shadow-3">
            Shadow 3
          </div>
          <div className="p-4 rounded bg-white shadow-4">
            Shadow 4
          </div>
        </div>

        {/* Background Examples */}
        <div className="p-4 rounded bg-paper text-primary">
          Paper Background
        </div>

        {/* Interactive Examples */}
        <div className="space-y-2">
          <button className="px-4 py-2 rounded hover-primary transition-colors">
            Hover Primary
          </button>
          <button className="px-4 py-2 rounded hover-secondary transition-colors">
            Hover Secondary
          </button>
          <button className="px-4 py-2 rounded hover-success transition-colors">
            Hover Success
          </button>
        </div>

        {/* Border Examples */}
        <div className="space-y-2">
          <div className="p-4 border-2 border-primary rounded">
            Primary Border
          </div>
          <div className="p-4 border-2 border-success rounded">
            Success Border
          </div>
          <div className="p-4 border-2 border-error rounded">
            Error Border
          </div>
        </div>

        {/* Tailwind Arbitrary Values Examples */}
        <div className="space-y-2">
          <h3 className="text-primary font-h6">Tailwind Arbitrary Values:</h3>
          <div className="p-4 rounded bg-[var(--color-primary-light)] text-[var(--color-text-primary)]">
            Primary Light (Arbitrary)
          </div>
          <div className="p-4 rounded shadow-[var(--shadow-2)] bg-[var(--color-background-paper)]">
            Custom Shadow (Arbitrary)
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">Solid</h2>
        <div className={"space-x-2"}>
          <Button
            startIcon={<ChevronLeft />}
            endIcon={<ChevronRight />}
            color="black"
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
          <Button variant="outline" color="danger">
            Danger
          </Button>
          <Button variant="outline" color="warning">
            Warning
          </Button>
          <Button variant="outline" color="neutral">
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
          <Button variant="ghost" color="danger">
            Danger
          </Button>
          <Button variant="ghost" color="warning">
            Warning
          </Button>
          <Button variant="ghost" color="neutral">
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
