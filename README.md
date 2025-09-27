# ✨ Noor UI

Component based lightweight UI library for React ecosystem

## 📦 Install
```
$ npm install noor-ui
```

## 🛠 Usage
```tsx
import { Button, DatePicker, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'noor-ui';

export default () => (
<>
<Button type="primary">PRESS ME</Button>
<DatePicker placeholder="select date" />

{/* Accordion Example */}
<Accordion variant="default" color="primary" type="single">
  <AccordionItem value="item-1">
    <AccordionTrigger>What is Noor UI?</AccordionTrigger>
    <AccordionContent>
      Noor UI is a modern React component library built with TypeScript and Tailwind CSS.
    </AccordionContent>
  </AccordionItem>
</Accordion>
</>
);
```


## ⌨️ Development 
```
$ git clone git@github.com:nnolan-oss/noor-ui.git
$ cd noor-ui
$ npm install
$ npm run dev
```
Open your browser and visit http://127.0.0.1:7777, see more at Development.