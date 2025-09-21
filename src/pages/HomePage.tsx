import { ChevronLeft, ChevronRight, Search, Star, Heart, Settings, Plus, Trash2, Edit, Save, Download, HeartOff, Home } from "lucide-react";
import { Button, Badge, IconButton, Loader, Input, useTheme, Switch } from "noor-ui";
import { useState } from "react";

const HomePage = () => {
  const { mode, toggleMode } = useTheme();
  console.log(mode, "thememm");
  const [isLoad, setIsLoad] = useState(false)

  return (
    <div className={"p-4 bg-[var(--noor-color-background-default)] text-white"}>
      <Search size={120} className={"bg-red-500"} />
      <Button onClick={() => toggleMode()}>Change theme</Button>

      <Switch color="warning" size="sm" onChange={() => setIsLoad(!isLoad)} />
        {
          JSON.stringify(isLoad)
        }

      <hr />
      <Switch color="primary" />
      <Switch color="secondary" />
      <Switch color="success" />
      <Switch color="error" />
      <Switch color="info" />
      <Switch color="warning" size="md" />
      <Switch color="warning" size="lg" />
      <hr />


      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Button startIcon={<ChevronLeft />} endIcon={<ChevronRight />} size="sm">Salom</Button>
          <Button size="sm" loading color="info">Salom</Button>
          <Button size="md">Salom</Button>
          <Button size="lg">Salom</Button>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="gradient">Salom</Button>
          <Button onClick={() => setIsLoad(!isLoad)} loading={isLoad} size="md" variant="gradient">Salom isLoad</Button>
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

      sdsds
      <div className="flex gap-2">
        <Input size="lg" />
        <Button color="error" size="lg">Salom</Button>
        <IconButton color="error" size="lg" onClick={() => setIsLoad(!isLoad)} icon={isLoad ? <Heart size={16} /> : <HeartOff size={16} />} />
      </div>
      sdsd

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

      {/* Input Components */}
      <div className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-white">Input Components</h2>

        {/* Basic Input Variants */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Basic Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Filled Input"
              placeholder="Enter text..."
              variant="filled"
              color="primary"
            />
            <div className="flex items-center">
              <Input
                // label="Outlined Input" 
                placeholder="Enter text..."
                variant="outlined"
                color="primary"
                size="md"
              />
              <IconButton size="md">Send</IconButton>
            </div>
          </div>
        </div>

        {/* Input Sizes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Input Sizes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              label="Small Input"
              placeholder="Small size"
              size="sm"
              variant="outlined"
            />
            <Input
              label="Medium Input"
              placeholder="Medium size"
              size="md"
              variant="outlined"
            />
            <Input
              label="Large Input"
              placeholder="Large size"
              size="lg"
              variant="outlined"
            />
          </div>
        </div>

        {/* IconButton Sizes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">IconButton Sizes</h3>
          <div className="flex items-center gap-4">
            <IconButton size="sm" icon={<Settings size={16} />} />
            <IconButton size="md" icon={<Settings size={20} />} />
            <IconButton size="lg" icon={<Settings size={24} />} />
          </div>
        </div>

        {/* Size Consistency Demo */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Size Consistency (Button + Input + IconButton)</h3>
          <div className="space-y-4">
            <div className="flex items-end gap-2">
              <Input
                placeholder="Small input"
                size="sm"
                variant="outlined"
              />
              <Button size="sm">Small Button</Button>
              <IconButton size="sm" icon={<Settings size={16} />} />
            </div>
            <div className="flex items-end gap-2">
              <Input
                placeholder="Medium input"
                size="md"
                variant="outlined"
              />
              <Button size="md">Medium Button</Button>
              <IconButton size="md" icon={<Settings size={20} />} />
            </div>
            <div className="flex items-end gap-2">
              <Input
                placeholder="Large input"
                size="lg"
                variant="outlined"
              />
              <Button size="lg">Large Button</Button>
              <IconButton size="lg" icon={<Settings size={24} />} />
            </div>
          </div>
        </div>

        {/* Input Colors */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Input Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Input
              label="Primary"
              placeholder="Primary color"
              color="primary"
              variant="outlined"
            />
            <Input
              label="Success"
              placeholder="Success color"
              color="success"
              variant="outlined"
            />
            <Input
              label="Error"
              placeholder="Error color"
              color="error"
              variant="outlined"
            />
            <Input
              label="Warning"
              placeholder="Warning color"
              color="warning"
              variant="outlined"
            />
            <Input
              label="Info"
              placeholder="Info color"
              color="info"
              variant="outlined"
            />
            <Input
              label="Secondary"
              placeholder="Secondary color"
              color="secondary"
              variant="outlined"
            />
          </div>
        </div>

        {/* Input States */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Input States</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Disabled Input"
              placeholder="This is disabled"
              disabled
              variant="outlined"
            />
            <Input
              label="Error Input"
              placeholder="This has an error"
              error
              errorText="This field is required"
              startIcon={<Settings size={20} />}
              variant="outlined"
            />
            <Input
              label="Success Input"
              placeholder="This is successful"
              success
              successText="Great! This looks good"
              endIcon={<Star size={20} />}
              variant="outlined"
            />
            <Input
              label="With Helper Text"
              placeholder="Enter your email"
              helperText="We'll never share your email"
              variant="outlined"
            />
          </div>
        </div>

        {/* Input with Icons */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Input with Icons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Input
              label="Search Input"
              placeholder="Search..."
              startIcon={<Search size={20} />}
              variant="outlined"
            />
            <Input
              label="Email Input"
              placeholder="Enter email"
              type="email"
              startIcon={<Settings size={20} />}
              variant="outlined"
            />
            <Input
              label="Password Input"
              placeholder="Enter password"
              type="password"
              endIcon={<Settings size={20} />}
              variant="outlined"
            />
            <Input
              label="With Start Icon"
              placeholder="Start icon only"
              startIcon={<Star size={20} />}
              variant="filled"
              color="primary"
            />
            <Input
              label="With End Icon"
              placeholder="End icon only"
              endIcon={<Heart size={20} />}
              variant="filled"
              color="success"
            />
            <Input
              label="Both Icons"
              placeholder="Both icons"
              startIcon={<Plus size={20} />}
              endIcon={<Edit size={20} />}
              variant="outlined"
              color="info"
            />
          </div>
        </div>

        {/* Full Width Input */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Full Width Input</h3>
          <Input
            label="Full Width Input"
            placeholder="This input takes full width"
            fullWidth
            variant="outlined"
            helperText="This input spans the full width of its container"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Input placeholder="Phone name" />
        <Button>Send</Button>
      </div>

    </div>
  );
};
export default HomePage;
