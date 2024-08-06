import { Button } from "./ui/MovingBorders";

// Button is placed here in the file system as this is a customized version of the Moving-Borders button from Acternity UI.
<Button
  // key={}
  duration={Math.floor(Math.random() * 10000) + 10000}
  borderRadius="1.75rem"
  style={{
    background: "rgb(4,7,29)",
    backgroundColor:
      "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
    borderRadius: `calc(1.75rem* 0.96)`,
  }}
  className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
>
  <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
    <div className="lg:ms-5">
      <h1 className="text-start text-xl md:text-2xl font-bold">
        Generate Image
      </h1>
    </div>
  </div>
</Button>;
