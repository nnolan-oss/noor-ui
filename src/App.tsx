import {Button, NoorThemeProvider, createTheme} from "noor-ui";
import {Search} from "lucide-react";

const App = () => {
  const theme = createTheme({
    components: {
      Button: {
        defaultProps: {
          className: "bg-red-500"
        }
      }
    }
  })
  return (
      <NoorThemeProvider theme={theme}>
        <div className={"p-4"}>
          <Search size={120} className={"bg-red-500"}/>
          <Button>Salom</Button>
        </div>
      </NoorThemeProvider>
  )
}
export default App
