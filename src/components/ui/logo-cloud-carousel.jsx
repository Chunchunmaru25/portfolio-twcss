"use client";;
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "next-themes";

import { useIsMobile } from "@/hooks/use-mobile";

export function LogoCloudCarousel({
  logos
}) {
  const { resolvedTheme } = useTheme();
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  return (
    <div
      className="w-full py-20 overflow-hidden bg-gradient-to-b from-background to-background/80">
      <div className="container" ref={containerRef}>
        <div className="relative">
          <div
            className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div
            className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

          <MarqueeRow
            direction="left"
            speed={40}
            logos={logos}
            resolvedTheme={resolvedTheme}
            isMobile={isMobile} />

          <MarqueeRow
            direction="right"
            speed={40}
            logos={logos}
            resolvedTheme={resolvedTheme}
            isMobile={isMobile}
            className="mt-8" />
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  direction,
  speed,
  logos,

  //   resolvedTheme,
  isMobile,

  className = ""
}) {
  const duplicatedLogos = [...logos, ...logos];
  const translateValue = isMobile ? "100%" : "50%";

  return (
    <motion.div
      className={`flex space-x-8 ${className}`}
      initial={{ x: direction === "left" ? 0 : `-${translateValue}` }}
      animate={{ x: direction === "left" ? `-${translateValue}` : 0 }}
      transition={{
        repeat: Infinity,
        duration: speed,
        ease: "linear",
      }}>
      {duplicatedLogos.map((logo, index) => (
        <motion.div
          key={`${direction}-${index}`}
          className="flex-shrink-0 flex items-center justify-center h-16 w-32 rounded-xl bg-background/50 backdrop-blur-sm border"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
            borderColor: "rgba(var(--primary), 0.3)",
          }}>
          <img
            src={logo.url}
            alt={logo.name}
            className="max-h-12 max-w-full object-contain rounded-sm" />
        </motion.div>
      ))}
    </motion.div>
  );
}

//

// import React from "react";
// import { LogoCloudCarousel } from "@/components/ui/logo-cloud-carousel";

// const LogoCloudCarouselDemo = () => {
//   return (
//     <div className="w-full">
//       <section className="border-t border-b border-border/30">
//         <LogoCloudCarousel logos={logos} />
//       </section>
//     </div>
//   );
// };

// export default LogoCloudCarouselDemo;

// const logos = [
//   {
//     name: "NVIDIA",
//     url: "https://images.unsplash.com/photo-1716967318503-05b7064afa41?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     darkUrl:
//       "/placeholder.svg?height=40&width=120&text=NVIDIA&foreground=%23ffffff&background=%23000000",
//     description:
//       "NVIDIA is a technology company that designs graphics processing units (GPUs) for gaming and professional markets, as well as system on a chip units (SoCs) for the mobile computing and automotive market.",
//   },
//   {
//     name: "GitHub",
//     url: "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     darkUrl:
//       "/placeholder.svg?height=40&width=120&text=GitHub&foreground=%23ffffff&background=%23000000",
//     description:
//       "GitHub is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.",
//   },
//   {
//     name: "Nike",
//     url: "https://images.unsplash.com/photo-1617611413968-537a2ba4986d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     darkUrl:
//       "/placeholder.svg?height=40&width=120&text=Nike&foreground=%23ffffff&background=%23000000",
//     description:
//       "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.",
//   },
//   {
//     name: "OpenAI",
//     url: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     darkUrl:
//       "/placeholder.svg?height=40&width=120&text=OpenAI&foreground=%23ffffff&background=%23000000",
//     description:
//       "OpenAI is an artificial intelligence research laboratory consisting of the for-profit corporation OpenAI LP and its parent company, the non-profit OpenAI Inc.",
//   },
//   {
//     name: "Tailwind CSS",
//     url: "https://images.unsplash.com/photo-1731937389219-0482470c099e?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     darkUrl:
//       "/placeholder.svg?height=40&width=120&text=Tailwind&foreground=%23ffffff&background=%23000000",
//     description:
//       "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need.",
//   },
//   {
//     name: "Vercel",
//     url: "https://images.ctfassets.net/q95r71b1uue1/CZM8YFlF9RPBFqn4IW1km/1b490ec8796f11dc4491fdc81fadcccd/Vercel_OG_Image.png",
//     darkUrl:
//       "/placeholder.svg?height=40&width=120&text=Vercel&foreground=%23ffffff&background=%23000000",
//     description:
//       "Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It enables developers to host websites and web services that deploy instantly and scale automatically.",
//   },
// ];