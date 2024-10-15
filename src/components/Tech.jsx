import { useEffect, useState } from "react";
import { Suspense } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <Suspense fallback={<div>Loading...</div>} key={technology.name}>
          <div className={`w-${isMobile ? '20' : '28'} h-${isMobile ? '20' : '28'}`}>
            <BallCanvas icon={technology.icon} />
          </div>
        </Suspense>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
