import { NoorThemeProvider } from "noor-ui";
import HomePage from "./pages/HomePage";

const App = () => {
  const theme = {
    button: {
      defaultProps: {
        variant: "outlined",
      }
    }
  }

  return (
    <NoorThemeProvider theme={theme} defaultMode={"dark"}>
      <HomePage />
    </NoorThemeProvider>
  )
}
export default App
