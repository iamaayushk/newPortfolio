import {Code2,Palette,Braces,Smartphone,Sparkles} from "lucide-react";

import { GlowingEffect } from "../ui/Glowing-effect";

function GlowingEffectDemoSecond() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">

<GridItem
  area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
  icon={<Code2 className="h-4 w-4 text-neutral-400" />}
  title="MERN Stack"
  description="Built full-stack web apps using MongoDB, Express.js, React.js, and Node.js. Used it in multiple production-ready projects like ShapeXplore and MovieMania."
/>

<GridItem
  area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
  icon={<Palette className="h-4 w-4 text-black dark:text-neutral-400" />}
  title="Web Technologies"
  description="Proficient in HTML, CSS, JavaScript, and Tailwind CSS for crafting responsive, beautiful, and accessible UI designs."
/>

<GridItem
  area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
  icon={<Braces className="h-4 w-4 text-black dark:text-neutral-400" />}
  title="Programming Languages"
  description="Strong foundation in Java and Python. Comfortable with OOP, DSA, and building scalable backend logic or scripts."
/>

<GridItem
  area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
  icon={<Smartphone className="h-4 w-4 text-black dark:text-neutral-400" />}
  title="React Native"
  description="Currently learning React Native to develop cross-platform mobile applications with a native-like experience."
/>

<GridItem
  area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
  icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
  title="Creative Technologist"
  description="Passionate about building interactive user experiences, animations, and exploring the intersection of design & technology."
/>


    </ul>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li id="skills" className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl font-semibold font-sans text-black dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm md:text-base text-black dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default GlowingEffectDemoSecond;
