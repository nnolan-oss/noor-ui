import {createTheme, NoorThemeProvider} from "noor-ui";
import HomePage from "./pages/HomePage";

const App = () => {
  const theme = createTheme({
    components: {
      Button: {
        defaultProps: {
          className: "rounded-lg",
        }
      }
    }
  })

  return (
      <NoorThemeProvider theme={theme}>
       <HomePage/>
      </NoorThemeProvider>
  )
}
export default App
