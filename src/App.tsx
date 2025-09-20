import { NoorThemeProvider, type ThemeConfig } from "noor-ui";
import HomePage from "./pages/HomePage";

const App = () => {
  const theme: ThemeConfig = {
    button: {
      defaultProps: {
        variant: "outlined",
        size: "md",
        color: "blue",
        fullWidth: false,
        className: "",
      },
      valid: {
        variants: ["filled", "outlined", "text", "gradient"],
        sizes: ["sm", "md", "lg"],
        colors: ["blue", "red", "green", "gray"],
      },
      styles: {
        base: {
          initial: {
            borderRadius: "rounded-lg",
            fontWeight: "font-medium",
          },
          fullWidth: {
            width: "w-full",
          },
        },
        sizes: {
          sm: { padding: "px-2 py-1.5", fontSize: "text-sm" },
          md: { padding: "px-4 py-2", fontSize: "text-base" },
          lg: { padding: "px-6 py-3", fontSize: "text-lg" },
        },
        variants: {
          filled: { backgroundColor: "bg-blue-500", color: "text-white" },
          outlined: {
            border: "border border-blue-500",
            color: "text-blue-500",
          },
          text: { color: "text-blue-500" },
          gradient: {
            background: "bg-gradient-to-r from-blue-500 to-purple-500",
          },
        },
      },
    },
  };

  return (
    <NoorThemeProvider theme={theme} defaultMode={"dark"}>
      <HomePage />
    </NoorThemeProvider>
  );
};
export default App;
