import {Search} from "lucide-react";
import {Button, useTheme} from "noor-ui";

const HomePage = () => {

  const {mode, toggleMode} = useTheme()
  console.log(mode, "thememm")



  return (
      <div className={"p-4"}>
        <Search size={120} className={"bg-red-500"}/>
        <Button onClick={()=>toggleMode()} size={"lg"}>Salom</Button>
        <Button size={"md"}>Salom</Button>
        <Button size={"sm"}>Salom</Button>
      </div>
  )
}
export default HomePage
