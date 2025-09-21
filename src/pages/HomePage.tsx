import { ChevronLeft, ChevronRight, Search, Star, Heart } from "lucide-react";
import { Button, Badge, useTheme } from "noor-ui";

const HomePage = () => {
  const { mode, toggleMode } = useTheme();
  console.log(mode, "thememm");

  return (
    <div className={"p-4 bg-[var(--noor-color-background-default)] text-white"}>
      <Search size={120} className={"bg-red-500"} />
      <Button onClick={()=>toggleMode()}>Change theme</Button>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Button startIcon={<ChevronLeft />} endIcon={<ChevronRight />} size="sm">Salom</Button>
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

      {/* Badge Examples */}
      <div className="space-y-4 mt-8">
        <h2 className="text-xl font-bold text-white">Badge Examples</h2>
        
        {/* Badge Variants */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Variants</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="filled" color="primary">Filled</Badge>
            <Badge variant="outlined" color="primary">Outlined</Badge>
            <Badge variant="text" color="primary">Text</Badge>
            <Badge variant="gradient" color="primary">Gradient</Badge>
          </div>
        </div>

        {/* Badge Sizes */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Sizes</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge size="sm" color="success">Small</Badge>
            <Badge size="md" color="success">Medium</Badge>
            <Badge size="lg" color="success">Large</Badge>
          </div>
        </div>

        {/* Badge Colors */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Colors</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge color="primary">Primary</Badge>
            <Badge color="secondary">Secondary</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="error">Error</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="info">Info</Badge>
          </div>
        </div>

        {/* Badge with Icons */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">With Icons</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge startIcon={<Star size={12} />} color="warning">Featured</Badge>
            <Badge endIcon={<Heart size={12} />} color="error">Liked</Badge>
            <Badge startIcon={<Star size={12} />} endIcon={<Heart size={12} />} color="info">Special</Badge>
          </div>
        </div>

        {/* Mixed Examples */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Mixed Examples</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outlined" size="sm" color="success">New</Badge>
            <Badge variant="gradient" size="lg" color="primary">Premium</Badge>
            <Badge variant="text" size="md" color="warning">Beta</Badge>
            <Badge variant="filled" size="sm" color="error" startIcon={<Heart size={10} />}>Hot</Badge>
          </div>
        </div>
      </div>

    </div>
  );
};
export default HomePage;
