import { ChevronLeft, ChevronRight, Search, Star, Heart, Settings, Plus, Trash2, Edit, Save, Download } from "lucide-react";
import { Button, Badge, IconButton, Loader, useTheme } from "noor-ui";

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
          <Button size="sm" loading color="info">Salom</Button>
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

      {/* IconButton Examples */}
      <div className="space-y-4 mt-8">
        <h2 className="text-xl font-bold text-white">IconButton Examples</h2>
        
        {/* IconButton Variants */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Variants</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <IconButton variant="filled" color="primary" icon={<Settings size={16} />} />
            <IconButton variant="outlined" color="primary" icon={<Settings size={16} />} />
            <IconButton variant="text" color="primary" icon={<Settings size={16} />} />
            <IconButton variant="gradient" color="primary" icon={<Settings size={16} />} />
          </div>
        </div>

        {/* IconButton Sizes */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Sizes</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <IconButton size="sm" color="success" icon={<Plus size={12} />} />
            <IconButton size="md" color="success" icon={<Plus size={16} />} />
            <IconButton size="lg" color="success" icon={<Plus size={20} />} />
          </div>
        </div>

        {/* IconButton Colors */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Colors</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <IconButton color="primary" icon={<Settings size={16} />} />
            <IconButton color="secondary" icon={<Settings size={16} />} />
            <IconButton color="success" icon={<Settings size={16} />} />
            <IconButton color="error" icon={<Settings size={16} />} />
            <IconButton color="warning" icon={<Settings size={16} />} />
            <IconButton color="info" icon={<Settings size={16} />} />
          </div>
        </div>

        {/* IconButton with Different Icons */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Different Icons</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <IconButton color="primary" icon={<Plus size={16} />} />
            <IconButton color="success" icon={<Save size={16} />} />
            <IconButton color="warning" icon={<Edit size={16} />} />
            <IconButton color="error" icon={<Trash2 size={16} />} />
            <IconButton color="info" icon={<Download size={16} />} />
            <IconButton color="secondary" icon={<Settings size={16} />} />
          </div>
        </div>

        {/* IconButton Mixed Examples */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Mixed Examples</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <IconButton variant="outlined" size="sm" color="success" icon={<Plus size={12} />} />
            <IconButton variant="gradient" size="lg" color="primary" icon={<Star size={20} />} />
            <IconButton variant="text" size="md" color="warning" icon={<Edit size={16} />} />
            <IconButton variant="filled" size="sm" color="error" icon={<Trash2 size={12} />} />
            <IconButton variant="outlined" size="lg" color="info" icon={<Download size={20} />} />
            <IconButton variant="gradient" size="md" color="secondary" icon={<Heart size={16} />} />
          </div>
        </div>

        {/* IconButton with Loading State */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Loading State</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <IconButton color="primary" icon={<Settings size={16} />} loading />
            <IconButton variant="outlined" color="success" icon={<Save size={16} />} loading />
            <IconButton variant="text" color="warning" icon={<Edit size={16} />} loading />
          </div>
        </div>
      </div>

      {/* Loader Examples */}
      <div className="space-y-4 mt-8">
        <h2 className="text-xl font-bold text-white">Loader Examples</h2>
        
        {/* Loader Variants */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Variants</h3>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <Loader variant="spinner" color="primary" />
              <span className="text-sm text-white">Spinner</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Loader variant="dots" color="primary" />
              <span className="text-sm text-white">Dots</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Loader variant="pulse" color="primary" />
              <span className="text-sm text-white">Pulse</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Loader variant="bars" color="primary" />
              <span className="text-sm text-white">Bars</span>
            </div>
          </div>
        </div>

        {/* Loader Sizes */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Sizes</h3>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <Loader size="xs" color="success" />
              <span className="text-sm text-white">XS (16px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Loader size="sm" color="success" />
              <span className="text-sm text-white">SM (20px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Loader size="md" color="success" />
              <span className="text-sm text-white">MD (24px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Loader size="lg" color="success" />
              <span className="text-sm text-white">LG (32px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Loader size="xl" color="success" />
              <span className="text-sm text-white">XL (48px)</span>
            </div>
          </div>
        </div>

        {/* Loader Colors */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Colors</h3>
          <div className="flex items-center gap-4 flex-wrap">
            <Loader color="primary" />
            <Loader color="secondary" />
            <Loader color="success" />
            <Loader color="error" />
            <Loader color="warning" />
            <Loader color="info" />
          </div>
        </div>

        {/* Loader with Text */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">With Text</h3>
          <div className="flex items-center gap-4 flex-wrap">
            <Loader color="primary" text="Loading..." />
            <Loader color="success" text="Saving..." />
            <Loader color="warning" text="Processing..." />
            <Loader color="error" text="Error..." />
          </div>
        </div>

        {/* Loader in Buttons (Updated Examples) */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">In Buttons</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <Button loading>Loading Filled</Button>
            <Button variant="outlined" loading>Loading Outlined</Button>
            <Button variant="gradient" loading>Loading Gradient</Button>
            <Button variant="text" loading>Loading Text</Button>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Button color="success" loading>Success Loading</Button>
            <Button color="error" loading>Error Loading</Button>
            <Button color="warning" loading>Warning Loading</Button>
            <Button color="info" loading>Info Loading</Button>
          </div>
        </div>

        {/* Loader in IconButtons (Updated Examples) */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">In Icon Buttons</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <IconButton color="primary" icon={<Settings size={16} />} loading />
            <IconButton variant="outlined" color="success" icon={<Save size={16} />} loading />
            <IconButton variant="gradient" color="warning" icon={<Edit size={16} />} loading />
            <IconButton variant="text" color="error" icon={<Trash2 size={16} />} loading />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <IconButton color="success" icon={<Plus size={16} />} loading />
            <IconButton color="error" icon={<Trash2 size={16} />} loading />
            <IconButton color="warning" icon={<Edit size={16} />} loading />
            <IconButton color="info" icon={<Download size={16} />} loading />
          </div>
        </div>
      </div>

    </div>
  );
};
export default HomePage;
