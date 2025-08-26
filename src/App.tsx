import {createTheme, NoorThemeProvider} from "noor-ui";
import HomePage from "./pages/HomePage";

const App = () => {
  const theme = createTheme({
    components: {
      Button: {
        defaultProps: {
          className: "",
        }
      }
    }
  })

  return (
      <NoorThemeProvider theme={theme} defaultMode={"dark"}>
       <HomePage/>
      </NoorThemeProvider>
  )
}
export default App
