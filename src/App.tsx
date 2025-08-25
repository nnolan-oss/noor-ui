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
          <Button size={"lg"}>Salom</Button>
          <Button size={"md"}>Salom</Button>
          <Button size={"sm"}>Salom</Button>
        </div>
      </NoorThemeProvider>
  )
}
export default App
