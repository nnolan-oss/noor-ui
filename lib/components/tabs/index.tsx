import { Tab } from './Tab'

export const Tabs = () => {
  return (
    <div className='bg-gray-200 p-1 rounded-xl flex gap-1'>
      <Tab/>
      <Tab/>
      <Tab/>
    </div>
  )
}


export { Tab } from "./Tab"
export { TabPanel } from "./TabPanel"
export { TabsBody } from "./TabsBody"
export { TabsHeader } from "./TabsHeader"