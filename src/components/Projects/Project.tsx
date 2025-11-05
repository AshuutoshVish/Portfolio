import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import intuity from "../../../public/assets/projectsImages/intuitysync.png";
import Dashboard from "../../../public/assets/projectsImages/dashboard.png";
import stockdata from "../../../public/assets/projectsImages/stockdata.png";
import workflows from "../../../public/assets/projectsImages/workflows.png";
import DataForge from "../../../public/assets/projectsImages/dataforge.png";
import Image from "next/image";

const reviews = [
  { img: intuity },
  { img: Dashboard },
  { img: stockdata },
  { img: workflows },
  { img: DataForge },
  { text: "Other work will be updated soon" },
];

const ReviewCard = ({ img, text }: { img?: any; text?: string }) => {
  if (text) {
    return (
      <div
        className={cn(
          "w-80 h-96 flex flex-col items-center justify-center rounded-2xl relative overflow-hidden",
          "bg-gradient-to-br from-[#130C37] via-[#1a1147] to-[#0f0a2e]",
          "border border-purple-500/20 shadow-2xl",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/10 before:via-transparent before:to-blue-500/10",
          "hover:scale-105 hover:shadow-purple-500/25 transition-all duration-300 ease-out"
        )}
      >
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          {/* Icon/Symbol */}
          <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>

          {/* Main text */}
          <h1 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
            {text}
          </h1>

          {/* Subtitle */}
          <p className="text-purple-300/80 text-sm leading-relaxed">
            Stay tuned for amazing projects
          </p>

          {/* Bottom accent line */}
          <div className="mt-6 w-20 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-80 h-96 overflow-hidden rounded-2xl relative",
        "border border-purple-500/20 shadow-2xl",
        " hover:shadow-purple-500/25 transition-all duration-300 ease-out hover:scale-105"
      )}
    >
      <Image
        className="object-cover w-full h-full transition-transform duration-500 ease-out"
        width={500}
        height={500}
        alt="Project"
        src={img}
        draggable={false}
      />
    </div>
  );
};

export function Project() {
  return (
    <div className="w-full mx-auto backdrop-blur-lg overflow-hidden relative">
      <div className="w-full flex-col items-center justify-center overflow-hidden">
        <Marquee className="[--duration:20s]">
          {reviews?.map((review: any, index) => (
            <ReviewCard key={index} img={review?.img} text={review?.text} />
          ))}
        </Marquee>

        {/* Enhanced gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-[#09090B] dark:from-[#09090B]/30" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-[#09090B] dark:from-[#09090B]/30" />
      </div>
    </div>
  );
}
