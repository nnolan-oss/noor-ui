import { Search } from "lucide-react";
import { Button, useTheme } from "noor-ui";

const HomePage = () => {
  const { mode, toggleMode } = useTheme();
  console.log(mode, "thememm");

  return (
    <div className={"p-4 bg-[var(--noor-color-background-default)] text-white"}>
      <Search size={120} className={"bg-red-500"} />

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Button size="sm">Salom</Button>
          <Button size="md">Salom</Button>
          <Button size="lg">Salom</Button>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="gradient">Salom</Button>
          <Button size="md" variant="gradient">Salom</Button>
          <Button size="lg" variant="gradient">Salom</Button>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="text">Salom</Button>
          <Button size="md" variant="text">Salom</Button>
          <Button size="lg" variant="text">Salom</Button>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="outlined">Salom</Button>
          <Button size="md" variant="outlined">Salom</Button>
          <Button size="lg" variant="outlined">Salom</Button>
        </div>
      </div>


      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Button color="error" size="sm">Salom</Button>
          <Button color="error" size="md">Salom</Button>
          <Button color="error" size="lg">Salom</Button>
        </div>

        <div className="flex items-center gap-2">
          <Button color="error" size="sm" variant="gradient">Salom</Button>
          <Button color="error" size="md" variant="gradient">Salom</Button>
          <Button color="error" size="lg" variant="gradient">Salom</Button>
        </div>

        <div className="flex items-center gap-2">
          <Button color="error" size="sm" variant="text">Salom</Button>
          <Button color="error" size="md" variant="text">Salom</Button>
          <Button color="error" size="lg" variant="text">Salom</Button>
        </div>

        <div className="flex items-center gap-2">
          <Button color="error" size="sm" variant="outlined">Salom</Button>
          <Button color="error" size="md" variant="outlined">Salom</Button>
          <Button color="error" size="lg" variant="outlined">Salom</Button>
        </div>
      </div>

    </div>
  );
};
export default HomePage;
