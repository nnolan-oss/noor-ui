import {Button, NoorThemeProvider} from "noor-ui";
import {Search} from "lucide-react";

const App = () => {
  return (
      <NoorThemeProvider>
      <div className={"p-4"}>
        app

        <Search size={120} className={"bg-red-500"}/>
        <Button>Salom</Button>
      </div>
      </NoorThemeProvider>
  )
}
export default App
